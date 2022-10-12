<script lang="ts">
  export let isTopTime: boolean = true;
  export let customTopText: string = "";
  export let isBottom: boolean = true;
  export let bottomMenuColor: string = "#000";
  export let topMenuColor: string = "#000";
  const backPage = () => {
    window.history.go(-1);
  };
</script>

<main>
  <div id="layout">
    <div id="mobile-app">
      <div id="mobile-camera-box" />
      <div id="mobile-app-top" style="color: {topMenuColor}">
        <section>
          {#if customTopText}
            {customTopText}
          {:else if isTopTime}
            13:45
          {/if}
        </section>
        <section>
          <ul>
            <li>
              <span class="material-symbols-outlined"> network_wifi </span>
            </li>
            <li>
              <span class="material-symbols-outlined"> signal_cellular_4_bar </span>
            </li>
            <li>
              <span class="material-symbols-outlined"> battery_4_bar </span>
            </li>
          </ul>
        </section>
      </div>
      <div id="mobile-app-body">
        <slot />
      </div>
      {#if isBottom}
        <div id="mobile-app-bottom">
          <ul style="color: {bottomMenuColor}">
            <li>
              <span class="material-symbols-outlined"> menu </span>
            </li>
            <li>
              <a href="/home">
                <span class="material-symbols-outlined"> circle </span>
              </a>
            </li>
            <li on:click|preventDefault={backPage}>
              <span class="material-symbols-outlined"> keyboard_arrow_left </span>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </div>
</main>

<style lang="scss">
  @import "./scss/style.scss";
</style>
