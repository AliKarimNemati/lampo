<template>
  <div>
    <div class="d-flex p-5">
      <div class="hero-img col-4">
        <img src="../assets/img/chandelier5.jpg" class="w-100 h-100" />
      </div>

      <div class="col-5 pr-5 pl-5 ml-5 mt-3">
        <h1 class="header-txt">Light Up Your Home</h1>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos eum
          doloremque in iusto corrupti deleniti dolores reiciendis?
        </p>
        <div class="d-flex">
          <nuxt-link
            to="/"
            class="
              bi bi-cart
              text-light
              btn
              shop-btn
              rounded-pill
              p-2
              pl-4
              pr-4
              mr-3
            "
          >
            Shop Now</nuxt-link
          >
          <div class="play-icon">
            <i class="bi bi-play-fill h3"></i>
          </div>
        </div>

        <div class="mt-5 d-flex">
          <div>
            <h2>27<span class="k">K+</span></h2>
            <p class="text-secondary">
              Lorem ipsum, dolor sit amet
            </p>
          </div>
          <div>
            <h2>34<span class="k">K+</span></h2>
            <p class="text-secondary">
              Lorem ipsum, dolor sit amet
            </p>
          </div>
          <div>
            <h2>165<span class="k">K+</span></h2>
            <p class="text-secondary">
              Lorem ipsum, dolor sit amet
            </p>
          </div>
          <div>
            <h2>50<span class="k">+</span></h2>
            <p class="text-secondary">
              Lorem ipsum, dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: syne;
  src: url(../assets/font/Syne-VariableFont_wght.ttf);
}
.header-txt {
  font-family: syne;
  font-size: 5rem;
}
.hero-img {
  height: 500px;
}
.hero-img img {
  border-radius: 50% 50% 10% 10%;
}
.shop-btn {
  background: #ff5c01;
}
.play-icon {
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: 0.5s;
}

.play-icon i {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #ff5c01;
}

.play-icon:hover {
  background: #fff;
}
.k {
  color: #ff5c01;
  font-size: 1.5rem;
}
</style>