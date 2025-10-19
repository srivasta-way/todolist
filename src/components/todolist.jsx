import { useState,useEffect } from "react";
function todolist(){

    const [inputvalue,setinput] = useState("");
    const [list,setList] = useState([]);



    //used to load the data saved
    useEffect(()=>{
        const loadedlist = localStorage.getItem("todolist");
        if(loadedlist){
            setList(JSON.parse(loadedlist));
        }
    },[]);
    

    //used to add the updated list in local storage.
    useEffect(()=>{
        localStorage.setItem("todolist",JSON.stringify(list));
        console.log(list);
    },[list]);

    //adds item
    function additem(e){
        if (inputvalue.trim()!=""){
            setList([...list,inputvalue]); //add new item to array
            setinput(""); //clear input
        }
    }

    //deletes item
    function deleteitem(e,index){
            const updated = list.filter((_,i)=>i!=index); //deletes the desired item
            // const updated = list.splice(-1,1);  this for pop
            setList(updated);
    }

    return(
        <>
            <ul>
                {list.map((item,index)=>{
                    return <li key={index}>{item}{index} <button onClick={(event)=>deleteitem(event,index)}>delete</button></li>
                    
                })}
            </ul>
            <input type="text" value={inputvalue} onChange={(e)=>{setinput(e.target.value)}} placeholder="enter something" />
            <button onClick={additem}>add</button>
            <button onClick={()=>{setList([])}}>delete all</button>
        </>
    )
}

export default todolist;