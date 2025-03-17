# **Tecnologias Backend**

# Linguagens de Programação

### **Node.js**
<p align="center"> 
<img src = "./Assets/nodejs.png" width="200" height="200">
<p>


Desempenho Assíncrono e Baseado em Eventos :
O Node.js é altamente eficiente em termos de I/O, o que o torna ideal para lidar com aplicações de alto tráfego e com muitas requisições simultâneas,
como um sistema de caronas, onde muitos usuários podem fazer reservas, consultar horários e interagir em tempo real.
Sua arquitetura baseada em eventos e I/O não bloqueante garante que as operações não interrompam o fluxo da aplicação, mesmo em picos de uso.

Uso de JavaScript no Backend :
Node.js permite que o JavaScript seja usado também no backend. Isso reduz a complexidade e facilita a comunicação entre front-end e back-end,já que ambos utilizam a mesma linguagem.
Para equipes de desenvolvimento que estão familiarizadas com JavaScript (ou se o front-end já utiliza React ou Angular, por exemplo), isso facilita a integração e a curva de aprendizado.

Ecossistema Rico de Pacotes :
Através do npm (Node Package Manager) , o Node.js oferece uma gama de pacotes que facilitam uma vasta implementação de funcionalidades como autenticação,
validação, segurança, gerenciamento de banco de dados, entre outros.
Isso o desenvolvimento do backend e permite a reutilização do código já testado e aprovado.

Escalabilidade e Microserviços :
O Node.js é perfeito para arquiteturas baseadas em microserviços, uma vez que sua natureza leve e não bloqueante permite que diferentes microserviços sejam executados de maneira eficiente e escalável.
No seu caso, diferentes partes do sistema de caronas, como reservas, notificações e localização, podem ser distribuídas em serviços independentes.

---

### **Java**
<p align="center"> 
<img src = "./Assets/java.png" width="200" height="200">
<p>

Robustez e Escalabilidade :
O Java é uma das linguagens mais tradicionais e robustas para o desenvolvimento de sistemas grandes e empresariais.
Ele é amplamente utilizado em sistemas críticos devido à sua estabilidade e escalabilidade.
Para um sistema de caronas, que pode crescer com o tempo e precisar lidar com grande volume de dados e usuários, o Java oferece uma base sólida.

Framework Spring Boot :
O Spring Boot é uma das principais razões para a escolha do Java. Ele facilita a construção de aplicações Java de maneira rápida e produtiva, com foco na criação de microsserviços.
O Spring Boot permite uma configuração mínima e automatizada, o que ajuda a acelerar o desenvolvimento sem perder robustez e segurança.
Ele também integra nativamente outros componentes como Spring Cloud, Spring Data e Spring Security.

Amplo Suporte para Processamento Assíncrono e Concorrência :
Java tem uma excelente implementação para lidar com múltiplas tarefas de forma simultânea (concorrência), o que é necessário quando lidamos com muitas requisições simultâneas,
como em um sistema de caronas onde diferentes motoristas e passageiros podem interagir ao mesmo tempo.

Segurança e Comunidade :
Java tem uma longa história de ser utilizado em aplicações seguras e de missão crítica.
Possui excelentes bibliotecas e frameworks de segurança, além de uma enorme comunidade de desenvolvedores e suporte.

Portabilidade :
As aplicações Java podem ser realizadas em diferentes plataformas sem grandes mudanças, graças à máquina virtual Java (JVM).
Isso oferece flexibilidade para rodar a aplicação em ambientes variados (nuvem, servidores físicos, etc.).



---

### **Python**
<p align="center"> 
<img src = "./Assets/python.png" width="200" height="200">
<p>


Desenvolvimento Rápido e Produtividade :
Python é uma linguagem conhecida por sua sintaxe simples e legível, o que permite um desenvolvimento mais rápido. 
Para um projeto com prazos apertados ou quando é necessário prototipar rapidamente, Python é uma excelente escolha.
Isso permite que uma equipe de desenvolvimento foque na lógica de negócios ao invés de gastar tempo com detalhes complexos de linguagem.

