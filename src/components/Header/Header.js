import React from 'react';
import './Header.css'

class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                    <img src={this.props.logosrc} alt="logo"/>
                    <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;