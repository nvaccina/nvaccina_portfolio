<script>
import axios from 'axios';
import Wabutton from '../partials/Wabutton.vue';
export default {
  name: 'Login',
  components:{
    Wabutton  
  },
  data() {
    return {
      activeTab: 'login', // Tab di default
      email: '',
      password: '',
      name: ''
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('https://localhost:5001/api/auth/login', {
          email: this.email,
          password: this.password
        });
        localStorage.setItem('token', res.data.token);
        this.message = `Benvenuto ${res.data.nome}`;
      } catch (err) {
        this.message = err.response.data;
      }
    }
  }
};
</script>

<template>
  <section id="login" class="mt-50">
    <div class="container">
        <h1 class="pb-5">Area di amimnistrazione</h1>
    </div>
    <div class="container">
      <!-- <div>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
        <p>{{ message }}</p>
      </div> -->
      <div class="login-register">
        <div class="form-container">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a 
                class="nav-link" 
                :class="{ active: activeTab === 'login' }" 
                href="#" 
                @click.prevent="activeTab = 'login'"
              >
                Login
              </a>
            </li>
            <li class="nav-item">
              <a 
                class="nav-link" 
                :class="{ active: activeTab === 'register' }" 
                href="#" 
                @click.prevent="activeTab = 'register'"
              >
                Registrati
              </a>
            </li>
          </ul>

          <!-- Form Login -->
          <form v-if="activeTab === 'login'" @submit.prevent="login">
            <div class="form-group mt-2">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group mt-2">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="mt-3 text-center">
              <button type="submit" class="btn btn-primary">Accedi</button>
            </div>
          </form>

          <!-- Form Registrazione -->
          <form v-if="activeTab === 'register'" @submit.prevent="register">
            <div class="form-group mt-2">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group mt-2">
              <label>Cognome</label>
              <input type="text" class="form-control" v-model="surname">
            </div>
            <div class="form-group mt-2">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group mt-2">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="mt-3 text-center">
              <button type="submit" class="btn btn-success">Registrati</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables';
@use "sass:color";

.login-register{
  display: flex;
  justify-content: center;
  .form-container{
      width: 30%;
      padding: 30px;
      border-radius: 20px;
      box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
      .form-group label{
        margin-bottom: 4px;
      }
  }
}
</style>
