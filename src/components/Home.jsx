import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { Outlet } from "react-router-dom";
import HomeContext from "../contexts/HomeContext";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("produtos");
    if (!storedProducts) return [];
    return JSON.parse(storedProducts);
  });

  return (
    <HomeContext.Provider value={{ products, setProducts }}>
      <div id={styles.container}>
        <div id={styles.header}>
          <div>REACT STOCK</div>
          <div id={styles.headerbutton}>
            <Link className={styles.botaoLink} to="/">
              Inicio
            </Link>
            <Link className={styles.botaoLink} to="itens">
              Itens
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </HomeContext.Provider>
  );
}
