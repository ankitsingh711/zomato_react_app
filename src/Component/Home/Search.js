import React,{ Component, Fragment } from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const url = "https://ankit-zomato-data.herokuapp.com/location"
const restUrl = "https://ankit-zomato-data.herokuapp.com/restaurants?stateId="




class Search extends Component{

    constructor(props){
        super(props)
        console.log(">>>>inside constructor")
        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        console.log(">>>>data>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        } 
    }

    handleRestaurants = (event) => {
        let restId = event.target.value;
        console.log(">>>>inside",restId)
        this.props.history.push(`/details?restId=${restId}`)
    }


    handleCity = (event) => {
        let restId = event.target.value;
        fetch(`${restUrl}${restId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(">>>>",data)
        this.setState({restaurant:data})
        })
    }

    render(){
        console.log(">>>>inside render")
        return(
            <Fragment>
                
                <div className="container-fluid" />

                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        
                        </div>
                        <div className="carousel-inner">
                            <img
                            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                            className="d-block w-100"
                            alt="zomato"
                            height="450px"
                            />  
                            <div className="carousel-caption d-none d-md-block">
                            <div className="container-sm" style={{marginBottom: "100px",marginLeft: "400px"}}>
                            </div>

                            <h1 style={{fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize:" 60px",fontWeight:"bold"}}>Zomato</h1>
                            <h2 style={{color:"white"}}>Discover the best food & drinks in India</h2>
                            <select onChange={this.handleCity} style={{width:"300px"}} className="browser-default custom-select">
                            <option selected>Select Your City</option>
                            {this.renderCity(this.state.location)}
                            </select>
                            <select onChange={this.handleRestaurants} style={{width:"300px"}} className="browser-default custom-select">
                            <option selected>Select Your Restaurant</option>
                            {this.renderRest(this.state.restaurant)}
                            </select>
                            </div>
                        </div>
                        <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                        >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                        >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                        
                </div>
            </Fragment>
        )
    }

    // api calling on page load
    componentDidMount(){
        console.log(">>>>inside componentDidMount")
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);