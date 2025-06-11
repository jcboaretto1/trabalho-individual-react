import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/home";
import { Questao01 } from "../pages/questao01/q1";
import { Questao02 } from "../pages/questao02/q2";
import { Questao03 } from "../pages/questao03/q3";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/questao01" element={<Questao01/>}/>
            <Route path="/questao02" element={<Questao02/>}/>
            <Route path="/questao03" element={<Questao03/>}/>

        </Routes>
    )
}