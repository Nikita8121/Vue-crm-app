/* eslint-disable no-useless-return */
<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          v-model.trim="email"
          :class="{
            invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)
          }"
          type="text"
          class="validate"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required"
          >Поле email Не должно быть пустым</small
        >
        <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
          type="password"
          class="validate"
        />
        <label for="password">Пароль</label>
        <small v-if="$v.password.$dirty && !$v.password.required" class="helper-text invalid"
          >Введите пароль</small
        >
        <small v-else-if="$v.password.$dirty && !$v.password.minLength" class="helper-text invalid"
          >Пароль должен быть {{ $v.password.$params.minLength.min }} символов. Сейчас он
          {{ password.length }}</small
        >
      </div>
      <div class="input-field">
        <input
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
          v-model.trim="name"
          id="name"
          type="text"
          class="validate"
        />
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required"
          >Введите ваше имя</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      agree: false,
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: (v) => v },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        // eslint-disable-next-line no-useless-return
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      console.log(formData);

      this.$router.push('/');
    },
  },
};
</script>
