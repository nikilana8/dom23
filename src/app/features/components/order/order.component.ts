import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  showSuccessMessage: boolean = false;
  showFailMessage: boolean = false;
  hideForm: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private http: HttpClient) {
  }

  formValues = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^(\\+?\\d{11})$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 /-]*$')]],
    product: '',
    comment: '',
  }, {updateOn: 'blur'})

  ngOnInit(): void {
    this.formValues.get('product')?.disable();

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.patchValue({
          product: params['product']
        });
      }
    })
  }

  sendForm() {
    const formData = this.formValues.getRawValue();
    this.http.post('https://testologia.site/order-tea', formData).subscribe((response: any) => {
      if (response.success === 1) {
        this.showSuccessMessage = true;
        this.hideForm = false;
      } else {
        this.showFailMessage = true;
      }
    });
  }
}
