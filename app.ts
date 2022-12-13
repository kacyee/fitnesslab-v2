import express, { Request, response, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';
import sequelize from './config/database';
const app = express();

app.set('port', process.env.port || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Application works',
    author: 'Patryk Puslecki',
  });
});

app.use('/', router);

(async () => {
  await sequelize.sync({ force: false });

  app.listen(app.get('port'), () => {
    console.log(`[APP] Servidor encendido en el puerto ${app.get('port')} 👍!`);
  });
})();

export default app;
