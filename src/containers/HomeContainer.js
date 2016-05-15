import React, { Component, Proptypes } from 'react';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className='AppBody'>
          <div className='homeBody'>
            <div className='homeMessage'>
              Sploof.com Home page
            </div>
            <div className="homeSplash">

            </div>
          </div>
        </div>
      </div>
    )
  }
}