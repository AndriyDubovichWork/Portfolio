import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { darkTheme, ligthTheme } from '../../styles';
import { SetAge } from '../../Redux/MainPageReducer';
import { ThemeProvider } from '@emotion/react';

import BodyMainInfoImg from './BodyMainInfoImg';
import WorkExamples from './WorkExamples';

let sitetheme = darkTheme;

const Body = (props) => {
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
      <BodyMainInfoImg
        isLookingForjob={isLookingForjob}
        sitetheme={sitetheme}
        MyAge={props.MyAge}
      />
      <WorkExamples itemData={props.itemData} theme={sitetheme} />
    </ThemeProvider>
  );
};
const MapStateToProps = (state) => {
  return {
    MyAge: state.main.MyAge,
    isDarkTheme: state.main.isDarkTheme,
    itemData: state.main.itemData,
  };
};

export default connect(MapStateToProps, { SetAge })(Body);
