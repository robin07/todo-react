import React from 'react';

class AddTodo extends React.Component {
    state = {
        task: ''
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.reset();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add the task:</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
export default AddTodo;