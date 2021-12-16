import { Container } from '@mui/material';
import Header from './Components/Header';
import Body from './Components/Body';
import store from './Redux/ReduxStore';

function App() {
  return (
    <Container>
      <Header store={store} />

      <Body store={store} />
    </Container>
  );
}

export default App;
