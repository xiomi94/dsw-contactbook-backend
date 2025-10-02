import express from 'express';
import cors from 'cors';
import { contactBookRouter } from './routes/contact.route.js';
import { sequelize } from './models/index.js';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

contactBookRouter(app);

app.listen(port, () => {
  console.log(`El servidor se ha inicializado en el puerto ${port}`);
})

sequelize.sync();

