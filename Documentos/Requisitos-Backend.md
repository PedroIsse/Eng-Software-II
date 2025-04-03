# **Tecnologias Backend**

# Linguagens de Programação

### **Java**
<p align="center"> 
<img src = "../Assets/java.png" width="200" height="200">
<p>

## Robustez e Escalabilidade

Java é uma das linguagens de programação mais confiáveis e utilizadas para o desenvolvimento de aplicações corporativas de grande porte.
Sua robustez e estabilidade são essenciais para garantir um sistema seguro e eficiente para o UniRide.
O Java é ideal para aplicações que exigem escalabilidade, como um sistema de caronas universitárias, que pode crescer e precisar lidar com um grande volume de requisições simultâneas.
Sua máquina virtual Java (JVM) permite um excelente gerenciamento de memória e execução eficiente, reduzindo gargalos de desempenho.

## Orientação a Objetos e Manutenibilidade
Java é uma linguagem totalmente orientada a objetos, o que facilita a modularização do código, tornando o sistema mais organizado, reutilizável e de fácil manutenção.
Além disso, o uso de padrões de design (como MVC, Singleton e Factory) melhora a estrutura do software, permitindo que seja mais adaptável a mudanças futuras.

## Segurança Avançada
A segurança é um fator crucial para um aplicativo de caronas, pois lida com dados sensíveis de usuários, como informações pessoais e localização em tempo real.
Java conta com bibliotecas nativas e frameworks como Spring Security, que proporcionam autenticação, autorização e proteção contra ataques comuns, como SQL Injection e Cross-Site Scripting (XSS).

## Portabilidade
Aplicações Java podem ser executadas em diferentes plataformas sem grandes adaptações,
graças à JVM. Isso permite que o sistema funcione de maneira eficiente em diversos ambientes, incluindo servidores locais e plataformas em nuvem, garantindo flexibilidade no deployment.

## Amplo Suporte para Concorrência
Java possui suporte avançado para processamento concorrente, permitindo que múltiplas operações sejam executadas simultaneamente sem afetar a performance do sistema.
Isso é essencial para um sistema de caronas, onde várias requisições de motoristas e passageiros acontecem ao mesmo tempo.

## Grande Comunidade e Suporte
A comunidade Java é uma das maiores e mais ativas do mundo, proporcionando vasto suporte por meio de fóruns, documentações e repositórios open-source.
Isso facilita a resolução de problemas e garante atualizações frequentes com novas melhorias e correções de segurança.


---


### **Spring Boot**
<p align="center"> 
<img src = "../Assets/springboot.png" width="200" height="200">
<p>



## Facilidade de Desenvolvimento e Configuração
Spring Boot simplifica significativamente o desenvolvimento de aplicações Java ao eliminar a necessidade de configurações complexas.
Ele oferece um ambiente pronto para uso, permitindo que os desenvolvedores foquem na implementação das regras de negócio em vez de perder tempo configurando o ambiente.

## Suporte Nativo para Microsserviços
O UniRide adota uma arquitetura baseada em microsserviços para modularizar suas funcionalidades (como gerenciamento de usuários, reservas de carona e notificações).
O Spring Boot, juntamente com o Spring Cloud, fornece um ecossistema completo para a criação, integração e escalabilidade desses microsserviços.

## Integração com Spring Cloud
O Spring Cloud permite que a aplicação utilize recursos avançados de microsserviços, como:

1. Discovery Service (Eureka): Facilita a descoberta automática de serviços.

2. Config Server: Centraliza a configuração dos microsserviços.

3. Circuit Breaker (Resilience4J): Garante resiliência ao sistema, evitando falhas em cascata.

4. API Gateway (Spring Cloud Gateway): Gerencia e protege o tráfego entre microsserviços.

## Segurança Aprimorada com Spring Security
Spring Security é um dos frameworks mais utilizados para garantir autenticação e autorização em aplicações Java.
Ele suporta diversos métodos de autenticação, incluindo OAuth2, JWT e OpenID Connect, garantindo um nível avançado de segurança para os usuários do UniRide.

## Gerenciamento Simplificado de Dependências
O Spring Boot utiliza o Maven ou Gradle para gerenciamento de dependências, o que facilita a inclusão de bibliotecas e a manutenção do projeto. 
Além disso, ele oferece um Starter Pack para cada funcionalidade, reduzindo a complexidade na configuração inicial do projeto.

## Monitoramento e Performance com Spring Actuator
O Spring Actuator permite monitorar métricas de desempenho, identificar possíveis problemas e garantir a estabilidade da aplicação.
Ele fornece endpoints prontos para exibir informações do sistema, como uso de memória, requisições HTTP e logs de erro.

## Banco de Dados e Persistência com Spring Data
Spring Data simplifica a comunicação com bancos de dados relacionais e não relacionais, utilizando bibliotecas como:

1. Spring Data JPA: Facilita a integração com bancos de dados SQL (PostgreSQL, MySQL, etc.).

2. Spring Data MongoDB: Suporte para banco de dados NoSQL.

3. Hibernate: Framework ORM para manipulação eficiente de entidades.

## Execução e Deploy em Ambientes Cloud
Spring Boot é altamente compatível com serviços em nuvem, permitindo deploy fácil em plataformas como AWS, Google Cloud e Microsoft Azure.
Ele também suporta conteinerização com Docker e orquestração com Kubernetes.

---

# **Considerações Finais**

A escolha do Java e do Spring Boot para o backend do UniRide se baseia na necessidade de uma plataforma robusta, segura e escalável.
Java fornece um ambiente confiável para o desenvolvimento, enquanto o Spring Boot facilita a implementação de microsserviços, integrações com bancos de dados e monitoramento da aplicação.
Com essa tecnologia, o UniRide será capaz de oferecer uma experiência fluida, eficiente e segura para seus usuários.


