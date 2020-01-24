import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  routes() {
    this.app.get('/api/v1', (req, res) => {
      res.status(200).json({ success: true, message: 'Hello, world!' });
    });
  }
}

export default new App().app;
