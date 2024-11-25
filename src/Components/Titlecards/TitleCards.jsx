import React, { useEffect, useRef, useState } from 'react'
import './titlecards.css'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({ title, category }) => {

const [apidata,setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDRlZjJjNjFhMWRjYWRlYjZlZDQyMzVmMDE4OGQ2ZCIsIm5iZiI6MTczMjUxMzkyMS4zMjA3ODQ4LCJzdWIiOiI2NzQ0MGVmNWNjMWQ2OTk4NmJkOWNjYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.osIpjt3bxkig12YdNqIzz3Sxc30530NmStPr60si6sw'
    }
  };






  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className='titlecards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (<Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>)
        })}
      </div>
    </div>
  )
}

export default TitleCards