import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosValidos } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";

export interface AppState{
    todos:Todo[],
    filtro:filtrosValidos
    
}

export const appReducers:ActionReducerMap<AppState>={
    todos:todoReducer, 
    filtro:filterReducer
}