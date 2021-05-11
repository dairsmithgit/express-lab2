import express from 'express';

const routes = express.Router();

const toppings = [
    "Pepperoni",
    "Sausage",
    "Bacon",
    "Mushrooms",
    "Green Pepper",
    "Onion",
    "Anchovy",
    "Olive",
    "Not Pineapple"
];

routes.get('/pizza-builder', (req, res) => {
    const topping = toppings;
    res.render("pizza-builder", { topping });
});

export default routes;