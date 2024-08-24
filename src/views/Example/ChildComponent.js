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
        console.log(' >>> call render: ', this.state)
        return (
            <>
                <div>child component name: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;