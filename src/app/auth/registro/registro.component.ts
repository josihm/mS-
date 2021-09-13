import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UsuarioInterface } from 'src/app/recursosCompartidos/modelos/usuario.interface';
import { AuthService } from 'src/app/recursosCompartidos/servicios/auth.service';
import { EncriptarService } from 'src/app/recursosCompartidos/servicios/encriptar.service';
import { ServiciosService } from 'src/app/recursosCompartidos/servicios/servicios.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      usuario: null,
    }
  }
  
  usuario: UsuarioInterface;

  formularioRegistroUsuario!: FormGroup;
  private isEmail = /\S+@+\S+\.\S/;
  private isExtensiones = /\d/;

  constructor(private router: Router,
            private fb: FormBuilder,
            private usuarioServicio: ServiciosService,
            private authServicio: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.usuario = navigation?.extras?.state?.usuario;
  }

  ngOnInit(): void {
    this.initForm();
    if (typeof this.usuario === 'undefined'){
      this.router.navigate(['/registro']);
    }else{
      this.formularioRegistroUsuario.patchValue(this.usuario);
    }
  }

  private initForm():void{
    this.formularioRegistroUsuario = this.fb.group({
      /*nombre: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.isEmail)]],
      cel:['',[Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.isExtensiones)]],
      psw: ['',[Validators.required]]*/
      /*nombre: ['',],
      email: ['',],
      cel:['',],
      psw: ['',]*/
      email: new FormControl(['']),
      psw: new FormControl(['']),
      phoneNumber: new FormControl(['']),
      displayName: new FormControl(['']),
    });
  }

  async registrar(){
    
    //console.log('registrar() -> ', this.formularioRegistroUsuario.value);
    console.log(this.formularioRegistroUsuario.valid)
    this.usuario = this.formularioRegistroUsuario.value;
    if (this.formularioRegistroUsuario.valid) {
      const usuarioReg = this.formularioRegistroUsuario.value;
      const idUsuario = this.usuario?.id || null;
      //this.usuarioServicio.guardar(usuarioReg, String(idUsuario));
      await this.authServicio.registrar(this.formularioRegistroUsuario.value);
      await this.usuarioServicio.guardarUsuario(this.formularioRegistroUsuario.value, idUsuario);
      this.formularioRegistroUsuario.reset();
      //this.router.navigate(['registro']);
    }else{
      alert('Falló el registro');
      console.log('Algo salió mal');
    }
  }

  pruebaEncriptacion(){//ALGO PASA CON EL CRYPTO-JS, buscar solucion al error 
      this.usuario = this.formularioRegistroUsuario.value;
      this.usuario.psw = EncriptarService.encrypt(this.formularioRegistroUsuario.value.psw.toString());
      console.log('usuario:', this.formularioRegistroUsuario.value.psw.toString());
      console.log('usuario interface, pruebaEncriptacion(): ', this.usuario.psw);
  }

  isValid(campo: string):string{
    const validarCampo = this.formularioRegistroUsuario.get(campo);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'es inválido' : validarCampo?.touched ? 'es válido' :  '';
  }
}
