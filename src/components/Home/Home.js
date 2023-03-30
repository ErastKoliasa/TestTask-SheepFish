import { Typography, Container } from '@mui/material'

function Home() {
    return (
        <>
            <Container sx={{p: 25, color:"#1976d2"}}>
                <Typography variant="h1" component="h1" >WELCOME!!!</Typography>
            </Container>
        </>
    )
}

export default Home;