<script>
  import Layout from "../../components/layout/layout.svelte";
</script>

<Layout topMenuColor="#fff" bottomMenuColor="#fff">
  <div class="calculator">
    <div class="calculator-box">
      <div class="calculator-box-head">
        <div class="process-box">3<span style="color: #acd171">+</span>3</div>
        <div class="result-box">6</div>
      </div>
      <div class="calculator-box-body">
        <div class="calculator-box-body-menu">
          <div class="calculator-box-body-menu-left">
            <div class="icon">
              <span class="material-symbols-outlined"> schedule </span>
            </div>
            <div class="icon">
              <span class="material-symbols-outlined"> keyboard </span>
            </div>
            <div class="icon">
              <span class="material-symbols-outlined"> calculate </span>
            </div>
          </div>
          <div class="calculator-box-body-menu-right">
            <span class="material-symbols-outlined"> backspace </span>
          </div>
        </div>
        <div class="calculator-box-body-content">
          <ul>
            <li><span style="color: #f67368">C</span></li>
            <li><span style="color: #acd171">()</span></li>
            <li><span style="color: #acd171">%</span></li>
            <li><span style="color: #acd171">/</span></li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li><span style="color: #acd171">X</span></li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li><span style="color: #acd171">-</span></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li><span style="color: #acd171">+</span></li>
            <li>½</li>
            <li>0</li>
            <li>,</li>
            <li style="background-color: #437d04;">=</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Layout>

<style lang="scss">
  @import "./style.scss";
</style>
