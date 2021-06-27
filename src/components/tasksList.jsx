import React, { Component } from "react";
import { Button } from "react-bootstrap";
import SingleTask from "./singleTask";
import AddTask from "./addTask";

class TasksList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="list-group">
					{this.props.tasks.map((task) => (
						<>
							<SingleTask key={task.id} task={task} />
							<Button
								className="btn-primary btn btn-sm ml-2"
								onClick={this.props.onDelete}
								id={task.id}
								key={`button${task.id}`}
							>
								Delete
							</Button>
						</>
					))}
				</div>
				<AddTask />
			</React.Fragment>
		);
	}
}

export default TasksList;
