import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

export type ProductDocument = ProductClass & Document

@Schema({timestamps: true})
export class ProductClass {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    price: number;

}

export const ProductSchema = SchemaFactory.createForClass(ProductClass);
// export const ProductSchema = new Schema({
//     name: String,
//     description: String,
//     price: Number,
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });