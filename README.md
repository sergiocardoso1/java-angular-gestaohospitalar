# Guia de Execução da Aplicação

Este guia fornece instruções passo-a-passo para executar a aplicação que consiste em um backend Spring com Java 11 e um frontend Angular 15. Certifique-se de seguir todos os passos na ordem correta.

## Requisitos

- Java Development Kit (JDK) 11: Certifique-se de ter o JDK 11 instalado em seu sistema. Você pode verificar a instalação com o seguinte comando no terminal:

    ```
    java -version
    ```

- Node.js e npm: Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados. Você pode verificar a instalação com os seguintes comandos no terminal:

    ```
    node -v
    npm -v
    ```

## Configuração do Backend

1. Clone este repositório:

    ```
    git clone <URL_DO_REPOSITÓRIO>
    cd teste-full-stack
    ```

2. Navegue até o diretório do backend:

    ```
    cd backend
    ```
3. Abra o arquivo `application-test.properties` no diretório `src/main/resources` e adicione as informações de email e senha de aplicativo necessárias para configurar o SMTP. Por exemplo:

    ```
    # Configuração do SMTP
    spring.mail.host=smtp.example.com
    spring.mail.port=587
    spring.mail.username=seu_email@example.com
    spring.mail.password=sua_senha_de_aplicativo
    spring.mail.properties.mail.smtp.auth=true
    spring.mail.properties.mail.smtp.starttls.enable=true
    ```

    Substitua `seu_email@example.com` e `sua_senha_de_aplicativo` pelas credenciais de email e senha de aplicativo apropriadas.

4. Inicie o servidor Spring Boot:

    ```
    ./mvnw spring-boot:run
    ```

O backend agora está em execução na porta padrão 8080.

## Configuração do Frontend

4. Navegue até o diretório do frontend:

    ```
    cd ../frontend
    ```

5. Instale as dependências do projeto Angular:

    ```
    npm install
    ```

6. Inicie o servidor de desenvolvimento Angular:

    ```
    npm start
    ```

O frontend agora está em execução na porta padrão 4200.

## Acesso à Aplicação

Agora que tanto o backend quanto o frontend estão em execução, você pode acessar a aplicação em seu navegador web:

- Frontend: http://localhost:4200
- Backend: http://localhost:8080

## Encerrando a Aplicação

Para encerrar a execução do frontend e do backend, você pode pressionar `Ctrl + C` nos respectivos terminais em que estão sendo executados.

Esperamos que este guia tenha sido útil para você configurar e executar a aplicação. Se você encontrar algum problema ou tiver alguma dúvida, sinta-se à vontade para entrar em contato com a equipe de suporte.
