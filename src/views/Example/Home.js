import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }

    render() {
        console.log("Check props: ", this.props)
        return(
            <h1>Day la trang Home</h1>
        )
    }

}

export default withRouter(Home)