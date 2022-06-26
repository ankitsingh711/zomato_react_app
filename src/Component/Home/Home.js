import React, { Fragment, Component } from 'react';
import './Home.css'
import Search from './Search';
import QuickSearch from './QuickSearch';
import Footer from '../../footer';




class Home extends Component{
    render(){
        return(
                <Fragment>
                    {/* <!-- carosels starts  --> */}
                <Search/>
                <QuickSearch/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home;