import { SAMPLE_ACTION } from "../actions/sampleActions";

const initialState = { foo: false };

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return { ...state, foo: true };
    default:
      return state;
  }
};

export default sampleReducer;
