import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  constructor(private fb: FormBuilder, private utilsSrvc: UtilsService) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S*$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/\d{10}$/),
      ]),
      address: new FormControl('', [Validators.required]),
    });
  }

  submitCheckout(): void {
    this.utilsSrvc.modifybooksAppJson = {
      ...this.utilsSrvc.modifybooksAppJson,
      billingAddress: { ...this.checkoutForm.value },
    };
  }
}
