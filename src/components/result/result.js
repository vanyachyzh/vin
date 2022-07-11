import { useState } from "react";
import { useEffect, useRef } from "react";
import "./result.css"
import { useSelector } from "react-redux";



function Result() {
    let [currentCar, setCurrentCar] = useState([])
    let vinNumber = useSelector(state => state.vin.vin)
    let history = useSelector(state => state.vin.history)

    useEffect(() => {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/" + vinNumber + "?format=json")
            .then(r => r.json())
            .then(r => {
                setCurrentCar(r.Results.filter((e) => e.Value !== null && e.Value !== "" && e.Value !== 0 && e.Value !== "0" && e.Variable !== "Error Text"))
            })
    }, [vinNumber])

    function handlerHistory(e) {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/" + e.target.innerText + "?format=json")
            .then(r => r.json())
            .then(r => {
                setCurrentCar(r.Results.filter((e) => e.Value !== null && e.Value !== "" && e.Value !== 0 && e.Value !== "0" && e.Variable !== "Error Text"))
            })
    }

    var five = ["1FTFW1CT5DFC10312", "1FTFW1CT5DFC10312", "1FTFW1CT5DFC10312", "1FTFW1CT5DFC10312", "1FTFW1CT5DFC10312"]
    return (
        <>
            <div className="content">

                <ul className="recent-results">
                    {history.map((e) => {
                        return (<li className="historyResult" onClick={(e) => { handlerHistory(e) }} key={Math.random()}>
                            <div >{e}</div>
                        </li>)
                    })}
                </ul>

                {currentCar.map((e) => {
                    return (<div className="item" key={Math.random()}>
                        <div className="variable">{e.Variable}:</div>
                        <div className="value">{e.Value}</div>
                    </div>)
                })}



                <div className="vl"></div>
            </div>
        </>
    )
}

export default Result;