import { useEffect, useState } from "react";
import Nav from './Nav';
import Home from './Home';
import './App.css';
const App = ()=>{
    const [page, setPage] = useState(0);
    const changePage = (e)=>{
        //console.log(typeof(e.target.getAttribute('page-value')));
        setPage(Number(e.target.getAttribute('page-value')));
    }
    const handleRegister = ()=>{
        setPage(Number(5));

    }
    const goHome = ()=>{
        setPage(Number(0));
    }
    return(
    <>
        <Nav handleButtonClick={changePage} handleRegister={handleRegister} goHome={goHome}/>
        {page===0?<Home />:undefined}
    </>
    )
}
export default App;