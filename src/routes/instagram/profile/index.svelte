<script>
  import Button from "../../../components/button/button.svelte";
  let buttonStyle = {
    padding: "0.5em 0.5em",
    color: "#000",
    "font-size": "0.8em",
    "font-weight": "bold",
    "border-radius": "0.5em",
  };
</script>

<div class="profile">
  <div class="profile-box">
    <div class="profile-box-info">
      <div class="profile-box-info-head">
        <div class="profile-box-info-head-left">
          <div class="icon-box">
            <a href="/instagram">
              <span class="material-symbols-outlined"> arrow_back </span>
            </a>
          </div>
          <div class="title-box">zyrapasaa</div>
        </div>
        <div class="profile-box-info-head-right">
          <ul>
            <li>
              <span class="material-symbols-outlined"> notifications </span>
            </li>
            <li>
              <span class="material-symbols-outlined"> menu </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="profile-box-info-body">
        <div class="profile-box-info-body-image">
          <div class="image-box">
            <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
          </div>
        </div>
        <div class="profile-box-info-body-content">
          <ul>
            <li>
              <div class="count-box">1</div>
              <div class="title-box">Gönderi</div>
            </li>
            <li>
              <div class="count-box">198</div>
              <div class="title-box">Takipçi</div>
            </li>
            <li>
              <div class="count-box">293</div>
              <div class="title-box">Takip</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="profile-box-info-footer">
        <div class="profile-box-info-footer-text-box">
          <div class="title">Batuhan</div>
          <div class="biography">Lorem ipsum dolor sit amet.</div>
          <div class="website">
            <a href="/"> zyrapasaa.com </a>
          </div>
        </div>
        <div class="profile-box-info-footer-button-box">
          <Button color="secondary" style={buttonStyle}>
            <div class="button-content">
              <div class="text">Takip</div>
              <div class="icon">
                <span class="material-symbols-outlined"> expand_more </span>
              </div>
            </div>
          </Button>
          <Button color="secondary" style={buttonStyle}>Mesaj</Button>
          <Button color="secondary" style={buttonStyle}>
            <div class="icon">
              <span class="material-symbols-outlined"> person_add </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
    <div class="profile-box-content">
      <div class="profile-box-content-head">
        <ul>
          <li class="active">
            <span class="material-symbols-outlined"> grid_on </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> perm_contact_calendar </span>
          </li>
        </ul>
      </div>
      <div class="profile-box-content-body">
        <ul>
          <li>
            <a href="/instagram/profile">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </a>
          </li>
          <li>
            <a href="/instagram/profile">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </a>
          </li>
          <li>
            <a href="/instagram/profile">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </a>
          </li>
          <li>
            <a href="/instagram/profile">
              <img src="/photo/zyrapasaa.png" alt="zyrapasaa" />
            </a>
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
</div>

<style lang="scss">
  @import "./style.scss";
</style>
