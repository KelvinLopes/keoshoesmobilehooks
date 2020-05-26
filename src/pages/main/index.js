import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import api from '../../services/api'
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/formatprice';
import ShopppingCart from 'react-native-vector-icons/MaterialIcons';
import ShopppingCartButton from 'react-native-vector-icons/MaterialIcons';
import TextCartSize from '../../components/TextAmountCart';

import {
  Header,
  HeaderBackground,
  Icon,
  Logo,
  GroupItems,
  BodyPageHome,
  CardProducts,
  CardProductsContainer,
  ImageProduct,
  List,
  TextProductTitle,
  DescriptionItemContainer,
  DescriptionItem,
  TextButtonAddToCart,
  AddButtonToCartProduct,
  ProductAmount,
  ProductTextAmount,
  ContainerIconShooppingButtonAddToCart,
  PriceProduct,
  ViewTextAmountCart,
}
  from './style';

export default function Main () {


  const [products, setProducts] = useState([]);

  const amount = useSelector( state => state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}));

  const dispatch = useDispatch();

  useEffect(() => {

    loadProducts = async () => {

      const response = await api.get('/products');

      const data = response.data.map( product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

        setProducts(data);
    };

    loadProducts();
  }, []);



handleNavigateToCart = () => {
  const { navigation } = this.props;
  navigation.navigate('Cart')
}

handleAddProductToCart = (id) => {
  dispatch(CartActions.addToCartRequest(id));
}

showProducts = ({ item }) => {

  return(

    <BodyPageHome>
     <CardProductsContainer  key={item.id}>
      <CardProducts>
        <ScrollView>
        <TextProductTitle> {item.title} </TextProductTitle>
        <ImageProduct source={{ uri: item.image }} />

        <DescriptionItemContainer>
        <DescriptionItem >
              {item.description}
          </DescriptionItem>
        </DescriptionItemContainer>


        <PriceProduct>Valor {formatPrice(item.price)} </PriceProduct>

           <AddButtonToCartProduct onPress={() => handleAddProductToCart(item.id)} >
            <ProductAmount>
              <ContainerIconShooppingButtonAddToCart>
                <ShopppingCartButton name="add-shopping-cart" color="#fff" size={20} />
                <ProductTextAmount>{amount[item.id] || 0}</ProductTextAmount>
              </ContainerIconShooppingButtonAddToCart>
                <TextButtonAddToCart>Adicionar Produto</TextButtonAddToCart>
            </ProductAmount>
             </AddButtonToCartProduct>
         </ScrollView>
      </CardProducts>
     </CardProductsContainer>
    </BodyPageHome>

  )
}

  return(
    <>
    <HeaderBackground>
      <Header>
        <GroupItems>
        <Logo />
          <Icon>
          <ShopppingCart
            name="shopping-basket"
            color="#475df3" size={80}
            onPress={ () => this.handleNavigateToCart()} />
            <ViewTextAmountCart>
            <TextCartSize />
            </ViewTextAmountCart>
            </Icon>
          </GroupItems>
      </Header>
    </HeaderBackground>
      <List
        data={products}
        extraData={[products, amount]}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={this.showProducts}
      />
    </>
  );
}
