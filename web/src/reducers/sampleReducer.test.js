import sampleReducer from "./sampleReducer";
import { sampleAction } from "../actions/sampleActions";

it("sets foo to true when sample action is called", () => {
  const state = { foo: false };
  expect(sampleReducer(state, sampleAction())).toStrictEqual({ foo: true });
});
