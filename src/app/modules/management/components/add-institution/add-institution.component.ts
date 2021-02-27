import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagementService } from '../../service/management.service';


@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.scss']
})
export class AddInstitutionComponent implements OnInit {
  form: FormGroup;
  id: number;
  constructor(private _fb: FormBuilder,
    private _service: ManagementService,
    public dialogRef: MatDialogRef<AddInstitutionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.initForm(data.institution || {});
    if (data.institution) this.id = data.institution.id;
  }

  ngOnInit(): void {
  }

  initForm(institution) {
    this.form = this._fb.group({
      name: new FormControl(institution.name, Validators.required),
      pid: new FormControl(institution.pid),
      number: new FormControl(institution.number, Validators.required),
    })
  }

  addInstitution() {
    if (this.form.valid) {
      if (this.id)
        this._service.editInstitution(this.id, this.form.value).subscribe(res => this.dialogRef.close(true))
      else
        this._service.addInstitution(this.form.value).subscribe(res => this.dialogRef.close(true))
    }
  }

  get errorMessage() {
    if (this.form.get('name').hasError('required')) {
      return 'სავალდებულო ველი';
    }
    if (this.form.get('number').hasError('required')) {
      return 'სავალდებულო ველი';
    }

    return '';
  }
}
