import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const urlRegistro= environment.urlRegistro
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private HttpClient: HttpClient) {
   }

   public guardarRegistro(formData: FormData)
   {
     return  this.HttpClient.post(urlRegistro, formData);
   }
}
