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
      <div class="col-md-4 col-12 ">
        <nuxt-link to="/" class="h3 text-light text-decoration-none header-feature">Lampo</nuxt-link>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta
          eveniet exercitationem quibusdam culpa. Saepe facere exercitationem
          vel totam pariatur?
        </p>
        <div class="mt-md-5 brand-info">
          <div class="mt-2"><i class="bi bi-telephone pr-2"></i>5555-6787</div>
          <div class="mt-2"><i class="bi bi-geo-alt pr-2"></i>Germany</div>
          <div class="mt-2"><i class="bi bi-envelope pr-2"></i>lampo@gmail.com</div>
        </div>
      </div>
      <div class="d-flex col-md-3 col-12 mt-5 mt-md-0 header-feature">
        <div class="d-flex flex-column mr-5">
          <h5 class="footer-link-head">Menu</h5>
          <nuxt-link to="/#products" class="footer-link text-decoration-none">Product</nuxt-link>
          <nuxt-link to="/#features" class="footer-link text-decoration-none">Features</nuxt-link>
          <nuxt-link to="/#contact-us" class="footer-link text-decoration-none">Contact</nuxt-link>
        </div>
        <div class="d-flex flex-column">
          <h5 class="footer-link-head">Product</h5>
          <nuxt-link to="/products" class="footer-link text-decoration-none">Study Lamp</nuxt-link>
          <nuxt-link to="/products" class="footer-link text-decoration-none">Living Room Lamp</nuxt-link>
          <nuxt-link to="/products" class="footer-link text-decoration-none">kitchen Lamp</nuxt-link>
        </div>
      </div>
    </div>
    <div class="text-secondary copy-right ml-md-5 mr-md-5 m-4 mt-4 pt-4 header-feature">
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

.brand-info div i{
  color: #ff5c01;
}

.copy-right {
  border-top: 1px solid #6c757d;
}
</style>