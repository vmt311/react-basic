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
       lastName: '',
       arrJobs: [
        {id: 'Job 1', title: 'Developer', salary: '500'},
        {id: 'Job 2', title: 'Tester', salary: '400'},
        {id: 'Job 3', title: 'Project manager', salary: '1000'}
       ]
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

                <ChildComponent 
                name={this.state.firstName}
                age={'25'}
                arrJobs={this.state.arrJobs}


                />
            </>
        )
    }
}

export default MyComponent;