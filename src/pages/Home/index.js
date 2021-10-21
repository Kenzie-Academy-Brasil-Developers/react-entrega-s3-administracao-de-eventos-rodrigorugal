import { useContext } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import Product from "../../components/Product";
import { BeersContext } from "../../Providers/Beers";
import { BodyHome, FullScreen } from "./style";

const PageHome = () => {
  const { beers } = useContext(BeersContext);

  return (
    <FullScreen>
      <HeaderComponent title={"Home"} />
      <BodyHome>
        <div>
          <h1>Bebidas</h1>
        </div>
        <section>
          <ul>
            {beers.map((item) => (
              <Product item={item} />
            ))}
          </ul>
        </section>
      </BodyHome>
    </FullScreen>
  );
};

export default PageHome;
