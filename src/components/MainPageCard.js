import React from 'react'


const MainPageCard = props => {
    return (
        <div  className='col-md-4'>
            <div  style={{margin: '10px'}}className="card ">
                <h5 className="card-header">{props.global}</h5>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.number.toLocaleString()}</p>
                    

                </div>
            </div>
        </div>
    )
}

export default MainPageCard