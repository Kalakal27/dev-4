import React from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

   const allInfo = {
    title: "",
    description: "",
    imgUrl: "",
   }

    const [things, setThing] = React.useState(allInfo)

    const [allUglys, setAllUglys] = React.useState([])

    // const [uglyList, setUglyList] = React.useState([])

    // const [editUgly, setEditUgly] = React.useState([])

    function uglyApi() {
        axios.get("https://api.vschool.io/timothy/thing")
            .then(res => setAllUglys(res.data))
            .catch(error => console.log(error))
    }
    

    function handleChange(e){
 
        const { name, value} = e.target 
        setThing(prevThing=>({
            ...prevThing,
            [name]: value
        }))
        

    }
    React.useEffect(()=>{
        uglyApi()
    },
    []
    )

    function handleSubmit(e){
        e.preventDefault()
        const newUgly={title:things.title, description:things.description, imgUrl:things.imgUrl}
        console.log(newUgly)
        axios.post("https://api.vschool.io/timothy/thing", newUgly)
        .then(res=>setAllUglys(prevUgly=>([...prevUgly,res.data])))
        .catch(error=>console.log(error))
        setAllUglys(allInfo)
    }

    function handleDelete(index){
        console.log(index)
        axios.delete("https://api.vschool.io/timothy/thing/"+index._id)
        .then(res=>setAllUglys(prevUgly=>{
            return prevUgly.filter(ugly=>ugly._id!==index._id)
        }))
        .catch(error=>console.log(error))
    }

    const [edit, setEdit] = React.useState({
        title: "", 
        description: "", 
        imgUrl: "",
    })

    const [isEditing, setIsEditing] = React.useState(-1)

    function handleEdit(id){
       setIsEditing(-1)
       console.log(id)
       console.log(edit)
       axios.put("https://api.vschool.io/timothy/thing/"+id,edit)
       .then(res=>setAllUglys(prevUgly=>prevUgly.map(ugly=>{
        return ugly._id===id ? edit:ugly
       })))
    }
    function handleNewChange(e){

        const {name, value} = e.target
        setEdit(prevEdit=>({
            ...prevEdit,
            [name]: value

        }))
    }
    return(
        <ThemeContext.Provider value={{
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleNewChange,
        setThing,
        setAllUglys,
        setIsEditing,
        setEdit,
        allUglys,
        edit,
        things,
        isEditing,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
 export{ThemeContext, ThemeContextProvider}














export default ThemeContext