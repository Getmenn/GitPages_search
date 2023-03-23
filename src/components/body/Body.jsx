import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GithubApi } from '../../api/GithubApi';
import { addPages, loadTotal, newPages } from '../../Redux/mainReducer';
import { Card } from '../cardOnPage/Card';
import './body.scss'
import { Navigation } from './Navigation';

const Body = ({loader, setLoader}) => {

  const { pages } = useSelector(state => state.main)
  const dispatch = useDispatch();
  const [ countElements, setCountElements] = useState(5) //колличесво элементов на странице
  const [ startNumberElement, setStartNumberElement ] = useState(0) //номер первого элемента на странице
  const [endNumberElement, setEndNumberElement] = useState(5) //номер последнего элемента на странице

  useEffect(() => {
    setStartNumberElement(0);
    setEndNumberElement(countElements);
    console.log(countElements);
  }, [countElements]);

  useEffect(() => {
    if (localStorage.getItem('response')) {
      setLoader('search')
      const response = JSON.parse(localStorage.getItem('response'))
      dispatch(newPages(response.items))
      dispatch(loadTotal(response.total_count))
      setLoader('stop')
    }
  }, [])

  const handleSelectPage = async (pageNumber, setActivePage) => {
    setLoader('search')
    const startNumber = countElements * pageNumber - countElements + pageNumber - 1
    const endNumber = countElements * pageNumber + pageNumber - 1
    setStartNumberElement(startNumber)
    setEndNumberElement(endNumber)
    handleLoadPages(pageNumber, startNumber)
    setActivePage(pageNumber)
    
  }

  
  const handleLoadPages = async (pageNumber, startNumber) => {
    const responseStorage = JSON.parse(localStorage.getItem('response'))

    if (startNumber >= responseStorage.items.length || countElements === 29) {
      const response = await GithubApi.getPagesFromNumber(localStorage.getItem('search'), pageNumber, countElements + 1)
      dispatch(addPages(response.items))
      localStorage.setItem('response', JSON.stringify({...responseStorage, items: [...responseStorage.items, ...response.items]})) 
    }
    else if(countElements === 11 && startNumber === responseStorage.items.length - 6){
      const response = await GithubApi.getPagesFromNumber(localStorage.getItem('search'), pageNumber, countElements + 1)
      dispatch(addPages(response.items))
      localStorage.setItem('response', JSON.stringify({...responseStorage, items: [...responseStorage.items, ...response.items]})) 
    }
    setLoader('stop')
  }
  
  return (
    <div className="body">
      {loader === 'stop'
        ? <div className="cardContainer">
          {pages.map((el, index) => {
            if (index <= endNumberElement && index >= startNumberElement) {
              return <Card
                key={`${el.id}${el.html_url}`}
                name={el.name}
                author={el.owner.login}
                url={el.html_url}
                image={el.owner.avatar_url}
                stars={el.stargazers_count}
                watchers={el.watchers}
                id={el.id}
              />
            }
          }
          )}

          </div>
        : <h1>{loader === 'search' ? 'Поиск проектов...' : 'Введите текст для поиска' }</h1>
      }
      {loader === 'stop' || loader === 'search'
        ? <Navigation
            setCountElements={setCountElements}
            countElements={countElements}
            setStartNumberElement={setStartNumberElement}
            setEndNumberElement={setEndNumberElement}
            handleSelectPage = {handleSelectPage}
          />
        : null}
    </div>
  );
}
  
export {Body};
  