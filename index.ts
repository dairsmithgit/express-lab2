import path from 'path';
import express from 'express';
import homeRoutes from './routes/home';
import specialtyRoutes from './routes/specialty';
import reviewRoutes from './routes/review';
import resultsRoutes from './routes/review-results';
import builderRoutes from './routes/pizza-builder';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoutes);
app.use("/specialty", specialtyRoutes);
app.use("/review", reviewRoutes);
app.use("/review-results", resultsRoutes);
app.use("/pizza-builder", builderRoutes);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));