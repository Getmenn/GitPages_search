import './search.scss'
import searchGlass from '../../assets/searchGlass.svg'
import pencil from '../../assets/pencil.svg'
import { useRef} from 'react';

const Search = ({ handleKeyDown, handleSearch, type, comment }) => {
    
    const searchRef = useRef(null)
    const handleSearchClick = () => {
        if (searchRef.current.value.length >= 3) {
            handleSearch(searchRef.current.value);
        }
    }

    return (
        <div className={`search ${type === 'card' ? 'small' : ''}`}>
            <input
                type="text"
                placeholder='Начните вводить текст для поиска (не менее трех символов)'
                onKeyDown={handleKeyDown}
                ref={searchRef}
                defaultValue={comment}
            />
            <img
                src={type === 'card' ? pencil : searchGlass}
                alt="shearch"
                onClick={handleSearchClick}
            />
        </div>
    );
}
  
export {Search};