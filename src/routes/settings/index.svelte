<script>
  import Layout from "../../components/layout/layout.svelte";
</script>

<Layout topMenuColor="#fff" bottomMenuColor="#fff">
  <div class="settings">
    <div class="settings-box">
      <div class="settings-box-head">Ayarlar</div>
      <div class="settings-box-body">
        <div class="settings-box-body-icons">
          <ul>
            <li>
              <span class="material-symbols-outlined"> search </span>
            </li>
          </ul>
        </div>
        <div class="settings-box-body-content">
          <ul>
            <li>
              <div class="image-box">
                <img src="/app-icon/wifi-32.png" alt="wifi" />
              </div>
              <div class="content-box">
                <div class="title">Bağlantılar</div>
                <div class="subtitle">Wifi · Bluetooth · Uçuş Mod</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="image-box">
                <img src="/app-icon/volume-32.png" alt="volume" />
              </div>
              <div class="content-box">
                <div class="title">Sesler ve titreşim</div>
                <div class="subtitle">Ses modu · Zil sesi</div>
              </div>
            </li>
            <li>
              <div class="image-box">
                <img src="/app-icon/bookmark-32.png" alt="bookmark" />
              </div>
              <div class="content-box">
                <div class="title">Bildirimler</div>
                <div class="subtitle">Durum Çubuğu · Rahatsız etmeyin</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="image-box">
                <img src="/app-icon/home-32.png" alt="home" />
              </div>
              <div class="content-box">
                <div class="title">Ekran</div>
                <div class="subtitle">Rahatlık · Göz rahatlığı kalkanı</div>
              </div>
            </li>
            <li>
              <div class="image-box">
                <img src="/app-icon/photo-32.png" alt="photos" />
              </div>
              <div class="content-box">
                <div class="title">Duvar kağıdı</div>
                <div class="subtitle">Ana ekran ve kilit ekran duvar kağıdı</div>
              </div>
            </li>
            <li>
              <div class="image-box">
                <img src="/app-icon/lock-32.png" alt="lock" />
              </div>
              <div class="content-box">
                <div class="title">Kilit ekran</div>
                <div class="subtitle">Kilit ekran türünü değiştirin</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="image-box">
                <img src="/app-icon/location-32.png" alt="location" />
              </div>
              <div class="content-box">
                <div class="title">Konum</div>
                <div class="subtitle">Konum izinleri · Konum görüntüleri</div>
              </div>
            </li>
            <li>
              <div class="image-box">
                <img src="/app-icon/secruty-32.png" alt="secruty" />
              </div>
              <div class="content-box">
                <div class="title">Güvenlik</div>
                <div class="subtitle">Wifi · Bluetooth · Uçuş Mod</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./style.scss";
</style>
