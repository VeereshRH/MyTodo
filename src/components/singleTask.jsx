import React, { Component } from "react";

class SingleTask extends Component {
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<label className="list-group-item">
					<input className="form-check-input me-1" type="checkbox" value="" />
					{this.props.task.desc}
				</label>
			</React.Fragment>
		);
	}
}

export default SingleTask;
