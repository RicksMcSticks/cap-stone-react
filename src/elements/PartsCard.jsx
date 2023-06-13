import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../store/authContext'



const PartsCard = ({part, inHome, getUserParts, chosenPartId}) => {
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

    const deletePart = () => {
      axios.delete(`/api/parts/${chosenPartId}`)
          .then(() => {
              getUserParts()
          })
          .catch(err => {
              console.log(err)
          })
  }
  console.log(part)

  return (
    <div className="parts-card">
      <img src = {part.imageURL}/>
       <h2>{part.brand}</h2>
      <h2>{part.money}</h2>
       {inHome?<button onClick={() => deletePart(part.id)}>delete</button>:<button onClick = {addPart}> add</button>}
        </div>

  )
}
//delete in here switch null with a delete



export default PartsCard