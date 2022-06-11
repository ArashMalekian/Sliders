import React , {useEffect} from 'react'
import {useDispatch , useSelector } from 'react-redux'
import { getFilms } from '../../../redux/getfilms/GetFilmsAction'
import Carousel from 'react-elastic-carousel'
import  { consts } from 'react-elastic-carousel';
import classes from './SliderOne.module.scss'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ]

const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? 'قبل' : 'بعد'
    return (
      <button className={classes.arrbtn} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
}

export const SliderOne = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.filmsState)
    console.log(state);

    useEffect(() => {
        dispatch(getFilms(1))
      return () => {
      };
    }, [])
    return (
        <div>
            {
                state.loading ?
                <h1>please wait . . . </h1> :
                <Carousel className={classes.carouselcontainer}  pagination={false}  breakPoints={breakPoints} focusOnSelect={true} renderArrow={myArrow} >{
                state.data.map(item => 
                        <div className={classes.carouselitem} key={item.id} >
                            <img alt={item.id} src={item.poster} />
                            {item.title}
                        </div>
                )}
                </Carousel>
            }
        </div>
    )
}
