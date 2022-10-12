<script type="ts">
  import Button from "../button/button.svelte";
</script>

<div class="instagram-notification">
  <div class="instagram-notification-left">
    <div class="instagram-notification-left-image">
      <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
    </div>
    <div class="instagram-notification-left-text">
      <span>zyrapasaa</span> seni takip etmeye başladı.
    </div>
  </div>
  <div class="instagram-notification-right">
    <Button
      style={{ padding: "0.5em 1.25em", "border-radius": "0.5em", "font-weight": "bold" }}
      fontSize="small"
      color="primary">Takip</Button
    >
  </div>
</div>

<style lang="scss">
  .instagram-notification {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
    &-left {
      display: grid;
      grid-auto-flow: column;
      justify-content: start;
      align-items: center;
      grid-gap: 0.75em;
      &-image {
        width: 3em;
        height: 3em;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      &-text {
        font-size: 0.8em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          font-weight: bold;
        }
      }
    }
  }
</style>
