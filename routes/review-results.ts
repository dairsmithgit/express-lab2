import express from 'express';

const routes = express.Router();

routes.get('/review-results', (req, res) => {
    const name = req.query.name;
    const comment = req.query.comment;
    const rating = req.query.rating;
    res.render("/review-results", { name, comment, rating });
});

export default routes;