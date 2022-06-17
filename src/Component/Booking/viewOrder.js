import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "http://ankit-zomato-app.herokuapp.com/viewOrder"
const UpdateUrl = "http://ankit-zomato-app.herokuapp.com/updateOrder"

class ViewOrder extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
            <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    
    componentDidMount(){
        if(this.props.location){
            let queryp = this.props.location.search;
            if(queryp){
                let data = {
                    "status":queryp.split('&')[0].split('=')[1],
                    "date":queryp.split('&')[2].split('=')[1],
                    "bank_name":queryp.split('&')[3].split('=')[1]
                }
                let id = queryp.split('&')[1].split('=')[1].split('_')[1]
                fetch(`${UpdateUrl}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }
        let email = sessionStorage.getItem('userInfo').split(',')[1];
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }

}

export default ViewOrder