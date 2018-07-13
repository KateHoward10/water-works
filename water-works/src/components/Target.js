import React, { Component } from 'react';
import moment from 'moment';

class Target extends Component {
	render() {
		const {drinks} = this.props;
		const total = drinks.filter(drink => drink.get("created_at") > moment().format('YYYY-MM-DD')).map(drink => drink.get("amount")).reduce((amount, sum) => +amount + +sum, 0);
		const proportion = Math.min(total / 2000 * 50, 50);

	    return (
	    	<div>
	      		<h3>Recommended target: 2l</h3>
	      		<div className="target">
	  				<div className="water-blob" style={{height: proportion+"vh"}}></div>
	  			</div>
  			</div>
	    )
	}
}

export default Target;
