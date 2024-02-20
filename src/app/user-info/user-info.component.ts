import {
  Component,
  OnInit,
  OnDestroy,
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-my-custom-form-uibuilder",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit, OnDestroy {


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

  form2743853cfa684 = new FormGroup({
    input658a6096725b4: new FormControl({ value: null, disabled: false }, []),
    input9061d0f5fb984: new FormControl({ value: null, disabled: false }, []),
    input3d25ee3156024: new FormControl({ value: null, disabled: false }, [
      Validators.minLength(11),
      Validators.maxLength(9)
    ]),
    checkbox5763586e0f554: new FormControl({ value: null, disabled: false }, [])
  });

  checkbox5763586e0f554: FormControl = this.form2743853cfa684.get('checkbox5763586e0f554') as FormControl;
  input3d25ee3156024: FormControl = this.form2743853cfa684.get('input3d25ee3156024') as FormControl;
  input9061d0f5fb984: FormControl = this.form2743853cfa684.get('input9061d0f5fb984') as FormControl;
  input658a6096725b4: FormControl = this.form2743853cfa684.get('input658a6096725b4') as FormControl;

  constructor() { }
  ngOnInit() { }

  ngOnDestroy() { }
}
