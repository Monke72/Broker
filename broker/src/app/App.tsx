import Button from "@shared/ui/Button/Button";
import InputForm from "@shared/ui/InputForm/InputForm";
import emainIcon from "@shared/assets/icons/mail_icon.svg";

function App() {
  return (
    <>
      <div className="header">
        <div className="header__loo " style={{ color: "red" }}>
          <Button>REG</Button>
          <InputForm icon={emainIcon} placeholder="E-Mail" />
        </div>
      </div>
    </>
  );
}

export default App;
