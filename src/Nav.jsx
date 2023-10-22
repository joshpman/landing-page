const Nav = ({handleButtonClick, handleRegister, goHome})=>{
    return(
        <nav id="topNav">
            <img id="topLogo" onClick={goHome} src="../jpLogo.webp" alt="JP" draggable="false"></img>
            <div id="mainOptions">
                <button page-value={0} onClick={handleButtonClick} type="button" className="navCenterButton" id="Home">Home</button>
                <button page-value={1} onClick={handleButtonClick} type="button" className="navCenterButton" id="Features">Features</button>
                <button page-value={2} onClick={handleButtonClick} type="button" className="navCenterButton" id="Services">Services</button>
                <button page-value={3} onClick={handleButtonClick} type="button" className="navCenterButton" id="FAQ">FAQ</button>
                <button page-value={4} onClick={handleButtonClick} type="button" className="navCenterButton" id="Places">Places</button>
            </div>
            <button onClick={handleRegister} type="button" id="registerButton">Register Now</button>
        </nav>
    )
}

export default Nav;