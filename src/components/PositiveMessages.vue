<template>
  <div class="positiveMessages-container">
    <div ref="positiveChatListPosition" class="chat-list-position">
      <chat-list :messages="positive_message_filter"/>
    </div>
    <div class="chatInsert-position">
      <chat-insert :msgType="type" @addMessage="addMessage"/>
    </div>
  </div>
</template>

<script>

  import ChatList from './chatComponent/ChatList';
  import ChatInsert from './chatComponent/ChatInsert';
  import {mapState, mapGetters, mapMutations} from 'vuex';

  export default {
    components: {
      ChatInsert,
      ChatList,
    },
    name: 'positive-messages',
    computed: {
      ...mapState({
        messages: state => state.chatModule.messages
      }),
      ...mapGetters([
        'old_post_filter',
        'positive_message_filter'
      ])
    },
    methods: {
      ...mapMutations([
        'FORMAT_DATE_TIME',
        'ADD_MESSAGE'
      ]),
      addMessage (msg) {
        console.log('viesti: ', msg)
        const payload = {
          message: msg,
          msgType: this.type
        }
        this.ADD_MESSAGE(payload)
      },
      positiveScrollMsgListDown() {
        console.log('ajetaan positive')
        this.elem = this.$refs.positiveChatListPosition;
        this.elem.scrollTop =  this.elem.scrollHeight;
      }
    },
    created() {
    },
    data() {
      return {
        type: 'positive'
      }
    },
    updated() {
      this.positiveScrollMsgListDown()
    }
  };
</script>

<style scoped>
  .positiveMessages-container {
    display: grid;
    grid-template-rows: 85% 15%;
    grid-gap: 10px;
    height: 100%;
    margin: 0 auto;
  }
  .chat-list-position {
    overflow-y: scroll;
    overflow-x: hidden !important;


    /*flex: 1;
    display: flex; */
    /* content styling OPTIONAL*/
    /* align-items: center; */
    /*justify-content: center;*/
    /* padding: 10vh; */
    /* background styling */

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

   /* background-image: url(../assets/light.jpeg); */
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }

</style>
