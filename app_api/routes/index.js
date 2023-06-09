const express = require('express');
const router = express.Router();

const mealsController = require('../controllers/meals');

router
    .route('/meals')
    .get(mealsController.mealsList)
    .post(mealsController.mealsAddMeal);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindByCode);
 

module.exports = router;    