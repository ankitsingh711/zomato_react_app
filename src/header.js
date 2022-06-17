import React,{Component, Fragment} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "https://zoma-login.herokuapp.com/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:'',
            userImg:'',
            userName:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
            if(sessionStorage.getItem('uName') !==null){
                let name = sessionStorage.getItem('uName')
                let image = sessionStorage.getItem('uImg')
                return(
                    <>

                    <div className="container">
                        <Link to="/"  type="button" className="btn btn-light btn-md"
                            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}> Hi <img src={image} style={{height:50,width:50}} alt="img"/> {name}
                        </Link>
                    </div>

                    <div className='container'>
                        <button onClick={this.handleLogout}  type="button" className="btn btn-light btn-md"
                            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Logout
                        </button>
                    </div>
                    </>
                )
            }
            else{
                let data = this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userInfo',outArray)
                sessionStorage.setItem('loginStatus',true)
                return(
                    <>
                        <div className="container">
                            <Link to="/" type="button" className="btn btn-light btn-md" style={ {paddingLeft: "2.5rem", paddingRight: "2.5rem",width:"150px"}}>
                                Hi {data.name}
                            </Link>
                        </div>

                        <div className="container">
                            <button onClick={this.handleLogout}  type="button" className="btn btn-light btn-md"
                            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Logout
                            </button> 
                        </div>
                    </>
                )
            }

        }else{
            return(
                <Fragment>
                            <a  style={{color:"black",backgroundColor:"white",width:"150px",}} href="https://github.com/login/oauth/authorize?client_id=9176b4958929e2c28dd6" className="btn btn-light btn-md mx-1">
                            Login With Git
                            </a>
                            <Link to="/login" type="button" className="btn btn-light btn-md mx-1" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem",}}>
                                    <span className="glyphicon glyphicon-log-in"></span> Login
                            </Link>
                            <Link to="/register" className="btn btn-light btn-md mx-1" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>
                            <span className="glyphicon glyphicon-user"></span> Register</Link>
                </Fragment>
            )
        }
    }

    render(){
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                    <div className="container-fluid " />
                    <div className='container-fluid' style={{marginRight:"500px"}}>
                        <Link to="/" style={{fontSize:"30px"}} className="navbar-brand text-light display"><b> Zomato </b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{fontWeight:"bold"}} to="/" className="nav-link active text-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontWeight:"bold"}}  to="/" className="nav-link text-light">About</Link>
                        </li>
                        
                            <li className="nav-item">
                            <Link style={{fontWeight:"bold"}}  to="/" className="nav-link text-light"tabindex="-1" aria-disabled="true">ContactUs</Link>
                        </li>
                        </ul>
                    </div>

                    <div className='container-fluid'>
                        {this.conditionalHeader()}
                    </div>
                </nav>
            </Fragment>
        )
    }

    componentDidMount(){
        /*Github User Profil*/
        if(this.props.location.search){
            if(this.props.location.search.split('=')[0] === '?code'){
                var code = this.props.location.search.split('=')[1]
            }
            if(code){
                let requestedData = {
                    code:code
                }
                fetch(`http://localhost:9800/oauth`,{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    let username = data.name;
                    let img = data.avatar_url;
                    sessionStorage.setItem('uName',username);
                    sessionStorage.setItem('uImg',img);
                    sessionStorage.setItem('loginStatus',true)
                    this.setState({userImg:img,userName:username});

                })
            }
        }
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    
}

export default withRouter(Header)