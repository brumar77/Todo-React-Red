import React from 'react'
import ReactDOM from 'react-dom/client'
//import { HooksApp } from './HooksApp'

import './index.css'
import { TodoApp } from './08-useReducer/TodoApp'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer';
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CustomWithCustomHook } from './01-useState/CustomWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp />
  //</React.StrictMode>,
)
