<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Get Your Monthly Subscription Box!</h1>
      <p>Sign up today and get curated surprises delivered to your door every month.</p>
      <button @click="subscribe">Subscribe Now</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    subscribe() {
      alert("Thank you for subscribing!");
    },
  },
};
</script>

<style scoped>
.hero {
  background-color: #ff6347;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero button {
  background-color: white;
  color: #ff6347;
  font-size: 1.1rem;
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.hero button:hover {
  background-color: #ff4500;
}
</style>
