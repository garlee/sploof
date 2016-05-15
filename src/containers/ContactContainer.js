import React, { Component, Proptypes } from 'react';

export default class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (form) {

  }

  render () {
    return (
      <div>
        <div className='AppBody'>
          <div className='contactMessage'>
            Sploof.com Contact page
          </div>
          
        </div>
      </div>
    )
  }
}