import App from "./App";

import { act } from "@testing-library/react";

test("renders components correctly", async () => {
  await act(async () => {
      <App />
  });
});