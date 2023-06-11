import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import PartsCard from '../elements/PartsCard'

const Home = () => {
  const [parts, setPart] = useState([])
  const {userId} = useContext(AuthContext)
  console.log(userId)

  const getUserParts = () => {
    axios.get(`/api/chosenparts/${userId}`)
    .then(res => setPart(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getUserParts()
  }, [userId])


    return (
    <div>
      {parts.map(part => <PartsCard part={part} inHome={true} />)}
    </div>
  )
}

export default Home