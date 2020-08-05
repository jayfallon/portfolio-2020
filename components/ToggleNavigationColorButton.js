import { useContext } from "react";

import HeaderContext from "context/HeaderContext";

export default function ToggleNavigationColorButton() {
  const { color, toggleColor } = useContext(HeaderContext);
  return <button onClick={() => toggleColor(!color)}>Toggle Nav Color</button>;
}
