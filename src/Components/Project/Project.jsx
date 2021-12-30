import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { darkTheme, ligthTheme } from '../../styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Container,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
let sitetheme = darkTheme;
const Project = (props) => {
  const params = useParams();
  if (props.isDarkTheme) {
    sitetheme = darkTheme;
  } else {
    sitetheme = ligthTheme;
  }
  useEffect(() => {
    if (!props.isDarkTheme) {
      sitetheme = darkTheme;
    } else {
      sitetheme = ligthTheme;
    }
  });

  const project = props.itemData[params.projectId - 1];
  return (
    <ThemeProvider theme={sitetheme}>
      <Grid
        theme={sitetheme}
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ mt: 3 }}
      >
        <ImageListItem key={'img'}>
          <img style={{ height: '600px', width: '90vw' }} src={project.img} />
          <ImageListItemBar
            title={''}
            sx={{ color: '#000' }}
            position='top'
            actionIcon={
              <IconButton sx={{ color: 'white', gap: 2 }} aria-label={'1'}>
                <a target='_blank' href={project.github}>
                  <GitHubIcon sx={{ color: '#fff', fontSize: 40 }} />
                </a>
                <a target='_blank' href={project.website}>
                  <WebIcon sx={{ color: '#fff', fontSize: 40 }} />
                </a>
              </IconButton>
            }
            actionPosition='right'
          />
        </ImageListItem>
        <Typography
          variant='h3'
          sx={{
            color: sitetheme.palette.primary.color,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: sitetheme.palette.primary.color,
          }}
        >
          {project.description}
        </Typography>
        <Typography
          variant='h3'
          sx={{
            color: sitetheme.palette.primary.color,
          }}
        >
          <b>Used Technologies:</b>
        </Typography>
        <Typography
          variant='h5'
          sx={{
            color: sitetheme.palette.primary.color,
          }}
        >
          {project.usedTechnologies.map((technologies) => {
            return (
              <span>
                {'| ' + technologies[0]}:v{technologies[1] + ' |'}
              </span>
            );
          })}
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};
const MapStateToProps = (state) => {
  return {
    isDarkTheme: state.main.isDarkTheme,
    itemData: state.main.itemData,
  };
};

export default compose(connect(MapStateToProps, {}))(Project);
