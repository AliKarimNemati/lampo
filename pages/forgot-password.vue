<template>
  <div class="d-flex flex-column h-100 justify-content-center mt-5 pt-5">
    <div class="logIn col-md-5 col-10 rounded-lg p-lg-5 p-4 box-shadow">
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
              col-lg-2 col-4
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
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      submited: false,
      emailErrors: undefined,
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
    showAlert() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        width: "25rem",
        color: "#ffff",
        background: "#2a2a2a",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "We sent an email successfully.",
        text: "Check your email!",
      });
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

.logIn {
  background-color: #2a2a2a;
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
</style>
