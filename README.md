# **Resumo: UniRide**

# UniRide

O **UniRide** é um aplicativo colaborativo desenvolvido para facilitar o transporte dos alunos da Fatec Sorocaba ou outras faculdades de **sorocaba e região**. Seu objetivo é conectar motoristas e passageiros que frequentam a instituição, criando um sistema de caronas **eficiente, econômico e sustentável**. A plataforma permite que os estudantes encontrem e ofereçam caronas de maneira segura e organizada, contribuindo para a redução de custos com transporte, diminuindo o número de veículos no campus e incentivando a interação entre os alunos.

Além de proporcionar **economia** para os usuários, o UniRide também busca promover a **sustentabilidade**, reduzindo o impacto ambiental causado pelo excesso de veículos em circulação. Ao compartilhar viagens, os estudantes podem otimizar seus deslocamentos de forma **prática e conveniente**, organizando caronas de acordo com horários e destinos compatíveis.

A **segurança** dos usuários é uma prioridade na plataforma. Para garantir um ambiente confiável, o aplicativo conta com verificação de identidade, permitindo validar a autenticidade dos usuários, e um sistema de avaliações, onde motoristas e passageiros podem compartilhar suas experiências, promovendo transparência e confiança nas interações. Essas funcionalidades asseguram que os usuários possam se conectar de maneira tranquila e protegida. Além disso, ao facilitar o deslocamento até a instituição, o UniRide contribui para uma maior integração acadêmica, alinhando-se aos horários das aulas e demais eventos universitários.

O aplicativo oferece diversas funcionalidades pensadas para atender às necessidades dos estudantes. O cadastro seguro garante a autenticidade e segurança dos perfis, enquanto a busca e oferta de caronas facilitam a conexão entre motoristas e passageiros. O sistema de avaliações possibilita feedbacks para a melhoria contínua da experiência. O chat interno permite a **comunicação** direta entre usuários, proporcionando uma interação mais eficiente. Além disso, a integração com o calendário acadêmico possibilita que os alunos organizem suas viagens de maneira ainda mais prática e eficiente. Com essas funcionalidades, o UniRide não só facilita o deslocamento dos alunos, como também fortalece o senso de comunidade, promovendo um meio de transporte mais sustentável, econômico e colaborativo.

O UniRide também se preocupa com a **acessibilidade**, garantindo que o aplicativo seja inclusivo para todos os usuários. A interface foi desenvolvida para ser intuitiva e de fácil navegação, incluindo opções de acessibilidade como compatibilidade com leitores de tela e ajustes de contraste para pessoas com deficiência visual. Além disso, o sistema permite que motoristas e passageiros informem necessidades especiais, facilitando a organização de caronas adaptadas e promovendo uma experiência mais igualitária e acessível para todos.

---

# Infraestrutura:

### **Amazon Web Services (AWS):**

Considerando que somos uma empresa pequena, com poucos membros na equipe e um orçamento limitado, manter um **Data Center On-Premises ou Híbrido** seria extremamente difícil e custoso. Além dos altos investimentos iniciais em hardware e infraestrutura, haveria despesas contínuas com manutenção, segurança, upgrades e suporte técnico.  

Diante desse cenário, a melhor opção para nós é adotar uma infraestrutura **100% na Nuvem**, aproveitando os serviços da **AWS**, que oferecem escalabilidade, flexibilidade, otimização de custos e fácil implementação de segurança.  

Com essa abordagem, eliminamos preocupações relacionadas a **gerenciamento de infraestrutura física**, **manutenção**, **aluguel de espaço**, **custos de energia e refrigeração**, além da necessidade de contratar uma equipe dedicada para gerenciar servidores.  

Outro ponto crucial é a **escalabilidade**: serviços da AWS são projetados para lidar automaticamente com variações de demanda, garantindo **alta disponibilidade** e **desempenho eficiente** sem a necessidade de intervenção manual.  

