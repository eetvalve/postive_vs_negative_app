<template>
  <div class="chat-item-container">
    <div class="chat-item-date">
      {{message.time}}
    </div>


    <div class="chat-item-content">
      {{message.content}}
    </div>
    <div class="chat-item-like">
      <chat-item-like :message_likes="message.likes" :message_index="index"></chat-item-like>
    </div>
  </div>
</template>

<script>
  import ChatItemLike from "./chatItemLike";

  export default {
    components: {ChatItemLike},
    name: 'chat-item',
    props: {
      message: {
        type: Object
      },
      index: {
        type: Number
      }
    }
  };
</script>

<style scoped>
  .chat-item-container {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid #F4F4F4;
    border-radius: 15px;
    padding: 15px;
    -webkit-backdrop-filter: blur(10px);
    background-color: white;
    box-shadow: 0px 9px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    transition: transform .2s; /* Animation */
    margin: 3px 5px;
  }

  .chat-item-container:hover {
    transform: scale(1.02);
  }

  .chat-item-date {
    margin-left: auto;
    float: right;
    font-size: 13px;
    margin-bottom: 5px;
    flex: 100%;
  }
  .chat-item-content {
    flex: 80%;
    white-space: pre-line;
  }
  .chat-item-like {
    align-self: center;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
