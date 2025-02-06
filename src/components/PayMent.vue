<template>
  <div class="page-wrap">
  <div class="payment-container">
    <div class="credit-card-container" @click="openImageSelector">
      <div
        class="credit-card"
        :style="{
          backgroundImage: 'url(' + getCardBackgroundUrl(cardBackground) + ')'
        }"
      >
        <div class="credit-card-header">
          <div class="card-chip"></div>
        </div>
        <div class="credit-card-body">
          <div class="card-number">
            <span>{{ maskedCardNumber }}</span>
          </div>
          <div class="card-details">
            <div class="card-name">
              <span>{{ paymentDetails.name || 'Cardholder' }}</span>
            </div>
            <div class="card-expiry">
              <span>{{ formattedExpiry || 'MM/YY' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-container">
      <h2>Payment Page</h2>
      <div class="payment-form-box">
        <form @submit.prevent="submitPayment">
          <div class="form-group">
            <label for="name"> full name on card</label>
            <input v-model="paymentDetails.name" id="name" type="text" placeholder="John Doe" required />
          </div>

          <div class="form-group">
            <label for="cardNumber">card number</label>
            <input v-model="paymentDetails.cardNumber" id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />
          </div>

          <div class="form-group">
            <label for="expiry">expiry date</label>
            <input v-model="paymentDetails.expiry" id="expiry" type="text" placeholder="MM/YY" required @input="formatExpiry" maxlength="5"/>
          </div>

          <div class="form-group">
            <label for="cvv">CVV</label>
            <input v-model="paymentDetails.cvv" id="cvv" type="text" placeholder="123" required />
          </div>

          <div class="form-group">
            <button type="submit">subscribe</button>
          </div>
        </form>

        <div v-if="paymentStatus" :class="paymentStatusClass">
          {{ paymentStatus }}
        </div>
      </div>
    </div>
    <div v-if="showImageSelector" class="popup" @click.self="closePopup">
      <div class="popup-content">
        <h3>Choose your card</h3>
        <div class="popup-images">
          <img
            v-for="(image, index) in cardBackgrounds"
            :key="index"
            :src="getCardBackgroundUrl(image)"
            alt="Card background"
            class="popup-image"
            @click="setCardBackground(image)"
          />
        </div>
        <button @click="closePopup" class="close-btn">Close</button>
      </div>
    </div>
  </div>
</div>
<PricingSection />
<FooterS />
</template>

<script>
import qicardImage from '@/assets/qicard.png';
import cardBg2Image from '@/assets/card-bg2.png';
import cardBg3Image from '@/assets/card-bg3.png';
import PricingSection from './PricingSection.vue'
import FooterS from './FooterS.vue';

export default{
  components: {
    FooterS,
    PricingSection,
  },
  name: 'PaymentPage',
  data() {
    return {
      paymentDetails: {
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
      },
      paymentStatus: '',
      paymentStatusClass: '',
      cardBackgrounds: [
        'qicard',
        'card-bg2',
        'card-bg3',
      ],
      cardBackground: 'qicard',
      showImageSelector: false,
    };
  },
  computed: {
    maskedCardNumber() {
      const cardNumber = this.paymentDetails.cardNumber || '';
      return cardNumber.replace(/\d(?=\d{4})/g, '*');
    },
    formattedExpiry() {
      const expiry = this.paymentDetails.expiry || '';
      if (expiry.length === 5) {
        return `${expiry.substring(0, 2)}/${expiry.substring(3, 5)}`;
      }
      return expiry;
    }
  },
  methods: {
    submitPayment() {
      if (this.isValidForm()) {
        this.paymentStatus = 'Payment Submitted Successfully!';
        this.paymentStatusClass = 'success';
      } else {
        this.paymentStatus = 'Please fill in all the details correctly.';
        this.paymentStatusClass = 'error';
      }
    },
    isValidForm() {
      const { name, cardNumber, expiry, cvv } = this.paymentDetails;
      return (
        name && cardNumber && expiry && cvv &&
        cardNumber.length === 16 &&
        expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/) &&
        cvv.length === 3
      );
    },
    formatExpiry() {
      let expiry = this.paymentDetails.expiry.replace(/\D/g, '');
      if (expiry.length > 2) {
        expiry = `${expiry.substring(0, 2)}/${expiry.substring(2, 4)}`;
      }
      this.paymentDetails.expiry = expiry;
    },
    openImageSelector() {
      this.showImageSelector = true;
    },
    closePopup() {
      this.showImageSelector = false;
    },
    setCardBackground(image) {
      this.cardBackground = image;
      this.closePopup();
    },
    getCardBackgroundUrl(image) {
      const imageMapping = {
        'qicard': qicardImage,
        'card-bg2': cardBg2Image,
        'card-bg3': cardBg3Image
      };
      return imageMapping[image];
    }
  }
};
</script>

<style scoped>
.page-wrap {
  background-color: #f5f5f5;
  min-height: 60vh;
  padding: 20px;
}

.payment-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.credit-card-container {
  margin-top: 100px;
  width: 30%;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.credit-card {
  background-image: url(./assets/qicard.png);
  background-size: cover;
  background-position: center;
  background-color: #2d2d2d;
  color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  transition: transform 0.3s ease;
}

.credit-card-container:hover .credit-card {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
}

.credit-card-header {
  display: flex;
  justify-content: flex-start;
}

.card-chip {
  width: 30px;
  height: 30px;
  background-color: #d3d3d3;
  border-radius: 3px;
}

.credit-card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-number {
  font-size: 25px;
  letter-spacing: 2px;
}

.card-details {
  display: flex;
  justify-content: space-between;
}

.card-name, .card-expiry {
  font-size: 25px;
}

.form-container {
  width: 65%;
}

h2 {
  text-align: center;
  color: #2d2d2d;
}

.payment-form-box {
  padding: 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4500;
}

.success {
  color: green;
  text-align: center;
  font-weight: bold;
}

.error {
  color: red;
  text-align: center;
  font-weight: bold;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  max-width: 600px;
  max-height: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.popup-images {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
}

.popup-image {
  width: 160px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s;
}

.popup-image:hover {
  transform: scale(1.1);
}

.close-btn {
  width: 100%;
  padding: 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 140px;
}

.close-btn:hover {
  background-color: #d32f2f;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.body {
  color: #2d2d2d;
}
</style>

