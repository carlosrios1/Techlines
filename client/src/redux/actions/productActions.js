import { setProducts, setLoading, setError, setPagination } from "../slices/product";
import axios from "axios";

//Curried Function
export const getProducts = (page, favouriteToggle) => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await axios.get('api/productos');
        const { products, pagination } = data;
        dispatch(setProducts(products));
        dispatch(setPagination(pagination));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                    ? error.message
                    : 'Ocurrió un error esperado. Por favor, inténtelo de nuevo más tarde.'
            )
        );
    }
};
