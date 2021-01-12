export interface User {
  login: string;
}

export interface IIssue {
  id: number;
  html_url: string;
  title: string;
  number: number;
  state: string;
  created_at: string;
  closed_at: string;
  user: User;
  comments: number;
}

export interface IResult {
  total_count: number;
  incomplete_result: boolean;
  items: IIssue[];
}

export interface ILabel {
  id: number;
}

export interface IQuery {
  q?: string;
  page?: number;
}
