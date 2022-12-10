<template>
  <div>
    <div
      class="
        footer
        p-4 p-md-5
        mt-5
        d-flex
        flex-wrap
        justify-content-md-between justify-content-center
      "
    >
      <div class="col-md-4 col-12">
        <h3>Lampo</h3>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta
          eveniet exercitationem quibusdam culpa. Saepe facere exercitationem
          vel totam pariatur?
        </p>
        <div class="mt-md-5 brand-info">
          <div>5555-6787</div>
          <div>Germany</div>
          <div>lampo@gmail.com</div>
        </div>
      </div>
      <div class="d-flex col-md-3 col-12 mt-5 mt-md-0">
        <div class="d-flex flex-column mr-5">
          <h5 class="footer-link-head">Menu</h5>
          <nuxt-link to="/" class="footer-link">Product</nuxt-link>
          <nuxt-link to="/" class="footer-link">Features</nuxt-link>
          <nuxt-link to="/" class="footer-link">Contact</nuxt-link>
        </div>
        <div class="d-flex flex-column">
          <h5 class="footer-link-head">Product</h5>
          <nuxt-link to="/" class="footer-link">Study Lamp</nuxt-link>
          <nuxt-link to="/" class="footer-link">Living Room Lamp</nuxt-link>
          <nuxt-link to="/" class="footer-link">kitchen Lamp</nuxt-link>
        </div>
        <div>
          <h5 class="footer-link-head"></h5>
        </div>
        <div>
          <h5 class="footer-link-head"></h5>
        </div>
      </div>
    </div>
    <div class="text-secondary copy-right ml-md-5 mr-md-5 m-4 mt-4 pt-4">
      <p class="text-center">Lampo - 2022</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  border-top: 1px solid #6c757d;
}

.footer-link-head {
  color: #ff5c01;
  font-weight: normal;
}

.footer-link {
  color: #6c757d;
  transition: 0.3s;
}
.footer-link:hover {
  color: #ff5c01;
}

.brand-info {
  color: #eee;
}

.copy-right {
  border-top: 1px solid #6c757d;
}
</style>