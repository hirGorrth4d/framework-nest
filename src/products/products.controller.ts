import { Controller, Get, Post, Put, Delete, Res , HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {

    }
    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO)
        res.status(HttpStatus.OK).json({
            message: 'received',
            product: product
        })
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products: products
        })
    }
    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Producto no encontrado')
        return res.status(HttpStatus.OK).json(product)
    }
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID)
        if (!productDeleted) throw new NotFoundException('Producto no encontrado') 
        return res.status(HttpStatus.OK).json({
            message: ' Product borrado',
            productDeleted
        })
    }
    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
        const updateProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updateProduct) throw new NotFoundException('Producto no encontrado') 
        return res.status(HttpStatus.OK).json({
            message: 'Product actualizado',
            updateProduct
        })
    }
}
