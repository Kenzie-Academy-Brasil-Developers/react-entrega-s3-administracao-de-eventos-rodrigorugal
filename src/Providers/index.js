import { BeersProvider } from "./Beers";
import { CasamentoProvider } from "./Casamento";
import { ConfraProvider } from "./Confraternizacao";
import { FormaturaProvider } from "./Formatura";

const Providers = ({ children }) => {
  return (
    <BeersProvider>
      <CasamentoProvider>
        <FormaturaProvider>
          <ConfraProvider>{children}</ConfraProvider>
        </FormaturaProvider>
      </CasamentoProvider>
    </BeersProvider>
  );
};

export default Providers;
