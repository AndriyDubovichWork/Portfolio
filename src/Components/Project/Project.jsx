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
import ShowTextOnHover from '../../helpers/ShowTextOnHover';
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
        sx={{ mt: 10 }}
      >
        <Typography
          variant='h2'
          sx={{
            color: sitetheme.palette.primary.color,
            fontSize: '300%',
          }}
        >
          <b>{project.title}</b>
        </Typography>
        <ImageListItem key={'img'}>
          <img
            style={{ height: '600px', margin: 'auto' }}
            src={project.img}
            loading='lazy'
          />
          <ImageListItemBar
            title={''}
            sx={{ color: '#000' }}
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position='top'
            actionIcon={
              <IconButton sx={{ color: 'white', gap: 2 }} aria-label={'1'}>
                <ShowTextOnHover Url={project.github} ShownText='repository'>
                  <GitHubIcon sx={{ color: '#fff', fontSize: 40 }} />
                </ShowTextOnHover>
                <ShowTextOnHover Url={project.website} ShownText='website'>
                  <WebIcon sx={{ color: '#fff', fontSize: 40 }} />
                </ShowTextOnHover>
              </IconButton>
            }
            actionPosition='right'
          />
        </ImageListItem>

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
              <span key={technologies[0]}>
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
