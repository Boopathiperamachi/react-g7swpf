import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Table from './Table';
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
    <Table />
  </StyledEngineProvider>,
  document.querySelector('#root')
);
