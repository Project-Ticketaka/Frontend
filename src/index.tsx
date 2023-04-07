import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";

const theme = createTheme({
  typography: {
    fontFamily: "'Nanum Square Round'"
  },
  palette: {
    
    primary: {
      // Purple and green play nicely together.
      main: '#FF7F8F',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#5A7A8D',
    },
    info: {
      main: '#333'
    },
    error:{
      main: '#ffffff',
    },
    warning:{
      main: '#B8B8B8',
    },
  },
});


const queryOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
};

const queryClient = new QueryClient(queryOptions);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools /> */}
            <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
