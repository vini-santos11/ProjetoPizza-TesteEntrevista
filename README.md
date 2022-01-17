# Projeto Pizzaria

Sistema baseado em um cardápio de pizzaria, para futuras compras online.
Inicialmente, o template foi gerado através da CLI do Angular e escolhido uma arquitetura de pasta baseado no Design Pattern do StyleGuides da documentação do Angular.
A estruturação de componentes foi feita seguindo a criação de um Module para cada, melhorando a performance através do LazzyLoad, uma vez que estes, somente são carregados quando realmente são inicializados. Além de facilitar e melhorar uma possível dependência entre componentes.
Para o componente de Navbar, um layout foi criado, de modo em que ele é inicializado e carregado apenas uma vez no projeto e replicado em todas as telas das quais necessite.

A simulação de API foi feita através de JSON's locais, criados simulando um retorno de endpoint e também consumidos assim. Foi utilizado um pacote chamado HttpClient e também RxJS muito comum em projetos, pois é disponibilizado pela própria CLI do angular. 
Foi necessário 2 JSON's, um para login, o qual determinava usuário e senha, e também um array com as rotas que este poderia acessar. E um para Pizzas, o qual era um array com varios objetos determinado ID e sabor de pizzas, para que pudesse ser feito um list e um getById.

Para a implementação do login, foi criado um Module separado das outras páginas, uma vez que este não utilizaria o layout da navbar, e também a partir dele seria redirecionado para as telas da qual o usuário tem permissão.
No service de login, um metódo foi criado para consumir o json de login. Este buscou o usuário e senha e ao conferir se houve validade, armazenou-os no local storage.
A partir deste, um Guard e um Helper foram criados. Eles juntos fazem a verificação de rotas, caso o usuário tenha permissão, pode acessá-las normalmente, caso não, fica inválido o acesso.
Este helper é chamado mais uma vez na Navbar para uma simples verificação, se o usuário tem permissão, então o item aparece no Menu, caso não tenha, ele não aparece.

Para as páginas de Menu e Pizza, foi necessário consumir o json de pizza, para obtenção dos dados de id, nome e descrição. Foi feito dentro do service de Pizza, o qual tem uma rápida repetição para percorrer o json e pegar cada objeto separadamente.

Além destes, foram criados dois Models, um de User e outro de Pizza, para que todos os métodos ficassem devidamente tipados segundo o Typescript Strict.

Para todos as telas criadas, nenhuma biblioteca foi utilizada, apenas HTML e SCSS. A unica instalada é a Material disponibilizada pelo Angular Material, para utilização de icones e mensagens de erros. 

## Para rodar o projeto
  yarn (para instalar dependencias)
  yarn start (para rodar local)
## Para entrar:
  Login: Usuario / Senha: 123
  Login: Administrador / Senha: 456


