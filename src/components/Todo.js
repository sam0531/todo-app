import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import "./todo.css";

const Todo = () => {
  const [inputdata, SetInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption>Add Your List Here✌️</figcaption>
          </figure>
          <div className='addItems'>
            <input type="text" placeholder='✍️ Add Items...'
              value={inputdata}
              onChange={(event) => SetInputData(event.target.value)}
            />
            <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputdata), SetInputData(''))}></i>
          </div>
          <div className='showItems'>
            {
              list.map((elem) => {
                return (
                  <div className='eachItems' key={elem.id}>
                    <h3>{elem.data}</h3>    
                    <div className='todo-btn'>          
                    <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                     </div>
                  </div>
                )
              })
            }
          </div>
                     <div className='showItems'>
                     <button className='btn effect04' data-sm-link-text="remove All"
                     onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>

                     </div>
        </div>
      </div>
    </>
  )
}

export default Todo