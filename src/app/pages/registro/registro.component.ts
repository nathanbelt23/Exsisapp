import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ProgramasService } from '../../services/programas.service';
import { Profesiones } from '../../models/profesiones';
import Swal from 'sweetalert2';
import { RegistroService } from '../../services/registro.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formPersona: FormGroup;
  validatorsSoloLetras: string = "^[A-Za-z-ñÑáéíóúÁÉÍÓÚ ]+$";
  Profesiones: Profesiones[] = [];
  constructor(
    private fb: FormBuilder,
    private ProgramasService: ProgramasService,
    private RegistroService:RegistroService

  ) {
    this.formPersona = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern(this.validatorsSoloLetras)]],
        family_name: ['', [Validators.required, Validators.pattern(this.validatorsSoloLetras)]],
        email: ['', [Validators.email]],
        phone: ['', [Validators.minLength(0), Validators.maxLength(10), Validators.min(1000000000), Validators.max(9999999999)]],
        program: ['', [Validators.required]],
        comment: ['', [Validators.required]],
      }
    );
  }

  ngOnInit(): void {
    this.ProgramasService.obtenerProgramas().subscribe(
      p => {
        this.Profesiones = p.filter(
          (thing, i, arr) => arr.findIndex(t => t.id === thing.id) === i
        );

        this.getControl("program").setValue("0");
      }
    );
  }


  getControl(control: string) {
    return this.formPersona.get(control);

  }

  unique = function (a) {
    return function () { return this.filter(a) }
  }(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
  });

  getValidControl(control: string) {
    return this.getControl(control).invalid && this.getControl(control).touched;
  }


  guardar() {
   

    this.RegistroService.guardarRegistro(this.formPersona.value).subscribe(

      p=>{
        
    this.formPersona.reset();
     Swal.fire({
      title: 'Informacion',
      text: 'registro exitoso',
      icon: 'success',
      timer: 1000,
      showConfirmButton: false

    });    
      }, (err:any)=>{


        console.warn('Error');
        console.warn(err.statusText);
        Swal.fire({
          title: 'Informacion',
          text: 'No se pudo guardar',
          icon: 'error',
          timer: 1800,
          
    
        }); 

      }

    );
  
  }

}
