<template>
  <div class="d-flex flex-column h-100 justify-content-center mt-5 pt-5">
    <div class="logIn col-md-5 col-10 rounded-lg p-5 box-shadow">
      <h2 class="text-uppercase text-light text-center fs-1">signUp</h2>
      <p class="text-secondary text-center">Please fill out this form!</p>

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

        <!-- Email -->
        <div>
          <b-form-input
            v-model="email"
            :state="emailValidation"
            class="rounded-pill text-center text-light d-flex mt-4"
            placeholder="Email"
            type="email"
          ></b-form-input>

          <b-form-invalid-feedback
            :state="emailValidation"
            class="text-center mt-2"
          >
            Your email must be valid.
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            :state="emailValidation"
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

        <!-- phonenumber -->
        <div>
          <b-form-input
            v-model="phonenumber"
            :state="phonenumberValidation"
            class="rounded-pill text-center text-light d-flex mt-4"
            placeholder="Phonenumber(912*******)"
          ></b-form-input>

          <b-form-invalid-feedback
            :state="phonenumberValidation"
            class="text-center mt-2"
          >
            Your Phonenumber must be valid.
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            :state="phonenumberValidation"
            class="text-center mt-2"
          >
            Good.
          </b-form-valid-feedback>
        </div>
      </b-form>

      <div class="d-flex flex-column align-items-center mt-4">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="terms" v-model="terms"/>
          <label class="text-light form-check-label" for="terms"
            >Terms & Conditions</label
          >
          <p class="text-danger" v-if="!terms && submited">please accept terms</p>
        </div>
      </div>

      <div class="submit-logIn">
        <input
          type="button"
          value="SignUp"
          class="rounded-pill d-flex mt-3 text-light p-2 pr-4 pl-4"
          @click="
            () => {
              submited = true;
              if (!userNameErrors && !passwordErrors && !emailErrors && !phonenumberErrors && terms) {
                this.$router.push('/signin');
              }
            }
          "
        />
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
      email: "",
      phonenumber: "",
      terms: false,

      submited: false,

      userNameErrors: true,
      passwordErrors: true,
      emailErrors: true,
      phonenumberErrors: true,
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
        if (this.password.length <= 7) {
          this.passwordErrors = true;
        }

        if (this.password.length > 7) {
          this.passwordErrors = false;
        }
        return this.password.length > 7;
      }
    },

    emailValidation() {
      if (this.submited) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.emailErrors = false;
          return true;
        } else {
          this.emailErrors = true;
        }
        return false;
      }
    },

    phonenumberValidation() {
      if (this.submited) {
        if (/^\d{10}$/.test(this.phonenumber)) {
          this.phonenumberErrors = false;
          return true;
        } else {
          this.phonenumberErrors = true;
        }
        return false;
      }
    },
  },

    head() {
    return {
      title: 'Sign up',
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
