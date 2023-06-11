import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../store/authContext'



const PartsCard = ({part, inHome}) => {
  const {userId} = useContext(
    AuthContext
  )
    console.log(part)
    
    const addPart = () => {
      axios.post('/api/part', {partId: part.id, userId})
      .then(res => {
        // setPart(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }

    // useEffect(addPart, [])

  return (
    <div className="parts-card">
       <h2>{part.brand}</h2>
       {inHome?null:<button onClick = {addPart}> add</button>}
        </div>
  )
}
//delete in here switch null with a delete



export default PartsCard