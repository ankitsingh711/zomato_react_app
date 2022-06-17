import React, { Fragment, Component } from 'react';
import './Home.css'
import Search from './Search';
import QuickSearch from './QuickSearch';




class Home extends Component{
    render(){
        return(
                <Fragment>
                    {/* <!-- carosels starts  --> */}
                <Search/>
                <QuickSearch/>
            </Fragment>
        )
    }
}

export default Home;