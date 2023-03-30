export const addProduct = product => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    };
};

export const deleteProduct = id => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    };
};

export const updateProduct = product => {
    return {
        type: "UPDATE_PRODUCT",
        payload: product
    };
};

export const setProducts = products => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    };
};


