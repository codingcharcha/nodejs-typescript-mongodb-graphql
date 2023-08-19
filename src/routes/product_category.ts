import express, { Router } from 'express'
import { createProductCategory, deleteProductCategory, getProductCategory, listProductCategory, updateProductCategory } from '../controllers/product_category.controller';

const routes:Router = express.Router();

// Create Product Category Route
routes.post('/',createProductCategory);
// Get Product Category Route
routes.get('/:product_category_id', getProductCategory);
// List Product Category Route
routes.get('/', listProductCategory);
// Update Product Category Route
routes.put('/:product_category_id',updateProductCategory);
// Delete Product Category Route
routes.delete('/:product_category_id',deleteProductCategory);

export default routes;



