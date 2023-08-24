import { Schema, model, Types} from 'mongoose'
import { IProduct,IProductDocument,IProductCategory,IProductCategoryDocument, IProductModel, IProductCategoryModel } from './product.model'

const ProductCategorySchema = new Schema({
    product_category_name:{
        type: String,
        required: true
    },
    parent_category_id:{
        type: Types.ObjectId,
        required:false
    },
    is_active:{
        type: Boolean,
        required: true,
        default: true
    }
})

const ProductSchema = new Schema({
    product_name:{
        type: String,
        required: true
    },
    product_category_id:{
        type: Types.ObjectId,
        required: true
    },
    product_price:{
        type: Number,
        required: true
    },
    product_code:{
        type: String,
        required: true
    },
    product_image:{
        type: String,
        required: false
    }


});

ProductSchema.statics.buildProduct=(product: IProduct): IProductDocument=>{
    return new Product(product)
}

ProductSchema.statics.listProducts=async(): Promise<IProductDocument[]>=>{
    return await Product.find();
}
ProductSchema.statics.getProduct=async(product_id: Types.ObjectId): Promise<IProductDocument | null>=>{
    return await Product.findById(product_id)
}

ProductSchema.statics.updateProduct=async(product_id: Types.ObjectId, product: IProduct): Promise<IProductDocument | null>=>{
    return await Product.findByIdAndUpdate(product_id, product);
}

ProductSchema.statics.deleteProduct=async(product_id: Types.ObjectId): Promise<IProductDocument| null>=>{
    return await Product.findByIdAndRemove(product_id);
}

const Product = model<IProductDocument, IProductModel>('products',ProductSchema);


ProductCategorySchema.statics.buildProductCategory=(product_category: IProductCategory): IProductCategoryDocument =>{
    return new ProductCategory(product_category);
}

ProductCategorySchema.statics.listProductCategory=async(): Promise<IProductCategoryDocument[]>=>{
    return await ProductCategory.find();
}

ProductCategorySchema.statics.getPorudctCategory=async(product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null >=>{
    return await ProductCategory.findById(product_category_id);
}

ProductCategorySchema.statics.updateProductCategory= async(product_category_id: Types.ObjectId, product_category: IProductCategory): Promise<IProductCategoryDocument | null> =>{
    return await ProductCategory.findByIdAndUpdate(product_category_id,product_category);
}

ProductCategorySchema.statics.deleteProductCategory = async(product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null> =>{
    return await ProductCategory.findByIdAndRemove(product_category_id);
}

const ProductCategory = model<IProductCategoryDocument, IProductCategoryModel>('product_categories',ProductCategorySchema);

export {
    Product,
    ProductCategory
}