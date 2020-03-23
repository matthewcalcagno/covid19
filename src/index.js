import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { GlobalContext } from './Context'
import Navbar from './components/Navbar'
import MainPageCard from './components/MainPageCard'
import InfoBody from './components/InfoBody'
import Form from './components/Form'


const App = () => {

    const [general, setGeneral] = useState('')
    const [daily, setDaily] = useState('')

  
    const handleCountrySubmit = country => {
        if(country ==='South Korea' ) country = 'KR'
        if(country === '') fetch('https://covid19.mathdro.id/api/countries/Spain').then(res =>{ return res.json()}).then(res => {setDaily(res)})

        else 
        fetch('https://covid19.mathdro.id/api/countries/'+country).then(res =>{ return res.json()}).then(res => { console.log(res);if(res.deaths !== undefined){  setDaily(res) } else{ alert('Country does not exist')}}).catch(e =>{alert('Country does exist')})

    }


    useEffect( () =>{
        fetch('https://covid19.mathdro.id/api/').then(res =>{ return res.json()}).then(res => {setGeneral(res)})
        fetch('https://covid19.mathdro.id/api/countries/Spain').then(res =>{ return res.json()}).then(res => {setDaily(res)})
        
    },[])

    if(general === '' || daily === '') return <p>Loading</p>
    return (
        
        <GlobalContext.Provider value=''>
            <Navbar />
            <h3 className='text-center' style={{marginTop: '30px'}}>Total worldwide </h3>
            
            <div style={{marginTop: '20px', marginBottom: '20px'}} className='row'>
                
            <MainPageCard global='Global' title='Confirmed' number={general.confirmed.value} />
            <MainPageCard global='Global' title='Deaths' number={general.deaths.value} />
            <MainPageCard global='Global' title='Recovered' number={general.recovered.value} />
            </div>
            <Form  handleCountrySubmit ={(e)=>{handleCountrySubmit(e)}}/>
            
            

            <div style={{marginTop: '40px'}} >
                <InfoBody info={daily} />
            </div>
            


        </GlobalContext.Provider>

    )
}


ReactDOM.render(<App />, document.querySelector('#root'))
