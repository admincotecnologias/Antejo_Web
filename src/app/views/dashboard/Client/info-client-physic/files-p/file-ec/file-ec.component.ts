import { FilesP } from './../m-files-p';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostRegistryP } from './../../../services.client/service.registryP';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-file-ec',
  templateUrl: './file-ec.component.html',
  styleUrls: ['./file-ec.component.scss']
})
export class FileECComponent implements OnInit {
  

  submitted = false;
  model: FilesP = new FilesP();

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryP,
    private router: Router, private http: HttpClient) { }


  registryFile(model) {
    try {
      this.postRegistry.registryFile(model,callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Archivo agregado exitosamente.', 'success');
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }
  files : FileList; 
  getFiles(event){ 
      this.files = event.target.files; 
  } 

  upload() {
    const formData = new FormData();
    formData.append("file", this.files[0]);
    formData.append("type",this.model.type);
    formData.append("idclient",this.model.idclient);
    this.registryFile(formData);
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.files);
    this.model.type = 'Estado';
    this.model.idclient = localStorage.getItem('idClient');
    if(this.model.idclient !== null){
      this.upload();
      this.submitted = true;
    }
   
  }

}
