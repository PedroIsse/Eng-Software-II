# **Tecnologias Backend**

# Linguagens de Programação

## **Node.js**
![logo Node.js](/Assets/nodejs.png "Logo Node.js")
Ideal para aplicações de alto tráfego e I/O intensivo.
Sua arquitetura assíncrona e baseada em eventos permite lidar com muitas requisições simultâneas.
Também possibilita usar JavaScript tanto no frontend quanto no backend, o que facilita a integração e o desenvolvimento.

---

## **Java**
![logo java](/Assets/java.png "Logo Java")
Linguagem robusta e escalável, ideal para sistemas empresariais de grande porte.
O Spring Boot facilita o desenvolvimento de microsserviços e oferece suporte nativo a segurança, persistência de dados e comunicação assíncrona.

---

## **Python**
![logo Python](/Assets/python.png "Logo Python")

Sintaxe simples e desenvolvimento rápido.
Excelente para integrar funcionalidades de AI/ML e análise de dados, além de ser versátil e fácil de integrar com outros sistemas.
Ideal para prototipação e projetos que podem evoluir com aprendizado de máquina no futuro.

---

# Frameworks

## **Express.js**
![logo Express.js](/Assets/expressjs.png "Logo Express.js")
Escolhemos o Express porque ele é um framework minimalista para Node.js, o que nos dá mais liberdade para moldar a aplicação de acordo com as necessidades específicas do projeto.
Esse nível de flexibilidade é essencial, pois sabemos que a API de caronas pode exigir personalizações ao longo do desenvolvimento.
Além disso, o Express é leve e altamente eficiente, aproveitando a arquitetura assíncrona do Node.js, o que nos permite lidar com grandes volumes de requisições simultâneas,
algo muito importante para o UniRide, onde muitos usuários podem interagir ao mesmo tempo. Sua simplicidade também facilita o desenvolvimento rápido de APIs RESTful,
o que é fundamental para criar um sistema modular e baseado em microsserviços. O suporte a middlewares permite que possamos tratar as requisições de forma mais organizada e eficiente.
Por fim, o Express se integra facilmente com diversas bibliotecas e pacotes do ecossistema Node.js, o que acelera a implementação de funcionalidades como autenticação, logs e validação de dados.

---

## **Spring Boot**
![logo Spring Boot](/Assets/springboot.png "Logo Spring Boot")
Escolhemos o Spring Boot porque ele é projetado para tornar a configuração de projetos Java mais simples e rápida, permitindo que nossa equipe crie aplicações com o mínimo de configuração necessária,
o que acelera significativamente o desenvolvimento, especialmente quando lidamos com microsserviços complexos.
O Spring Boot se integra facilmente com o Spring Cloud, oferecendo suporte completo para a construção de microsserviços, o que é ideal para o nosso projeto de caronas universitárias,
pois possibilita a divisão de funcionalidades como gerenciamento de reservas, autenticação e notificações em serviços independentes e escaláveis.
Além disso, o Spring Boot oferece integração nativa com o Spring Security, o que garante que a autenticação e autorização sejam implementadas de forma robusta e segura.
Seu sistema de gerenciamento de dependências também facilita a manutenção de bibliotecas e atualizações no projeto, mantendo tudo organizado e atualizado.
Em termos de desempenho e escalabilidade, o Spring Boot é altamente eficiente, o que é essencial para lidar com o aumento de usuários e dados no sistema,
além de oferecer excelente performance em ambientes de produção, com suporte a cache, banco de dados e balanceamento de carga. O vasto ecossistema do Spring Framework,
que inclui componentes como Spring Data, Spring Config e Spring Actuator, também nos proporciona ferramentas poderosas para persistência de dados, configuração centralizada e monitoramento,
permitindo que criemos um sistema robusto e fácil de manter.

---
