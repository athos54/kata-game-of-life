import { useState } from "react";

export function Header(props) {
  const [showHeader, setShowHeader] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleStartClick = () => {
    setShowHeader(!showHeader);
    if (props.onClick) {
      props.onClick(parseInt(inputValue));
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      {showHeader && (
        <>
          <input
            type="number"
            name="size"
            placeholder="Introduce the size of table"
            onChange={handleInputChange}
            value={inputValue}
          />
          <div onClick={handleStartClick}>Start!</div>
        </>
      )}
    </>
  );
}
