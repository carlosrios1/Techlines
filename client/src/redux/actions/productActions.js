import { setProducts, setLoading, setError, setPagination, setFavorites, setFavoritesToggle, setProduct } from "../slices/product";
import axios from "axios";

//Curried Function
export const getProducts = (page, favoritesToggle) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const { data } = await axios.get(`/api/productos/${page}/${10}`);
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

export const addToFavorites = (id) => async (dispatch, getState) => {
    const {
        product: { favorites },
    } = getState();

    const newFavorites = [...favorites, id];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    dispatch(setFavorites(newFavorites));
};

export const removeFromFavorites = (id) => async (dispatch, getState) => {
    const {
        product: { favorites },
    } = getState();

    const newFavorites = favorites.filter((favoriteId) => favoriteId !== id);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    dispatch(setFavorites(newFavorites));
};

export const toggleFavorites = (toggle) => async (dispatch, getState) => {
    const {
        product: { favorites, products },
    } = getState();

    if (toggle) {
        const filterProduct = products.filter((product) => favorites.includes(product._id));
        dispatch(setFavoritesToggle(toggle));
        dispatch(setProducts(filterProduct));
    } else {
        dispatch(setFavoritesToggle(false));
        dispatch(getProducts(1));
    }
};

export const getProduct = (id) => async (dispatch) => {
    dispatch(setLoading(true))

    try {
        const { data } = await axios.get(`/api/productos/${id}`)
        dispatch(setProduct(data));
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
}