import mongoose from "mongoose";

//Creando un Schema de 'Producto' en mongoose
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    images: {
        type: Array,
        required: true,
        default: [],
    },

    brand: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    reviews: {
        type: Array,
        required: true,
        default: [],
    },

    rating: {
        type: Number,
        required: true,
        default: 0,
    },

    numberOfReviews: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
    },

    productIsNew: {
        type: Boolean,
        required: true,
    },

    stripeId: {
        type: String,
    },
}, {timestamps: true} //Cada vez que coloque algo en la BDD, lo tarera en la fecha y hora exacta.
);

const Product = mongoose.model('Producto', productSchema);

export default Product;