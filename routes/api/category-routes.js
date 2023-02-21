const router = require('express').Router();
const { Product, Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { //FIXME: call working, product failing
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: {model: Product },
  });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { //TODO: WORKING
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: {model: Product}
      });

      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  // create a new category
  // TODO: 
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // TODO:
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // TODO:
});

module.exports = router;
