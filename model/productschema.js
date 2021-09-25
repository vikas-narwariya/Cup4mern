import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const productSchema = mongoose.Schema({
    product_name: String,
    product_detail: String,
    product_quantity: Number,
    product_cost: Number
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');
const product = mongoose.model('product', productSchema);

export default product;
