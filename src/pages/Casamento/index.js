import ButtonComponent from "../../components/ButtonComponent";
import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { useHistory } from "react-router";
import { BodyCasamento, FullScreenCasamento } from "./style";
import HeaderComponent from "../../components/HeaderComponent";
import Product from "../../components/Product";

const PageCasamento = () => {
  const history = useHistory();
  const { casamento } = useContext(CasamentoContext);

  const handleClick = (page) => {
    history.push(`${page}`);
  };

  return (
    <FullScreenCasamento>
      <HeaderComponent title={"Casamento"} buttonVery={false} />
      {casamento.length === 0 ? (
        <h1>Lista vazia</h1>
      ) : (
        <BodyCasamento>
          <section>
            <ul>
              {casamento.map((item) => (
                <Product item={item} add={false} casamentoC={true} />
              ))}
            </ul>
          </section>
        </BodyCasamento>
      )}

      <div className="bntBack">
        <ButtonComponent
          functionPage={handleClick}
          page={"/"}
          position={"absolut"}
          animatio={true}
        >
          Voltar
        </ButtonComponent>
      </div>
    </FullScreenCasamento>
  );
};

export default PageCasamento;
