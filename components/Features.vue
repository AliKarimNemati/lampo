<template>
  <div class="p-md-5 p-4">
    <div class="d-flex flex-wrap">
      <div class="col-md-3 mt-5">
        <h2 class="header-feature h1">See more of our flash sales</h2>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          natus praesentium,
        </p>
        <nuxt-link
          to="/products"
          class="text-light btn shop-btn rounded-pill p-2 pl-4 pr-4 mr-3"
        >
          Shopping Now</nuxt-link
        >
      </div>
      <div
        class="
          d-flex
          flex-wrap
          ml-md-4 ml-0
          mt-5 mt-md-0
          justify-content-center justify-md-content-start
        "
      >
        <Card
          v-for="product in products.slice(9, 12)"
          :key="product.id"
          class="ml-md-3"
          :lamp="product"
        />
      </div>
    </div>

    <div class="mt-5 d-flex flex-wrap">
      <div class="feature-img col-md-4 col-12 d-none d-md-block">
        <img src="img/lamp1.jpg" class="w-100 h-100" />
      </div>
      <div class="col-md-5 col-12 mt-5 ml-md-5 ml-0">
        <h2 class="header-feature h1 col-md-8 col-12">
          Why should you choose us as your partner
        </h2>

        <div class="accordion mt-4" role="tablist">
          <b-card no-body class="mb-1 accordion">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="dark"
                class="d-flex justify-content-between"
                @click="openAccordion1 = !openAccordion1"
              >
                <p class="h5">Remote Light Control</p>

                <i
                  class="bi h5"
                  :class="{
                    'bi-chevron-up': openAccordion1,
                    'bi-chevron-down': !openAccordion1,
                  }"
                ></i>
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <p class="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, facilis. Fuga dolorem, aliquam saepe
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1 accordion">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-2
                variant="dark"
                class="d-flex justify-content-between"
                @click="openAccordion2 = !openAccordion2"
              >
                <p class="">Latest and modern design</p>

                <i
                  class="bi h5"
                  :class="{
                    'bi-chevron-up': openAccordion2,
                    'bi-chevron-down': !openAccordion2,
                  }"
                ></i>
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-2"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <p class="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, facilis. Fuga dolorem, aliquam saepe
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1 accordion">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-3
                variant="dark"
                class="d-flex justify-content-between"
                @click="openAccordion3 = !openAccordion3"
              >
                <p class="h5">Saving electricity and quality control</p>

                <i
                  class="bi h5"
                  :class="{
                    'bi-chevron-up': openAccordion3,
                    'bi-chevron-down': !openAccordion3,
                  }"
                ></i>
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-3"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <p class="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, facilis. Fuga dolorem, aliquam saepe
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      openAccordion1: true,
      openAccordion2: false,
      openAccordion3: false,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style>
.header-feature {
  font-family: syne;
}
.feature-img {
  height: 500px;
}
.feature-img img {
  border-radius: 230px 230px 30px 30px;
}
.accordion {
  background: #181818;
}
.accordion button {
  background: #181818;
  border: none;
  text-align: left;
}
.accordion button p{
  font-size: 1.1rem;
}
</style>