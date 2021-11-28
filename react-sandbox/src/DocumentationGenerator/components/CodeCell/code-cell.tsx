import { useState } from "react";
import bundle from "../../bundlers/raw-code-bundler";
import CodeEditor from "../CodeEditor/code-editor";
import Previewer from "../Previewer /previewer";

const CodeCell = () => {
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

export default CodeCell;
