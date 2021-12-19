import { Container } from '@mui/material';
import store from './Redux/ReduxStore';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Fotter from './Components/Fotter/Fotter';

function App() {
  return (
    <>
      {/* <Navigation store={store} /> */}

      <Container>
        <Header store={store} />

        <Body store={store} />
        <Fotter store={store} />
      </Container>
    </>
  );
}

export default App;
