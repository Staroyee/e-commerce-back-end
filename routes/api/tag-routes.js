const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // Find all tags
  try {
    const tags = await Tag.findAll({ include: [{
      model: Product,
      through: ProductTag
    }]
    });
    if(!tags) {
      res.status(404).json({ message: 'No tags found'});
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Find a single tag by its `id`
  try {
    const tags = await Tag.findByPk(req.params.id, { include: [{
      model: Product,
      through: ProductTag,
    }]
    });
    if(!tags) {
      res.status(404).json({ message: 'No tags found'});
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // Create a new tag
  try {
    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if(!tag[0]) {
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json({ message: 'Successfully updated tag' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // Delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(!tag) {
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json({ message: `Tag ${req.params.id} deleted!`});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
