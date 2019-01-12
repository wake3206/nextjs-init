import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

  }


  render() {

    const { Component,store } = this.props

    //console.log('MyApp render-->', query)

    return (
      <Container>
        <Provider store={store}>
          <Component  />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(MyApp)
