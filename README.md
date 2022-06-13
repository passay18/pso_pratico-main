# pso_pratico
Para fins do teste da empresa Pso Engenharia v.1.0 beta

Criado usando node.js, react, e demais ferramentas descritas

# Demo
Os arquivos do teste foram disponibilizados no replit afim de facilitar uma primeira para execução do teste proposto

1 (ambiente do cliente) - https://clientpso.paulsaymon.repl.co/    
2 (servidor) - https://Server.paulsaymon.repl.co

basta apenas acessar o ambiente do cliente psara visualização do teste

# Teste local

Baixe os arquivos 

Para funcionamento do cliente começamos pelo servidor, foi criado um banco de dados online para fins de teste

no console dentro da pasta #server execute os comandos para instalar as bibliotecas necessarias do servidor

1 - npm install express body-parser mysql
2 - npm install nodemon

start no servidor 

npm run devStart
deixe o servidor ativo

já na pasta cliente

afim de facilitar a execução sem erros crie um novo projeto, sem antes colar os arquivos do cliente

1 - npx create-react-app .  (não se esqueça do ponto)
2 - após executado delete os arquivos:
  * src/setupTests.js
  * src/reportWebVitals.js
  * src/App.test.js
  * src/logo.svg
  
3 - substitua os arquivos do teste pelos demais restantes
4 - no terminal dentro da pasta client instale a biblioteca do axios: 
    npm install axios
    
agora basta executar npm start



