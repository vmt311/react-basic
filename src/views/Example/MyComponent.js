import React from "react";

class MyComponent extends React.Component {

    /*
    JSX => return block (vd return 2 kho'i div se~ loi~)
    dung code js trong html
    co the dung <> </> hoac fragment de boc nhieu khoi div
    */

    state = {
        name: 'Thien',
        channel: 'vmt'
    }

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('click me')
    }

    render() {

        return (
            <>
                <div className="first">
                    {console.log('My name is: ', this.state['name'])}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnchangeName(event)}/> 
                    <p>My name is {this.state.name}</p>
                </div>
                <div className="second">
                    My youtube channel: {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;