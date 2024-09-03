# api_users_2608

# Criando Instância Local do MySQL com Docker
docker run -d -p 3306:3306 --name meu-mysql -e MYSQL_ROOT_PASSWORD=sua_senha mysql:latest
docker exec -it meu-mysql mysql -u root -p


#Como rodar a aplicação

### Instalar e Atualizar os pacotes
```node
npm install

### Rodar a aplicacão
```node
npm run dev