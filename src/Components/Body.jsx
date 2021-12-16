import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SetAge } from './../Redux/MainPageReducer';

class Body extends React.Component {
  componentDidMount() {
    this.props.SetAge();
  }
  render() {
    return (
      <Typography
        sx={{ mt: 3, fontFamily: 'Poppins', fontSize: '20px' }}
        component='div'
      >
        Hello my name is Andriy Dubovich and I'm {this.props.MyAge} .I'm from
        Ukraine{' '}
        <img
          alt=''
          style={{ height: '15px' }}
          src='https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Ukraine.svg'
        />
      </Typography>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    MyAge: state.main.MyAge,
  };
};

export default connect(MapStateToProps, { SetAge })(Body);
