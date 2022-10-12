import type { IValidate } from "./IValidatie";

export class Validation {
  static validate(validations: IValidate[]): { status: boolean; errorList: string[] } {
    if (!validations) return { status: true, errorList: [] };
    const errorList: string[] = [];
    validations.forEach((v: IValidate) => {
      if (!v.status) return errorList.push(v.message);
    });
    return { status: errorList.length === 0, errorList: errorList };
  }
}
