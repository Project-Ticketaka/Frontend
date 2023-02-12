
import { useLocation } from "react-router";
import DeatilView from "./Views/DeatilView"

const Detail = () => {
    const { state } = useLocation();
    console.log(state)
    
    return (
        <DeatilView detail={state}/>
    )
}

export default Detail