# Fórum Backend - Node.js com DDD e Arquitetura Limpa

Este repositório contém uma aplicação backend desenvolvida em **Node.js** com **TypeScript**, focada em implementar a base de um sistema de fóruns online utilizando **Domain-Driven Design (DDD)** e **Arquitetura Limpa (Clean Architecture)**. O projeto concentra-se em modelar o domínio com entidades robustas, casos de uso bem definidos, testes unitários e um sistema de notificações baseado em eventos, mantendo a lógica de negócio isolada e testável.

## 📑 Visão Geral

A aplicação modela funcionalidades essenciais de um fórum, incluindo:

- Criação de estudantes (`Student`).
- Criação, edição e gerenciamento de perguntas (`Question`) e respostas (`Answer`).
- Escolha da melhor resposta para uma pergunta.
- Sistema de notificações para eventos do domínio, utilizando a estrutura `WatchedList` e o domínio `notification`.

O foco está nos níveis mais baixos da Arquitetura Limpa (domínio e aplicação), com ênfase em entidades, objetos de valor, casos de uso, testes unitários e notificações baseadas em eventos.

## 🛠 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Vitest** para testes unitários
- **PNPM** como gerenciador de pacotes

## 📚 Estrutura do Projeto

O projeto está organizado em camadas, seguindo os princípios da **Arquitetura Limpa** e **DDD**, com uma clara separação entre o domínio, a lógica de aplicação e utilitários compartilhados. A estrutura do diretório é a seguinte:

