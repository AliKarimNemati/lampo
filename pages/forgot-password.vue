<template>
  <div class="d-flex flex-column h-100 justify-content-center mt-5 pt-5">
    <div class="logIn col-md-5 col-10 rounded-lg p-5 box-shadow">
      <p class="text-secondary text-center">Please enter your email!</p>

      <b-form @submit.stop.prevent class="inputs">
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

        <div class="text-center mt-4">
          <button
            class="
              buy-btn
              rounded-lg
              col-md-2 col-4
              shop-btn
              rounded-pill
              p-2
              pl-4
              pr-4
              text-center
              mt-3
              border-0
              text-light
              btn
            "
            @click="
              () => {
                submited = true;
                if (!emailErrors) {
                  showAlert();
                }
              }
            "
          >
            Send
          </button>
        </div>
      </b-form>
    </div>

    <!-- Alert -->
    <div class="alert">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>We sent an email successfully.</p>
        <p>Check your email!</p>
        <b-progress
          variant="success"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        ></b-progress>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      submited: false,
      emailErrors: true,
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },

  computed: {
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
  },

  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },

  head() {
    return {
      title: "forgot password",
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
body {
  color: #eee;
  background: #181818;
}
</style>
