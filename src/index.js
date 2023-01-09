import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App input={false} />
    <App input={[1, 2, 3, 4]} />
    <App input={"hi there"} />
  </StrictMode>
);
