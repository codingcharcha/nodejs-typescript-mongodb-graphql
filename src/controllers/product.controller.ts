import express, {Request, Response} from 'express';
import { createProductService, listProductsService, getProductService, updateProductService, deleteProductService} from '../services/product.service';
import { IProduct, IProductDocument } from '../models/product.model';
import { Types } from 'mongoose'
export async function createProduct(req:Request, res:Response){
    try{
       const input_product: IProduct = req.body.product
       const saved_product = await createProductService(input_product);
       return res.status(201).json({
        message:"Product Created Successfully",
        product: saved_product
       }) 
       
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product:null
        })
    }
}

export async function listProduct(req:Request, res:Response){
    try{
        const products : IProductDocument[] = await listProductsService()
        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            products:[]
        })
    }
}

export async function getProduct(req:Request, res:Response){
    try{
        const product_id: string  = req.params.product_id;
        const product: IProduct | null = await getProductService(new Types.ObjectId(product_id));
        return res.status(200).json({
            message:"Product fetched successfully",
            product
        })
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product:null
        })
    }
}

export async function updateProduct(req:Request, res:Response){
    try{
        const product_id: string = req.params.product_id;
        const input_product : IProduct = req.body.product;
        const updated_product: IProductDocument | null = await updateProductService(new Types.ObjectId(product_id),input_product) 
        return res.status(200).json({
            message:"Product Update Successfully",
            product:updated_product
        })
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product:null
        })
    }
}

export async function deleteProduct(req:Request, res:Response){
    try{
        const product_id: string = req.params.product_id;
        const deleted_product: IProductDocument | null = await deleteProductService(new Types.ObjectId(product_id));
        return res.status(200).json({
            message: "Product category deleted successfully",
            product: deleted_product
        })    
    }catch(err:any){
        return res.status(500).json({
            message:err.message,
            product:null
        })
    }
}

