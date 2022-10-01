import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/products.interface';
import { CreateProductDTO } from './dto/products.dto';
import { ProductClass,ProductDocument } from './schemas/products.schema';


@Injectable()
export class ProductsService {

    constructor(@InjectModel(ProductClass.name) private readonly productModel: Model<ProductDocument>){
        
    }

    async getProducts():Promise<ProductDocument[]> {
        const products = await this.productModel.find()
        return  products;
    }

    async getProduct(productID?: string): Promise<ProductDocument>{
        const product  = await this.productModel.findById(productID)
        return product
    }
    async createProduct(createProductDTO: CreateProductDTO): Promise<ProductDocument>{
        const product = new this.productModel(createProductDTO);
        return await product.save()
        
    }
    async deleteProduct(productID: string): Promise<ProductDocument>{
        const deleteProd = await this.productModel.findByIdAndDelete(productID)
        return deleteProd
    }

    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<ProductDocument>{
        const updateProd = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true})
        return updateProd
    }
}