```
├── src
    ├── core
    │   ├── either.spec.ts
    │   ├── either.ts
    │   ├── entities
    │   │   ├── aggregate-root.ts
    │   │   ├── entity.ts
    │   │   ├── unique-entity-id.ts
    │   │   ├── watched-list.spec.ts
    │   │   └── watched-list.ts
    │   ├── errors
    │   │   ├── errors
    │   │   │   ├── not-allowed-error.ts
    │   │   │   └── resource-not-found-error.ts
    │   │   └── use-case-error.ts
    │   ├── events
    │   │   ├── domain-event.ts
    │   │   ├── domain-events.ts
    │   │   ├── domain.events.spec.ts
    │   │   └── event-handler.ts
    │   ├── repositories
    │   │   └── pagination-params.ts
    │   └── types
    │   │   └── optional.ts
    └── domain
    │   ├── forum
    │       ├── application
    │       │   ├── repositories
    │       │   │   ├── answer-attachments-repository.ts
    │       │   │   ├── answer-comments-repository.ts
    │       │   │   ├── answer-repository.ts
    │       │   │   ├── question-attachments-repository.ts
    │       │   │   ├── question-comments-repository.ts
    │       │   │   └── question-repository.ts
    │       │   └── use-cases
    │       │   │   ├── answer-question.spec.ts
    │       │   │   ├── answer-question.ts
    │       │   │   ├── choose-question-best-answer.spec.ts
    │       │   │   ├── choose-question-best-answer.ts
    │       │   │   ├── comment-on-answer.spec.ts
    │       │   │   ├── comment-on-answer.ts
    │       │   │   ├── comment-on-question.spec.ts
    │       │   │   ├── comment-on-question.ts
    │       │   │   ├── create-question.spec.ts
    │       │   │   ├── create-question.ts
    │       │   │   ├── delete-answer-comment.spec.ts
    │       │   │   ├── delete-answer-comment.ts
    │       │   │   ├── delete-answer.spec.ts
    │       │   │   ├── delete-answer.ts
    │       │   │   ├── delete-question-comment.spec.ts
    │       │   │   ├── delete-question-comment.ts
    │       │   │   ├── delete-question.spec.ts
    │       │   │   ├── delete-question.ts
    │       │   │   ├── edit-answer.spec.ts
    │       │   │   ├── edit-answer.ts
    │       │   │   ├── edit-question.spec.ts
    │       │   │   ├── edit-question.ts
    │       │   │   ├── fetch-answer-comments.spec.ts
    │       │   │   ├── fetch-answer-comments.ts
    │       │   │   ├── fetch-question-answers.spec.ts
    │       │   │   ├── fetch-question-answers.ts
    │       │   │   ├── fetch-question-comments.spec.ts
    │       │   │   ├── fetch-question-comments.ts
    │       │   │   ├── fetch-recent-questions.spec.ts
    │       │   │   ├── fetch-recent-questions.ts
    │       │   │   ├── get-question-by-slug.spec.ts
    │       │   │   └── get-question-by-slug.ts
    │       └── enterprise
    │       │   ├── entities
    │       │       ├── answer-attachment-list.ts
    │       │       ├── answer-attachment.ts
    │       │       ├── answer-comment.ts
    │       │       ├── answer.ts
    │       │       ├── attachment.ts
    │       │       ├── comment.ts
    │       │       ├── instructor.ts
    │       │       ├── question-attachment-list.ts
    │       │       ├── question-attachment.ts
    │       │       ├── question-comment.ts
    │       │       ├── question.ts
    │       │       ├── student.ts
    │       │       └── value-objects
    │       │       │   ├── slug.spec.ts
    │       │       │   └── slug.ts
    │       │   └── events
    │       │       ├── answer-created-event.ts
    │       │       └── question-best-answer-chosen-event.ts
    │   └── notification
    │       ├── application
    │           ├── repositories
    │           │   └── notifications-repository.ts
    │           ├── subscribers
    │           │   ├── on-answer-created.spec.ts
    │           │   ├── on-answer-created.ts
    │           │   ├── on-question-best-answer-chosen.spec.ts
    │           │   └── on-question-best-answer-chosen.ts
    │           └── use-cases
    │           │   ├── read-notification.spec.ts
    │           │   ├── read-notification.ts
    │           │   ├── send-notification.spec.ts
    │           │   └── send-notification.ts
    │       └── enterprise
    │           └── entities
    │               └── notification.ts
├── test
    ├── factories
    │   ├── make-answer-attachment.ts
    │   ├── make-answer-comment.ts
    │   ├── make-answer.ts
    │   ├── make-notification.ts
    │   ├── make-question-attachments.ts
    │   ├── make-question-comment.ts
    │   └── make-question.ts
    ├── repositories
    │   ├── in-memory-answer-attachment-repository.ts
    │   ├── in-memory-answers-comments-repository.ts
    │   ├── in-memory-answers-repository.ts
    │   ├── in-memory-notifications-repository.ts
    │   ├── in-memory-question-attachments-repository.ts
    │   ├── in-memory-question-comments-repository.ts
    │   └── in-memory-questions-repository.ts
    └── utils
    │   └── wait-for.ts
├── tsconfig.json
└── vite.config.mts
```

### Camadas Explicadas

1. **Core**:
   - Contém elementos genéricos e reutilizáveis:
     - `entities/`: Classes base como `Entity` e `WatchedList` para modelagem de domínio.
     - `errors/`: Erros genéricos como `ResourceNotFoundError`.
     - `types/`: Tipos utilitários como `Optional`.
     - Arquivos individuais: `either.ts` (para tratamento de erros), `unique-entity-id.ts` (identificadores únicos), `value-object.ts` (base para objetos de valor).
   - Exemplo: `src/core/entities/watched-list.ts` define a base para listas que notificam mudanças.

2. **Domain**:
   - **Forum**:
     - **Enterprise**: Inclui entidades (`Question`, `Answer`, `Student`), objetos de valor (`Slug`, `Attachment`) e listas como `QuestionAttachmentList`.
     - **Application**: Contém casos de uso (`CreateQuestionUseCase`, `ChooseBestAnswerUseCase`) e interfaces de repositórios (`QuestionsRepository`).
     - **Errors**: Erros específicos como `NotAllowedError`.
   - **Notification**:
     - **Enterprise**: Inclui a entidade `Notification` para modelar mensagens do sistema.
     - **Application**: Contém casos de uso como `SendNotificationUseCase` e a interface `NotificationsRepository`.
     - **Errors**: Erros específicos do contexto de notificações.
   - Exemplo: `src/domain/notification/enterprise/entities/notification.ts` define a entidade `Notification`.

