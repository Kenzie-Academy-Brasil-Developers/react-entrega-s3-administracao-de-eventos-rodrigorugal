import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraContext } from "../../Providers/Confraternizacao";
import { FormaturaContext } from "../../Providers/Formatura";
import ButtonComponent from "../ButtonComponent";
import { BeerItem, Box } from "./style";

const Product = ({
  item,
  add = true,
  casamentoC = false,
  confraC = false,
  formaturaC = false,
}) => {
  const { addToCasamento, deleteToCasamento } = useContext(CasamentoContext);
  const { addToConfra, deleteToConfra } = useContext(ConfraContext);
  const { addToFormatura, deleteToFormatura } = useContext(FormaturaContext);

  return (
    <BeerItem key={item.id}>
      <h3>{item.name}</h3>
      <p>Data de fabricação : {item.first_brewed}</p>
      <p>{item.volume.value} Litros</p>
      <img src={item.image_url} alt={item.name} />
      <details open>
        <summary>Descrição</summary>
        {item.description}
      </details>

      {add ? (
        <Box className="Buttons">
          <ButtonComponent functionAdd={addToCasamento} item={item}>
            + casamento
          </ButtonComponent>
          <ButtonComponent functionAdd={addToConfra} item={item}>
            + confra
          </ButtonComponent>
          <ButtonComponent functionAdd={addToFormatura} item={item}>
            + formatura
          </ButtonComponent>
        </Box>
      ) : casamentoC ? (
        <Box className="Buttons">
          <ButtonComponent functionDelete={deleteToCasamento} item={item}>
            delete
          </ButtonComponent>
        </Box>
      ) : confraC ? (
        <Box className="Buttons">
          <ButtonComponent functionDelete={deleteToConfra} item={item}>
            delete
          </ButtonComponent>
        </Box>
      ) : (
        formaturaC && (
          <Box className="Buttons">
            <ButtonComponent functionDelete={deleteToFormatura} item={item}>
              delete
            </ButtonComponent>
          </Box>
        )
      )}
    </BeerItem>
  );
};

export default Product;
