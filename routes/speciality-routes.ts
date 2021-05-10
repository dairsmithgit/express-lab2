import express from 'express';

const routes = express.Router();

routes.get('/specialty-pizza', (req, res) => {
    const specialPizzas = [
        { name: "Anchovy Lover's", price: 15.00 },
        { name: "Paleo Pizza", price: 13.00 },
        { name: "Dessert Pizza", price: 14.00 }
    ];
});