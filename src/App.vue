<template>
  <div id="app">
    <header>
      <div class="header-container">
        <div class="logo">
          Ins<span>ta</span>Fake
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto");
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
* {
  box-sizing: border-box;
}

header {
  height: 50px;
  display: flex;
}

.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  background-color: purple;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  padding: 20px 10px;
}

.logo {
  font-size: 25px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}

.logo span {
  color: #0474bc;
}

.logo-about {
  font-size: 22px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
}

.header-nav {
  display: flex;
}

.header-nav-item {
  font-size: 16px;
  font-weight: 300;
  padding: 8px;
  cursor: pointer;
  position: relative;
}

.header-nav-item a {
  color: #000;
  text-decoration: none;
}

.header-nav-item span {
  height: 2px;
  background-color: #0474bc;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  transition: 0.3s ease;
}

.header-nav-item:hover span {
  width: 100%;
}

.header-nav-item + .header-nav-item {
  margin-left: 25px;
}
.mobile-menu {
  list-style-type: none;
}

.fa-bars {
  margin-right: 20px;
  padding-left: 40px;
}

@media screen and (min-width: 1140px) {
  .header-container,
  .hero-container,
  .main-container,
  .footer-container {
    width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .header-nav-item,
  .mobile-menu {
    display: none;
  }
}
@media (min-width: 768px) {
  .mobile-menu,
  .fa-bars {
    display: none;
  }
}
</style>
