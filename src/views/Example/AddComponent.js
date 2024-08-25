import React from "react";


class AddComponent extends React.Component {

    state = {
        titleJobs: '',
        salary: ''
    }

    handleChangeTitleJob = (event) =>{
        this.setState({
            titleJobs: event.target.value
        })
    }

    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = () =>{
        console.log(">>> check data input" ,this.state)
    }

    render () {
        return(
            <form>
                <label htmlFor="fname">Job Title:</label><br/>
                <input type="text" value={this.state.titleJobs} 
                        onChange={(event) => this.handleChangeTitleJob(event)}/>
                <br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}/>
                <br/>
                {/* <input type="submit" value="Submit"
                        onClick={() => this.handleSubmit()}/> */}
                <input type="button"
                        onClick={() => this.handleSubmit()}/>
            </form>

        )
    }
}

export default AddComponent;