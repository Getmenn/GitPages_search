import './header.scss'
import { Search } from '../search/Search';
import { useDispatch } from 'react-redux';
import { addPages, loadTotal } from '../../Redux/mainReducer';
import { GithubApi } from '../../api/GithubApi';

const Header = ({setLoader}) => {

  const dispatch = useDispatch();

  const handleSearch = async (value) => {
    setLoader('search')
    const response = await GithubApi.getPages(value)
    dispatch(addPages(response.items))
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
      <Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
    </div>
  );
}
  
export {Header};