
import React, { Component } from 'react';
import './billboard.css';


const Top = () => {
	return (
		<div className='billboard'>
			<div className='row top'>
					<h2>10 Days of Learning</h2>
					<p>Personal Growth course are on sale for $11.99 each until 1/26</p>
					<span>
						<input type='search' placeholder="What do you want to learn?" />
						<button className="btn_search iconify" />
					</span>
			</div>
		</div> 
	)
}
const Bottom = () => {
	return (
		<div className='row bottom'>
				<div className='col'>
					<h2>65,000 online courses</h2>
					<p>Explore a variety of fresh topics</p>

				</div>				
				<div className='col'>
					<h2>Expert instruction</h2>
					<p>Explore a variety of fresh topics</p>
				</div>
				<div className='col'>
					<h2>Lifetime access</h2>
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