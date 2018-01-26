
import React, { Component } from 'react';
import './billboard.css';


const Top = () => {
	return (
		<div className='billboard'>
			<div className='row top'>
					<h2>10 Days of Learning</h2>
					<p>Personal Growth course are on sale for $11.99 each until 1/26</p>
					<div class='bill-search'>
						<input type='text' className='bill-searchbar' size='40' placeholder="What do you want to learn?" />
						<img className='search-icon' src='img/search.svg' width='15px' height='15px'  />
					</div>

			</div>
		</div> 
	)
}
const Bottom = () => {
	return (
		<div className='row bottom'>
				<div className='col'>
					<h4>65,000 online courses</h4>
					<p>Explore a variety of fresh topics</p>
				</div>				
				<div className='col'>
					<h4>Expert instruction</h4>
					<p>Explore a variety of fresh topics</p>
				</div>
				<div className='col'>
					<h4>Lifetime access</h4>
					<p>Learn on your schedule</p>
				</div>
		</div>
	)
}
class Billboard extends Component {
	render(){

		return(
			<div>
				<Top />
				<Bottom />
			</div>
		)
	}
}


export default Billboard;