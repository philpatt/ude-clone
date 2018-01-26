import React, { Component } from 'react';



const Promo = (props) => {

	if(props.promo.show){
		return(
			<div>
				{ props.promo.message }
			</div>
		)
	} else {
		return null
	}
	
}
const Categories = (props) => {
	return(
		<div>Categories</div>	
	)

}
const SearchBar = (props) => {
	return(
		<div>SearchBar</div>
	)	

}
const PopLink = (props) => {
	return(
		<div>PopLink</div>
	)
}
const ShoppingCart = (props) => {
	return(
		<div>ShoppingCart</div>
		
	)
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
			<div>
				<Promo promo={ this.state.promo } />
				<div className='Logo'></div>
				<Categories />
				<SearchBar />
				<PopLink />
				<ShoppingCart />
				<button className='Btn'>Login</button>
				<button className='Btn'>Signup</button>
			</div>
		)	
	}
}


export default Nav