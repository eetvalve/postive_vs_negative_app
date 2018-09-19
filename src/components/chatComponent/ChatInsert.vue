<template>
  <div class="chat-insert">
    <textarea type="text" class="chat-input" v-model="message" :placeholder="'share your '+ msgType +' thoughts! '" >
    </textarea>
    <button class="chat-button" @click="submit">Send</button>
  </div>
</template>

<script>
  export default {
    name: 'chat-insert',
    props: {
      msgType: {
        type: String
      }
    },
    data() {
     return {
       message: ''
     }
    },
    methods: {
      submit() {
        this.$emit('addMessage', this.message);
        this.message = '';
      }
    }
  };
</script>

<style scoped>
  .chat-insert {
    display: flex;
    padding: 3px;
   /* box-shadow: 0 5px 5px lightgrey; */
    height: 88%;
  }
  .chat-input {
    width: 100%;
    resize: none;
    font-size: 19px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  }

  .chat-button {
    transition: transform .2s;
  }

  .chat-button:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
</style>
