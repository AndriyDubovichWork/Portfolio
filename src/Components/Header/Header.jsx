import React from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  FormControlLabel,
} from '@mui/material';
import { darkTheme, ligthTheme } from '../../styles';
import MaterialUISwitch from '../../helpers/MaterialUISwitch';
import HideOnScroll from '../../helpers/HideOnScroll';
import { connect } from 'react-redux';
import { SetTheme } from '../../Redux/MainPageReducer';
let sitetheme = darkTheme;
let MaterialUISwitchlabel = 'hacker';
class Header extends React.Component {
  componentDidMount() {
    if (!this.props.isDarkTheme) {
      sitetheme = darkTheme;
      MaterialUISwitchlabel = 'hacker';
    } else {
      sitetheme = ligthTheme;
      MaterialUISwitchlabel = 'user';
    }
  }
  componentDidUpdate() {
    if (!this.props.isDarkTheme) {
      sitetheme = darkTheme;
      MaterialUISwitchlabel = 'hacker';
    } else {
      sitetheme = ligthTheme;
      MaterialUISwitchlabel = 'user';
    }
  }

  ChangeThemeColorHandler(event) {
    this.props.SetTheme(event.target.checked);
  }
  render() {
    return (
      <HideOnScroll {...this.props}>
        <AppBar theme={sitetheme} position='static'>
          <Toolbar>
            <Grid
              container
              spacing={0}
              justifyContent='center'
              style={{ minHeight: '1vh' }}
            >
              <Grid item xs={4}>
                <Typography
                  variant='h6'
                  component='span'
                  sx={{
                    fontFamily: 'Bakbak One',
                    fontSize: 'h5.fontSize',
                  }}
                >
                  Andriy Dubovich Portfolio
                </Typography>
              </Grid>
            </Grid>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  checked={this.props.isDarkTheme}
                  sx={{ m: 1 }}
                  onChange={this.ChangeThemeColorHandler.bind(this)}
                />
              }
              // label={props.themeInfo}
              label={MaterialUISwitchlabel}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    isDarkTheme: state.main.isDarkTheme,
  };
};

export default connect(MapStateToProps, { SetTheme })(Header);
