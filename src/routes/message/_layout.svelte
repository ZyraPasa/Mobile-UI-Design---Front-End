<script>
  import Layout from "../../components/layout/layout.svelte";
</script>

<Layout topMenuColor="#fff" bottomMenuColor="#fff">
  <div class="message">
    <div class="message-box">
      <div class="message-box-content">
        <slot />
      </div>
      <div class="message-box-menu">
        <ul>
          <li class="active">
            <a href="/message">Görüşmeler</a>
          </li>
          <li>
            <a href="/message">Yeni Mesaj</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./scss/layout.scss";
</style>
