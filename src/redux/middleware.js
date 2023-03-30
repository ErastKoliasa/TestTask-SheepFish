import { productsAPI } from "../api/productsAPI";
import { setProducts } from "./actions";

export const getProducts = () => {
    return async (dispatch) => {
        const data = await productsAPI.getProducts();
        dispatch(setProducts(data));
    }
}