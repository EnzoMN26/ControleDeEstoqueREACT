import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NovoItem.module.css";
import HomeContext from "../contexts/HomeContext";

export default function NovoItem() {
  const { products, setProducts } = useContext(HomeContext);
  const [product, setProduct] = useState({
    name: "",
    estoque: "",
    preco: "",
    categoria: "",
    descricao: "",
  });

  const resetaInput = () => {
    setProduct({
      name: "",
      estoque: "",
      preco: "",
      categoria: "",
      descricao: "",
    });
  };

  return (
    <div id={styles.container}>
      <h1>Stock Items</h1>
      <div id={styles.aba}>
        <div id={styles.botoesAba}>
          <Link className={styles.botaoAba} to="/itens">
            Todos os itens
          </Link>
          <Link className={styles.botaoPrincipal} to="/novoitem">
            Novo item
          </Link>
        </div>
        <hr />
      </div>
      <div id={styles.divForm}>
        <div id={styles.divTop}>
          <div className={styles.input}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="nome"
              value={product.name}
              onChange={(e) =>
                setProduct((old) => ({ ...old, name: e.target.value }))
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              value={product.estoque}
              onChange={(e) =>
                setProduct((old) => ({ ...old, estoque: e.target.value }))
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="preco">Preco</label>
            <input
              type="number"
              name="preco"
              value={product.preco}
              onChange={(e) =>
                setProduct((old) => ({ ...old, preco: e.target.value }))
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="categoria">Categoria</label>
            <input
              type="select"
              name="categoria"
              value={product.categoria}
              onChange={(e) =>
                setProduct((old) => ({ ...old, categoria: e.target.value }))
              }
            />
          </div>
        </div>
        <div className={styles.divDescr}>
          <label htmlFor="descricao">Descricao</label>
          <textarea
            id={styles.descricao}
            name="descricao"
            value={product.descricao}
            onChange={(e) =>
              setProduct((old) => ({ ...old, descricao: e.target.value }))
            }
          />
          <Link
            className={styles.button}
            onClick={() => {
              product.id = Math.round(Math.random() * 1000000);
              product.data = new Date();
              const newState = [...products, product];
              setProducts(newState);
              resetaInput();
              localStorage.setItem("produtos", JSON.stringify(newState));
            }}
          >
            Criar
          </Link>
        </div>
      </div>
    </div>
  );
}
