import App from "./App";

import { act } from "react";

test("renders components correctly", async () => {
  await act(async () => {
      <App />
  });
});