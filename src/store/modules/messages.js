import dateFns from 'date-fns';
import fiLocale from 'date-fns/locale/fi';

const messagesState = {
  state: {
    messages: [
      {
        id: 1, type: 'negative', content: 'hyvaa puuta ', likes: 0, time: new Date(2014, 1, 1, 11, 30, 50, 10).toLocaleString(),
      },
      {
        id: 2, type: 'positive', content: 'hello', likes: 0, time: new Date(2017, 1, 1, 11, 30, 50, 10).toLocaleString(),
      },
      {
        id: 3,
        type: 'positive',
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        likes: 0,
        time: new Date(2015, 1, 1, 11, 30, 32, 10).toLocaleString(),
      },
      {
        id: 4, type: 'negative', content: 'hyvaa puuta  ff', likes: 0, time: new Date(2014, 1, 1, 11, 30, 50, 10).toLocaleString(),
      },
    ],
  },
  getters: {
    old_post_filter: (state) => {
      console.log('filtterataan');
      return state.messages.filter((value, index) => index > state.messages.length - 6);
    },
    negative_message_filter: state => state.messages.filter(message => message.type === 'negative'),
    positive_message_filter: state => state.messages.filter(message => message.type === 'positive'),
    compare_message_types_percent: (state, getters) => (type) => {
      console.log('typeJee: ', type)
      const negativeMessages = getters.negative_message_filter;
      const positiveMessages = getters.positive_message_filter;
      const positiveNegativeSum = negativeMessages.length + positiveMessages.length;

      let divide;
      if (type === 'positive') {
        divide = positiveMessages.length / positiveNegativeSum;
      }
      if (type === 'negative') {
        divide = negativeMessages.length / positiveNegativeSum;
      }

      const totalPercent = divide * 100;
      return totalPercent.toFixed(2);
    },
    compare_message_types_percent_positive: (state, getters) => getters.compare_message_types_percent('positive'),
    compare_message_types_percent_negative: (state, getters) => getters.compare_message_types_percent('negative')
  },
  mutations: {
    FORMAT_DATE_TIME: state => state.messages.map((message) => {
      const formattedTime = dateFns.format(
        message.time,
        'DD MMMM YYYY HH:mm:ss',
        {locale: fiLocale},
      );
      message.time = formattedTime;
      return message;
    }),
    ADD_MESSAGE: (state, payload) => {
      const messageObj = {
        id: state.messages.length + 1,
        type: payload.msgType,
        content: payload.message,
        likes: 0,
        time: new Date().toLocaleString(),
      };
      state.messages.push(messageObj);
    },
    ADD_LIKE: (state, index) => {
      const message = state.messages.find(msg => msg.id === index);
      message.likes += 1;
    },
    REMOVE_LIKE: (state, index) => {
      const message = state.messages.find(msg => msg.id === index);
      message.likes -= 1;
    },
  },
  actions: {},
};

export default messagesState;
