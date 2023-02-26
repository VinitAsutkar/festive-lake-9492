import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";

const InitialState={Data:[],isError:false,isLoading:false};
const Reducer=(State,Action)=>{
    switch(Action.Type){
        case "Request": return {...State,isLoading:true,isError:false}
        case "Success": return {...State,Data:Action.Payload,isLoading:false,isError:false}
        case "Error": return {...State,isError:true}
        default: return State
    }
}
export default function Products({Endpoint}){
    const [State,Dispatch]=useReducer(Reducer,InitialState);
    const {Data,isError,isLoading}=State;
    useEffect(()=>{
        Dispatch({Type: "Request"})
        axios.get(`http://localhost:3000/${Endpoint}`).then((Response)=>Dispatch({Type:"Success",Payload:Response.data})).catch(()=>Dispatch({Type:"Error"}))
    },[])
    return (
        <SimpleGrid columns={[2, 3, 4]} spacing={'20px'} marginTop={'50px'}>
            {
                Data.map((Item)=><ProductCard key={Item.id} {...Item}/>)
            }
        </SimpleGrid>
    )
}