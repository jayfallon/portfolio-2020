import { useState } from "react";

import HeaderContext from "context/HeaderContext";

export default function ContextWrapper({ children, navigation }) {
  const [menuItems] = useState(navigation);
  const [color, toggleColor] = useState(true);

  return (
    <HeaderContext.Provider value={{ menuItems, color, toggleColor }}>
      {children}
    </HeaderContext.Provider>
  );
}
