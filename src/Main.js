
import React, { Component } from 'react';
import Billboard from './Billboard.js';
import Course from './Course.js';
import MarketLinks from './MarketLinks.js';
import Achieve from './Achieve.js';
import Tag from './Tag.js';
import BizTags from './BizTags.js';

const courseInfo = {
	headerTitle: 'Top Courses in "Development"',
	courseContent: {
		title: 'The Course',
		author: 'The Author',
		ratingAvg: 4.5,
		ratingTotal: 714,
		priceOld: '$199.99',
		priceNew: '$12.99'
	}
}

const marketInfo = {
	headerTitle: 'Discover Our Popular Courses',
	buttonContent: {
		button0: {
			title: 'Top Rated',
			background: 'blue'
		},
		button1: {
			title: 'Trending',
			background: 'purp'
		},
		button2: {
			title: 'New and Noteworthy',
			background: 'teal'
		}
	}
}


// console.log(courseInfo);


class Main extends Component {
	render() {
		return(
			<div>

				<Billboard />

				<Course courseInfo={courseInfo} />

				<Course courseInfo={courseInfo} />
				
				<MarketLinks marketInfo={marketInfo} />

				<Course courseInfo={courseInfo} />


				<Achieve />

				<Tag />

				<BizTags />
			</div>
		)
	}
}



export default Main ;