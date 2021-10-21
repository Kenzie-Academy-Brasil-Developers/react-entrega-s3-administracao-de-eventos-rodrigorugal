import { BodyConfra, FullScreenConfra } from "./style";
import HeaderComponent from "../../components/HeaderComponent/index";
import { useContext } from "react";
import { useHistory } from "react-router";
import { ConfraContext } from "../../Providers/Confraternizacao";
import Product from "../../components/Product";
import ButtonComponent from "../../components/ButtonComponent";

const PageConfra = () => {
  const history = useHistory();
  const { confra } = useContext(ConfraContext);

  const handleClick = (page) => {
    history.push(`${page}`);
  };

  return (
    <FullScreenConfra>
      <HeaderComponent title="Confra" buttonVery={false} />

      {confra.length === 0 ? (
        <h1>Lista vazia</h1>
      ) : (
        <BodyConfra>
          <section>
            <ul>
              {confra.map((item) => (
                <Product item={item} add={false} confraC={true} />
              ))}
            </ul>
          </section>
        </BodyConfra>
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
    </FullScreenConfra>
  );
};

export default PageConfra;
