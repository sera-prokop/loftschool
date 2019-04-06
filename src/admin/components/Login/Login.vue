<template lang="pug">
    .login
        .container.login__container
            form(@submit.prevent="login").login__form.login-form
                h2.login-form__title Авторизация
                .login-form__field 
                    input(type="text" placeholder="Введите имя" v-model="user.name")
                h2.login-form__title Авторизация
                .login-form__field 
                    input(type="password" placeholder="Введите пароль" v-model="user.password")
                .login-form__btn 
                    button(type="submit") Отправить


</template>

<script>
import $axios from "../../requests";

export default {
  data() {
    return {
      user: {
        name: "ghjrjg",
        password: "ghjrjg"
      }
    };
  },
  methods: {
    async login() {
      const {
        data: { token }
      } = await $axios.post("/login", this.user);
      localStorage.setItem("token", token);
      
      $axios.defaults.headers['Authorization'] = `Bearer ${token}`;

      this.$router.replace('/works');
    }
  }
};
</script>