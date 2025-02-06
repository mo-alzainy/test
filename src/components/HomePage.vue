<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <FooterS />
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue';
import FeaturesSection from './FeaturesSection.vue';
import PricingSection from './PricingSection.vue';
import FooterS from './FooterS.vue';




export default {
  components: {
    HeroSection,
    FeaturesSection,
    PricingSection,
    FooterS,

  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}
</style>
