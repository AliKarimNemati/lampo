<template>
  <div>
    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>

    <section style="padding-top: 300px" class="hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id!
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((el) => observer.observe(el));
  },
};
</script>

<style>

        .hidden{
            opacity: 0;
            text-align: left;

            font-size: 26px;
            transition: 4s all;

        }

        .show{

            font-size: 30px;
            text-align: center;
            opacity: 1;
        }
</style>