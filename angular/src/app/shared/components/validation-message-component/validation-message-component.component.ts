import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {formatValidationMessage, VALIDATION_MESSAGES} from "../../utils/validation-message";

@Component({
  selector: 'app-validation-message-component',
  templateUrl: './validation-message-component.component.html',
  styleUrl: './validation-message-component.component.css'
})
export class ValidationMessageComponentComponent {
  @Input() control!: AbstractControl<any, any>
  @Input() label!: string

  private validationMessage: any = VALIDATION_MESSAGES

  get errorMessage(): string[] {
    if(this.control && this.control.errors){
      return Object.keys(this.control.errors).map((key) => {
        const params = this.control.errors![key]
        // console.log({params})
        // console.log(...Object.values(params))
        return formatValidationMessage(
          this.validationMessage[key],
          this.label,
          ...Object.values(params)
        )
      })
    }

    return []
  }
}
