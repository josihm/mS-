import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudSTI } from '../../modelos/solicitudesst.interface';
import { AuthService } from '../../servicios/auth.service';
import { SstService } from '../../servicios/sst.service';

@Component({
  selector: 'app-pruebadeservicios',
  templateUrl: './pruebadeservicios.component.html',
  styleUrls: ['./pruebadeservicios.component.scss']
})
export class PruebadeserviciosComponent implements OnInit {

  ssti$!: Observable<SolicitudSTI>;
  
  ssti!: SolicitudSTI | any;
  sstiFolio!: SolicitudSTI | any;
  sstiDepto!: SolicitudSTI | any;
  
  arrSstI: SolicitudSTI[] = [];
  todasSST: SolicitudSTI[] = [];

  numFolioSig!: number;
  cambioId!: string;

  constructor(private stServicio: SstService, private authServicio:AuthService) { }

  async ngOnInit(): Promise<void> {
    this.ssti = await this.stServicio.getSST_id_async("2mUYCbo6ipd1B5vQ64pI");
    console.log("PDS -> this.stServicio.getSST_id_async(id): ", this.ssti);
    this.sstiFolio = await this.stServicio.getSST_folio_async("102");
    console.log("PDS -> this.stServicio.getSST_folio_async(folio): ", this.sstiFolio);

    this.arrSstI = await this.stServicio.getSSTs_deptoId_async("KZYAsTZTEPJNETa8GUw9");
    console.log("PDS -> this.stServicio.getSSTs_deptoId_async(deptoId): ", this.arrSstI);

    this.todasSST = await this.stServicio.allSST_async();
    console.log("Todas las solicitudes: ", this.todasSST);
    console.log("Total de solicitudes: ", this.todasSST.length);

    this.numFolioSig = await this.stServicio.getNumeroFolioSiguiente_async();
    console.log("Número de folio siguiente: ", this.numFolioSig);

    this.cambioId = await this.authServicio.getIdDeptoXdepartamento("DIRECCIÓN");
    console.log ("cambio", this.cambioId);
  }

}
