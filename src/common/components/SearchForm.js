import React, { Component } from "react";

export default class HomePage extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleSubmit () {
		console.log('this: ', this);
		this.props.actions.gatherData(this.refs.input.value);
	}


  render() {
    return (
	    	<div className="display">
		        <div className="searchBox">
		        	<input className="search-form" 
		        				 type="text"  
		        				 ref="input"/>

		        	<button className="submit"
		         					onClick={(event) => this.handleSubmit()}> Find Songs </button>
		        </div>

		        <div className="song-player">

		        </div>

	       </div>
    );
  }
}
