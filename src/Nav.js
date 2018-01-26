import React, { Component } from 'react';
import "./nav.css";



const Promo = (props) => {

	if(props.promo.show){
		return(
			<div className="promo">
				{ props.promo.message }
				<div class="promo-close">X</div>
			</div>
		)
	} else {
		return null
	}

}

const SearchBar = (props) => {
	return(
		<div className="searchbar" >
			<input className="searchbar-bar" type="text"  />
			<img className="searchbar-icon" src="../img/search.svg" width="15px" height="15px"/>
		</div>
	)

}


class Categories extends Component {
	constructor(props) {
		super(props);
		this.state={
			show:false
		}
	}

	showCategories = (e) => {
		this.setState({show:true});
	}

	hideCategories = (e) => {
		this.setState({show:false});
	}
	render () {

		let popup = (<div className="categories-popup">
			<div>Web Development</div>
			<div>Mobile Apps</div>
			<div>Programming Languages</div>
			<div>Game Development</div>
			<div>Databases</div>
			<div>Photography</div>
			<div>Health & Fitness</div>
			<div>Teacher Training</div>
			<div>Music</div>
			<div>Academics</div>
			<div>Language</div>
			<div>Test Prep</div>
		</div>);

		return (
			<div className="categories" onMouseOver={this.showCategories} onMouseDown={this.showCategories} onMouseLeave={this.hideCategories} >
				Categories
				{(this.state.show && popup)}
			</div>
		)
	}
}

class PopLink extends Component {
	constructor(props) {
		super(props);
		this.state={
			show:false
		}
	}

	showCategories = (e) => {
		this.setState({show:true});
	}

	hideCategories = (e) => {
		this.setState({show:false});
	}
	render() {

		let popup1 = (<div className="poplink-popup">{this.props.info}</div>);

		return(

			<div>
				<div className="poplink" onMouseOver={this.showCategories} onMouseLeave={this.hideCategories}>{this.props.label}{(this.state.show && popup1)}</div>
			</div>
		)
	}
}

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state={
			show:false
		}
	}

	showCategories = (e) => {
		this.setState({show:true});
	}

	hideCategories = (e) => {
		this.setState({show:false});
	}

	render() {

		let popup1 = (<div className="shoppingcart-popup">Empty cart<br/><a href="#">Keep Shopping</a></div>);

		return(
			<div>
				<div className="shoppingcart" onMouseOver={this.showCategories} onMouseLeave={this.hideCategories}>Cart{(this.state.show && popup1)}</div>
			</div>
		)
	}
}


class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			promo: {
				show: true,
				message:'This is a Promo!'
			}

		}
	}
	render(){
		return(
			<div >
				<Promo  promo={ this.state.promo } />
				<div className = "Nav">
					<div className="row">

							<div className='logo'><img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" width="100%"/></div>


							<Categories  />
							<SearchBar />


							<PopLink label="Udemy for Business" info="asjkdfh kalsdf klajhsdf kasjf kajhsf kasjfhksajh klf"/>
							<PopLink label="Become an Instructor" info="jashfdlka sdfhj askldf aksh kalsjhf askjhf aksjhdf kajshdf aksjfh "/>
							<ShoppingCart  />

							<div className="btn-divs">
								<button className='Btn btn-login'>Log In</button>
								<button className='Btn btn-signup'>Sign Up</button>
							</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Nav
