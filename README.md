### Rodando o projeto
Antes de rodar o projeto pela primeira vez, instale todas as dependencias com o comando `yarn start`.

Após isso, execute o projeto com `yarn start`.

### Testes

Para rodar os testes, execute `yarn test`.

# Sobre o projeto

O projeto foi criado com o create-react-app, com typescript e utilizando hooks. Para controlar alguns estados da aplicação, estou utilizando Redux e o Apollo para fazer as requisições, conforme foi estipulado no desafio. A parte visual foi desenvolvida em cima do Ant Design, em sua versão estável mais recente.

Além disso, utilizei um hook de pre-commit com o husky para fazer a formatação/identação dos arquivos com o Prettier.

## Estrutura

Tentei utilizar uma estrutura bastante padrão, seguindo as documentações de todas as bibliotecas que utilizei. Falando apenas da estrutura de componentes, separei a estrutura de pastas em `pages` e `components` (além das pastas de utilitários e configurações).

A pasta `components` contém os componentes "universais" da aplicação, que são utilizadas por mais de um componente.

Dentro de pages, encontra-se os componentes referentes às páginas da aplicação. Nos casos que se fez necessário, ainda criei uma pasta de `components` para armazenar os componentes específicos de alguma página, para não causar confusão com os componentes universais.

O projeto todo está todo com tipagens e criei alguns mocks que funcionaram como uma base de dados na hora de gerar novos pedidos.
