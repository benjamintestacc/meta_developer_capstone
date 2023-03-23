import { fetchAPI } from "../../../Api";

const arr = ["17:00", "17:30", "19:00", "19:30", "21:30", "22:00", "23:30"];

test("test API", () => {
  expect(fetchAPI(new Date())).toStrictEqual(arr);
});
