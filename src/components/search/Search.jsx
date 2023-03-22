import './search.scss'
import searchGlass from '../../assets/searchGlass.svg'
import pencil from '../../assets/pencil.svg'
import { useEffect, useRef, useState } from 'react';

const Search = ({ handleKeyDown, handleSearch, type }) => {
    
    const searchRef = useRef(null)
    const [cardStatus, setCardStatus] = useState(false)

    const handleSearchClick = () => {
        handleSearch(searchRef.current.value);
    }

    const styleSearch = {
        width: '405px',
        height: '52px',
    }

    const styleInput = {
        paddingLeft: '14px',
        fontWeight: '400',
        fontSize: '18px',
    }

    const styleImg = {
        width: '59px',
        height: '50px',
    }

    useEffect(() => {
        if (type === 'card') {
            setCardStatus(true)
        }
    }, [])
 
    return (
        <div className="search" style={cardStatus ? {...styleSearch} : {}}>
            <input
                type="text"
                placeholder='book title'
                onKeyDown={handleKeyDown}
                ref={searchRef}
                style={cardStatus ? {...styleInput} : {}}
            />
            <img
                src={cardStatus ? pencil : searchGlass}
                alt="shearch"
                onClick={handleSearchClick}
                style={cardStatus ? {...styleImg} : {}}
            />
        </div>
    );
}
  
export {Search};