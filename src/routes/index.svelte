<script lang="ts">
  import Layout from "../components/layout/layout.svelte";
  import Notification from "../components/notification/notification.svelte";
</script>

<Layout bottomMenuColor="#fff" topMenuColor="#fff" isTopTime={false} isBottom={false}>
  <div id="lock-page">
    <div class="lock-page-box">
      <div class="icon-box">
        <span class="material-symbols-outlined"> lock </span>
      </div>
      <div class="time-box">
        <div class="time-box-head">13:47</div>
        <div class="time-box-bottom">5 Ekim Çarşamba</div>
      </div>
      <div class="notification-box">
        <div class="notification-box-head">
          <div class="notification-box-head-text">Bildirimler</div>
          <div class="notification-box-head-icon">
            <span class="material-symbols-outlined"> close </span>
          </div>
        </div>
        <div class="notification-box-body">
          <Notification />
          <Notification />
        </div>
      </div>
      <div class="open-mobile-box">
        <a href="/home">Kiliti açmak için tıklayın!</a>
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./style.scss";
</style>
