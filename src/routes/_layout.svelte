<script lang="ts">
  export let segment: string;
  segment = "segment";
  // import { stores } from "@sapper/app";
  // import { stores } from "@sapper/app";

  // const { preloading } = stores();
</script>

<!-- {#if $preloading}
  Yükleniyor...
{/if} -->

<slot />
