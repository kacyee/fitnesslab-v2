import User from '../models/user.model';
import { Training } from '../models';
import { CreateTrainingType } from '../types/training.type';

export default class TrainingService {
  public static async createTraining(trainingBody: CreateTrainingType) {
    return new Promise((resolve, reject) => {
      Training.create({
        name: trainingBody.name,
        hour: trainingBody.hour,
        date: trainingBody.date,
      })
        .then((training: Training) => {
          resolve({ http_code: 201, results: training });
        })
        .catch((err: any) => {
          reject({ http_code: 500, reason: err });
        });
    });
  }

  public static async getTrainings() {
    return new Promise((resolve, reject) => {
      Training.findAll({
        include: {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
      })
        .then((trainings: Training[]) => {
          resolve({ http_code: 201, results: trainings });
        })
        .catch((err: any) => {
          reject({ http_code: 500, reason: err });
        });
    });
  }
}
