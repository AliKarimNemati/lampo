<template>
  <div class="mt-4 card-product bg-dark col-md col-9">
    <div class="card-img col-12">
      <img :src="'img/'+lamp.img" class="w-100 h-100"/>
    </div>
    <h3 class="mt-3 h4">{{lamp.name}}</h3>
    <p class="text-secondary m-0">Lorem, ipsum.</p>
    <div class="d-flex justify-content-between ">
    <p class="price m-0"><span class="sign">$</span>{{lamp.price}}</p>
    <div class="plus rounded-circle">+</div>
    </div>
  </div>
</template>

<script>
export default {
    props:['lamp']
};
</script>

<style>
.card-img {
  height: 250px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

.card-img img{
  border-radius:5%;
  transition: .7s;
  z-index: -100;
}

.card-img img:hover{
  transform: scale(1.04);
}
.card-product {
  border-radius: 5%;
  padding: 16px;
  padding-top: 14px;
  padding-right: 14px;
  padding-left: 14px;
  width: 250px;
}
.price{
    font-size: 1.4rem;
}
.sign{
    color: #ff5c01;
    font-size: 1.4rem;
}
.plus{
    background: #ff5c01;
    padding: 8px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
    transition: .5s;
    cursor: pointer;
}
.plus:hover{
    background: #eee;
    color: #ff5c01;
}
</style>