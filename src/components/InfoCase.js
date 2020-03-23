import React from 'react'


const InfoCase= props => {
    return (
        <div className='container'>
            <div style={{marginBottom: '4em'}} className='text-center'>
            <h2 >
                {props.global}
            </h2>
           
            </div>

            <div className='row'>
                <div className='col-md-4 text-center'>
                    <h5>Confirmed</h5>
                    <h2 style={{color: '#ffc107'}}> {props.confirmed.toLocaleString()}</h2>
                </div>
                <div className='col-md-4 text-center'>
                <h5>Deaths</h5>
                    <h2 style={{color: '#f44336'}}>{props.deaths.toLocaleString()}</h2>
                </div>
                <div className='col-md-4 text-center'>
                <h5>Recovered</h5>
                    <h2 style={{color: '#4caf50'}}>{props.recovered.toLocaleString()}</h2>
                </div>
            </div>
            
           
           
        </div>
    )
}

export default InfoCase