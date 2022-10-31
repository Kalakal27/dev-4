import React, {useContext} from "react";
import Uglylist from "./uglylist";


export default function ugly(){

    const context = useContext(ThemeContext)

    return(
        <>
        <div className="main">
            <form className="form">
                <input
                type="text"
                className="input"
                placeholder="Title"
                name="titleA"
                value={allInfo.title}
                onChange = {handleChange}
                ></input>

                <input
                type="text"
                className="input"
                placeholder="description"
                name="descriptionB"
                value={allInfo.description}
                onChange = {handleChange}
                ></input>
            </form>
        </div>

        </>
    )

}