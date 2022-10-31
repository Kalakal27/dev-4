import React,{useState} from 'react'
import './App.css'

function Dog(){
    const [url, setUrl] = useState('')
    function fetch_data(){

        fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0").then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('request failed');
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes[0].url)
        })
    }
    return (
        <div className="dog___main">
            <img src={url} className="dog___img" />
            <button className='dog___btn' onClick={fetch_data}>generate !</button>
        </div>
    )
}

export default Dog