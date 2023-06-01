import { createReducer, on } from '@ngrx/store';
import { borrarTodo, crearTodo, editarTodo, marcarTodos, toggleTodo } from './todo.actions';
import { Todo } from './models/todo.model';
import { limpiarCompletados } from '../filter/filter.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a  thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del capitán'),
];
export const todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleTodo, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      }else{
        return todo;
      }
    });
  }),
  on(editarTodo, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      }else{
        return todo;
      }
    });
  }),
  on(borrarTodo,(state, {id})=>state.filter(todo => todo.id !== id)),
  on(marcarTodos, (state, {completado})=>state.map(todo=>{
      return {
        ...todo,
        completado: completado
      }
    })
  ),
  on(limpiarCompletados,(state)=>state.filter(todo => !todo.completado)),
);
