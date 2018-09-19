<template>
  <div class="chat-item-like-container">
    <div class="plus-sign">
      <button @click="addLike">+</button>
    </div>
    <div class="likes-amount">{{message_likes}}</div>
    <div class="minus-sign"><button @click="removeLike">-</button></div>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.css'
  import {mapMutations} from 'vuex';

  export default {
    name: "chat-item-like",
    props: {
      message_likes: {
        type: Number
      },
      message_index: {
        type: Number
      }
    },
    methods: {
      ...mapMutations([
        'REMOVE_LIKE',
        'ADD_LIKE',
      ]),
      removeLike() {
        console.log('message_index: ', this.message_index)
        this.REMOVE_LIKE(this.message_index)
      },
      addLike() {
        this.ADD_LIKE(this.message_index)
      },
    }
  }
</script>

<style scoped>
  .chat-item-like-container {
    height: 100%;
    min-height: 72px;
    margin-bottom: 10px;
  }

  .plus-sign, .minus-sign {
    font-size: 20px !important;
    font-weight: bold;
    text-align: center;

  }

  .plus-sign > button, .minus-sign > button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    -webkit-transition: color 0.2s, font-size 0.2s;
    -moz-transition: color 0.2s, font-size 0.2s;
    -o-transition: color 0.2s, font-size 0.2s;
    transition: color 0.2s, font-size 0.2s;

  }

  button:hover {
   // font-size: 25px;
    color: red;

  }

  .likes-amount {
    font-size: 16px;
    text-align: center;
  }

  button:hover > .likes-amount {
    font-size: 10px;
    display: none;
    text-align: left;
  }
</style>
