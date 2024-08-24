import React from "react";

class ChildComponent extends React.Component {

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
        console.log(' >>> check props: ', this.props)
        // let name = this.props.name
        // let age = this.props.age
        // key: value
        // destruturing assigment


        let { name, age, arrJobs } = this.props
        return (
            <>
                <div className="job-lists">
                    {
                        // map tao ra 1 mang array moi
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id }>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;