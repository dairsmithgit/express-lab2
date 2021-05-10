import path from 'path';
import express from 'express';
import home from './routes/home';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", home);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));