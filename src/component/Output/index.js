import React, { useState } from 'react'
import {connect} from 'react-redux'
import './main.css'
 function Output(props) {
     
    return (
        <div className='output'>
            {props.giphy && props.giphy.length !=0 ? 
                props.giphy[0].map(el=>{
            return(
                <div className='giphy'>
            <iframe className='giphyIframe' src={el.embed_url}></iframe>
            <h4>{el.title}</h4>
            </div>
            )  
        }) : 
        props.weather && props.weather.length !=0 ?
                    props.weather.map(obj=>{
                        return(
                            <div className='weather'>
                <h4 className='region'>{obj.name}</h4>
                <p>Timezone is: {obj.timezone}</p>
                <p>Wind is: {obj.wind.deg}</p>
                <p>Temperature: {(obj.main.temp+ - 273.15).toFixed(2)}°C</p>
                <p>Feels like: {(obj.main.feels_like - 273.15).toFixed(1)}°C</p>
                </div>
                    )})
                : <h5 className='emptyText'>ENTER SMTH ^</h5>
            
        

        
    }</div>
    )
}
function mapStateToProps({weather, giphy}){
    return {weather, giphy}
}
export default connect(mapStateToProps)(Output)