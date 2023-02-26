import { Route, Routes } from "react-router-dom";
import AyurvedicCare from "../Pages/AyurvedicCare";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductInfo from "../Pages/ProductInfo";
export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ayurvedic-care" element={<AyurvedicCare/>}/>
            <Route path="/ayurvedic-care/:ID" element={<ProductInfo Endpoint={"ayurvedic-care"}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}