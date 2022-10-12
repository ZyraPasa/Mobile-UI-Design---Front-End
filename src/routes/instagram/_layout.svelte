<script>
  import Layout from "../../components/layout/layout.svelte";
</script>

<Layout>
  <div id="instagram">
    <div class="instagram-box">
      <div class="instagram-box-content"><slot /></div>
      <div class="instagram-box-bottom-menu">
        <ul>
          <li>
            <a href="/instagram">
              <span class="material-symbols-outlined"> home </span>
            </a>
          </li>
          <li>
            <a href="/instagram/search">
              <span class="material-symbols-outlined"> search </span>
            </a>
          </li>
          <li>
            <span class="material-symbols-outlined"> movie </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> local_mall </span>
          </li>
          <li>
            <a href="/instagram/profile">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./scss/layout.scss";
</style>
