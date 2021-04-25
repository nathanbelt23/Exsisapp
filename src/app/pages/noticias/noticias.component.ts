import { Component, OnInit } from '@angular/core';

import { Noticia } from '../../models/noticia';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-reducer';
import { CargarNoticias } from '../../store/actions/noticias.actions';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  Noticias: Noticia[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('noticias').subscribe(({ noticias, loading, error }) => {
      this.Noticias = noticias;
      
    }
    );
  }

  ngOnInit(): void {
    this.llenarNoticias();

  }


  private llenarNoticias() {
    this.store.dispatch(CargarNoticias());
  }

}
