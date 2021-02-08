import express, {Request, Response} from 'express';
import cors from 'cors';

import routes from './routes';
import './database/connection';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.json({
    'status': 'App running'
  });
});

app.listen(3333, () => {
  console.log('App running...')
});
