# keoshoesmobile 👟🥾👠

8º Desafio Rocketseat GoStack 9, a versão mobile do KeoShoes desenvolvida em React Native e agora adotando a api react-hooks deixando as classes. O app fica com os mesmos recursos da versão anterior, porém com um código mais limpo e menos verboso.

<p>
 Trata se de um mini projeto de loja online de calçados que usa JSON server para guardar os dados dos produtos.
 Obs: ela não deve ser usada em ambiente de produção, mas sim uma api real.
 <p> 
 
 <p>
  Nesse app, você pode visualizar a descrição de cada produto, adiconar no carrinho, mudar a quantidade dos produtos e excluir os items dele.
 </p>
 
 <p>
    Dentro do dele você ainda pode ver a quantidade de produtos presente nele, o valor de cada item, subtotal de cada um e o total geral. Pensando em melhorar a visualização, cada calçado é redenrizado dentro de um card, onde se pode aumentar ou diminuir a quantidade, excluir e voltar a página inicial.
</p>

<p>
  Havendo uma solicitação maior do que existe no estoque uma mensagem será exibida na tela tratando esse caso. 
 </p>


<p align="center"> 
  <img src="https://github.com/KelvinLopes/keoshoesmobile/blob/master/Screenshot%202020-05-21%20at%2006.58.19.png"      width="400" heigth="700" align="center" alt="Tela do app KeoShoes mobile"/>
 </p>

### Tecnologias 🔧🚙🔌

* Desenvolvido em React Native,
* Styleds Componentes
* Axios
* Polished
* Immer
* Redux
* Redux Saga
* React Native vector icons
* Reactotron React Native
* Reactotron Redux
* Reactotron Redux Saga
* React Navigation 5
* React Hooks

### Dev dependences 🤝  🤜🤛
* Eslint 
* Prettier
* Editor Config
* Babel (padrão do React Native)

### Dicas

* Tenha um ambiente preparado para o React Native: https://reactnative.dev/docs/environment-setup

* Se baixar ou fazer o clone do repositório não se esqueça de atualizar as libs para ter as atualizações mais recentes.

* No yarn, use yarn upgrade e em seguida rode o comando yarn.

* No npm, acesse o documento: https://docs.npmjs.com/cli-commands/update.html

* Use o comando interno da aplicação yarn server, para que os produtos sejam renderizados em tela.

* Se em dispositivo físico, use o comando: ~/Android/Sdk/platform-tools/adb reverse tcp:3333 tcp:3333 e pressione a tecla r no terminal para reiniciar o app, **caso** o local onde instalou as ferramentas de desenvolvimento Android for diferente, modifique esse caminho. Com isso o app terá carregado todas as informações referentes aos produtos, desde imagens a descrição.
