import './input.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addVIN,addHistory, addError  } from '../../store/reducer';
import { useRef } from 'react';
import { useEffect } from 'react';

function Input (){
    let dispatch = useDispatch()
    let stateError = useSelector(state=>state.vin.error)
    let inputRef = useRef()
    let errorRef = useRef()
    let recentResults = []
    let visibleError = ()=> dispatch(addError("visible"))
    let hiddenError = ()=> dispatch(addError("hidden"))

    useEffect(()=>{
        let error = errorRef.current
        error.style.visibility = stateError
    })

    function handlerClick(){
        let input = inputRef.current.value
        let reg = /[а-яА-ЯЁё-і]/;

        if (input.length!=17||input.match(reg)){
            visibleError()
        }else{
            hiddenError()

            let pushVin = () => dispatch(addVIN(input))
            pushVin()

            recentResults =[
                ...recentResults,
                input
            ]

            if (recentResults.length>5){
                recentResults.shift()
            }

            let pushHistory = () =>dispatch(addHistory(recentResults))
            pushHistory()

            inputRef.current.value = ""
    

        }
    }


    return(
        <div className='input-wrapper'>
            <input ref={inputRef} className='input' type="text" placeholder='Search...'></input>
            <span ref={errorRef} className="error">VIN must have 17 symbols and not contain prohibited characters</span>
            <button onClick={handlerClick} className='button-result'>
                <img className='icon' src={require("../../img/icon.png")}></img>
            </button>
        </div>
    )
}

export default Input;
