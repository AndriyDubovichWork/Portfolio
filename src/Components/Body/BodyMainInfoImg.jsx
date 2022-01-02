import { Card, CardMedia, Checkbox, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SetAge } from '../../Redux/MainPageReducer';
import style from './Body.module.css';
import ShowTextOnHover from './../../helpers/ShowTextOnHover';
const BodyMainInfoImg = (props) => {
  return (
    <Typography
      theme={props.theme}
      sx={{ mt: 10 }}
      className={style.MainInfo}
      component='div'
    >
      <Typography
        variant='h3'
        component='section'
        style={{
          fontFamily: 'Bakbak One',
        }}
      >
        Hello my name is Andriy Dubovich <br /> I'm React Developer
        <br />
        I'm from Ukraine{' '}
        <ShowTextOnHover
          ShownText='more info'
          Url='https://en.wikipedia.org/wiki/Ukraine'
        >
          <img
            alt=''
            style={{ height: '50px' }}
            src='https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Ukraine.svg'
          />
        </ShowTextOnHover>
        Am I Looking for job now?
        <ShowTextOnHover ShownText={props.isLookingForjob[0] ? 'yes' : 'mo'}>
          <Checkbox
            checked={props.isLookingForjob[0]}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 50, color: '#fff' } }}
          />
        </ShowTextOnHover>
      </Typography>
    </Typography>
  );
};

export default BodyMainInfoImg;