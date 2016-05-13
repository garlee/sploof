import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as Actions from '../actions/actions.js';

import Banner from '../common/components/TopBanner.js';
import NavBar from '../common/components/NavBar.js';

export default class HomePage extends Component {
  render() {
    const { input, actions, children} = this.props;
    return (

      <div className="mainContainer">
          <div className="mainNav">
            <Banner />
            <NavBar />
          </div>
            <div backgroundImage="http://pngimg.com/upload/smoke_PNG962.png" 
                className="Hero">

            </div>
          <div>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { input, actions });
            })}
          </div>
       </div>
    );
  }
}

HomePage.propTypes = {
  input: PropTypes.string,
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    input: state.input,
    actionState: state.actions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);