export class Task {
  id: string;
  status: TaskStatus;
  description: string;
  number: number;
  comment: string;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  FAILED = 'FAILED',
  COMPLETE = 'COMPLETE',
}
