import React, {useState} from 'react';

export default function Ap() {
    const [item, setitem] = useState("");
    const[op,setop]=useState([]);

    const inputevent=(event)=>{
        setitem(event.target.value);
    };
    const sub=(event)=>{
        setop([...op,{id:op.length,value:item}]);
        console.log(op);
        setitem('');
    };
    const del=(id)=>{
        console.log(op);
        const newa=op.filter((ele)=>{
           return id!==ele.id;
        });
        setop(newa);
        // console.log(newa);
    };
    return (
        <>
        <div className="main">
            <div className="container">
                
                <h1 className="heading">TO-DO LIST</h1>
                <div className="additem"><input type="text" placeholder="Add items" onChange={inputevent} value={item}></input>
                    <button className="bt" onClick={sub}>+</button>
                </div>
                <ul className="ulitem">
                    {op.map(list=>{
                    return <li className="liitem" key={list.id}> <button className="buttn" onClick={()=>{ del(list.id)} }><i class="far fa-trash-alt"></i></button>{list.value} </li>
                    })}
                </ul>
                
            </div>
        </div>
        </>
    );
};
