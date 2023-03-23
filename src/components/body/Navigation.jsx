import { useEffect, useState } from 'react'
import {GithubApi} from '../../api/GithubApi'
import arrow from '../../assets/arrow.svg'

const Navigation = ({ setCountElements, countElements, setStartNumberElement, setEndNumberElement, handleSelectPage}) => {

    const [numbersPages, setNumbersPages] = useState([1, 2, 3])
    const [activePage, setActivePage] = useState(1)
    
    useEffect(() => { //сбрасывать страницу при изменении отображения колличества страниц
        setNumbersPages([1, 2, 3])
        setActivePage(1)
    }, [countElements])
    
    const handlePagesCount = (event) => {
        setCountElements(Number(event.target.value))
    }

    const handlePrev = () => {
        if (numbersPages[0] !== 1) {
            setNumbersPages(numbersPages.map(el => el - 1))
        } 
    }

    const handleNext = () => {
        setNumbersPages(numbersPages.map(el => el + 1))
    }

    

    return (
        <div className="navigation">
            <select onChange={handlePagesCount}>
                <option value='5'>6</option>
                <option value='11'>12</option>
                <option value='29'>30</option>
            </select>

            <div className="navigationContainer">
                <div className="navBox" onClick={handlePrev}>
                    <img src={arrow} alt="arrow left" />
                </div>
                <div
                    className={`navBox ${activePage === numbersPages[0] ? 'active' : ''}`}
                    onClick={() => handleSelectPage(numbersPages[0], setActivePage)}
                >
                    {numbersPages[0]}
                </div>
                <div
                    className={`navBox ${activePage === numbersPages[1] ? 'active' : ''}`}
                    onClick={() => handleSelectPage(numbersPages[1], setActivePage)}
                >
                    {numbersPages[1]}
                </div>
                <div
                    className={`navBox ${activePage === numbersPages[2] ? 'active' : ''}`}
                    onClick={() => handleSelectPage(numbersPages[2], setActivePage)}
                >
                    {numbersPages[2]}
                </div>
                <div className='navBox' onClick={handleNext}>
                    <img src={arrow} alt="arrow right" />
                </div>
            </div>
        </div>
    )
}
    
  export {Navigation};