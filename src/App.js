import React, { Component } from 'react';

import { Container } from '@mui/material';
import store from './Redux/ReduxStore';

import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Fotter from './Components/Fotter/Fotter';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

function App() {
  return (
    <>
      {/* <Navigation store={store} /> */}

      <Container>
        <Header />

        <Body />
        <Fotter />
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({});

let AppContainer = compose(connect(mapStateToProps, {}))(App);

let MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};
export default MainApp;
