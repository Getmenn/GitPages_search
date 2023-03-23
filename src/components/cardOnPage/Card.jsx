import './card.scss'
import star from '../../assets/star.svg'
import eye from '../../assets/eye.svg'
import avatarExample from '../../assets/avatarExample.jpg'
import { Search } from '../search/Search'
import { useEffect, useState } from 'react'

const Card = ({ name, author, url, image, stars, watchers, id}) => {

  const [comment, setComment] = useState('')

  const handleSearch = (value) => {
    console.log(value);
    console.log(id);
    localStorage.setItem(`comm-${id}`, value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { 
      handleSearch(event.target.value);
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`comm-${id}`)) {
      setComment(localStorage.getItem(`comm-${id}`))
    }
  },[])
 
  return (
    <div className="card">

      <h4>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h4>

      <div className="author">
        <img src={image} alt="author avatar" />
        <span>{author}</span>
      </div>

      <div className="popularity">
        <img src={star} alt="stars" />
        <span>{stars}</span>
        <img src={eye} alt="views" />
        <span>{watchers}</span>
      </div>

      <Search
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        type={'card'}
        comment={comment}
      />

    </div>
  );
}
  
export {Card};