import React,{useState,createContext} from "react";
import ToDo from "./ToDo";

export const ToDoContext = createContext();
function App() {

  
  let [items,setItems] = useState([
    {
      id:"I001",
      name:"Pencil"
    },
    {
      id:"I002",
      name:"Pen"
    }
  ])

  const addItem = (item) =>{
    
    setItems([...items,item])
  }

  const remItem = () =>{
    
    setItems(items.filter((item,index)=>index<items.length-1))
  }

  const remItemById = (id) =>{
    setItems(items.filter((item,index)=>item.id!==id))
  }

  return (
    <div className="App">
      <ToDoContext.Provider value={{items,addItem,remItem,remItemById}}>
        <ToDo />
      </ToDoContext.Provider>
    </div>
  );
}

export default App 
