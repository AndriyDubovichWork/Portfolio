import { Card, CardMedia, Checkbox, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SetAge } from '../../Redux/MainPageReducer';
import style from './Body.module.css';
import ShowTextOnHover from './../../helpers/ShowTextOnHover';
import Typewriter from 'typewriter-effect';

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
          fontFamily: 'Pushster',
        }}
      >
        Hello I'm Andriy Dubovich :{' '}
        <Typography
          sx={{ fontSize: '4rem', fontFamily: 'Dongle', fontWeigth: '800' }}
        >
          <Typewriter
            options={{
              strings: ['React Developer', 'Front-End Programmer'],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        I'm from Ukraine
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
        {/* Am I Looking for job now?
        <ShowTextOnHover ShownText={props.isLookingForjob[0] ? 'yes' : 'mo'}>
          <Checkbox
            checked={props.isLookingForjob[0]}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 50, color: '#fff' } }}
          />
        </ShowTextOnHover> */}
      </Typography>
    </Typography>
  );
};

export default BodyMainInfoImg;
