import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import NoticiasProvider from './context/NoticiasProvider';

function App() {
  console.log(window)

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1'>
            Buscador de noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"

        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
      <ListadoNoticias />
    </NoticiasProvider>
  )
}

export default App