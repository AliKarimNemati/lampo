<template>
  <form class="d-flex flex-wrap form-info justify-content-center mt-5">
    <input type="text" placeholder="Enter your name" class="col-md-3 col-11 m-4" />
    <input type="email" placeholder="Enter your email" class="col-md-3 col-11 m-4" />
    <input type="text" placeholder="Enter your phonenumber" class="col-md-3 col-11 m-4" />
    <textarea
      name=""
      id=""
      rows="5"
      placeholder="Enter your address"
      class="col-md-6 col-11 m-4 mx-auto pt-2"
    ></textarea>
  </form>
</template>


<style>
.form-info input {
  height: 45px;
  border-radius: 20px;
  color: #eee;
  background: #3d4246;
  border: none;
  outline: none;
}

.form-info input:focus{
  outline: 1.6px solid #ea5200;

}

.form-info textarea {
  border-radius: 20px;
  color: #eee;
  background: #3d4246;
  border: none;
  outline: none;
}

.form-info textarea:focus{
    outline: 1.6px solid #ea5200;
}
</style>