import { BelongsToManySetAssociationsMixin } from 'sequelize';
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
  BeforeCreate,
} from 'sequelize-typescript';
import { UserType } from '../types/user.type';
import Training from './training.model';
import UserHasTrainings from './user_has_trainings.model';
import { encryptPassword } from '../middleware/passwordEncryptor';

@Table({
  timestamps: true,
})
export default class User extends Model implements UserType {
  public declare setTraining: BelongsToManySetAssociationsMixin<
    Training,
    number
  >;
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @Unique
  @AllowNull(false)
  @NotEmpty
  @Column
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string;

  @BelongsToMany(() => Training, () => UserHasTrainings)
  trainings!: Training[];

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @DeletedAt
  deleted_at!: Date;

  @BeforeCreate
  static async encryptPassword(user: User) {
    let encryptedPassword: any = await encryptPassword(user.password);
    user.password = String(encryptedPassword);
  }
}
