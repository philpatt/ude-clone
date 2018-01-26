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
const Categories = (props) => {
	return(
		<div className="categories">Categories</div>
	)

}
const SearchBar = (props) => {
	return(
		<div className="searchbar" >
			<input className="searchbar-bar" type="text" size="40" />
		</div>
	)

}
const PopLink = (props) => {
	return(
		<div className="poplink">PopLink</div>
	)
}
const ShoppingCart = (props) => {
	return(
		<div className="shoppingcart">
			ShoppingCart
		</div>

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
			<div >
				<Promo  promo={ this.state.promo } />
				<div className = "Nav">
					<div className="row">

							<div className='logo'></div>


							<Categories  />
							<SearchBar />


							<PopLink  />
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
