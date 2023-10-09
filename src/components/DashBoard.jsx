import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";
import HomeContext from "../contexts/HomeContext";

export default function DashBoard() {
  const { products, setProducts } = useContext(HomeContext);
  return (
    <div id={styles.container}>
      <h1>Dashboard</h1>
      <div id={styles.infos}>
        <div id={styles.quantidades}>
          <div className={styles.quadroInfo}>
            <p>Diversidade de itens</p>
            <p className={styles.contentNumber}>{products.length}</p>
          </div>
          <div className={styles.quadroInfo}>
            <p>Inventario total</p>
            <p className={styles.contentNumber}>
              {products.reduce(
                (soma, product) =>
                  (soma += product?.estoque ? parseInt(product.estoque) : 0),
                0
              )}
            </p>
          </div>
          <div className={styles.quadroInfo}>
            <p>Itens Recentes</p>
            <p className={styles.contentNumber}>
              {products.reduce((soma, product) => {
                let date = new Date().getTime();
                if (date - new Date(product.data).getTime() < 86400000) {
                  soma++;
                }
                return soma;
              }, 0)}
            </p>
          </div>
          <div className={styles.quadroInfo}>
            <p>Itens acabando</p>
            <p className={styles.contentNumber}>
              {products.reduce((soma, product) => {
                if (product.estoque < 5) {
                  soma += 1;
                }
                return soma;
              }, 0)}
            </p>
          </div>
        </div>
        <div id={styles.historico}>
          <table className={styles.tableAcabando}>
            <thead className={styles.headerAcabando}>
              <tr>
                <th colSpan="3">Itens Recentes</th>
              </tr>
              <tr>
                <th colSpan="1">Nome</th>
                <th colSpan="1">Quantidade</th>
                <th colSpan="1">Acao</th>
              </tr>
            </thead>
            <tbody className={styles.bodyAcabando}>
              {products.map((product) => {
                let date = new Date().getTime();
                if (date - new Date(product.data).getTime() < 86400000) {
                  return (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td className={styles.quantTableArea}>
                        {product.estoque}
                      </td>
                      <td>
                        <span className={styles.botaoAreaQuant}>
                          <Link
                            to={`/veritem/${product.id}`}
                            className={styles.buttonSee}
                          >
                            Ver
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <table className={styles.tableAcabando}>
            <thead className={styles.headerAcabando}>
              <tr>
                <th colSpan="3">Itens Acabando</th>
              </tr>
              <tr>
                <th colSpan="1">Nome</th>
                <th colSpan="1">Quantidade</th>
                <th colSpan="1">Acao</th>
              </tr>
            </thead>
            <tbody className={styles.bodyAcabando}>
              {products.map((product) => {
                if (product.estoque < 5) {
                  return (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td className={styles.quantTableArea}>
                        {product.estoque}
                      </td>
                      <td>
                        <span className={styles.botaoAreaQuant}>
                          <Link
                            to={`/veritem/${product.id}`}
                            className={styles.buttonSee}
                          >
                            Ver
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
