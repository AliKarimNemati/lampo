<template>
  <div>
    <div class="d-flex flex-wrap p-md-5 p-4">
      <div class="hero-img col-md-4 d-none d-md-block">
        <img src="img/chandelier5.jpg" class="w-100 h-100" />
      </div>

      <div class="col-md-5 col-12 pr-md-5 pl-md-5 ml-md-5 mt-md-3">
        <h1 class="header-txt hero-txt-hidden">Light Up Your Home</h1>
        <p class="text-secondary hero-txt-para-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos eum
          doloremque in iusto corrupti deleniti dolores reiciendis?
        </p>
        <div class="d-flex flex-wrap hero-txt-para-hidden">
          <nuxt-link
            to="/products"
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

        <div class="mt-5 d-flex flex-wrap">
          <div class="col-md-3 col-6">
            <h2>27<span class="k">K+</span></h2>
            <p class="text-secondary">Lorem ipsum, dolor</p>
          </div>
          <div class="col-md-3 col-6">
            <h2>34<span class="k">K+</span></h2>
            <p class="text-secondary">Lorem ipsum, dolor</p>
          </div>
          <div class="col-md-3 col-6">
            <h2>165<span class="k">K+</span></h2>
            <p class="text-secondary">Lorem ipsum, dolor</p>
          </div>
          <div class="col-md-3 col-6">
            <h2>50<span class="k">+</span></h2>
            <p class="text-secondary">Lorem ipsum, dolor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("hero-txt-show");
        } else {
          entry.target.classList.remove("hero-txt-show");
        }
      });
    });

    const hiddenHeader = document.querySelectorAll(".hero-txt-hidden");
    hiddenHeader.forEach((el) => headerObserver.observe(el));
  },
};
</script>

<style>
@font-face {
  font-family: syne;
  src: url(../assets/font/Syne-VariableFont_wght.ttf);
}
.header-txt {
  font-family: syne;
}

.hero-txt-hidden {
  opacity: 0;
  font-size: 5rem;
  transition: 1s;
}

.hero-txt-show {
  opacity: 1;
  font-size: 5.3rem;
}

.hero-txt-para-hidden {
  opacity: 0;
  font-size: 0.9rem;
  transition: 1s;
}

.hero-txt-para-show {
  font-size: 1rem;
  opacity: 1;
}

.hero-img {
  height: 500px;
}
.hero-img img {
  border-radius: 230px 230px 30px 30px;
}
.shop-btn {
  background: #ff5c01;
}

.shop-btn:hover {
  background: #ea5200;
}

.play-icon {
  border: 1.6px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: 0.5s;
  cursor: pointer;
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

@media (max-width: 768px) {
  .hero-txt-hidden {
    opacity: 0;
    font-size: 4rem;
    transition: 1s;
  }

  .hero-txt-show {
    opacity: 1;
    font-size: 4.2rem;
  }
}
</style>