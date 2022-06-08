import { BrowserRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Menubar from './Components/Menubar';
import AppRouter from './Routes/index'

function App() {
  return (
  <BrowserRouter>
  <Container>
    <Menubar/>
    <AppRouter/>

  </Container>
  </BrowserRouter>
  );
}

export default App;
