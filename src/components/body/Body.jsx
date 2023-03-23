import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPages, loadTotal } from '../../Redux/mainReducer';
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
  }, [countElements]);

  useEffect(() => {
    if (localStorage.getItem('response')) {
      setLoader('search')
      const response = JSON.parse(localStorage.getItem('response'))
      dispatch(addPages(response.items))
      dispatch(loadTotal(response.total_count))
      setLoader('stop')
    }
  }, [])
  
  return (
    <div className="body">
      {loader === 'stop'
        ? <div className="cardContainer">
          {pages.map((el, index) => {
            if (index <= endNumberElement && index >= startNumberElement) {
              return <Card
                key={el.id}
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
      {loader === 'stop'
        ? <Navigation
            setCountElements={setCountElements}
            countElements={countElements}
            setStartNumberElement={setStartNumberElement}
            setEndNumberElement={setEndNumberElement}
          />
        : null}
    </div>
  );
}
  
export {Body};
  