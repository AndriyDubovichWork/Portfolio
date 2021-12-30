import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { darkTheme, ligthTheme } from '../../styles';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

class WorkExamples extends React.Component {
  sitetheme = darkTheme;
  componentDidMount() {
    if (this.props.isDarkTheme) {
      this.sitetheme = darkTheme;
    } else {
      this.sitetheme = ligthTheme;
    }
  }

  render() {
    if (this.props.isDarkTheme) {
      this.sitetheme = darkTheme;
    } else {
      this.sitetheme = ligthTheme;
    }
    return (
      <ImageList gap={10} sx={{ width: '90vw' }}>
        <ImageListItem key='Subheader' cols={2}>
          <ListSubheader
            component='div'
            sx={{
              padding: 0,
              margin: 0,
              textAlign: 'center',
              color: this.sitetheme.palette.primary.color,
              backgroundColor: this.sitetheme.palette.primary.main,
            }}
          >
            <h1>Work Examples</h1>
          </ListSubheader>
        </ImageListItem>
        {this.props.itemData.map((project) => {
          const cols = 2;
          const rows = 2;

          return (
            <ImageListItem key={project.img} cols={cols} rows={rows}>
              <img src={project.img} alt={project.title} loading='lazy' />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={project.title}
                sx={{ color: '#000' }}
                position='top'
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${project.title}`}
                  >
                    <a target='_blank' href={project.github}>
                      <GitHubIcon sx={{ color: '#fff', fontSize: 40 }} />
                    </a>
                    <a target='_blank' href={project.website}>
                      <WebIcon sx={{ color: '#fff', fontSize: 40 }} />
                    </a>
                    <NavLink to={'/project/' + project.id}>
                      <InfoIcon sx={{ color: '#fff', fontSize: 40 }} />
                    </NavLink>
                  </IconButton>
                }
                actionPosition='right'
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }
}

export default WorkExamples;
