import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    /*
    JSX => return block (vd return 2 kho'i div se~ loi~)
    dung code js trong html
    co the dung <> </> hoac fragment de boc nhieu khoi div
    */

    state = {
       firstName: '',
       lastName: ''
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = () =>{
        console.log(">>> check data input" ,this.state)
    }

    render() {
        console.log(' >>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName} 
                            onChange={(event) => this.handleChangeFirstName(event)}/>
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                            onChange={(event) => this.handleChangeLastName(event)}/>
                    <br/>
                    {/* <input type="submit" value="Submit"
                            onClick={() => this.handleSubmit()}/> */}
                    <input type="button"
                            onClick={() => this.handleSubmit()}/>
                </form>

                <ChildComponent name={'child one'}/>
                <ChildComponent name={'child two'}/>
                <ChildComponent name={'child three'}/>
            </>
        )
    }
}

export default MyComponent;