import React, { useState } from 'react'

const Form = props => {

    const [country, setCountry] = useState('')
    


const onFilterSubmitCountry = e =>{
    e.preventDefault()
    
    props.handleCountrySubmit(country)
    
}

    return (

        <div className="container">
            <div className="row">

                <div className="col-md-12">
                <form onSubmit={onFilterSubmitCountry}>
                <div className="card">
                        <div className="card-body">
                        <label>Search for a country</label>
                    <input onChange={event =>{setCountry(event.target.value)}} type="text" className="form-control" value={country} placeholder="Spain" />
                    <small  className="form-text text-muted">If the country has spaces, try using the abbreviation. Ex: United States of America (USA)</small>

                    <input style={{marginTop: '10px'}} className='btn btn-primary' type='submit' value='Search' />

                        </div>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>

    )


}

export default Form