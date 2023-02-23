const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => { 
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: {model: Product}
  });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { 
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: {model: Product}
      });

      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
  
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const selectedTag = req.params.id;
    const updatedName = req.body.tag_name;
    const updateById = await Tag.update(
      { tag_name: updatedName },
      { where: { id: selectedTag}}
    );
  
    updateById
    res.status(200).json({ message: "Tag has been successfully updated" });
    } catch (err) {
      res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const selectedId = req.params.id;
    const deleteById = await Tag.destroy({
      where: {
        id: selectedId,
      },
    });

    const chosenId = req.params.id;
    
    const deleteProductTag = await ProductTag.destroy({
      where: {
        id: chosenId,
      },
    });

    if (!deleteById) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    deleteById;
    deleteProductTag;
    res.status(200).json({ message: "Tag successfully deleted" });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
