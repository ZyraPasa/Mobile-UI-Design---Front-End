<script lang="ts">
  export let isCall: boolean = true;
  export let myCall: boolean = true;
  let isOpen: boolean = false;
</script>

<div class="directory" class:open={isOpen}>
  <div class="user-content-box" on:click={() => (isOpen = !isOpen)}>
    <div class="user-content-box-left">
      <div class="icon-box">
        {#if isCall}
          {#if myCall}
            <span class="material-symbols-outlined" style="color: green;"> call_made </span>
          {:else}
            <span class="material-symbols-outlined" style="color: red;"> call_received </span>
          {/if}
        {:else}
          <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
        {/if}
      </div>
      <div class="text-box">ZyraPasaa</div>
    </div>
    {#if isCall}
      <div class="user-content-box-right">15:22</div>
    {/if}
  </div>
  <div class="process-box">
    <div class="text-box">
      <div class="phone">Telefon +90 542 198 87 65</div>
      {#if isCall}
        <div class="call-time">Gelen arama, 19dk 13sn</div>
      {/if}
    </div>
    <div class="content-box">
      <div class="process-icon-box">
        <div class="icon">
          <img src="/app-icon/phone-32.png" alt="phone" />
        </div>
        <div class="icon">
          <img src="/app-icon/message-32.png" alt="message" />
        </div>
        <div class="icon">
          <img src="/app-icon/camera-32.png" alt="camera" />
        </div>
        <div class="icon">
          <img src="/app-icon/settings-32.png" alt="settings" />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .directory {
    border-radius: 2em;
    //   border: 1px solid red;
    background-color: #161616;
    cursor: pointer;
    padding: 0.75em;
    position: relative;
    // &::after {
    //   content: "";
    //   position: absolute;
    //   bottom: 0;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   width: 90%;
    //   height: 1px;
    //   background-color: gray;
    // }
    // &:last-child {
    //   &::after {
    //     display: none;
    //   }
    // }
    .user-content-box {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      &-left {
        color: #fff;
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        align-items: center;
        grid-gap: 0.3em;
        .icon-box {
          width: 2em;
          height: 2em;
          display: grid;
          align-items: center;
          justify-content: center;
          span {
            font-size: 1em;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      &-right {
        font-size: 0.9em;
        color: gray;
      }
    }
    .process-box {
      display: none;
      margin-top: 0.5em;
      .text-box {
        font-size: 0.7em;
        margin-left: 0.5em;
        .phone {
          font-weight: bold;
          margin-bottom: 0.3em;
        }
      }
      .content-box {
        margin-top: 1em;
        .process-icon-box {
          display: grid;
          grid-auto-flow: column;
          align-items: center;
          justify-content: center;
          grid-gap: 2em;
          .icon {
            width: 32px;
            height: 32px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .open {
    .process-box {
      display: block;
    }
  }
</style>
