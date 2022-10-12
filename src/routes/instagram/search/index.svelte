<script type="ts">
  import Input from "../../../components/input/input.svelte";
</script>

<div class="search">
  <div class="search-box">
    <div class="search-box-input">
      <section>
        <div class="icon-box">
          <span class="material-symbols-outlined"> search </span>
        </div>
        <div class="input-box">
          <Input
            settings={{
              required: true,
              type: "text",
              placeholder: "Ara",
            }}
            style={{
              width: "100%",
              background: "transparent",
              "font-size": "0.7em",
            }}
          />
        </div>
      </section>
      <!-- user found list -->
    </div>
    <div class="search-box-content">
      <ul>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
        <li>
          <a href="/instagram/search">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
