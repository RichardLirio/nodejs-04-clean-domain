import { PaginationParams } from "@/core/repositories/pagination-params";
import { DomainEvents } from "@/core/events/domain-events";
import { AnswersRepository } from "@/domain/forum/application/repositories/answer-repository";
import { Answer } from "@/domain/forum/enterprise/entities/answer";
import { AnswerAttachmentsRepository } from "@/domain/forum/application/repositories/answer-attachments-repository";

export class InMemoryAnswersRepository implements AnswersRepository {
  constructor(
    private answerAttachmentsRepository: AnswerAttachmentsRepository
  ) {}

  public items: Answer[] = [];

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id);

    if (!answer) {
      return null;
    }

    return answer;
  }

  async save(answer: Answer) {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id);

    this.items[itemIndex] = answer;

    DomainEvents.dispatchEventsForAggregate(answer.id);
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20);

    return answers;
  }

  async create(answer: Answer) {
    this.items.push(answer);

    DomainEvents.dispatchEventsForAggregate(answer.id);
  }

  async delete(answer: Answer): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id);

    this.items.splice(itemIndex, 1);
    this.answerAttachmentsRepository.deleteManyByAnswerId(answer.id.toString());
  }
}
