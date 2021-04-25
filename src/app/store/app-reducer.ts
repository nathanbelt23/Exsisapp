import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer/index';

export interface AppState {
      noticias:reducers.NoticiasState;
     
 }
 
 export const appReducers: ActionReducerMap<AppState> = {
  /*personas:reducers.personasReducer,
  borrarPersona:reducers.personasBorrarReducer*/
     noticias:    reducers.noticiasReducer


 }