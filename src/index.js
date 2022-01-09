import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './utils/store';
import {ThemeProvider} from '@mui/material/styles';
import theme from './utils/theme/theme';

ReactDom.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
