import React from 'react'
import InfoCase from './InfoCase'


const InfoBody= props =>{
    
        let country = props.info.confirmed.detail.split('/')[5]
        return (
            <div >
              <div  style={{margin: '20px', marginBottom: '10px'}}>
              {<InfoCase global={country}  confirmed={props.info.confirmed.value} deaths={props.info.deaths.value} recovered={props.info.recovered.value} />}
              </div>

              <div  style={{marginTop: '4em'}}className='container'>
              <h6>COVID-19 is the disease caused by the new coronavirus that emerged in China in December 2019.
COVID-19 symptoms include cough, fever and shortness of breath. COVID-19 can be severe, and some cases have caused death.
The new coronavirus can be spread from person to person. It is diagnosed with a laboratory test.
There is no coronavirus vaccine yet. Prevention involves frequent hand-washing, coughing into the bend of your elbow and staying home when you are sick.</h6>
              </div>
              
          </div>
        )
    


}

export default InfoBody