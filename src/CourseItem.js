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
					<h3 className="course-item--text__title">The Course</h3>
					<h6 className="course-item--text__author">The Author</h6>
					<div className="course-item--rating">
						<div className="course-item--rating__stars">12345</div>
						<div className="course-item--rating__avg">4.5</div>
						<div className="course-item--rating__total">714</div>
					</div>
					<div className="course-item--price">
						<div className="course-item--price__old">$199.99</div>
						<div className="course-item--price__new">$11.99</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CourseItem;