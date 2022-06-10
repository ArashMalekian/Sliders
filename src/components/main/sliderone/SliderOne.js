import React , {useEffect} from 'react'
import {useDispatch , useSelector } from 'react-redux'
import { getFilms } from '../../../redux/getfilms/GetFilmsAction'


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
                state.data.map(item => 
                    <h1>
                        {item.id}
                    </h1>
                )
            }
        </div>
    )
}
