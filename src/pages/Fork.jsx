import {useState, useEffect} from 'react'
import axios from "axios";
import PartsCard from '../elements/PartsCard';

const Fork = () => {
  const [parts, setParts] = useState([])

  const getParts = () => {
    axios.get('/api/parts?categoryId=3')
    .then(res => setParts(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getParts()
  }, [])


return (
  <div>
    {parts.map(part => <PartsCard part={part}/>)}
  </div>
)
}

export default Fork;