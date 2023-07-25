import React, { Component } from 'react';


class SectionPropsOne extends Component {
    render() {
        return (
            <div>
                <section className={this.props.className}>
		<div className="container">

			<div className="new-alert">
				{this.props.newAlert}
			</div>

			<div style={{color:this.props.color}} className="title-wraper bold " >
				{this.props.productTitle} 
			</div> 
		

            <div style={{color:this.props.color}} className="description-wrapper">
				{this.props.discription}
			</div>

            <div className="price-wrapper grey">
				{this.props.price}
			</div>

			<div className="links-wrapper">
				<ul>
                <li><a href={this.props.linkUrl}>{this.props.linkName}</a></li>
                <li><a href={this.props.linkUrl}>{this.props.linkName2}</a></li>
				</ul> 
			</div>

			<div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">{this.props.ipodCaptionOne}</div>
				<div className="col-sm-12 col-md-6 text-md-left">{this.props.ipodCaptionTwo}</div>
			</div>
		</div>
	</section>
            </div>
        );
    }
}

export default SectionPropsOne;
