import "./Home.css";
const Home = ()=>{
    return(
        <>
        <div id="mainHome">
            <div id="topSegment">       
                <aside id="sideSegment">
                    <p id="satisifedClients">Satisfied Clients</p>
                    <div id="barWrapper">
                        <div id="bar1"></div>
                        <div id="bar2"></div>
                    </div>
                    <p id="clientsPercent">89%</p>
                </aside>
                <div id="topMainContent">
                    <div id="topMainContentLeft">
                    <h1 id="mainHeader">Find The Perfect Place</h1>
                    <p id="mainInfo">100+ Million Unique Monthly Visitors to Realtor.com Allows for More closing Opprtunities. A Powerful Real Estate</p>
                    <button type="button" id="findHome">Find My Home</button>
                    </div>
                    <div id="topMainContentRight">
                        <div id="shapeWrapper">
                            <div id="yellowSemiCircle"></div>
                            <div id="blueQuarterCircle"></div>
                        </div>
                        <img src="../building.jpg" alt="building picture" id="buildingPicture"></img>
                        <div id="greenCircleWrapper">
                            <h1 id="greenSemiCircle">-30%</h1>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="bottomSegment">
                <div id="bottomContentLeft">
                    <img src="../city.jpg" alt="Picture of City" id="cityPicture"></img>
                    <div id="customerServiceWrapper">
                        <img src="../customerService.png" alt="Customer Service Icon" id="customerServiceIcon"></img>
                        <h1 id="customerServiceText">24/7 Customer Support</h1>
                    </div>
                </div>
                <div id="bottomContentRight">
                    <h2 id="bottomContentHeader">Our Reputation</h2>
                    <p id="bottomContentInfo">The Beliefs or Opinions that are generally held about someone or something.</p>
                    <footer id="bottomContentRightFooter">
                        <span className="bottomContentCard">
                            <h2 className="bottomCardHeader">300+</h2>
                            <h3 className="bottomCardLabel">Properties Built</h3>
                        </span>
                        <span className="bottomContentCard">
                            <h2 className="bottomCardHeader">400+</h2>
                            <h3 className="bottomCardLabel">Customers Happy</h3>
                        </span>
                        <span className="bottomContentCard">
                            <h2 className="bottomCardHeader">10+</h2>
                            <h3 className="bottomCardLabel">Years Experience</h3>
                        </span>
                    </footer>
                </div>
            </footer>
        </div>
        </>
    )

}

export default Home;