3. **Test**:
   - Contém recursos para testes unitários:
     - `factories/`: Funções para criar instâncias de entidades (ex.: `makeQuestion`).
     - `repositories/`: Repositórios em memória como `InMemoryQuestionsRepository`.
     - `spies/`: Spies para simular comportamentos em testes.
   - Exemplo: `src/test/factories/make-question.ts` facilita a criação de perguntas para testes.

## 🧩 Exemplos de Código

Abaixo estão exemplos reais do repositório, destacando a aplicação de DDD, Arquitetura Limpa, testes e notificações.

### 1. Entidade de Domínio (`Question`)

No arquivo `src/domain/forum/enterprise/entities/question.ts`, a entidade `Question` encapsula as regras de negócio de uma pergunta.

<xaiArtifactCodeBlock language="typescript">
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Slug } from './value-objects/slug'
import { Optional } from '@/core/types/optional'
import dayjs from 'dayjs'

export interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get authorId() {
    return this.props.authorId
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }

  get title() {
    return this.props.title
  }

  get content() {
    return this.props.content
  }

  get slug() {
    return this.props.slug
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  set bestAnswerId(bestAnswerId: UniqueEntityID | undefined) {
    this.props.bestAnswerId = bestAnswerId
    this.touch()
  }

  static create(
    props: Optional<QuestionProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityID,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return question
  }
}
</xaiArtifactCodeBlock>

**Explicação**: A entidade `Question` usa objetos de valor (`Slug`) e identificadores únicos (`UniqueEntityID`). Métodos como `set title` atualizam o slug automaticamente e registram a data de modificação (`touch`), refletindo o comportamento do domínio.

### 2. Caso de Uso (`SendNotificationUseCase`)

No arquivo `src/domain/notification/application/use-cases/send-notification.ts`, o caso de uso `SendNotificationUseCase` orquestra o envio de uma notificação.

<xaiArtifactCodeBlock language="typescript">
import { Either, right } from '@/core/either'
import { Notification } from '../../enterprise/entities/notification'
import { NotificationsRepository } from '../repositories/notifications-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface SendNotificationUseCaseRequest {
  recipientId: string
  title: string
  content: string
}

type SendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
      createdAt: new Date(),
    })

    await this.notificationsRepository.create(notification)

    return right({
      notification,
    })
  }
}
</xaiArtifactCodeBlock>

**Explicação**: Este caso de uso cria uma entidade `Notification` e a persiste via uma interface de repositório, mantendo a lógica de negócio desacoplada. Ele reflete a separação de responsabilidades da Arquitetura Limpa.

### 3. Sistema de Notificações com `WatchedList`

No arquivo `src/domain/forum/enterprise/entities/question-attachment-list.ts`, a classe `QuestionAttachmentList` utiliza a estrutura `WatchedList` para gerenciar anexos e disparar notificações.

<xaiArtifactCodeBlock language="typescript">
import { WatchedList } from '@/core/entities/watched-list'
import { QuestionAttachment } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return a.attachmentId.equals(b.attachmentId)
  }
}
</xaiArtifactCodeBlock>

**Explicação**: A `WatchedList` rastreia mudanças em listas (adições, remoções ou atualizações), permitindo notificações automáticas. Por exemplo, ao adicionar um anexo a uma pergunta, a lista registra o evento, que pode ser usado para disparar notificações (ex.: informar o autor da pergunta).

### 4. Teste Unitário (`SendNotificationUseCase`)

No arquivo `src/domain/notification/application/use-cases/send-notification.spec.ts`, um teste unitário com **Vitest** valida o caso de uso de envio de notificações.

<xaiArtifactCodeBlock language="typescript">
import { expect, it, describe, beforeEach } from 'vitest'
import { SendNotificationUseCase } from './send-notification'
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository'

let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sut: SendNotificationUseCase

