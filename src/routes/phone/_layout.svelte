<script lang="ts">
  import Layout from "../../components/layout/layout.svelte";
  export let segment: string = "";
</script>

<Layout topMenuColor="#fff" bottomMenuColor="#fff">
  <div id="phone">
    <div class="phone-box">
      <div class="phone-content-box">
        <slot />
      </div>
      <div class="phone-menu-box">
        <ul>
          <li class:active={!segment}>
            <a href="/phone">Klavye</a>
          </li>
          <li class:active={segment === "recent-call"}>
            <a href="/phone/recent-call">Son aramalar</a>
          </li>
          <li class:active={segment === "directory"}>
            <a href="/phone/directory">Kişiler</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./scss/layout.scss";
</style>
