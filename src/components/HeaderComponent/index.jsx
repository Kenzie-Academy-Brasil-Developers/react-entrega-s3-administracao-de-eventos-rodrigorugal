import { HeaderStyled } from "./style";
import { useHistory } from "react-router";
import ButtonComponent from "../ButtonComponent";
const HeaderComponent = ({ title, buttonVery = true }) => {
  const history = useHistory();

  const handlerPage = (page) => {
    history.push(`/${page}`);
  };

  return (
    <HeaderStyled>
      <div>
        <h1>{title}</h1>
      </div>

      {buttonVery && (
        <nav>
          <ButtonComponent functionPage={handlerPage} page={"Casamento"}>
            Casamento
          </ButtonComponent>
          <ButtonComponent functionPage={handlerPage} page={"Confra"}>
            Confra
          </ButtonComponent>
          <ButtonComponent functionPage={handlerPage} page={"Formatura"}>
            Formatura
          </ButtonComponent>
        </nav>
      )}
    </HeaderStyled>
  );
};

export default HeaderComponent;
