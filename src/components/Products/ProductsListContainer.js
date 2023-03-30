import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/actions";
import ProductList from "./ProductsList";
import SearchField from "../SearchField/SearchField";
import AddProductForm from "../ProductForm/AddProductForm";
import Title from "../Title/Title";
import { getProducts } from "../../redux/middleware";

function ProductsListContainer() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <AddProductForm />
            <Title />
            <SearchField searchQuery={searchQuery} handleSearch={handleSearch} />
            <ProductList filteredProducts={filteredProducts} handleDelete={handleDelete} />
        </div>
    )
}

export default ProductsListContainer;