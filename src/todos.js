import React from 'react';

const Todos = (props) => {
    const { todo, deletetodo } = props;
    const todoList = todo.length ? (
        todo.map((obj) => {
            return (
                <div className="collection-item" key={obj.id}>
                    <span onClick={() => { deletetodo(obj.id) }}>{obj.task}</span>
                </div>
            )
        })
    ) : (
            <p className="center">No task right now , Wanna add? </p>
        )
    return (
        <div className='todos collection'>
            {todoList}
        </div>
    )
};

export default Todos;