import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit {


  conditionalValidator(predicate: any, validator: any) {
    return (formControl: any) => {
      if (!formControl.parent) {
        return null;
      }
      if (predicate()) {
        return validator(formControl);
      }
      return null;
    };
  }

  form7fecb79b81c94 = new FormGroup({
    inputc0a72cb0218c4: new FormControl({ value: null, disabled: false }, []),
    inpute63c126b33e44: new FormControl({ value: null, disabled: false }, [])
  });

  inputc0a72cb0218c4: FormControl = this.form7fecb79b81c94.get('inputc0a72cb0218c4') as FormControl;
  inpute63c126b33e44: FormControl = this.form7fecb79b81c94.get('inpute63c126b33e44') as FormControl;

  

  constructor() {}
  ngOnInit() {}

  ngOnDestroy() {}

}
