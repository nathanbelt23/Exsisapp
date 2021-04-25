
import { createReducer, on , State} from '@ngrx/store';
import { CargarNoticias, CargarNoticiasSuccess, CargarNoticiasError, CargarNoticiaxID } from '../actions/noticias.actions';
import { Noticia } from '../../models/noticia';



export interface NoticiasState {
    noticias: Noticia[],
    loaded: boolean,
    loading: boolean,
    error: any,
    id:string

}

export const noticiasInitialState: NoticiasState = {
    noticias: [],
    loaded: false,
    loading: false,
    error: null,
    id:null
}


const _noticiasReducer = createReducer(
    noticiasInitialState,
    on(CargarNoticias, state => ({ ...state, loading: true })),
    on(CargarNoticiasSuccess, (state, { noticias }) =>
    (
        {
            ...state,
            loading: false,
            loaded: true,
            noticias: [...noticias]
        }

    )
    ),

    on (CargarNoticiaxID, (state, {id})=>
    (
        {
           ...state, 
           loading:false,
           loaded:true,
           
        }

    )
),

    on(CargarNoticiasError, (state, { payload }) => (

        {
            ...state,
            loading: false,
            loaded: false,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        }

    ))
);

export function noticiasReducer(state: any, action: any) {
    return _noticiasReducer(state, action);
}