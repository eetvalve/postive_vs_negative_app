<template>
  <div class="chat-list">
    <ul v-for="message in this.messages" :key="message.id">
      <li>
        <chat-item :message="message" :index="message.id"/>
      </li>
    </ul>
  </div>
</template>

<script>

  import ChatItem from './ChatItem';

  export default {
    components: {ChatItem},
    name: 'chat-list',
    props: {
      messages: {
        type: Array
      }
    },
    methods: {}
  };
</script>

<style scoped>
  .chat-list {
    padding: 3px;
    max-height: 100px;
  }

  ul {
    list-style-type: none;
    margin: 0px;
    padding: 2px;
  }
</style>
