import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Branch } from 'src/app/interfaces/Branch.interface';
import { ManagementService } from '../../service/management.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {
  form: FormGroup;
  id: number;
  institution_id: number;
  institution_name: string;
  constructor(private _fb: FormBuilder, private _service: ManagementService, public dialogRef: MatDialogRef<AddBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm(data.branch || {} as Branch)

    this.id = data.branch ? data.branch.id : null;
    this.institution_id = data.institution_id;
    this.institution_name = data.institution_name;
  }

  ngOnInit(): void {
  }

  initForm(brach: Branch) {
    this.form = this._fb.group({
      address: new FormControl(brach.address, Validators.required),
      manager_name: new FormControl(brach.manager_name, Validators.required),
    })
  }

  addBranch() {
    if (this.form.valid) {
      const data = { institution_id: this.institution_id, ...this.form.value };
      if (this.id)
        this._service.editBranch(this.id, data).subscribe(res => this.dialogRef.close(true))
      else
        this._service.addBranch(data).subscribe(res => this.dialogRef.close(true));
    }
  }

  get errorMessage() {
    if (this.form.get('address').hasError('required')) {
      return 'სავალდებულო ველი';
    }
    if (this.form.get('manager_name').hasError('required')) {
      return 'სავალდებულო ველი';
    }
    return '';
  }
}
