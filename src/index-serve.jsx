import React from "react";
import { createRoot } from "react-dom/client";

const Greet = () => <h1>Hello, Chocolate!</h1>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Greet />);
