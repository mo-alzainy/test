<template>
  <nav :class="['navbar', { sticky: isSticky }]">
    <div class="container">
      <div class="logo">
        <img src="../assets/cardlogo.png" alt="">
      </div>
      <ul class="nav-links" :class="{'open': isMenuOpen}">
        <li><router-link to="/test">home</router-link></li>
        <li><router-link to="/payment">Payment</router-link></li>
        <li class="dropdown">
          <a href="#" @click="toggleDropdown">More</a>
          <ul v-show="dropdownOpen" class="dropdown-menu">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </li>
      </ul>
      <div class="burger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isMenuOpen: false,
      dropdownOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkSticky);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkSticky);
  },
  methods: {
    checkSticky() {
      this.isSticky = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}


.navbar {
  background-color: #111;
  color: white;
  padding: 10px 20px;
  position: relative;
  transition: background-color 0.3s ease;
}

.navbar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #111;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo img {
  width: 65px;
  height: auto;
  margin-left: 20px;
}

.navbar .logo a {
  text-decoration: none;
}

.navbar .nav-links {
  list-style-type: none;
  display: flex;
}

.navbar .nav-links li {
  margin: 0 25px;
  position: relative;
}

.navbar .nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.navbar .nav-links a:hover {
  color: #ff6347;
}

.navbar .burger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
}

.navbar .burger .line {
  background-color: white;
  height: 4px;
  width: 100%;
  border-radius: 5px;
}

.navbar .nav-links.open {
  display: block;
}

.navbar .dropdown-menu {
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  padding: 10px;
  display: none;
}

.navbar .dropdown-menu li {
  padding: 10px;
}

.navbar .dropdown-menu li a {
  color: white;
}

.navbar .dropdown:hover .dropdown-menu {
  display: block;
}

@media (max-width: 768px) {
  .navbar .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    display: none;
    flex-direction: column;
    align-items: center;
  }

  .navbar .nav-links.open {
    display: flex;
  }

  .navbar .burger {
    display: flex;
  }

  .navbar .nav-links li {
    margin: 10px 0;
  }

  .navbar .nav-links a {
    font-size: 20px;
  }

  .navbar .dropdown-menu {
    position: static;
    display: none;
  }

  .navbar .dropdown.open .dropdown-menu {
    display: block;
  }
}
</style>
