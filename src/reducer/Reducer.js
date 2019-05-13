export default function Reducer(state, action) {
  switch (action.type) {
    case "movieResults": {
      return {
        ...state,
        movies: action.payload
      };
    }
    case "tvResults": {
      return {
        ...state,
        tv: action.payload
      };
    }
    case "personResults": {
      return {
        ...state,
        person: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
