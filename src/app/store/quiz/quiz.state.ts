import { Questions } from '../../models/question.model';

export interface QuizState {
  questions: Questions[];
  loading: boolean;
  error: any;
}
