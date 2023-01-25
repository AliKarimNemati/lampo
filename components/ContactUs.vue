<template>
  <div class="row justify-content-center ml-auto mr-auto d-flex align-items-end p-md-5 p-4" id="contact-us">
    <div class="contact-us col-md-6 col-11 bg-dark">
      <div class="col-12 col-md-10 pt-5 pl-md-5 hero-txt-para-hidden">
        <h2 class="header-feature h1">Long lasting and always bright</h2>
        <p class="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, hic
          nihil alias illum impedit ad. Laborum eligendi cum placeat tenetur.
        </p>
        <div>
          <nuxt-link
            to="/"
            class="text-light btn shop-btn rounded-pill p-2 pl-4 pr-4 mr-3 mb-5"
          >
            Contact Us</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="col-4 contact-us-img p-0 d-none d-md-block">
      <nuxt-img src="img/chandelier6.jpg" class="w-100 h-100" placeholder/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-us {
  border-radius: 20px;
}

.contact-us-img{
    position: relative;
    right: 5%;
  height: 450px;

}

.contact-us-img img {
  border-radius: 230px 230px 30px 30px;
}
</style>
