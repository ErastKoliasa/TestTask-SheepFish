import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton({ product, handleDelete }) {
    return (
        <Button onClick={() => handleDelete(product.id)} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
    )
}

export default DeleteButton;