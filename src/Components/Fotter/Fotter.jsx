import React, { useEffect, useState } from 'react';
import { Link, Box, Typography } from '@mui/material';
import { darkTheme, ligthTheme } from '../../styles';
import { Alert, AlertTitle } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { connect } from 'react-redux';
import style from './Fotter.module.css';
import ShowTextOnHover from './../../helpers/ShowTextOnHover';

let sitetheme = darkTheme;
const Fotter = (props) => {
  const [isCopied, setisCopied] = useState(false);

  useEffect(() => {
    if (props.isDarkTheme) {
      sitetheme = darkTheme;
    } else {
      sitetheme = ligthTheme;
    }
  }, []);

  if (props.isDarkTheme) {
    sitetheme = darkTheme;
  } else {
    sitetheme = ligthTheme;
  }

  return (
    <Box
      sx={{ mt: 3 }}
      className={style.Fotter}
      theme={sitetheme}
      component='div'
      // sx={{ textAlign: 'center' }}
    >
      <Typography
        fontSize='large'
        sx={{ color: sitetheme.palette.primary.color }}
      >
        Contact Info and Portfolio
      </Typography>
      <Box theme={sitetheme} className={style.wrapper}>
        <ShowTextOnHover ShownText='Telegram' Url='https://t.me/asa_dad'>
          <TelegramIcon
            className={style.fab}
            fontSize='large'
            sx={{ color: sitetheme.palette.primary.color }}
          />
        </ShowTextOnHover>

        <ShowTextOnHover
          ShownText='LinkedIn'
          Url='https://www.linkedin.com/in/andriy-dubovich-14507821a/'
        >
          <LinkedInIcon
            className={style.fab}
            fontSize='large'
            sx={{ color: sitetheme.palette.primary.color }}
          />
        </ShowTextOnHover>

        <ShowTextOnHover
          ShownText='GitHub'
          Url='https://github.com/AndriyDubovichWork'
        >
          <GitHubIcon
            className={style.fab}
            fontSize='large'
            sx={{ color: sitetheme.palette.primary.color }}
          />
        </ShowTextOnHover>

        <div
          className={style.icon}
          sx={{ cursor: 'pointer' }}
          key={5}
          onClick={() => {
            setisCopied(true);
            navigator.clipboard.writeText('andriydubovichwork@gmail.com');
            setTimeout(() => {
              setisCopied(false);
            }, 2000);
          }}
        >
          {!isCopied ? (
            <ShowTextOnHover ShownText='email'>
              <EmailIcon
                className={style.fab}
                fontSize='large'
                sx={{ color: sitetheme.palette.primary.color }}
              />
            </ShowTextOnHover>
          ) : (
            <ShowTextOnHover ShownText='copied'>
              <MarkEmailReadIcon
                className={style.fab}
                fontSize='large'
                sx={{ color: sitetheme.palette.primary.color }}
              />
            </ShowTextOnHover>
          )}
        </div>

        <ShowTextOnHover
          ShownText='Portfolio.pdf'
          Url='https://drive.google.com/file/d/1T8-FCz55R5X94OAoz4E2Qjuau2HyQm7B/view?usp=sharing'
        >
          <ContactPageIcon
            className={style.fab}
            fontSize='large'
            sx={{ color: sitetheme.palette.primary.color }}
          />
        </ShowTextOnHover>
      </Box>
    </Box>
  );
};
const MapStateToProps = (state) => {
  return {
    isDarkTheme: state.main.isDarkTheme,
  };
};

export default connect(MapStateToProps, {})(Fotter);
