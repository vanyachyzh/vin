import { useDispatch, useSelector } from "react-redux";
import { addError } from "../../store/reducer";
import "./button.css"

function Button (){

    let dispatch = useDispatch()
    let hiddenError =()=> dispatch(addError("hidden"))

    return(
        <div onClick={hiddenError} className="button-list">
            <img src={require("../../img/icon2.png")}></img>
        </div>
    )
}

export default Button;