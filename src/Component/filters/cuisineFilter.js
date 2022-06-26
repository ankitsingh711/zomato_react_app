import React,{Component, Fragment} from 'react';
import axios from 'axios';

const url = "https://ankit-zomato-data.herokuapp.com/filters"

class CuisineFilter extends Component{

    filterCuisine = (event) => {
        let mealId = sessionStorage.getItem('mealId');
        let cuisineId = event.target.value;
        let cuisineUrl = ""
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    render(){
        return(
            <Fragment>
                <center style={{color:"black",fontSize:"25px",fontStyle:"italic"}}>Cuisine Filter</center>
                <div className="my-3" style={{marginLeft:'30%'}} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/> All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/> North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/> South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/> Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/> Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/> Street Food
                    </label>
                </div><hr/>
            </Fragment>
        )
    }
}

export default CuisineFilter;