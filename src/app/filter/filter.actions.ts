import {createAction, props} from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction('[Filter] Set Filtro',props<{filtro:filtrosValidos}>());
export const limpiarCompletados = createAction('[Filter] limpiar completados');