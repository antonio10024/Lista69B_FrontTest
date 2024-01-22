import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/share/loading/loading.service';
import { WatchListService } from '../watch-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-watch-add',
  templateUrl: './watch-add.component.html',
  styleUrls: ['./watch-add.component.scss']
})
export class WatchAddComponent implements OnInit {
  form!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private loadinService:LoadingService,
    private watchService:WatchListService){
   
  }
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      rfc:['',[Validators.required,Validators.pattern('[A-ZÑ&]{3,4}\\d{6}[A-V1-9][A-Z1-9][0-9A]')]],
      RazonSocial:['',Validators.required]
    });

      this.form.controls['rfc'].valueChanges.subscribe((value: string)=>{
      this.form.controls['rfc'].setValue(value.toUpperCase(), {emitEvent: false});
    })
  }

  onSubmit() {
    this.loadinService.setloading(true,'add');
    this.watchService.add(this.form.value).subscribe(res=>{
      this.form.reset();
      this.loadinService.setloading(false,'add');
    },
    err=>{
      console.log( (err as HttpErrorResponse).status);
      this.loadinService.setloading(false,'add');
    }
    );
   

  }
}
