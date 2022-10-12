export type ButtonType = "button" | "submit" | "reset";
export type DefaultSize = "extra-small" | "small" | "default" | "large" | "extra-large";
export type DefaultFontSize = "extra-small" | "small" | "default" | "large" | "extra-large";
export type Color = "succes" | "info" | "danger" | "warining" | "secondary" | "primary" | "green";
// input types
export type InputSettings = {
  required: boolean;
  type: "text" | "password";
  name?: string;
  placeholder?: string;
  maxlength?: number;
  disabled?: boolean;
};
