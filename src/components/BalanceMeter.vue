<template>
  <div class="balancemeter-container">

    <ul class="balancemeter-header-text-container">
      <li class="balancemeter-header-text">Positive</li>
      <li class="balancemeter-header-text-vs">Vs.</li>
      <li class="balancemeter-header-text">Negative</li>
    </ul>

    <div class="balancemeter-small-text-container">share your thoughts!

      <div class="balancemeter-content-negative">
        <span class="negative-percent">{{negativePercent}}%</span>
        <div id="myBar" ref="progressBar" class="balancemeter-content-positive">
          <span class="positive-percent">{{positivePercent}}%</span>
        </div>
      </div>
    </div>

    <!--  positive: {{positiveMsgs.length}}
      negative: {{negativeMsgs.length}} -->

  </div>
</template>

<script>

  import {mapGetters} from 'vuex';

  export default {
    name: 'balance-meter',
    computed: {
      ...mapGetters({
        positiveMsgs: 'positive_message_filter',
        negativeMsgs: 'negative_message_filter',
        positivePercent: 'compare_message_types_percent_positive',
        negativePercent: 'compare_message_types_percent_negative'
      }),
    },
    methods: {
      calculateProgressBar(oldVal) {

        let val = 0;
        if (this.positivePercent) {
          val = this.positivePercent;
        }
        let elem = this.$refs.progressBar;

        let width = oldVal;
        if (oldVal) {
          width = oldVal;
        } else {
          width = 1;
        }

        let id = setInterval(frame, 30);

        function frame() {
          if (width >= val) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
          }
        }
      },
      calculateProgressBarDown(oldVal) {

        let val = 0;
        if (this.positivePercent) {
          val = this.positivePercent;
        }
        let elem = this.$refs.progressBar;

        let width = oldVal;
        if (oldVal) {
          width = oldVal;
        } else {
          width = 1;
        }

        let id = setInterval(frame, 30);

        function frame() {
          if (width <= val) {
            clearInterval(id);
          } else {
            width--;
            elem.style.width = width + '%';
          }
        }
      }
    },
    watch: {
      positivePercent(newVal, oldVal) {
        if (newVal) {
          if (oldVal > newVal) {
            this.calculateProgressBarDown(oldVal)
          } else {
            this.calculateProgressBar(oldVal)
          }
        }
      },
    },
    mounted() {
      this.calculateProgressBar()
    }
  };
</script>

<style scoped>
  .balancemeter-container {
    display: flex;
    flex-direction: row; /* default value; can be omitted */
    flex-wrap: wrap; /* default value; can be omitted */
    justify-content: space-between;
    height: 100%;
  }

  .balancemeter-header-text-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .balancemeter-header-text {
    font-size: 66px;
  }

  .balancemeter-header-text-vs{
    font-size: 58px;
  }

  .balancemeter-content-negative {
    max-height: 25px;
    width: 50%;
    background-color: lightcoral;
    border-radius: 15px;
    border: 1px solid #201F1D;
    margin-top: auto;
  }

  .balancemeter-content-positive {
    height: 100%;
    height: 25px;
    width: 0%;
    background-color: #d8f0e3;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    animation-iteration-count: infinite;
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 4s;
  }

  @-webkit-keyframes example {
    25% {
      background-color: #96d7b4;
    }
    100% {
      background-color: #d8f0e3;
    }
  }

  /* Standard syntax */
  @keyframes example {
    25% {
      background-color: #96d7b4;
    }
    100% {
      background-color: #d8f0e3;
    }
  }

  .positive-percent {
    padding: 0 5px;
  }

  .negative-percent {
    float: right;
    padding: 0 5px;
  }

  .balancemeter-small-text-container {
    width: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
  }
</style>
