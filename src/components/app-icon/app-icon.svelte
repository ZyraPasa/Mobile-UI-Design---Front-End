<script lang="ts">
  export let icon: string = "/app-icon/phone.png";
  export let link: string = "/home";
  export let text: string = "";
</script>

<a class="app" href={link}>
  <div class="icon-box">
    <img src={icon} alt="app" />
  </div>
  {#if text}
    <div class="text-box">{text}</div>
  {/if}
</a>

<style lang="scss">
  .app {
    position: relative;
    width: 3em;
    height: 3em;
    .icon-box {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-box {
      margin-top: 0.3em;
      font-size: 0.8em;
      text-align: center;
      //   text-overflow: ellipsis;
      //   //   white-space: nowrap;
      //   overflow: hidden;
    }
  }
</style>
