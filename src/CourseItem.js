import React, { Component } from 'react';
import './Course.css';

class CourseItem extends Component {

	// componentWillReceiveProps(){
		// console.log(this.props.courseContent);
	// }
	render(){

		return(
			<div className="course-item">
				<div className="course-item--image">
					<img src="https://www.fillmurray.com/300/200" alt="A course of course!"/>
				</div>
				<div className="course-item--text">
					<h3 className="course-item--text__title">How to Not Give an Eff'...</h3>
					<h5 className="course-item--text__author">Bill Murray</h5>
					<div className="course-item--rating">
						<p className="course-item--rating__avg">4.8<span className="course-item--rating__total">  (714)</span></p>
						{/* <img className="course-item--rating__stars" src="./marketFolder/stars.png" alt="stars" /> */}
					</div>
					<div className="course-item--price">
						<p className="course-item--price__old"><del>$199.99</del><span className="course-item--price__new"> $11.99</span></p>
					</div>
				</div>
			</div>
		)
	}
}

export default CourseItem;