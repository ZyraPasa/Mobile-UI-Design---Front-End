<script>
  import DirectoryUser from "../../../components/directory-user/directory-user.svelte";
</script>

<div class="directory">
  <div class="directory-box">
    <div class="directory-box-head">
      <div class="text-box">
        <div class="title">Kişiler</div>
        <div class="count-info">Şu anda rehberinde 82 kayıtlı numara var.</div>
      </div>
    </div>
    <div class="directory-box-body">
      <div class="directory-box-body-options">
        <ul>
          <li>
            <span class="material-symbols-outlined"> add </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> search </span>
          </li>
          <li>
            <span class="material-symbols-outlined"> menu </span>
          </li>
        </ul>
      </div>
      <div class="directory-box-body-content">
        <ul>
          <li>
            <div class="character">A</div>
            <div class="list-box">
              <DirectoryUser isCall={false} />
              <DirectoryUser isCall={false} />
            </div>
          </li>
          <li>
            <div class="character">B</div>
            <div class="list-box">
              <DirectoryUser isCall={false} />
              <DirectoryUser isCall={false} />
              <DirectoryUser isCall={false} />
            </div>
          </li>
          <li>
            <div class="character">C</div>
            <div class="list-box">
              <DirectoryUser isCall={false} />
              <DirectoryUser isCall={false} />
              <DirectoryUser isCall={false} />
              <DirectoryUser isCall={false} />
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
