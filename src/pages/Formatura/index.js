import ButtonComponent from "../../components/ButtonComponent";
import { useContext } from "react";
import { useHistory } from "react-router";
import Product from "../../components/Product";
import { FormaturaContext } from "../../Providers/Formatura";
import { BodyFormatura, FullScreenFormatura } from "./style";
import HeaderComponent from "../../components/HeaderComponent";

const PageFormatura = () => {
  const history = useHistory();
  const { formatura } = useContext(FormaturaContext);

  console.log(formatura);

  const handleClick = (page) => {
    history.push(`${page}`);
  };

  return (
    <FullScreenFormatura>
      <HeaderComponent title={"Formatura"} buttonVery={false} />

      {formatura.length === 0 ? (
        <h1>Lista vazia</h1>
      ) : (
        <BodyFormatura>
          <section>
            <ul>
              {formatura.map((item) => (
                <Product item={item} add={false} formaturaC={true} />
              ))}
            </ul>
          </section>
        </BodyFormatura>
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
    </FullScreenFormatura>
  );
};

export default PageFormatura;
