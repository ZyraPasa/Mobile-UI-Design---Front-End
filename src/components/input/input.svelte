<script lang="ts">
  import { styleHelper } from "../../lib/styleHelper";
  import type { IValidate } from "../../lib/validation/IValidatie";
  import { Validation } from "../../lib/validation/validation";
  import type { InputSettings } from "../types";
  export let value: string = "";
  export let valid: boolean = false;
  export let errorList: string[] = [];
  export let settings: InputSettings;
  export let validations: IValidate[] = [];
  export let style: object = {};
  let inputSettings: InputSettings = {
    required: true,
    type: "text",
    name: "custom-input",
    ...settings,
  };
  const id = `${inputSettings.name}-${Math.floor(Math.random() * 100000)}`;
  const controlValue = (a: any) => {
    if (!value) {
      errorList = [];
      valid = false;
      return;
    }
    if (inputSettings.required && validations.length) {
      let controlValue = Validation.validate(validations);
      if (controlValue.status) {
        valid = true;
        errorList = [];
      } else {
        valid = false;
        errorList = controlValue.errorList;
      }
    } else {
      valid = true;
      errorList = [];
    }
  };
  $: {
    controlValue(value);
  }
</script>

<div class="input-wrapper">
  <!-- <label for=""></label> -->
  {#if inputSettings.type === "text"}
    <input
      type="text"
      {id}
      bind:value
      name={inputSettings.name}
      placeholder={inputSettings.placeholder}
      disabled={inputSettings.disabled}
      on:click
      on:keyup
      on:focus
      style={styleHelper(style)}
    />
  {/if}
</div>

<style lang="scss">
</style>
