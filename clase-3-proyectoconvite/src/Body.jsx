import React from "react"
import { Producto } from "./Producto"

export const Body = () => {
  const productosVarios = [{ name: "nombre1" }, { name: "nombre2" }]

  return productosVarios.map((prod) => <Producto producto={prod} />)
}
