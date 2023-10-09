import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/AtualizaItem.module.css";
import HomeContext from "../contexts/HomeContext";

export default function AtualizaItem() {
  const { products, setProducts } = useContext(HomeContext);
  const productId = useParams("id").id;
  const produtoAtual = products.find((product) => product.id == productId);
  const [product, setProduct] = useState(produtoAtual);

  const atualiza = () => {
    produtoAtual.name = product.name;
    produtoAtual.estoque = product.estoque;
    produtoAtual.preco = product.preco;
    produtoAtual.categoria = product.categoria;
    produtoAtual.descricao = product.descricao;
    produtoAtual.data = new Date();
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
              onChange={(e) =>
                setProduct((old) => ({ ...old, name: e.target.value }))
              }
              value={product.name}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              onChange={(e) =>
                setProduct((old) => ({ ...old, estoque: e.target.value }))
              }
              value={product.estoque}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="preco">Preco</label>
            <input
              type="number"
              name="preco"
              onChange={(e) =>
                setProduct((old) => ({ ...old, preco: e.target.value }))
              }
              value={product.preco}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="categoria">Categoria</label>
            <input
              type="select"
              name="categoria"
              onChange={(e) =>
                setProduct((old) => ({ ...old, categoria: e.target.value }))
              }
              value={product.categoria}
            />
          </div>
        </div>
        <div className={styles.divDescr}>
          <label htmlFor="descricao">Descricao</label>
          <textarea
            id={styles.descricao}
            name="descricao"
            onChange={(e) =>
              setProduct((old) => ({ ...old, descricao: e.target.value }))
            }
            value={product.descricao}
          />
          <Link
            className={styles.button}
            onClick={() => {
              atualiza();
              localStorage.setItem("produtos", JSON.stringify(products));
            }}
          >
            Salvar
          </Link>
        </div>
      </div>
    </div>
  );
}
