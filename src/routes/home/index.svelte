<script>
  import AppIcon from "../../components/app-icon/app-icon.svelte";
  import Layout from "../../components/layout/layout.svelte";
</script>

<Layout topMenuColor="#fff" bottomMenuColor="#fff">
  <div id="home-page">
    <div class="home-page-box">
      <div class="body-menu-box">
        <AppIcon icon="/app-icon/clock.png" text="Saat" />
        <AppIcon icon="/app-icon/calculator.png" text="Hesap Makinesi" link="/calculator" />
        <AppIcon icon="/app-icon/music.png" text="Müzik" link="/music" />
        <AppIcon icon="/app-icon/photos.png" text="Galeri" />
      </div>
      <div class="bottom-menu-box">
        <AppIcon icon="/app-icon/phone.png" link="/phone" />
        <AppIcon icon="/app-icon/message.png" link="/message" />
        <AppIcon icon="/app-icon/contacts.png" link="/phone/directory" />
        <AppIcon icon="/app-icon/settings.png" link="/settings" />
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./style.scss";
</style>
