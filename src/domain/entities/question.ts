import { randomUUID } from "node:crypto";

interface questionProps {
  title: string;
  content: string;
  authorId: string;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor(props: questionProps, id?: string) {
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
    this.id = id ?? randomUUID();
  }
}
