import React from 'react'
import {TextChanger} from '../containers/'
import {Header} from '../presentations/'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <TextChanger/>
      </div>
    )
  }
}

export default Home;
