<template>
  <div class="wrapper">
    
    <div class="top-center">
      <balance-meter/>
    </div>

      <div class="left-column">
        <positive-messages/>
      </div>


      <div class="right-column">
        <negative-messages/>
      </div>

<p>Sauli terve!</p>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PositiveMessages from '../components/PositiveMessages';
  import NegativeMessages from '../components/NegativeMessages';
  import BalanceMeter from '../components/BalanceMeter';

  export default {
    name: 'home',
    components: {
      PositiveMessages,
      NegativeMessages,
      BalanceMeter,
    },
    computed: {},
  };
</script>

<style>
  html, #app, .home {
    height: 100%;
  }

  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;

    background-image: url(../assets/background3.png);
  }

  .home-pg-image-dark {
    background-size: cover;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10% 85%;
    grid-gap: 10px;
    height: 100%;
    margin: 0 auto;
    max-width: 1200px;

  }

  .wrapper > * {
    background-color: white;
    border-radius: 5px;
    padding: 6px;
    font-size: 150%;
    /* needed for the floated layout*/
    margin-bottom: 10px;
    box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.08);
  }

  .right-column {
    float: right;

  }

  .left-column {
    background-color: #d8f0e3;
  }

  .imageContainer-left {

  }

  .imageContainer-right {

  }

  .top-center {
    grid-column: 1 / -1;
    /* needed for the floated layout */
    clear: both;
  }

  /* We need to set the widths used on floated items back to auto,
  and remove the bottom margin as when we have grid we have gaps. */
  @supports (display: grid) {
    .wrapper > * {
      width: auto;
      margin: 0;
    }
  }
</style>
