import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(' >>> handleOnClickDelete', job)
        this.props.deleteAJob(job)
    }

    render() {

        let { arrJobs } = this.props
        let {showJobs} = this.state
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('>>> check conditional: ', check)
        return (
            <>
                {
                    showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                // map tao ra 1 mang array moi
                                arrJobs.map((item) => {
                                    if(item.salary >= 500){
                                        return (
                                            <div key={item.id }>
                                                {item.title} - {item.salary}$ <></> 
                                                <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;