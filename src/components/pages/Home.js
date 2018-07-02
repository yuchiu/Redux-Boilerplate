import React from 'react'
import {TextChanger} from '../containers/'
import {Header, NavBar} from '../presentations/'

class Home extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <TextChanger/>
      </div>
    )
  }
}

export default Home;
