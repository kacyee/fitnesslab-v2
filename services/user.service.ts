import { CreateUserTrainingType, CreateUserType } from '../types/user.type';
import User from '../models/user.model';
import { Training } from '../models';

export default class UserService {
  public static async creatUser(userBody: CreateUserType) {
    return new Promise((resolve, reject) => {
      User.create({
        name: userBody.name,
        password: userBody.password,
        email: userBody.email,
      })
        .then((user: User) => {
          resolve({ http_code: 201, results: user });
        })
        .catch((err: any) => {
          reject({ http_code: 500, reason: 'Sequelize ORM error.' });
        });
    });
  }

  public static async getUsers() {
    return new Promise((resolve, reject) => {
      User.findAll({
        include: {
          model: Training,
          attributes: ['id', 'name', 'hour', 'date'],
        },
      })
        .then((users: User[]) => {
          resolve({ http_code: 201, results: users });
        })
        .catch((err: any) => {
          reject({ http_code: 500, reason: err });
        });
    });
  }

  public static async setTrainingToUser({
    user_id,
    training_id,
  }: CreateUserTrainingType) {
    return new Promise((resolve, reject) => {
      User.findByPk(user_id)
        .then(user => {
          user?.setTraining([training_id]);
        })
        .then(user => {
          resolve({ http_code: 201, results: user });
        })
        .catch((err: any) => {
          console.log(err);
          reject({ http_code: 500, reason: err });
        });
    });
  }
}
