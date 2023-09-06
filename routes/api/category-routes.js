const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // TODO: find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({ include: [Product]});
    if(!categories) {
      res.status(404).json({ message: 'No categories found'});
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // TODO: find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // TODO: create a new category
});

router.put('/:id', (req, res) => {
  // TODO: update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // TODO: delete a category by its `id` value
});

module.exports = router;
