<template>
  <section class="pricing">
    <h2>Our Pricing Plans</h2>
    <div class="pricing-cards">
      <div class="card">
        <h3>Basic Plan</h3>
        <p>$10 / month</p>
        <button>Subscribe</button>
      </div>
      <div class="card featured">
        <h3>Pro Plan</h3>
        <p>$20 / month</p>
        <button>Subscribe</button>
      </div>
      <div class="card">
        <h3>Premium Plan</h3>
        <p>$30 / month</p>
        <button>Subscribe</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.pricing {
  background-color: #ffffff;
  padding: 60px 20px;
  text-align: center;
}

.pricing h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.pricing-cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.card {
  background-color: #f8f8f8;
  padding: 30px;
  width: 30%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.card p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.card button {
  background-color: #ff6347;
  color: white;
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.card button:hover {
  background-color: #ff4500;
}

.featured {
  background-color: #ff6347;
  color: white;
}

.featured button {
  background-color: white;
  color: #ff6347;
}
</style>
