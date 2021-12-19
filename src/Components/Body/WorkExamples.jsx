import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

const WorkExamples = (props) => {
  return (
    <ImageList
      theme={props.theme}
      gap={10}
      sx={{ width: '90vw', height: 1200 }}
    >
      <ImageListItem key='Subheader' cols={2}>
        <ListSubheader
          component='div'
          sx={{ padding: 0, margin: 0, textAlign: 'center', color: '#000' }}
        >
          <h1>Work Examples</h1>
        </ListSubheader>
      </ImageListItem>
      {props.itemData.map((item) => {
        const cols = 2;
        const rows = 2;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img src={item.img} alt={item.title} loading='lazy' />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              sx={{ color: '#000' }}
              position='top'
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
              actionPosition='right'
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default WorkExamples;
