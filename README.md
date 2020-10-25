Para rodar o Projeto:

1 - Clone o repositório;
   no terminal digite: git clone https://github.com/DiegoRafaelAF/Countries.git (HTTPS) OU git@github.com:DiegoRafaelAF/Countries.git (SSH)

2 - Instale as dependências;
   dentro do diretório do projeto digite: npm install

3 - Inicie o projeto:;
   para rodar o projeto digite: npm start

Decisões:

- Após instalar o axios para fazer as requisições não consegui utilizar. Por esse motivo utilizei fetch.
Segui os padrões fornecidos pela API Graph Countries (https://github.com/lennertVanSever/graphcountries).

- Foi utilizado Context para centralização dos dados e fornescimento dos mesmos entre componentes sem precisar passar explicitamente props entre cada nível.
