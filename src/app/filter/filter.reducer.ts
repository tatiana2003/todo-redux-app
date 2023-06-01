import { createReducer, on } from '@ngrx/store';
import {
  filtrosValidos,
  limpiarCompletados,
  setFiltro,
} from './filter.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export const initialState: filtrosValidos = 'todos';
export const filterReducer = createReducer<filtrosValidos | any>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);
