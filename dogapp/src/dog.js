import React from "react";
import axios from "axios";
import img1 from './images/dog1.jpg';
import img2 from './images/dog2.jpg';
import img3 from './images/dog3.jpg';
import img4 from './images/dog4.jpg';
import img5 from './images/dog5.jpg';
import img6 from './images/dog6.jpg';
import img7 from './images/dog7.jpg';
import img8 from './images/dog8.jpg';
import img9 from './images/dog9.jpg';
import img10 from './images/dog10.jpg';


export default function Image(){

   

    const [allDog, setAllDog]=React.useState([])

    React.useEffect(()=> {
        axios.get("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
        .then(res => {
            console.log(res.data)
            setAllDog(res?.data)
        })
        .catch(err=>console.log(err))
    }, [] )
    

    const mappedItems = allDog.map((item)=> { 
        console.log(item.name)
        console.log(item.image.url)
    })

    return(
        
        <div className="image">
            {/* {allDog.map(())} */}
            {mappedItems}
            {/* <h3 className="affen">Affenpinscher</h3>
            <h3 className="afghan">AfghanHound</h3>
            <img className="Affenpinscher" src={img1} alt=""></img>
            <img className="AfghanHound" src={img2} alt=""></img>
            <img className="huntingdog" src={img3} alt=""></img>
            <img className="terrier" src={img4} alt=""></img>
            <img className="akbash" src={img5} alt=""></img>
            <img className="akita" src={img6} alt=""></img>
            <img className="bulldog" src={img7} alt=""></img>
            <img className="husky" src={img8} alt=""></img>
            <img className="malamute" src={img9} alt=""></img>
            <img className="americanbulldog" src={img10} alt=""></img>
            */}


        </div>
            
    )
}