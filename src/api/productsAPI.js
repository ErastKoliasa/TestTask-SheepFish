import axios from "axios"

export const productsAPI = {
    getProducts() {
        return axios.get('https://dummyjson.com/products')
            .then(response => response.data.products);
    },
}