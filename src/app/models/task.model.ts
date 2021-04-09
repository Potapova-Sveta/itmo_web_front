export class Task {
  id: string;
  status: TaskStatus;
  description: string;
  number: number;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  FAILED = 'FAILED',
  COMPLETE = 'COMPLETE',
}
