import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "https://zoma-login.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    register = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <>
            
                <section className="vh-100 " style={{backgroundColor: "#eee"}}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                    <form className="mx-1 mx-md-4">

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="name" id="name" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                                        <label className="form-label" for="name">Your Name</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="email" id="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                        <label className="form-label" for="email">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                        <label className="form-label" for="password">Password</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="phone" id="phone" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} />
                                        <label className="form-label" for="phone">Phone Number</label>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <Link onClick={this.register} type="button" className="btn btn-primary btn-lg">Register</Link>
                                    </div>

                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid" alt="Sample"/>

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
            </>
        )
    }

}

export default Register