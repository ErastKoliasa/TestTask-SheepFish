import { useState } from "react";
import DeleteButton from "../Button/DeleteButton";
import styles from './ProductsList.module.css';

function ProductList({ filteredProducts, handleDelete }) {
    const [sortType, setSortType] = useState('id');

    filteredProducts.sort((a, b) => {
        if (a[sortType] < b[sortType]) return -1;
        if (a[sortType] > b[sortType]) return 1;
        return 0;
    });
    
    return (
        <div>
            <table style={styles}>
                <thead>
                    <tr>
                        <th onClick={() => setSortType('id')}>ID</th>
                        <th onClick={() => setSortType('title')}>Title</th>
                        <th onClick={() => setSortType('description')}>Description</th>
                        <th onClick={() => setSortType('price')}>Price</th>
                        <th onClick={() => setSortType('photo')}>Photo</th>
                        <th onClick={() => setSortType('rating')}>Rating</th>
                        <th onClick={() => setSortType('stock')}>Stock</th>
                        <th onClick={() => setSortType('category')}>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.id || "-"}</td>
                            <td>{product.title || "-"}</td>
                            <td style={{margin: "30px", }}>{product.description || "-"}</td>
                            <td>{product.price || "-"}</td>
                            <td>
                                {product.images ? <img src={product.images[0]} style={{width: "120px"}} alt={product.title} /> : '-'}
                            </td>
                            <td>{product.rating || "-"}</td>
                            <td>{product.stock || "-"}</td>
                            <td>{product.category || "-"}</td>
                            <DeleteButton product={product} handleDelete={handleDelete}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;