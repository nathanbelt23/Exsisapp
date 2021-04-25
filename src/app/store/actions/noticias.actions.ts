import { createAction, props } from '@ngrx/store';
import { Noticia } from '../../models/noticia';

export  const  CargarNoticias= createAction('[Noticias] Cargar Noticias');


export const CargarNoticiasSuccess = createAction(
    '[Noticias] Cargar Noticias Success',
    props<{ noticias: Noticia[] }>()
);

export const CargarNoticiasError = createAction(
    '[Noticias] Cargar Noticias Error',
    props<{ payload: any }>()
);
export const  CargarNoticiaxID= createAction(
    '[Noticias]  CargarNoticiaxID',
     props<{id:string}>()
);

