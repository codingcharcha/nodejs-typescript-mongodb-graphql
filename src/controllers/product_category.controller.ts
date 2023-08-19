import express, {Request, Response} from 'express';
import { createProductCategoryService, listProductCategoryService, getProductCategoryService, updateProductCategoryService, deleteProductCategoryService} from '../services/product.service';
import { IProduct, IProductCategory, IProductCategoryDocument } from '../models/product.model';
import { Types } from 'mongoose'
export async function createProductCategory(req:Request, res:Response){
    try{
       const input_product_category: IProductCategory = req.body.product_category
       const saved_product_category = await createProductCategoryService(input_product_category);
       return res.status(201).json({
        message:"Prodict Category Created Successfully",
        product_category: saved_product_category
       }) 
       
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product_category:null
        })
    }
}

export async function listProductCategory(req:Request, res:Response){
    try{
        const product_categories : IProductCategoryDocument[] = await listProductCategoryService()
        return res.status(200).json({
            message: "Product Categories fetched successfully",
            product_categories
        })
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product_categories:[]
        })
    }
}

export async function getProductCategory(req:Request, res:Response){
    try{
        const product_category_id: string  = req.params.product_category_id;
        const product_category: IProductCategoryDocument | null = await getProductCategoryService(new Types.ObjectId(product_category_id));
        return res.status(200).json({
            message:"Product category fetched successfully",
            product_category
        })
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product_category:null
        })
    }
}

export async function updateProductCategory(req:Request, res:Response){
    try{
        const product_category_id: string = req.params.product_category_id;
        const input_product_category : IProductCategory = req.body.product_category;
        const updated_product_category: IProductCategoryDocument | null = await updateProductCategoryService(new Types.ObjectId(product_category_id),input_product_category) 
        return res.status(200).json({
            message:"Product Category Update Successfully",
            product_category:updated_product_category
        })
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product_category:null
        })
    }
}

export async function deleteProductCategory(req:Request, res:Response){
    try{
        const product_category_id: string = req.params.product_category_id;
        const deleted_product_category: IProductCategoryDocument | null = await deleteProductCategoryService(new Types.ObjectId(product_category_id));
        return res.status(200).json({
            message: "Product category deleted successfully",
            product_category: deleted_product_category
        })    
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product_category:null
        })
    }
}

