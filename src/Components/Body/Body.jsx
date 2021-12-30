import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { darkTheme, ligthTheme } from '../../styles';
import { SetAge } from '../../Redux/MainPageReducer';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import BodyMainInfoImg from './BodyMainInfoImg';
import WorkExamples from './WorkExamples';
import Project from '../Project/Project';

let sitetheme = darkTheme;

const Body = React.memo((props) => {
  const isLookingForjob = useState(true);
  useEffect(() => {
    props.SetAge();
    if (!props.isDarkTheme) {
      sitetheme = darkTheme;
    } else {
      sitetheme = ligthTheme;
    }
  });

  return (
    <ThemeProvider theme={sitetheme}>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <BodyMainInfoImg
                isLookingForjob={isLookingForjob}
                theme={sitetheme}
                MyAge={props.MyAge}
              />
              <WorkExamples
                itemData={props.itemData}
                theme={sitetheme}
                isDarkTheme={props.isDarkTheme}
              />
            </>
          }
        />
        <Route path='/project/:projectId' element={<Project />} />
      </Routes>
    </ThemeProvider>
  );
});
const MapStateToProps = (state) => {
  return {
    MyAge: state.main.MyAge,
    isDarkTheme: state.main.isDarkTheme,
    itemData: state.main.itemData,
  };
};

export default connect(MapStateToProps, { SetAge })(Body);
