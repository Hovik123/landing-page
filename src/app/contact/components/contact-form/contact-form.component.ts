import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  myForm: FormGroup;
    createItem(): FormGroup {
    return this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      phones: this.fb.array([this.createItem()]),
      name: ['Valod', Validators.required],
      email: ['info@company.com', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]],

    });
  }

  get phones(): FormArray {
    return this.myForm.get('phones') as FormArray;
  }
  addItem(): void {
    this.phones.push(this.createItem());
  }
  removeItem(i): void {
    this.phones.removeAt(i);
  }

  onSubmit() {
    const formValues = this.myForm.getRawValue();
    console.log(formValues);
  }
}