describe('Send Notification', () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sut = new SendNotificationUseCase(inMemoryNotificationsRepository)
  })

  it('should be able to send a notification', async () => {
    const result = await sut.execute({
      recipientId: '1',
      title: 'Nova notificação',
      content: 'Conteúdo da notificação',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryNotificationsRepository.items[0]).toEqual(
      result.value?.notification,
    )
    expect(inMemoryNotificationsRepository.items[0]).toMatchObject({
      recipientId: new UniqueEntityID('1'),
      title: 'Nova notificação',
      content: 'Conteúdo da notificação',
    })
  })
})
</xaiArtifactCodeBlock>

**Explicação**: O teste valida a criação de uma notificação, usando um repositório em memória para isolar dependências. Ele verifica se a notificação é salva corretamente, garantindo que o caso de uso funcione como esperado.

## 🧪 Testes Unitários

Os testes unitários, implementados com **Vitest**, cobrem entidades, objetos de valor e casos de uso, garantindo que as regras de negócio sejam respeitadas. A pasta `src/test/` contém:

- **Factories**: Funções como `makeQuestion` e `makeNotification` criam instâncias controladas para testes.
- **Repositories**: Repositórios em memória (`InMemoryQuestionsRepository`, `InMemoryNotificationsRepository`) simulam persistência.
- **Spies**: Objetos para mock de comportamentos, usados em testes mais complexos.
- **Cobertura**: Testes para casos de uso (`CreateStudent`, `ChooseBestAnswer`, `SendNotification`) e entidades (`Question`, `Notification`) validam cenários de sucesso e erro.

### Características dos Testes

- **Isolamento**: Testes usam repositórios em memória, eliminando dependências externas.
- **Estrutura**: Cada teste usa `describe` e `it` para clareza, com `beforeEach` para reiniciar estados.
- **Cenários**: Incluem validações positivas (ex.: criar uma pergunta) e negativas (ex.: falhar ao escolher melhor resposta de outro autor).
- **Manutenção**: Factories e spies facilitam a adição de novos testes.

### Exemplo de Comando

Para executar os testes:

```bash
pnpm test
```

Para cobertura:

```bash
pnpm test:coverage
```

## 📬 Sistema de Notificações

O sistema de notificações combina o domínio `notification` com a estrutura `WatchedList`:

- **Domínio Notification**: A entidade `Notification` modela mensagens com destinatário, título, conteúdo e timestamps. O caso de uso `SendNotificationUseCase` gerencia o envio.
- **WatchedList**: Usada em `QuestionAttachmentList` e `AnswerAttachmentList` para rastrear mudanças em anexos, permitindo eventos como "novo anexo adicionado".

### Benefícios

- **Desacoplamento**: Notificações são gerenciadas sem dependência de infraestrutura.
- **Flexibilidade**: `WatchedList` suporta notificações baseadas em eventos para qualquer lista.
- **Domínio Rico**: A entidade `Notification` encapsula regras, como marcar uma notificação como lida.

### Exemplo Prático

Adicionar um anexo e disparar uma notificação:

```typescript
const attachmentList = new QuestionAttachmentList();
const newAttachment = QuestionAttachment.create({
  attachmentId: new UniqueEntityID(),
  questionId: question.id,
});
attachmentList.update([newAttachment]);

// Disparar notificação
const notification = Notification.create({
  recipientId: question.authorId,
  title: 'Novo anexo',
  content: `Um anexo foi adicionado à pergunta: ${question.title}`,
});
await notificationsRepository.create(notification);
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v18 ou superior)
- PNPM

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/RichardLirio/nodejs-04-clean-domain.git
   cd nodejs-04-clean-domain
   ```

2. **Instale as dependências**:

   ```bash
   pnpm install
   ```

3. **Execute os testes**:

   ```bash
   pnpm test
   ```

## 🌟 Benefícios do DDD e Arquitetura Limpa

- **Modelagem Rica**: Entidades como `Question` e `Notification` refletem o domínio.
- **Testabilidade**: Testes com Vitest garantem robustez.
- **Desacoplamento**: Lógica de negócio independente de infraestrutura.
- **Notificações**: Combinação de `WatchedList` e `notification` para eventos.
- **Manutenibilidade**: Estrutura modular facilita extensões.

## 📌 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## 📧 Contato

Para dúvidas ou sugestões, use as Issues do GitHub.

---

**Licença**: Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.