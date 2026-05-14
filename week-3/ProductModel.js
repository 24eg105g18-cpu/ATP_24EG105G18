import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    productId: {
      type: String,
      required: [true, 'productId is required']
    },
    productName: {
      type: String,
      required: [true, 'Product name is required']
    },
    price: {
      type: Number,
      required: [true, 'price of the product is required'],
      min: [10000, 'product price should be at least 10000'],
      max: [50000, 'price should not exceed 50000']
    },
    brand: {
      type: String,
      required: [true, 'brand name is required']
    }
  },
  {
    timestamps: true
  }
);

export const ProductModel = model('Product', productSchema);

