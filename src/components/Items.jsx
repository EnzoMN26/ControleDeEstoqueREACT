import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Items.module.css";
import HomeContext from "../contexts/HomeContext";

export default function Items() {
  const { products, setProducts } = useContext(HomeContext);

  return (
    <div id={styles.container}>
      <h1>Stock Items</h1>
      <div id={styles.aba}>
        <div id={styles.botoesAba}>
          <Link className={styles.botaoPrincipal} to="/itens">
            Todos os itens
          </Link>
          <Link className={styles.botaoAba} to="/novoitem">
            Novo item
          </Link>
        </div>
        <hr />
      </div>
      <div className={styles.divItens}>
        <table className={styles.tabelaItens}>
          <thead className={styles.headerItens}>
            <tr>
              <th colSpan="1">ID</th>
              <th colSpan="1">Nome</th>
              <th colSpan="1">Em Estoque</th>
              <th colSpan="1">Categoria</th>
              <th colSpan="1">Acao</th>
            </tr>
          </thead>
          <tbody className={styles.bodyItens}>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td className={styles.quantTableArea}>{product.estoque}</td>
                  <td>{product.categoria}</td>
                  <td>
                    <span className={styles.botaoAreaQuant}>
                      <Link
                        id={styles.see}
                        className={styles.button}
                        to={`/veritem/${product.id}`}
                      >
                        Ver
                      </Link>
                      <Link
                        id={styles.atualizar}
                        className={styles.button}
                        to={`/atualizaItem/${product.id}`}
                      >
                        Atualizar
                      </Link>
                      <button
                        id={styles.excluir}
                        className={styles.button}
                        onClick={() => {
                          const newState = products.filter(
                            (produto) => produto.id != product.id
                          );
                          setProducts(newState);
                          localStorage.setItem(
                            "produtos",
                            JSON.stringify(newState)
                          );
                          console.log(products);
                        }}
                      >
                        Excluir
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
