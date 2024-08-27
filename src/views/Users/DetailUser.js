import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id


            axios.get(`https://reqres.in/api/users/${id}`)
                .then(res => {
                    console.log(">>>res detail user", res)

                    this.setState({
                        user: res && res.data && res.data.data ?  res.data.data : {}
                    })
                })
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let {user} = this.state
        let isEmptyObj = Object.keys(user).length === 0
        return(
            <>
                <div>hello from DetailUser</div>
                {isEmptyObj === false &&
                    <>
                    <div>User's name: {user.first_name} - {user.last_name}</div>
                    <div>User's email: {user.email}</div>
                    <div>
                        <img src={user.avatar}/>
                    </div>
                    <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)