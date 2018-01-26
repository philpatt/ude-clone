import React, { Component } from 'react';
import CourseItem from './CourseItem.js';
import './Course.css';

class Course extends Component {
	render(){
		return(
			<div className="course-row">
				<h3 className="course-row--title">{this.props.courseInfo.headerTitle}</h3>
				<div className="course-row--list">
					<CourseItem courseContent={this.props.courseInfo.courseContent}/>
					<CourseItem courseContent={this.props.courseInfo.courseContent}/>
					<CourseItem courseContent={this.props.courseInfo.courseContent}/>
					<CourseItem courseContent={this.props.courseInfo.courseContent}/>
					<CourseItem courseContent={this.props.courseInfo.courseContent}/>
				</div>
			</div>
		)
	}
}


export default Course;

