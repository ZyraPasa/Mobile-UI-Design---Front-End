<script>
  import InstagramPost from "../../components/instagram-post/instagram-post.svelte";
</script>

<div class="instagram-home">
  <div class="instagram-home-box">
    <div class="instagram-home-box-head">
      <div class="instagram-home-box-head-left">ZyraPasaa</div>
      <div class="instagram-home-box-head-right">
        <ul>
          <li>
            <a href="/instagram">
              <span class="material-symbols-outlined"> add_box </span>
            </a>
          </li>
          <li>
            <a href="/instagram/notification">
              <span class="material-symbols-outlined"> favorite </span>
            </a>
          </li>
          <li>
            <a href="/instagram/direct">
              <span class="material-symbols-outlined"> maps_ugc </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="instagram-home-box-body">
      <div class="story-box">
        <ul>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
          <li>
            <div class="story-image-box">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </div>
            <div class="story-text-box">ZyraPasaa</div>
          </li>
        </ul>
      </div>
      <div class="post-box">
        <InstagramPost />
        <InstagramPost />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./scss/index.scss";
</style>
