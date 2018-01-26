
import React, { Component } from 'react';
import Billboard from './Billboard.js';
import Course from './Course.js';
import MarketLinks from './MarketLinks.js';
import Achieve from './Achieve.js';
import Tag from './Tag.js';
import BizTags from './BizTags.js';



class Main extends Component {
	render() {
		return(
			<div>

				<Billboard />

				<Course  />

				<Course  />

				<Course  />

				<MarketLinks />

				<Achieve />

				<Tag />

				<BizTags />
			</div>
		)
	}
}



export default Main ;