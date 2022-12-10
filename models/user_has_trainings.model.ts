import {
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Training from './training.model';
import User from './user.model';

export interface UserHasTrainingsInterface {
  user_id: number;
  training_id: number;
}

@Table({
  tableName: 'user_has_trainings',
  timestamps: true,
})
export default class UserHasTrainings
  extends Model
  implements UserHasTrainingsInterface
{
  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @ForeignKey(() => Training)
  @Column
  training_id!: number;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @DeletedAt
  deleted_at!: Date;
}
