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

let sitetheme = darkTheme;
class Fotter extends React.Component {
  componentDidMount() {
    if (this.props.isDarkTheme) {
      sitetheme = darkTheme;
    } else {
      sitetheme = ligthTheme;
    }
  }

  render() {
    {
      if (this.props.isDarkTheme) {
        sitetheme = darkTheme;
      } else {
        sitetheme = ligthTheme;
      }
    }
    return (
      <Box theme={sitetheme} component='div' sx={{ textAlign: 'center' }}>
        <Typography
          fontSize='large'
          sx={{ color: sitetheme.palette.primary.color }}
        >
          Contact Info and Portfolio
        </Typography>
        <Box theme={sitetheme}>
          <Link key={1} href='https://t.me/asa_dad' target='_blank'>
            <TelegramIcon
              fontSize='large'
              sx={{ color: sitetheme.palette.primary.color }}
            />
          </Link>
          <Link
            key={2}
            href='https://www.linkedin.com/in/andriy-dubovich-14507821a/'
            target='_blank'
          >
            <LinkedInIcon
              fontSize='large'
              sx={{ color: sitetheme.palette.primary.color }}
            />
          </Link>
          <Link
            key={3}
            href='https://github.com/AndriyDubovichWork'
            target='_blank'
          >
            <GitHubIcon
              fontSize='large'
              sx={{ color: sitetheme.palette.primary.color }}
            />
          </Link>
          <Link
            key={4}
            href='https://drive.google.com/file/d/1T8-FCz55R5X94OAoz4E2Qjuau2HyQm7B/view?usp=sharing'
            target='_blank'
          >
            <ContactPageIcon
              fontSize='large'
              sx={{ color: sitetheme.palette.primary.color }}
            />
          </Link>
          <Link
            sx={{ cursor: 'pointer' }}
            key={5}
            href='https://mail.google.com/mail/u/1/#inbox?compose=new'
            target='_blank'
            onClick={() => {
              this.setisCopied(true);
              setTimeout(() => {
                navigator.clipboard.writeText('andriydubovichwork@gmail.com');
                this.setisCopied(false);
              }, 2000);
            }}
          >
            {!this.isCopied ? (
              <EmailIcon
                fontSize='large'
                sx={{ color: sitetheme.palette.primary.color }}
              />
            ) : (
              <MarkEmailReadIcon
                fontSize='large'
                sx={{ color: sitetheme.palette.primary.color }}
              />
            )}
          </Link>
        </Box>
      </Box>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    isDarkTheme: state.main.isDarkTheme,
  };
};

export default connect(MapStateToProps, {})(Fotter);
