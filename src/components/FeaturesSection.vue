<template>
  <section class="features">
    <h2>Why Choose Our Subscription?</h2>
    <div class="features-list">
      <div class="feature">
        <h3>Curated Items</h3>
        <p>Receive a selection of items picked just for you each month!</p>
      </div>
      <div class="feature">
        <h3>Free Shipping</h3>
        <p>We offer free shipping on all subscription boxes.</p>
      </div>
      <div class="feature">
        <h3>Cancel Anytime</h3>
        <p>You can cancel your subscription at any time, no questions asked.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.features {
  background-color: #f5f5f5;
  padding: 60px 20px;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.features-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  background-color: white;
  padding: 20px;
  width: 30%;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1rem;
}
</style>
