import type { IValidate } from "./IValidatie";

export class Validate {
  static numberRgx = /^[0-9]+$/;
  public static MaxLength(value: string, maxLength: number, tag: string): IValidate {
    const result: boolean = value.length <= maxLength;
    return { status: result, message: `The length of the ${tag} is too long. The maximum length can be ${maxLength}.` };
  }
  public static MinLength(value: string, minLength: number, tag: string): IValidate {
    const result: boolean = value.length >= minLength;
    return {
      status: result,
      message: `The length of the ${tag} is too short. The minumum length can be ${minLength}`,
    };
  }
  public static isNumber(value: string): IValidate {
    const result: boolean = this.numberRgx.test(value);
    return { status: result, message: `Has to be a number` };
  }
}
