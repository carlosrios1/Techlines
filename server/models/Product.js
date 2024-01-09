import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
    },
    { timestamps: true }
);
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

    reviews: [reviewSchema],

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