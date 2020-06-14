
import React, {FC} from 'react';

// Global styles
import './_app.css'

//redux related
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from './redux/store';


// This component is used to initialize each page:
import App from 'next/app';

class MyApp extends App {

  //this is runed on each page load
  static async getInitialProps({Component, ctx}) {

      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      //Anything returned here can be access by the client
      return {pageProps: pageProps};
  }

  render() {
      //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
      const {Component, pageProps} = this.props;

      return (
          <Provider store={store}>
              <Component {...pageProps}/>
          </Provider>
      );
  }

}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
