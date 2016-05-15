import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
	render () {
		return (
			<div>
				<div className="Header">
			  	<div className="header-title">Sploof.com</div>
			    <div className="header-links">
			      <div><Link to="/">Home</Link></div>
			      <div><Link to="/about">About us</Link></div>
			      <div><Link to="/contact">Contact</Link></div>
			      <div><Link to="/shop">Shop</Link></div>
			    </div>
				</div>
			</div>
		)
	}
}