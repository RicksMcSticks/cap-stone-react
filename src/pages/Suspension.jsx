import {useState, useEffect} from 'react'
import axios from "axios";
import PartsCard from '../elements/PartsCard';

const Bars = () => {
  const [parts, setParts] = useState([])

  const getParts = () => {
    axios.get('/api/parts?categoryId=5')
    .then(res => setParts(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getParts()
  }, [])


return (
  <div className= "Background">
  <div className= "Cards">
    {parts.map(part => <PartsCard part={part}/>)}
  </div>
  </div>
)
}

export default Bars;