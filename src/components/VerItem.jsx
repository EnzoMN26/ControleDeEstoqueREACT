import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/VerItem.module.css";
import HomeContext from "../contexts/HomeContext";

export default function Items() {
  const { products, setProducts } = useContext(HomeContext);
  const productId = useParams("id").id;
  const product = products.find((product) => product.id == productId);

  return (
    <div id={styles.container}>
      <h1>Stock Items</h1>
      <div id={styles.aba}>
        <div id={styles.botoesAba}>
          <Link className={styles.botaoAba} to="/itens">
            Todos os itens
          </Link>
          <Link className={styles.botaoAba} to="/novoitem">
            Novo item
          </Link>
        </div>
        <hr />
      </div>
      <div id={styles.infoItem}>
        <div id={styles.nomeEbotoes}>
          <h1>{product.name}</h1>
          <div>
            <Link
              id={styles.atualizar}
              className={styles.button}
              to={`/atualizaItem/${product.id}`}
            >
              Atualizar
            </Link>
            <Link
              id={styles.excluir}
              className={styles.button}
              to={`/veritem/${product.id}`}
              onClick={() => {
                const newState = products.filter(
                  (produto) => produto.id != product.id
                );
                setProducts(newState);
                localStorage.setItem("produtos", JSON.stringify(newState));
                console.log(products);
              }}
            >
              Excluir
            </Link>
          </div>
        </div>
        <div id={styles.infos}>
          <div className={styles.quadroInfo}>
            Categoria: {product.categoria}
          </div>
          <div className={styles.quadroInfo}>
            Quantidade em estoque: {product.estoque}
          </div>
          <div className={styles.quadroInfo}>Preco: R${product.preco}</div>
        </div>
        <div id={styles.subInfos}>
          <p>
            Cadastrado em:
            {` ${new Date(product.data).getDate()}/${
              new Date(product.data).getMonth() + 1
            }/${new Date(product.data).getFullYear()}`}
          </p>
          <br />
          <p>{product.descricao}</p>
        </div>
      </div>
    </div>
  );
}
