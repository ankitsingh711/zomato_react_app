import React,{Component, Fragment} from 'react';
import './placeOrder.css'

const url = "http://ankit-zomato-data.herokuapp.com/menuItem";
const purl = "http://ankit-zomato-data.herokuapp.com/placeOrder";

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Ankit Singh',
            email:'ankit@gmail.com',
            cost:'...',
            phone:56567764,
            address:'344 Varanasi',
            menuItem:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h5>{item.menu_name}</h5>
                        <h4 className='text-danger'>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    checkout = () => {
        console.log(this.state)
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu')
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        // .then(this.props.history.push('/viewBooking'))
        .then(console.log('Order Added'))
    }

    render(){

        if(!sessionStorage.getItem('loginStatus')){
            return(
                <div>
                    <center>
                        <h2 className='text-dark'>Login First To Place Order</h2>    
                    </center>
                </div>
            )
        }
        return(

            <Fragment>
                <div className="container">
                    <hr/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Order For {this.props.match.params.restName}</h3>
                        </div>
                        <div className="panel-body">
                        <form action="https://paytmzomato.herokuapp.com/" method="GET">
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                            <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.checkout}>Procced</button>
                            </form>
                            <div className='container-fluid'>
                                {this.renderItem(this.state.menuItem)}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    //call api 
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.menu_price);
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }
}


export default PlaceOrder