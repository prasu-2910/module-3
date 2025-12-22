
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Component6=()=>{
const {e}=useContext(AppContext)

return(

    <> <h4>this is prop e:{e}</h4></>
)
}
export default Component6;