import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    /*
    JSX => return block (vd return 2 kho'i div se~ loi~)
    dung code js trong html
    co the dung <> </> hoac fragment de boc nhieu khoi div
    */

    state = {
       arrJobs: [
        {id: 'Job 1', title: 'Developer', salary: '500'},
        {id: 'Job 2', title: 'Tester', salary: '400'},
        {id: 'Job 3', title: 'Project manager', salary: '1000'},
       ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }


    render() {
        console.log(' >>> call render: ', this.state)
        return (
            <>
                <AddComponent 
                addNewJob={this.addNewJob}
                />
               
                <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}


                />
            </>
        )
    }
}

export default MyComponent;