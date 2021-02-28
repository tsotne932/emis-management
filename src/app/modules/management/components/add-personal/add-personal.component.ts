import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Branch } from 'src/app/interfaces/Branch.interface';
import { Personal } from 'src/app/interfaces/Person.interface';
import { ManagementService } from '../../service/management.service';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html',
  styleUrls: ['./add-personal.component.scss']
})
export class AddPersonalComponent implements OnInit {
  form: FormGroup;
  id: number;
  institution_id: number;
  branch_id: number;
  key: string;
  constructor(private _fb: FormBuilder, private _service: ManagementService, public dialogRef: MatDialogRef<AddPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm(data.personal || {});
    if (data.personal) this.id = data.personal.id;
    this.institution_id = data.institution_id;
    this.branch_id = data.branch_id;
    this.key = data.key;
  }

  ngOnInit(): void {
  }

  initForm(personal: Personal) {
    this.form = this._fb.group({
      pid: new FormControl(personal.pid),
      name: new FormControl(personal.name, Validators.required),
    })
  }

  addPersonal() {
    if (this.form.valid) {
      if (this.id)
        this._service.editPersonal(this.id, this.form.value, this.institution_id, this.branch_id).subscribe(res => this.dialogRef.close(true))
      else
        this._service.addPersonal(this.form.value, this.institution_id, this.branch_id).subscribe(res => this.dialogRef.close(true))
    }
  }

  get title() {
    if (this.key == 'edit') return 'პერსონალის რედაქტირება';
    if (this.key == 'view') return 'პერსონალი'
    return 'პერსონალის დამატება'
  }

  get errorMessage() {
    if (this.form.get('name').hasError('required')) {
      return 'სავალდებულო ველი';
    }
    return '';
  }
}
