<script lang="ts">
  import { styleHelper } from "../../lib/styleHelper.js";
  import type { ButtonType, Color, DefaultFontSize } from "../types";
  export let buttonType: ButtonType = "button";
  // export let size: DefaultSize = "default";
  export let fontSize: DefaultFontSize = "default";
  export let disabled: boolean = false;
  export let color: Color = "secondary";
  export let style: object = {};
</script>

<button
  type={buttonType}
  {disabled}
  class="disabled-{disabled} font-size-{fontSize} color-{color}"
  style={styleHelper(style)}
  on:click
>
  <slot />
</button>

<style lang="scss">
  @import "./colors.scss";
  button {
    color: #fff;
    cursor: pointer;
    text-align: center;
    transition: 0.3s background-color ease-in-out;
  }
  .disabled-true {
    cursor: not-allowed;
  }
</style>
