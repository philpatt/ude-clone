import React, { Component } from 'react';


const MarketLink = (props) => {
	console.log(props.buttonInfo.title)
	return (
		<div className={`marketlinks-box marketlinks-box__${props.buttonInfo.background}`}> 
			<h2 className="marketlinks-box--title">{props.buttonInfo.title}</h2>
		</div>
	);
}



class MarketLinks extends Component {
	
	render(){
		return(
			<div className="marketlinks-row">
				<h3 className="course-row--title">{this.props.marketInfo.headerTitle}</h3>
				<div className="course-row--list">
					<MarketLink buttonInfo={this.props.marketInfo.buttonContent.button0}/>
					<MarketLink buttonInfo={this.props.marketInfo.buttonContent.button1}/>
					<MarketLink buttonInfo={this.props.marketInfo.buttonContent.button2}/>
				</div>
			</div>
		);
	}
}


export default MarketLinks;
