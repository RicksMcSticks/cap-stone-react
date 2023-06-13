import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import PartsCard from '../elements/PartsCard'

const Home = () => {
  const [chosenParts, setChosenParts] = useState([])
  const {userId} = useContext(AuthContext)
  console.log(userId)

  const getUserParts = () => {
    axios.get(`/api/chosenparts/${userId}`)
    .then(res => setChosenParts(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getUserParts()
  }, [userId])

  console.log(chosenParts)
    return (
      <div className= "Background">
    <div className= "Cards">
      {chosenParts.map(chosenPart => <PartsCard part={chosenPart.part} inHome={true} chosenPartId= {chosenPart.id} getUserParts= {getUserParts} />)}
    </div>
    </div>
  )
}

export default Home