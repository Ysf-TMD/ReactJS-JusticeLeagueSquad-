import React , {Component}from "react";
import CharacterList from "./CharacterList.jsx";
import "../styles/index.css"
import HeroList from "./HoreList.jsx";
import SquadStats from "./SquadStats.jsx";
class App extends  Component{
    render(){
        return (
            <div className={"App"}>
                <h1>SuperSquad</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <CharacterList/>
                        </div>
                        <div className="col-md-4">
                            <HeroList/>
                        </div>
                        <div className="col-md-4">
                            <SquadStats/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default  App