Integração com Inteligência Artificial e Análise de Dados :
No futuro, se o sistema de caronas universitárias precisar incorporar funcionalidades como recomendação de caronas, otimização de rotas ou análise de dados (ex: quais horários são mais populares),
Python é uma escolha ideal devido à vasta gama de bibliotecas de inteligência artificial (AI) e machine learning (ML) , como TensorFlow, PyTorch, scikit-learn, entre outras.

Versatilidade e Suporte para Microsserviços :
Python é bastante versátil, podendo ser utilizado em diferentes partes do backend, como APIs REST ou até mesmo para criar microsserviços especializados.
Ele também tem boas bibliotecas para trabalhar com bancos de dados, como SQLAlchemy , e é compatível com APIs RESTful usando frameworks como Flask ou Django .

Boa Comunidade e Ecossistema :
Python tem uma comunidade muito ativa e uma ampla gama de pacotes e ferramentas disponíveis para praticamente qualquer tipo de tarefa no backend,
desde comunicação com bancos de dados até autenticação e verificação de segurança.

Facilidade de Integração com Outros Sistemas :
Como Python é uma linguagem amplamente utilizada para integração com outros sistemas e serviços, ele pode se comunicar facilmente com outros microsserviços ou APIs,
criando uma rede de sistemas interconectados.


---

# Frameworks

### **Express.js**
<p align="center"> 
<img src = "./Assets/expressjs.png" width="200" height="200">
<p>


Escolhemos o Express porque ele é um framework minimalista para Node.js, proporcionando maior liberdade para moldar a aplicação de acordo com as necessidades específicas do projeto. Esse nível de flexibilidade é essencial, pois a API de caronas pode exigir personalizações ao longo do desenvolvimento.

Além disso, o Express é leve e altamente eficiente, aproveitando a arquitetura assíncrona do Node.js, o que nos permite lidar com grandes volumes de requisições simultâneas — um fator crucial para o UniRide, onde muitos usuários podem interagir ao mesmo tempo. Sua simplicidade também facilita o desenvolvimento rápido de APIs RESTful, fundamental para a criação de um sistema modular e baseado em microsserviços.

O suporte a middlewares permite tratar as requisições de forma mais organizada e eficiente. Por fim, o Express se integra facilmente com diversas bibliotecas e pacotes do ecossistema Node.js, acelerando a implementação de funcionalidades como autenticação, logs e validação de dados.


---

### **Spring Boot**
<p align="center"> 
<img src = "./Assets/springboot.png" width="200" height="200">
<p>


Escolhemos o Spring Boot porque ele foi projetado para simplificar e agilizar a configuração de projetos Java, permitindo que nossa equipe desenvolva aplicações com o mínimo de configuração necessária. Isso acelera significativamente o desenvolvimento, especialmente ao lidarmos com microsserviços complexos.  

O Spring Boot se integra facilmente com o Spring Cloud, oferecendo suporte completo para a construção de microsserviços. Essa característica é ideal para o nosso projeto de caronas universitárias, pois possibilita a divisão de funcionalidades, como gerenciamento de reservas, autenticação e notificações, em serviços independentes e escaláveis.  

Além disso, o Spring Boot oferece integração nativa com o Spring Security, garantindo uma implementação robusta e segura de autenticação e autorização. Seu sistema de gerenciamento de dependências facilita a manutenção do projeto, mantendo as bibliotecas organizadas e sempre atualizadas.  

Em termos de desempenho e escalabilidade, o Spring Boot é altamente eficiente, essencial para lidar com o crescimento do número de usuários e dados no sistema. Ele também proporciona excelente performance em ambientes de produção, com suporte a cache, banco de dados e balanceamento de carga.  

O vasto ecossistema do Spring Framework, que inclui componentes como Spring Data, Spring Config e Spring Actuator, nos oferece ferramentas poderosas para persistência de dados, configuração centralizada e monitoramento, permitindo a criação de um sistema robusto e fácil de manter.


---
