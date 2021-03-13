import React, { useEffect, useReducer } from "react";
import "@tone-row/slang/build/index.css";
import { Type } from "./RuntimeSlang";
import { getThemeCss, SlangConfig } from "@tone-row/slang";

function App() {
  const [config, updateConfig] = useReducer(
    (c: Partial<SlangConfig>, u: Partial<SlangConfig>) => ({ ...c, ...u }),
    {}
  );
  useEffect(() => {
    (async () => {
      let style = document.getElementById("slang");
      if (!style) {
        style = document.createElement("style");
        style.setAttribute("id", "slang");
        document.head.appendChild(style);
      }
      const css = getThemeCss(config);
      style.innerHTML = css;
    })();
  }, [config]);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => updateConfig({ baseFontFamily: e.target.value })}
      />
      <Type>Hello World</Type>
    </div>
  );
}

export default App;
