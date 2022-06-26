import React,{Component, Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MenuDisplay from './menuDisplay';
import Footer from '../../footer'

const url = "https://ankit-zomato-data.herokuapp.com/details"
const menuUrl = "https://ankit-zomato-data.herokuapp.com/menu?"

class RestDetails extends Component {

    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        //let details = this.state.details
        let {details} = this.state
        console.log(this.state.userItem)
        return(
            <Fragment>
                <div className="card mb-5">
                    <div style={{width:"50%",height:"200px"}} className='container-fluid float-start'>
                    <img src={details.restaurant_thumb} className="card-img-top" alt="food" />
                    </div>
                <img src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png" alt="star" width="150px"/>
                <div className="card-body">
                    <h5 className="card-title">{details.restaurant_name}</h5>
                    <span>231 Customers Rating is {details.rating_text}</span><br/>
                    <del style={{color:"red"}}>Rs.300</del> <span style={{fontSize: "30px"}}>{details.cost}</span><br/><br/>
                    <img src="https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png" alt="veg symbol" width="100px"/>
                    <img src="https://cdn.dribbble.com/users/1787323/screenshots/11024782/media/97b4d47e0b06f3e034b71af15e365c72.png?compress=1&resize=400x300" alt="man" width="100px"/> 
                        <img src="https://i.pinimg.com/736x/93/d5/51/93d551320eb455d647b73e4385885880.jpg" alt="delievry man" width="80px"/><br/>
                        <span>Pure Veg</span> <span style={{marginLeft: "20px"}}>Sanitized</span> <span style={{marginLeft: "20px"}}>Free Delievery</span><br/><br/>
                        <span style={{color: "green",fontSize: "30px",fontWeight: "bold"}}>Available Now</span><br/><br/>
                        <Link to={`/listing/${this.state.mealId}`}>
                            <button type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#">
                                Back
                            </button>
                        </Link>
                        <button onClick={this.proceed}  type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#">
                            Proceed
                        </button>
                </div>
                </div>



                <div className="col-md-12">
                    <MenuDisplay menudata={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
                <Footer/>
            </Fragment>
        )
    }

    //calling api with async await 
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`)
        console.log(">>>response.data[0].restaurant_id",response.data[0].restaurant_id)
        let menuResponse = await axios.get(`${menuUrl}/${response.data[0].restaurant_id}`)
        this.setState({details:response.data[0],menuList:menuResponse.data})
    }
}

export default RestDetails;