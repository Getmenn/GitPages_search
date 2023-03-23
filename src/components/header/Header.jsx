import './header.scss'
import { Search } from '../search/Search';
import { useDispatch } from 'react-redux';
import { addPages, loadTotal, newPages } from '../../Redux/mainReducer';
import { GithubApi } from '../../api/GithubApi';
import { useEffect, useState } from 'react';

const Header = ({setLoader}) => {

  const dispatch = useDispatch();
  const [comment, setComment] = useState('')

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setComment(localStorage.getItem('search'))
    }
  }, [])

  const handleSearch = async (value) => {
    setLoader('search')
    const response = await GithubApi.getPages(value)
    localStorage.setItem('search', value)
    localStorage.setItem('response', JSON.stringify(response))
    dispatch(newPages(response.items))
    dispatch(loadTotal(response.total_count))
    setLoader('stop')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { 
      handleSearch(event.target.value);
    }
  }
 
  return (
    <div className="header">
      <Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} comment={comment} />
    </div>
  );
}
  
export {Header};