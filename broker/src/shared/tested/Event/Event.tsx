import { useState } from "react";

const Event = () => {
  const [click, setClick] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onClick = () => setClick((prev) => !prev);
  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {click === true && <div data-testid="toggle-elem">Toggle Elem</div>}
      <h1>hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value..."
      />
    </div>
  );
};

export default Event;
