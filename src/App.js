import "./App.css";
import { Component } from "react";
import { Button } from "react-bootstrap";
import TasksList from "./components/tasksList";
import AddTask from "./components/addTask";

class App extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			tasks: [
				{ id: 1, desc: "Task Description1" },
				{ id: 2, desc: "Task Description2" },
				{ id: 3, desc: "Task Description3" },
				{ id: 4, desc: "Task Description4" },
			],
		};
	}

	deleteTask = (e) => {
		console.log(e.target.id);
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex((task) => task.id == e.target.id);
		tasks.splice(index, 1);
		this.setState({ tasks: tasks });
	};

	handleModal = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<div className="App">
				<TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
				<Button variant="primary" onClick={this.handleModal}>
					Add Task
				</Button>
				<AddTask
					tasks={this.state.tasks}
					show={this.state.show}
					onHide={this.handleModal}
				/>
			</div>
		);
	}
}

export default App;
