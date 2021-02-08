// import express, {Request, Response} from 'express';
// import cors from 'cors';

import routes from './routes';
import './database/connection';

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(routes);

// app.get('/', (req: Request, res: Response) => {
//   res.json({
//     'status': 'App running'
//   });
// });

// app.listen(3333, () => {
//   console.log('App running...')
// });

import express from 'express';
const app = express()

app.use(express.json());
app.use(routes);


const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));
