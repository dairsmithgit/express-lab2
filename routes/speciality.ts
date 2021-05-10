import express from 'express';

const routes = express.Router();

const specialPizzas = [
    { name: "Anchovy Lover's", price: 15.00 },
    { name: "Paleo Pizza", price: 13.00 },
    { name: "Dessert Pizza", price: 14.00 }
];

routes.get('/specialty-pizzas', (req, res) => {
    const name = req.query.name;
    const price = req.query.price;
    res.render("specialty-pizzas", { name, price });
});

export default routes;