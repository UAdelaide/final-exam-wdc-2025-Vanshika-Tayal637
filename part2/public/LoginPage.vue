<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const res = await fetch('/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        const data = await res.json();
        if (res.ok) {
          if (data.role === 'owner') {
            this.$router.push('/owner-dashboard');
          } else if (data.role === 'walker') {
            this.$router.push('/walker-dashboard');
          }
        } else {
          this.error = data.error || 'Login failed.';
        }
      } catch (err) {
        this.error = 'Network error or server unavailable.';
      }
    }
  }
};
</script>
