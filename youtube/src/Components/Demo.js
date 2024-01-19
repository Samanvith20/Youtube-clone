import React, { useMemo, useState } from 'react';
import { findPrime } from '../utils/Helper';

const Demo = () => {
  const [text, setText] = useState('');
  const [darktheme, setDarktheme] = useState(false);
  // usememo to cache the result of a calculation b/w re-renders
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (darktheme ? "bg-gray-900 text-white" : "")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setDarktheme(!darktheme)}
        >
          Toggle
        </button>
      </div>
      <input
        className="border border-black w-full px-2 py-1 mb-4"
        type="text"
        placeholder="Enter Your value"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <h1 className="font-bold text-xl">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
