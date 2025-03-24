import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answer-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}

//exemplo de nova instancia : new AnswerQuestionUseCase().execute({instructorId: "1", questionId: "2", content: "content answer"})
