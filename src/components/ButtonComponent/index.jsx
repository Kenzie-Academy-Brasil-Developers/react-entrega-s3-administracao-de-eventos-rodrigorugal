import { BoxButton } from "./style";

const ButtonComponent = ({
  functionAdd,
  functionPage,
  functionDelete,
  page,
  item,
  children,
  position,
  animatio,
}) => {
  return (
    <BoxButton
      onClick={() => {
        functionPage && functionPage(page);

        functionAdd && functionAdd(item);
        functionDelete && functionDelete(item.name);
      }}
      position={position && position}
      animatio={animatio}
    >
      {children}
    </BoxButton>
  );
};

export default ButtonComponent;
