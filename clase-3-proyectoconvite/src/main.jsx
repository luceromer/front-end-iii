import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"
import { Body } from "./Body.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
)
