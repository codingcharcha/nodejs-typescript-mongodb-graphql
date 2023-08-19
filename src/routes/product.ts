import express, { Router } from 'express'
import { createProduct, listProduct, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller';

const routes:Router = express.Router();

// Create Product Category Route
routes.post('/',createProduct);
// Get Product Category Route
routes.get('/:product_id', getProduct);
// List Product Category Route
routes.get('/', listProduct);
// Update Product Category Route
routes.put('/:product_id',updateProduct);
// Delete Product Category Route
routes.delete('/:product_id',deleteProduct);

export default routes;



