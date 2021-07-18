import { Component, OnInit  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calculation, NPVParameter } from './models/npv';
import { CustomValidationService } from './services/custom-validation.service';
import { NpvService } from './services/npv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'NPV';
    submitted: boolean = false;
    calculation: Calculation;
    npvForm: FormGroup;

    constructor(        
        private fb: FormBuilder,
        private npvService: NpvService,
        private customValidator: CustomValidationService
    
    ) { }

    ngOnInit(): void {
        this.npvForm = this.fb.group({
            initialValue: [0, Validators.required],
            lowerBoundDiscountRate: [0, Validators.required],
            upperBoundDiscountRate: [0, Validators.required],
            discountRateIncrement: [0, Validators.required],
            cashflows: this.fb.array([
                this.fb.group( {
                    value: [0, Validators.required]
                })
            ])
        });
        this.npvForm.get('upperBoundDiscountRate').setValidators(this.customValidator.greaterThan('lowerBoundDiscountRate'));


    }

    get f () { return this.npvForm.controls; }

    get cashflows() {
        return this.npvForm.get("cashflows") as FormArray;        
    }

    onSubmit() {
        this.submitted = true;
        if (this.npvForm.invalid) {
            return;
        }

        let parameter: NPVParameter = new NPVParameter();
        parameter.cashflows = this.npvForm.value.cashflows.map(x => x.value);
        parameter.initialValue = this.npvForm.value.initialValue;
        parameter.lowerBoundDiscountRate = this.npvForm.value.lowerBoundDiscountRate;        
        parameter.upperBoundDiscountRate = this.npvForm.value.upperBoundDiscountRate;;

        parameter.discountRateIncrement = this.npvForm.value.discountRateIncrement
        this.npvService.calculate(parameter).subscribe(
            val => {
                this.calculation = val;
            }
        );
    }

    addCashflow() {
        this.cashflows.push(this.fb.group({
            value: [0, Validators.required]
        }));
    }

    removeCashflow(index: number) {
        this.cashflows.removeAt(index);        
    }

    setStyle(npv: number) {
        if(npv < 0) {
            return {'color': 'red'};
        }
    }

}