Além disso, a AWS oferece diferentes **modelos de pagamento**, permitindo uma gestão financeira mais estratégica:  
- **Pagar conforme o uso**: Ideal para pequenas operações e testes, evitando desperdício de recursos.  
- **Planos reservados**: Ao comprometer-se com um serviço por **1 ou 3 anos**, é possível obter descontos significativos, reduzindo **muito** os custos a longo prazo.  
- **Descontos por volume**: Quanto maior o consumo de determinados serviços, maior o desconto aplicado, beneficiando empresas em crescimento.  
- **Tendência de redução de preços**: À medida que a AWS expande sua infraestrutura global e otimiza seus serviços, os custos tendem a diminuir, tornando a nuvem ainda mais acessível.  

Optar pela AWS nos permite focar no crescimento do negócio e no aprimoramento do **UniRide**, sem precisar nos preocupar com a complexidade e os altos custos de um data center próprio.  

---

# **Público Alvo - Requisitos:**

### [Persona e Users Stories](./Documentos/Personas-e-User-Stories.md)

### [Monetização](./Documentos/Monetizacao.md)

---

# **Técnologias:**

### [Frontend](./Documentos/Requisitos-Frontend.md):

### 1. Android:
- **Linguagem:** Kotlin (é oficialmente suportado pela Google para desenvolvimento Android)
- **Framework:** Jetpack Compose (Kotlin)
- **Ferramentas:** Android Studio (Ambiente integrado para desenvolver para o sistema Android)

### 2. iOS:
- **Linguagem:** Swift
- **Framework:** SwiftUI 
- **Ferramentas:** Xcode

### 3. Web:
- **Linguagem:** JavaScript e TypeScript
- **Frameworks:** React.js

**Errata:** Em caso de necessidade de ser lançado rapidamente em ambas as plataformas (iOS e Android), é possível utilizar um único código-base, como **React Native (JavaScript/TypeScript)** ou **Flutter (Dart).**

---

### [Backend](./Documentos/Requisitos-Backend.md):

### 1. Linguagens de Programação:
- **Node.js**, **Java** e **Python**

### 2. Frameworks:
- **Express.js** e **Spring Boot**

### 3. Arquitetura:
- **APIs REST** e **Microsserviços**

---

### [Banco de Dados e Armazenamento](./Documentos/Requisitos-BD-Armazenamento.md):

- **Arquitetura de Banco de Dados Híbrida:** Será utilizado banco de dados estruturados (SQL) e banco de dados não estruturados (NoSQL). A infraestutura do projeto é baseado na AWS, logo os serviços de banco de dados são da AWS, para banco de dados estruturados escolhemos o **Amazon Relational Database Service (RDS)** e para banco de dados não estruturados escolhemos o **Amazon DynamoDB**, além da possibilidade eventual de utilizar **ElastiCache e DAX** para memória em cache. 

- **Armazenamento:** Para o armazenamento escolhemos o **S3 Intelligent-Tiering**, pois ele fornece uma otimização de custos graças a sua **manipulação automática** dos objetos em camadas de acesso, sendo frequentemente acessado e pouco acessado. Assim, possibilitando diminuir custos com objetos pouco acessados, mas que ainda podem ser acessados de forma imediata. 

---

### Mapeamento e Geolocalização:

- **Google Maps API:** Cálculos, roteamento, precisão
- **Mapbox:** Personalização e Interface
- **HERE Maps:** Redundância para comparação

---

### Pagamentos:

- **APIs:** Mercado Pago, Pagar.me, PagSeguro, Stripe (Escolher conforme necessidade)

---

### Segurança e Conformidade:

- **PCI DSS:** (Payment Card Industry Data Security Standard)
- **LGPD:** (Lei Geral de Proteção de Dados)
- **Anti-Fraude:** Implementação de sistemas para proteção contra fraudes financeiras.

---

### Integrantes:

- Pedro Isse de Souza | 0030482411006
- Lauren Rodrigues Oliveira | 0030482411028
- Matheus Portes Ourique | 0030482411024
- Evandro Rodrigues de Arruda | 0030482411017

---
