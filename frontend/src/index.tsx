import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import './index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as serviceWorker from './serviceWorker';
import { ACCESS_TOKEN, TOKEN_TYPE } from './helpers/constants';
import App from './containers/App';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

// Add a request interceptor
axios.interceptors.request.use((config) => {
    (config.headers as { Authorization: string }).Authorization = `${TOKEN_TYPE} ${
        localStorage.getItem(ACCESS_TOKEN) ?? ''
    }`;
    return config;
});

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
