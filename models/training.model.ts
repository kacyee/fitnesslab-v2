import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  NotEmpty,
  Unique,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { TrainingType } from '../types/training.type';
import User from './user.model';
import UserHasTrainings from './user_has_trainings.model';

@Table({
  timestamps: true,
})
export default class Training extends Model implements TrainingType {
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  hour!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  date!: string;

  @BelongsToMany(() => User, () => UserHasTrainings)
  users!: User[];

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @DeletedAt
  deleted_at!: Date;
}
