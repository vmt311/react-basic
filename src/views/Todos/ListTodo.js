import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: 'todo1', title: 'todo 1'},
            {id: 'todo2', title: 'todo 2'},
            {id: 'todo3', title: 'todo 3'},
        ]
    }

    addNewTodo = (todo) => {
        this.setState ({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Success")
    }

    render () {
        let {listTodos} = this.state
        return  (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                            <div className="todo-child" key={item.id} >
                                <span> {index + 1} - {item.title}</span>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo