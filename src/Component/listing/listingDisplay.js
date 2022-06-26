import React,{ Fragment } from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){   
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="row justify-content-center mb-3" key={item.restaurant_id}>
                            <div className="col-md-12 col-xl-10">
                                <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                        <img src={item.restaurant_thumb} className="card-img-top" alt={item.restaurant_name}/>
                                        <Link to="/">
                                            <div className="hover-overlay">
                                            <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                            </div>
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <Link to={`/details?restId=${item.restaurant_id}`} style={{color:"black",textDecoration:"none"}} >
                                        <h5>{ item.restaurant_name }</h5>
                                        </Link>
                                        <div className="d-flex flex-row">
                                        <div className="text-danger mb-1 me-2">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span>{item.rating_text}</span>
                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                        <span>{item.address}</span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                        <span>{item.mealTypes[0].mealtype_name}</span>
                                        <span className="text-primary"> • </span>
                                        <span>{item.mealTypes[1].mealtype_name}</span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                        {item.cuisines[0].cuisine_name}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div className="d-flex flex-row align-items-center mb-1">
                                        <h4 className="mb-1 me-1">Rs.{item.cost}</h4>
                                        <span className="text-danger"><s>Rs.100</s></span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                        <Link to={`/details?restId=${item.restaurant_id}`} className="btn btn-primary btn-sm" type="button">Visit</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data For Filter Applied</h2>
                    </div>
                )
            }
        }else{
            return(
                <Fragment>
                    <div className="row justify-content-center mb-3" aria-hidden="true">
                            <div className="col-md-12 col-xl-10">
                                <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                        <img src="https://www.originalstyle.com/imagecache/050b086f-768a-4adf-8d3f-a7135b71f604-548-548.jpg" className="card-img-top" alt="name"/>
                                        <Link to="/">
                                            <div className="hover-overlay">
                                            <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                            </div>
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <Link to="" style={{color:"black",textDecoration:"none"}} >
                                        <h5 className="placeholder">Loading...</h5>
                                        </Link>
                                        <div className="d-flex flex-row">
                                        <div className="text-danger mb-1 me-2">
                                            <i className="fa fa-star placeholder "></i>
                                            <i className="fa fa-star placeholder "></i>
                                            <i className="fa fa-star placeholder "></i>
                                            <i className="fa fa-star placeholder "></i>
                                        </div>
                                        <span className='placeholder '></span>
                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                        <span className='placeholder '></span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                        <span className="placeholder "></span>
                                        <span className="text-primary placeholder "> • </span>
                                        <span clasName="placeholder "></span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0 placeholder ">
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div className="d-flex flex-row align-items-center mb-1">
                                        <h4 className="mb-1 me-1 placeholder ">Loading...</h4>
                                        <span className="text-danger placeholder "><s className='placeholder '></s></span>
                                        </div>
                                        <h6 className="text-success placeholder ">Loading...</h6>
                                        <div className="d-flex flex-column mt-4">
                                        <button className="btn btn-primary btn-sm placeholder " type="button"></button>
                                        <button className="btn btn-outline-primary btn-sm mt-2 placeholder " type="button">
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>

                    <div className="row justify-content-center mb-3" aria-hidden="true">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://www.originalstyle.com/imagecache/050b086f-768a-4adf-8d3f-a7135b71f604-548-548.jpg" className="card-img-top" alt="name"/>
                            <Link to="/">
                                <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <Link to="" style={{color:"black",textDecoration:"none"}} >
                            <h5 className="placeholder">Loading...</h5>
                            </Link>
                            <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                            </div>
                            <span className='placeholder '></span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                            <span className='placeholder '></span>
                            </div>
                            <div className="mb-2 text-muted small">
                            <span className="placeholder "></span>
                            <span className="text-primary placeholder "> • </span>
                            <span clasName="placeholder "></span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0 placeholder ">
                            
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1 placeholder ">Loading...</h4>
                            <span className="text-danger placeholder "><s className='placeholder '></s></span>
                            </div>
                            <h6 className="text-success placeholder ">Loading</h6>
                            <div className="d-flex flex-column mt-4">
                            <button className="btn btn-primary btn-sm placeholder " type="button"></button>
                            <button className="btn btn-outline-primary btn-sm mt-2 placeholder " type="button">
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="row justify-content-center mb-3" aria-hidden="true">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://www.originalstyle.com/imagecache/050b086f-768a-4adf-8d3f-a7135b71f604-548-548.jpg" className="card-img-top" alt="name"/>
                            <Link to="/">
                                <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <Link to="" style={{color:"black",textDecoration:"none"}} >
                            <h5 className="placeholder">Loading...</h5>
                            </Link>
                            <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                            </div>
                            <span className='placeholder '></span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                            <span className='placeholder '></span>
                            </div>
                            <div className="mb-2 text-muted small">
                            <span className="placeholder "></span>
                            <span className="text-primary placeholder "> • </span>
                            <span clasName="placeholder "></span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0 placeholder ">
                            
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1 placeholder ">Loading...</h4>
                            <span className="text-danger placeholder "><s className='placeholder '></s></span>
                            </div>
                            <h6 className="text-success placeholder ">Loading...</h6>
                            <div className="d-flex flex-column mt-4">
                            <button className="btn btn-primary btn-sm placeholder " type="button"></button>
                            <button className="btn btn-outline-primary btn-sm mt-2 placeholder " type="button">
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="row justify-content-center mb-3" aria-hidden="true">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://www.originalstyle.com/imagecache/050b086f-768a-4adf-8d3f-a7135b71f604-548-548.jpg" className="card-img-top" alt="name"/>
                            <Link to="/">
                                <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <Link to="" style={{color:"black",textDecoration:"none"}} >
                            <h5 className="placeholder">Loading...</h5>
                            </Link>
                            <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                            </div>
                            <span className='placeholder '></span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                            <span className='placeholder '></span>
                            </div>
                            <div className="mb-2 text-muted small">
                            <span className="placeholder "></span>
                            <span className="text-primary placeholder "> • </span>
                            <span clasName="placeholder "></span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0 placeholder ">
                            
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1 placeholder ">Loading...</h4>
                            <span className="text-danger placeholder "><s className='placeholder '></s></span>
                            </div>
                            <h6 className="text-success placeholder ">Loading...</h6>
                            <div className="d-flex flex-column mt-4">
                            <button className="btn btn-primary btn-sm placeholder " type="button"></button>
                            <button className="btn btn-outline-primary btn-sm mt-2 placeholder " type="button">
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="row justify-content-center mb-3" aria-hidden="true">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://www.originalstyle.com/imagecache/050b086f-768a-4adf-8d3f-a7135b71f604-548-548.jpg" className="card-img-top" alt="name"/>
                            <Link to="/">
                                <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <Link to="" style={{color:"black",textDecoration:"none"}} >
                            <h5 className="placeholder">Loading...</h5>
                            </Link>
                            <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                                <i className="fa fa-star placeholder "></i>
                            </div>
                            <span className='placeholder '></span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                            <span className='placeholder '></span>
                            </div>
                            <div className="mb-2 text-muted small">
                            <span className="placeholder "></span>
                            <span className="text-primary placeholder "> • </span>
                            <span clasName="placeholder "></span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0 placeholder ">
                            
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1 placeholder ">Loading...</h4>
                            <span className="text-danger placeholder "><s className='placeholder '></s></span>
                            </div>
                            <h6 className="text-success placeholder ">Loading...</h6>
                            <div className="d-flex flex-column mt-4">
                            <button className="btn btn-primary btn-sm placeholder " type="button"></button>
                            <button className="btn btn-outline-primary btn-sm mt-2 placeholder " type="button">
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </Fragment>
                
            )
        }
    }


    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay