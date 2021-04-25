import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Noticia } from '../../models/noticia';
import { AppState } from '../../store/app-reducer';
import { CargarNoticiaxID } from '../../store/actions/noticias.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit {

  Noticias: Noticia[] = [];
  id = "";
  existeNoticia:boolean;

  constructor(private store: Store<AppState>
    , private ActivatedRoute: ActivatedRoute
  ) {
 
      this.SuscripcionesNoticia();

   
  }
  
  ngOnInit(): void {
    this.llenarNoticia();
  }
  private llenarNoticia() {
    this.store.dispatch(CargarNoticiaxID({ id: this.id }));
  }

  SuscripcionesNoticia() {
    this.id = this.ActivatedRoute.snapshot.params.id;
    this.store.select('noticias').subscribe(({ noticias, loading, error }) => {
      this.Noticias = noticias.filter(p => p.id == this.id);
      
    }
    );
  }
}
