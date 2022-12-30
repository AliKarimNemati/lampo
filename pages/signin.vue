<template>
  <div class="d-flex flex-column justify-content-center h-100 mt-5 pt-5">
    <div class="logIn col-md-5 col-10 rounded-lg p-5">
      <h2 class="text-uppercase text-light text-center fs-1">signin</h2>
      <p class="text-secondary text-center">
        Please enter your username and password!
      </p>

      <b-form @submit.stop.prevent class="inputs">

        <!-- user name -->
        <div>
          <b-form-input
            v-model="userName"
            :state="userNameValidation"
            class="rounded-pill text-center text-light d-flex"
            placeholder="Username"
          ></b-form-input>

          <b-form-invalid-feedback
            :state="userNameValidation"
            class="text-center mt-2"
          >
            Your username must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            :state="userNameValidation"
            class="text-center mt-2"
          >
            Good.
          </b-form-valid-feedback>
        </div>

        <!-- password -->
        <div>
          <b-form-input
            v-model="password"
            :state="passwordValidation"
            class="rounded-pill text-center text-light d-flex mt-4"
            type="password"
            placeholder="Password"
          ></b-form-input>

          <b-form-invalid-feedback
            :state="passwordValidation"
            class="text-center mt-2"
          >
            Your password must at least 8 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            :state="passwordValidation"
            class="text-center mt-2"
          >
            Good.
          </b-form-valid-feedback>
        </div>
      </b-form>
      <div class="d-flex flex-column align-items-center mt-4 links">
        <nuxt-link to="#" class="text-light text-decoration-none"
          >Forgot password ?</nuxt-link
        >
        <nuxt-link to="/signup" class="text-light text-decoration-none mt-2"
          >Don't have account? click here!</nuxt-link
        >
      </div>

      <div class="submit-logIn">
        <input
          type="button"
          value="Login"
          class="rounded-pill d-flex mt-3 text-light p-2 pr-4 pl-4"
          @click="
            () => {
              submited = true;
              if (!userNameErrors && !passwordErrors){
                this.$router.push('/')
              }
            }
          "
        />
      </div>

      <div class="icons d-flex justify-content-center mt-3">
        <a class="bi bi-facebook text-light h3 mr-3" href="#"></a>
        <a href="#" class="bi bi-twitter text-light h3 mr-3"></a>
        <a href="#" class="bi bi-google text-light h3"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      submited: false,
      userNameErrors: true,
      passwordErrors: true,
    };
  },
  computed: {
    userNameValidation() {
      if (this.submited) {
        if (this.userName.length <= 4 && this.userName.length >= 13) {
          this.userNameErrors = true;
        }

        if (this.userName.length > 4 && this.userName.length < 13) {
          this.userNameErrors = false;
        }
        return this.userName.length > 4 && this.userName.length < 13;
      }
    },

    passwordValidation() {
      if (this.submited) {
        if (this.password.length <= 8) {
          this.passwordErrors = true;
        }

        if (this.password.length > 8) {
          this.passwordErrors = false;
        }
        return this.password.length > 8;
      }
    },
  },

    head() {
    return {
      title: 'Sign in',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Lampo is the the best website for buying modern lamp",
        },
      ],
    };
  },
};
</script>

<style>
.logIn {
  background-color: #343a40;
  margin: 0 auto;
}

.inputs input {
  height: 50px;
  width: 65%;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: 2px #3498db solid;
  margin: 0 auto;
  transition: 0.5s;
}

.inputs input:focus {
  width: 70%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

.links a:hover {
  text-decoration: underline !important;
}

.submit-logIn input {
  border: 2px #ff5c01 solid;
  background-color: rgba(0, 0, 0, 0);
  margin: 0 auto;
  transition: 0.5s;
}

.submit-logIn input:hover {
  background-color: #ff5c01;
}

.icons a:hover {
  transform: rotate(360deg);
  transition: all 1s;
}

@media(max-width: 768px){
  .inputs input{
    width: 80%;
  }

  .inputs input:focus{
    width: 90%;
  }
}
</style>