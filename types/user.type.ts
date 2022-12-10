import { Training } from '../models';

export type UserType = {
  id?: number | null;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  trainings: Training[];
};

export type CreateUserType = {
  name: string;
  email: string;
  password: string;
  trainings?: Training[];
};

export type CreateUserTrainingType = {
  user_id: number;
  training_id: number;
};
