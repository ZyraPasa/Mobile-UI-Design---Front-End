<script lang="ts">
  import DirectoryUser from "../../../components/directory-user/directory-user.svelte";

  //   let isOpen: boolean = false; // number olacak, index numarası alacak
</script>

<div class="recent-call">
  <div class="recent-call-box">
    <div class="recent-call-box-head">Son Aramalar</div>
    <div class="recent-call-box-body">
      <div class="recent-call-box-body-icon">
        <ul>
          <li>
            <span class="material-symbols-outlined"> menu_open </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> search </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> menu </span>
          </li>
        </ul>
      </div>
      <div class="recent-call-box-body-content">
        <ul>
          <li>
            <div class="date">13 Ekim 2022</div>
            <div class="directory-box">
              <DirectoryUser />
              <DirectoryUser myCall={false} />
            </div>
          </li>
          <li>
            <div class="date">12 Ekim 2022</div>
            <div class="directory-box">
              <DirectoryUser />
              <DirectoryUser myCall={false} />
              <DirectoryUser myCall={false} />
              <DirectoryUser myCall={false} />
            </div>
          </li>
          <li>
            <div class="date">11 Ekim 2022</div>
            <div class="directory-box">
              <DirectoryUser />
              <DirectoryUser />
              <DirectoryUser />
              <DirectoryUser />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
