export type TrainingType = {
  id?: number | null;
  name: string;
  hour: string;
  date: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export type CreateTrainingType = {
  name: string;
  hour: string;
  date: string;
};
