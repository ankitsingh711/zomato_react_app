import React,{Component} from 'react';

class MenuDisplay extends Component {

    orderId= [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <>
                    <div key={item._id}>
                        <div style={{color:"black"}} className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} style={{width:80,height:80}} alt="menu"/>&nbsp;
                            {item.menu_name}- Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button   className="btn btn-success float-end mx-5"
                            onClick={() => {this.placeOrder(item.menu_id)}}>
                                <i style={{fontSize:"25px"}} class="fa-solid fa-plus"></i>
                            </button> &nbsp;
                            <button className="btn btn-danger float-end mx-5"
                            onClick={() => {this.removeOrder(item.menu_id)}}>
                                <i class="fa-solid fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    </>
                )
            })
        }
    }

    render(){
        return(
            <div style={{border:"5px solid #dc3545 "}}>
                <div className="col-md-12 bg" style={{backgroundColor:"whitesmoke",color:"white"}}>
                    <center>
                        <h1 style={{color:"#dc3545"}}>ITEM ADDED</h1>
                    </center><hr style={{color:"black"}}/>
                    Item Number {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12" style={{backgroundColor:"whitesmoke",color:"white"}}>
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;