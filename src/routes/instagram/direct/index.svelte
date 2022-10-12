<script lang="ts">
  import Input from "../../../components/input/input.svelte";
</script>

<div class="direct">
  <div class="direct-box">
    <div class="direct-box-head">
      <div class="direct-box-head-left">
        <div class="back-button">
          <a href="/instagram">
            <span class="material-symbols-outlined"> arrow_back </span>
          </a>
        </div>
        <div class="title-box">zyrapasaa</div>
      </div>
      <div class="direct-box-head-right">
        <ul>
          <li>
            <span class="material-symbols-outlined"> video_call </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> add </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="direct-box-body">
      <div class="direct-box-body-search">
        <section>
          <div class="icon-box">
            <span class="material-symbols-outlined"> search </span>
          </div>
          <div class="input-box">
            <Input
              settings={{
                type: "text",
                required: true,
                placeholder: "Ara",
              }}
              style={{
                width: "100%",
                background: "transparent",
                "font-size": "0.8em",
              }}
            />
          </div>
        </section>
      </div>
      <div class="direct-box-body-list">
        <div class="head-box">
          <div class="head-box-left">Mesajlar</div>
          <div class="head-box-right">Istekler</div>
        </div>
        <section>
          <ul>
            <li>
              <div class="message-box-left">
                <div class="message-box-left-image">
                  <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
                </div>
                <div class="message-box-left-text-box">
                  <div class="title">zyrapasaa</div>
                  <div class="last-message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad labore mollitia molestias quas illum
                    rerum dicta saepe cum et iure cupiditate tempore nemo dolor, animi amet tempora? Ipsam,
                    reprehenderit voluptate.
                  </div>
                </div>
              </div>
              <div class="message-box-right">
                <div class="icon-box">
                  <span class="material-symbols-outlined"> photo_camera </span>
                </div>
                <div class="notification-box" />
              </div>
            </li>
            <li>
              <div class="message-box-left">
                <div class="message-box-left-image">
                  <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
                </div>
                <div class="message-box-left-text-box">
                  <div class="title">zyrapasaa</div>
                  <div class="last-message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad labore mollitia molestias quas illum
                    rerum dicta saepe cum et iure cupiditate tempore nemo dolor, animi amet tempora? Ipsam,
                    reprehenderit voluptate.
                  </div>
                </div>
              </div>
              <div class="message-box-right">
                <div class="icon-box">
                  <span class="material-symbols-outlined"> photo_camera </span>
                </div>
                <div class="notification-box" />
              </div>
            </li>
            <li>
              <div class="message-box-left">
                <div class="message-box-left-image">
                  <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
                </div>
                <div class="message-box-left-text-box">
                  <div class="title">zyrapasaa</div>
                  <div class="last-message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad labore mollitia molestias quas illum
                    rerum dicta saepe cum et iure cupiditate tempore nemo dolor, animi amet tempora? Ipsam,
                    reprehenderit voluptate.
                  </div>
                </div>
              </div>
              <div class="message-box-right">
                <div class="icon-box">
                  <span class="material-symbols-outlined"> photo_camera </span>
                </div>
                <div class="notification-box" />
              </div>
            </li>
            <li>
              <div class="message-box-left">
                <div class="message-box-left-image">
                  <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
                </div>
                <div class="message-box-left-text-box">
                  <div class="title">zyrapasaa</div>
                  <div class="last-message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad labore mollitia molestias quas illum
                    rerum dicta saepe cum et iure cupiditate tempore nemo dolor, animi amet tempora? Ipsam,
                    reprehenderit voluptate.
                  </div>
                </div>
              </div>
              <div class="message-box-right">
                <div class="icon-box">
                  <span class="material-symbols-outlined"> photo_camera </span>
                </div>
                <div class="notification-box" />
              </div>
            </li>
            <li>
              <div class="message-box-left">
                <div class="message-box-left-image">
                  <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
                </div>
                <div class="message-box-left-text-box">
                  <div class="title">zyrapasaa</div>
                  <div class="last-message">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad labore mollitia molestias quas illum
                    rerum dicta saepe cum et iure cupiditate tempore nemo dolor, animi amet tempora? Ipsam,
                    reprehenderit voluptate.
                  </div>
                </div>
              </div>
              <div class="message-box-right">
                <div class="icon-box">
                  <span class="material-symbols-outlined"> photo_camera </span>
                </div>
                <div class="notification-box" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
