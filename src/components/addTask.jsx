import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class AddTask extends Component {
	constructor() {
		super();
		this.addTask = this.addTask.bind(this);
	}

	addTask = (e) => {
		e.preventDefault();
		const taskDesc = document.getElementById("task_desc").value;
		const newTask = {
			id: this.props.tasks.length + 1,
			desc: taskDesc,
		};
		this.props.tasks.push(newTask);
		this.setState({ tasks: this.props.tasks });
		this.props.onHide();
	};

	render() {
		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					onHide={this.props.onHide}
					animation={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Add New Task</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>Task Description</Form.Label>
								<Form.Control
									type="text"
									placeholder="Task Description"
									id="task_desc"
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Labels</Form.Label>
								<Form.Control
									type="text"
									placeholder="Add Comma Separated labels"
									id="task_label"
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={this.addTask}>
							Add Task
						</Button>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default AddTask;
