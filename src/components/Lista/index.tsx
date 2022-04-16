import React, { useState } from "react";
import { isTemplateExpression } from "typescript";
import style from './Lista.module.scss';
import Item from './Item';

function Lista(){
    const [tarefas, setTarefa] = useState([{
        tarefa: 'React',
        tempo: '01:30:00'
    },
    {
        tarefa: 'JavaScript',
        tempo: '03:00:00'
    }
    ]);
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={()=> {
                setTarefa([...tarefas, {tarefa: "Estudando estado", tempo:"05:00:00"}]);
            }}
            >Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) =>(
                   <Item 
                    key={index}
                    {...item}
                   />
                ))}
                
            </ul>
        </aside>
    )
}

export default Lista;