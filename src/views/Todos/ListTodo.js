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
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState ({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Success")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        console.log("check delete", todo)
    }

    handleEditTodo = (todo) => {
        let {listTodos, editTodo} = this.state

        //save
        let isEmptyObj = Object.keys(editTodo).length === 0
        if(isEmptyObj === false && editTodo.id === todo.id) {
            
            let listTodosCopy = [...listTodos]
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Success")
            return
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (todo) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = todo.target.value
        this.setState({
            editTodo: editTodoCopy
        })        
    }

    render () {
        let {listTodos, editTodo} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log("check empty obj", isEmptyObj)
        return  (
            <>
            
            <p>
            Simple App TODO
            </p>
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                            <div className="todo-child" key={item.id} >

                                {isEmptyObj === true ?
                                    <span> {index + 1} - {item.title}</span>
                                :
                                    <>
                                        {editTodo.id === item.id ?
                                           <>
                                                <span>
                                                {index + 1}  - <input value={editTodo.title}
                                                                    onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                                    />

                                                </span>
                                                {/* <input type="text" value={item.title}></input> */}
                                           </>
                                        :
                                            <span> {index + 1} - {item.title}</span>
                                        }
                                    </>
                                }

                                <button className="edit"
                                    onClick={() => this.handleEditTodo(item)}
                                >
                                    {isEmptyObj === false && editTodo.id === item.id ?
                                        'Save':'Edit'
                                    }
                                </button>
                                <button className="delete"
                                    onClick={() => this.handleDeleteTodo(item)}
                                >Delete</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }
}

export default ListTodo