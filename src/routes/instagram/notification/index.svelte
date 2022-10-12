<script>
  import InstagramNotification from "../../../components/instagram-notification/instagram-notification.svelte";
</script>

<div class="instagram-notification">
  <div class="instagram-notification-box">
    <div class="instagram-notification-box-head">
      <div class="instagram-notification-box-head-left">
        <a href="/instagram">
          <span class="material-symbols-outlined"> arrow_back </span>
        </a>
      </div>
      <div class="instagram-notification-box-head-right">Bildirimler</div>
    </div>
    <div class="instagram-notification-box-body">
      <ul>
        <li>
          <div class="day">Bugün</div>
          <div class="notifications">
            <InstagramNotification />
            <InstagramNotification />
          </div>
        </li>
        <li>
          <div class="day">Dün</div>
          <div class="notifications">
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
          </div>
        </li>
        <li>
          <div class="day">Bu hafta</div>
          <div class="notifications">
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
          </div>
        </li>
        <li>
          <div class="day">Bu ay</div>
          <div class="notifications">
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
            <InstagramNotification />
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
