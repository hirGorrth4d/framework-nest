import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {MongooseModule} from '@nestjs/mongoose'
import { ProductSchema, ProductClass } from './schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: ProductClass.name, schema: ProductSchema}
  ])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
