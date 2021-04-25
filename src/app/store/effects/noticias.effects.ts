import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import * as actionsNoticias from '../actions/noticias.actions';

import { tap, mergeMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { NoticiasService } from 'src/app/services/noticias.service';



@Injectable()
export class NoticiasEffects {

    constructor(
        private actions$: Actions,
        private NoticiasService: NoticiasService
    ){}

    cargarPersonas$ = createEffect(
        () => this.actions$.pipe(
            ofType( actionsNoticias.CargarNoticias ),
            mergeMap(
                () => this.NoticiasService.obtenerNoticias()
                    .pipe(
                        map( users => actionsNoticias.CargarNoticiasSuccess({ noticias: users }) ),
                        catchError( err => of(actionsNoticias.CargarNoticiasError({ payload: err })) )
                    )
            )
        )
    );

    cargarPersonasID$ = createEffect(
        () => this.actions$.pipe(
            ofType( actionsNoticias.CargarNoticiaxID ),
            mergeMap(
                (action) => this.NoticiasService.obtenerNoticiaId(action.id)
                    .pipe(
                        map( users => actionsNoticias.CargarNoticiasSuccess({ noticias: users }) ),
                        catchError( err => of(actionsNoticias.CargarNoticiasError({ payload: err })) )
                    )
            )
        )
    );

/*
    borrarPersonas$ = createEffect(
        () => this.actions$.pipe(
            // ofType( borrarPersonaActions.borrarPersona ),
            mergeMap(
                (action) => this.PersonaService.borrarPersona(action.id)
                    .pipe(
                        map( users => borrarPersonaActions.borrarPersonaSuccess({ id:action.id }) ),
                        catchError( err => of(borrarPersonaActions.borrarPersonaError({ payload: err })) )
                    )
            )
        )
    );
*/

}

