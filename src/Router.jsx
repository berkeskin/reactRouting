import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home";
import { Posts } from "./Posts";
import { NotFound } from "./NotFound";
import App from "./App";

export const Router =() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/App" Component={App}></Route>
                <Route path="/Home" Component={Home}></Route>
                <Route path="/Posts" element={<Posts />}></Route>
                <Route path="*" Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>
    );
};