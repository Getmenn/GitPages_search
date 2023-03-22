import './card.scss'
import star from '../../assets/star.svg'
import eye from '../../assets/eye.svg'
import avatarExample from '../../assets/avatarExample.jpg'
import { Search } from '../search/Search'

const Card = ({name, author, url, image, stars, watchers}) => {

  const handleSearch = (value) => {
    console.log(value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { 
      handleSearch(event.target.value);
    }
  }
 
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

      <Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} type={'card'} />

    </div>
  );
}
  
export {Card};