import React from 'react';
import "./Menu.css"

class Menu extends React.Component{
    render(){
        return(
            <div className='menu'>
                <ul>{ this.props.items.map(function(m, index){

                    return <li key={index.toString()} >{m}</li>;

                }) }

                </ul>
            </div>
        );
    }
}

export default Menu;