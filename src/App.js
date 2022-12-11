import React from 'react'

import {
  Navbar, Header,
  Marketing, Boost,
  Solutions, Testemonials,
  Latest, Join, Footer,
} from './components/index';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Marketing />
      <Boost />
      <Solutions />
      <Testemonials />
      <Latest />
      <Join />
      <Footer />
    </React.Fragment>
  )
}

export default App