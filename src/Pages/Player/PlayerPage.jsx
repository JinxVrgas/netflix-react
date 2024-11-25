import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const PlayerPage = () => {


  const { id } = useParams();
  const navigate = useNavigate();


  const [apidata, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDRlZjJjNjFhMWRjYWRlYjZlZDQyMzVmMDE4OGQ2ZCIsIm5iZiI6MTczMjUxMzkyMS4zMjA3ODQ4LCJzdWIiOiI2NzQ0MGVmNWNjMWQ2OTk4NmJkOWNjYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.osIpjt3bxkig12YdNqIzz3Sxc30530NmStPr60si6sw'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));

  }, [])


  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate('/')}}/>
      <iframe
        width="90%"
        height='90%'
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title='trainer'
        frameBorder="0"
        allowFullScreen></iframe>
      <div className="player_info">
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default PlayerPage