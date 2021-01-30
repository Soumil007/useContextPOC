import React,{useContext} from "react";
import AddDel from "./AddDel";
import {ToDoContext} from "./App";
function ToDo(){

    const screenWidth = window.screen.width;
    const styles = {
        "ToDoDiv":{
            backgroundColor:"skyblue",
            padding:"10px",
            width:"600px",
            paddingLeft:(screenWidth-600)/2,
            paddingRight:(screenWidth-600)/2
        },
        "itemsDiv":{
            backgroundColor:"blue",
            color:"white",
            fontSize:"30px"
        }
    }

    const {items,remItemById} = useContext(ToDoContext)

    function handleDelId(e){
        
        remItemById(e.target.value);
        
    }

    return<div className="ToDoDiv" style={styles.ToDoDiv}>
        {
            items.map((item)=>(
                <div className="itemsDiv" style={styles.itemsDiv} key={Math.random()}>
                    <span>{item.id}</span>
                    <span> : {item.name}</span>
                    <button onClick={handleDelId} value={item.id}>DelById</button>
                </div>
            ))
        }    
        <AddDel />
    </div>
}

export default ToDo;