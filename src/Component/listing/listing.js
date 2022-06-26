import React,{Component,Fragment} from 'react';
import './listing.css';
import axios from 'axios';
import CuisineFilter from '../filters/cuisineFilter'
import CostFilter from '../filters/costFilter';
import ListingDisplay from './listingDisplay';
import Footer from '../../footer';

const restUrl = "https://ankit-zomato-data.herokuapp.com/restaurants?mealtype_id=2"

class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            restaurants:'',
        }
    }

    setDatPerFilter = (data) => {
        this.setState({restaurants:data})
    }

    render(){
        return(
            <Fragment>
                <CuisineFilter restPerCuisine={(data) => {this.setDatPerFilter(data)}}/>
                <CostFilter restPerCost={(data) => {this.setDatPerFilter(data)}}/>
                <ListingDisplay listData={this.state.restaurants}/>
                <Footer/>
            </Fragment>
        )
    }

   //Api Calls When Page Load happen
    componentDidMount(){
        let mealId = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${restUrl}${mealId}`)
        .then((res) => {this.setState({restaurants:res.data})})
    }
}

export default Listing;