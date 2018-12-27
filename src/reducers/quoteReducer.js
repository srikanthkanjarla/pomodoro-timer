const initialState = {
  quoteText: 'To hell with circumstances; I create opportunities',
  quoteAuthor: 'Bruce Lee',
};

function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_QUOTE':
      return { ...state, quoteText: action.payload.text, quoteAuthor: action.payload.author, isNewQuote: false };
    default:
      return { ...state };
  }
}

export default quoteReducer;
