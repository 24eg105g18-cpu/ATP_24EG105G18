// Week 3 productAPI.js
// Define Express routes for product operations in a modular router.
import exp from 'express';
import { ProductModel } from './ProductModel.js';

export const ProductApp = exp.Router();

ProductApp.post('/products', async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    const result = await newProduct.save();
    return res.status(201).json({ message: 'Product created', payload: result });
  } catch (error) {
    return res.status(400).json({ message: 'Failed to create product', error: error.message });
  }
});

ProductApp.get('/products', async (req, res) => {
  try {
    const products = await ProductModel.find();
    return res.status(200).json({ message: 'Products list', payload: products });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch products', error: error.message });
  }
});

ProductApp.get('/products/:id', async (req, res) => {
  try {
    const pid = req.params.id;
    const product = await ProductModel.findById(pid);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product details', payload: product });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch the product', error: error.message });
  }
});

ProductApp.put('/products/:id', async (req, res) => {
  try {
    const pid = req.params.id;
    const modifiedProduct = req.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      pid,
      { $set: { ...modifiedProduct } },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product modified', payload: updatedProduct });
  } catch (error) {
    return res.status(400).json({ message: 'Failed to update product', error: error.message });
  }
});

ProductApp.delete('/products/:id', async (req, res) => {
  try {
    const pid = req.params.id;
    const deletedProduct = await ProductModel.findByIdAndDelete(pid);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product deleted', payload: deletedProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to delete product', error: error.message });
  }
});

