import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/share/loading/loading.service';
import { WatchListService, trackingItem } from '../watch-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watch-add',
  templateUrl: './watch-add.component.html',
  styleUrls: ['./watch-add.component.scss']
})
export class WatchAddComponent implements OnInit {

  form!: FormGroup;
  private watchService: WatchListService=inject(WatchListService);
  private router: Router=inject(Router);
  public id:string='';
  constructor(private formBuilder: FormBuilder,
    private loadinService: LoadingService,
    private activatedRoute: ActivatedRoute
    ) {
    this.activatedRoute.paramMap.subscribe((x)=>{
      if(x.get('id')!=undefined)
        this.id= x.get('id')!;
    })
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rfc: ['', [Validators.required, Validators.pattern('[A-ZÑ&]{3,4}\\d{6}[A-V1-9][A-Z1-9][0-9A]')]],
      RazonSocial: ['', Validators.required],
      isActive:[true]
    });

    this.form.controls['rfc'].valueChanges.subscribe((value: string) => {
      this.form.controls['rfc'].setValue(value.toUpperCase(), { emitEvent: false });
    });
    console.log(this.activatedRoute.snapshot.data['item']);
      if(this.activatedRoute.snapshot.data['item']!=undefined){

        this.form.get('rfc')?.patchValue((this.activatedRoute.snapshot.data['item'] as trackingItem).rfc);
        this.form.get('RazonSocial')?.patchValue((this.activatedRoute.snapshot.data['item'] as trackingItem).razonSocial);
        this.form.get('isActive')?.patchValue((this.activatedRoute.snapshot.data['item'] as trackingItem).activo);
      }
  }

  onSubmit() {
    this.loadinService.setloading(true, 'add');
    if(this.id.length>0){

      this.updated();
    }
    else
    {
      this.add();
    }



  }

  private updated(){
    this.watchService.updated(this.form.value,this.id).subscribe(res => {
      this.form.reset();
      this.loadinService.setloading(false, 'add');
      this.router.navigateByUrl('/WatchList');
    },
      err => {
        this.loadinService.setloading(false, 'add');
      }
    );
  }

  private add(){
    this.watchService.add(this.form.value).subscribe(res => {
      this.form.reset();
      this.loadinService.setloading(false, 'add');
      this.router.navigateByUrl('/WatchList');
    },
      err => {
        this.loadinService.setloading(false, 'add');
      }
    );
  }

  return() {
    this.router.navigate(['/WatchList']);
  }
}
