import { CreateUserTrainingType } from '../types/user.type';
import { UserHasTrainings } from '../models';

export default class UserHasTrainingsService {
  public static async setTrainingToUser({
    user_id,
    training_id,
  }: CreateUserTrainingType) {
    return new Promise((resolve, reject) => {
      UserHasTrainings.create({
        user_id: user_id,
        training_id: training_id,
      })
        .then(userHasTrainings => {
          resolve({ http_code: 201, results: userHasTrainings });
        })
        .catch((err: any) => {
          console.log(err);
          reject({ http_code: 500, reason: 'Sequelize ORM error.' });
        });
    });
  }
}
