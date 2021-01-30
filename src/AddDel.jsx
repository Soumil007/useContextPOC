import React,{useContext} from "react";
import {ToDoContext} from "./App";

function AddDel(){
    const {addItem,remItem}  = useContext(ToDoContext)

    const item = {
        id:"I005",
        name:"NoteBook"
    }
    function handleAddItem(e){
        
        addItem(item)
    }
    function handleDelItem(e){
    
        remItem();
    }
    return <>
        <button onClick={handleAddItem}>Add</button>
        <button onClick={handleDelItem}>Del</button>
    </>
}

export default AddDel