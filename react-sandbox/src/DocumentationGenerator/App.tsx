import "bulmaswatch/slate/bulmaswatch.min.css";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor/code-editor";
import Previewer from "./components/Previewer /previewer";
import bundle from "./bundlers/raw-code-bundler";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue={input} onChange={(value) => setInput(value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Previewer code={code} />
    </div>
  );
};

export default App;
