import classes from './Storecomponent.module.css'
import data from '../../dummydata/data.json'
import Card from '../Card/Card'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Storecomponent (){
    const checkbox1Ref = useRef<HTMLInputElement>(null);
    const checkbox2Ref = useRef<HTMLInputElement>(null);
    const checkbox3Ref = useRef<HTMLInputElement>(null);
    const checkbox4Ref = useRef<HTMLInputElement>(null);


    const [dataArray, setDataArray] = useState(data);
    const [filters, setFilters] = useState<string[]>([])
    const [searchParams, setSearchParams] = useSearchParams()

    function checkboxHandler () {
        if (checkbox1Ref.current?.checked && !filters.includes('acoustic')) {
          setFilters(prevFilters => [...prevFilters, 'acoustic'])
        } else if (!checkbox1Ref.current?.checked && filters.includes('acoustic')) {
          setFilters(prevFilters => prevFilters.filter(filter => filter !== 'acoustic'))
        }
      
        if (checkbox2Ref.current?.checked && !filters.includes('electric')) {
          setFilters(prevFilters => [...prevFilters, 'electric'])
        } else if (!checkbox2Ref.current?.checked && filters.includes('electric')){
          setFilters(prevFilters => prevFilters.filter(filter => filter !== 'electric'))
        }
      
        if (checkbox3Ref.current?.checked && !filters.includes('bass')) {
          setFilters(prevFilters => [...prevFilters, 'bass'])
        } else if (!checkbox3Ref.current?.checked && filters.includes('bass')) {
          setFilters(prevFilters => prevFilters.filter(filter => filter !== 'bass'))
        }
      
        if (checkbox4Ref.current?.checked && !filters.includes('ukelele')) {
          setFilters(prevFilters => [...prevFilters, 'ukelele'])
        } else if (!checkbox4Ref.current?.checked && filters.includes('ukelele')) {
          setFilters(prevFilters => prevFilters.filter(filter => filter !== 'ukelele'))
        }
      }
    useEffect(() => {
        console.log(filters)
        setSearchParams({filter: filters})
    }, [filters])

    useEffect(() => {
        if(!searchParams.get('filter')){
            setDataArray(data)
        } else {
        let newArray = data.filter((data) => (filters.includes(data.type)))
        setDataArray(newArray)
        }
    }, [searchParams])


    return(
        <div className={classes.storecontainer}>
            <div className={classes.filter}>
                <ul>
                    <div style={{fontSize: '1.5rem'}}>Filter</div>
                    <li>
                        <input type="checkbox" id="acoustic" name="acoustic" ref={checkbox1Ref} onClick={checkboxHandler} ></input>
                        <label htmlFor="acoustic">Acoustic</label>
                    </li>
                    <li>
                        <input type="checkbox" id="electric" name="electric" ref={checkbox2Ref} onClick={checkboxHandler}></input>
                        <label htmlFor="electric">Electric</label>
                    </li>
                    <li>
                        <input type="checkbox" id="bass" name="bass" ref={checkbox3Ref} onClick={checkboxHandler}></input>
                        <label htmlFor="bass">Bass</label>
                    </li>
                    <li>
                        <input type="checkbox" id="ukelele" name="ukelele" ref={checkbox4Ref} onClick={checkboxHandler}></input>
                        <label htmlFor="ukelele">Ukelele</label>
                    </li>
                </ul>
            </div>
            <div className={classes.items}>
                {dataArray.map((item) => (
                    <div className={classes.cardcontainer}><Card imgUrl={item.imgUrl} name={item.id} price={item.price} /></div>
                ))}
            </div>
        </div>
    )
}