import { useState, useEffect } from "react";
import "./Algorithms.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Algorithms = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState([]);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    handleFizzbuzz();
  }, [number]);

  const fizzbuzz = (n) => {
    return Array.from({ length: n }, (_, i) => i + 1).map((num) => {
      if (num % 15 === 0) {
        return "FizzBuzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num;
      }
    });
  };

  const handleFizzbuzz = () => {
    setResult(fizzbuzz(number));
  };

  const styles = {
    fizz: "tw-text-blue-700 tw-font-extrabold",
    buzz: "tw-text-yellow-400 tw-italic tw-font-serif",
  };

  const FizzbuzzText = () => {
    return (
      <>
        <span className="tw-text-blue-700 tw-font-extrabold">Fizz</span>
        <span className="tw-text-yellow-400 tw-italic tw-font-serif">Buzz</span>
      </>
    );
  };

  const fizzbuzzCode = `
const fizzbuzz = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1).map((num) => {
    if (num % 15 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  });
};
`;

  return (
    <div className="tw-container tw-p-10 mx-auto tw-max-w-5xl">
      <div className="sm:tw-flex tw-justify-between tw-items-center">
        <p className="sm:tw-text-8xl tw-text-6xl tw-text-center">
          <FizzbuzzText />
        </p>
        <div className="tw-flex tw-justify-center">
          <button
            onClick={() => setShowCode(!showCode)}
            className="tw-bg-blue-700 tw-text-white tw-py-2 tw-px-4 tw-rounded-md hover:tw-bg-yellow-400 hover:tw-text-black tw-ml-5 tw-h-12 tw-w-28 tw-text-nowrap"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
        </div>
      </div>
      <hr />
      <div className="tw-flex tw-items-center tw-justify-center">
        <div>
          <p className="tw-text-2xl">
            Given a number, N, return all numbers from 1 to N.
          </p>
          <ul className="tw-list-inside tw-list-disc tw-text-xl">
            <li>
              If N is a multiple of 3, replace it with '
              <span className={styles.fizz}>Fizz</span>'.
            </li>
            <li>
              If N is a multiple of 5, replace it with '
              <span className={styles.buzz}>Buzz</span>'.
            </li>
            <li>
              If N is a multiple of both 3 and 5, replace it with '
              <FizzbuzzText />
              '.
            </li>
          </ul>
          <div className="tw-flex tw-justify-center tw-items-center">
            <label className="tw-mr-2 tw-pb-2 tw-text-lg">Enter number:</label>
            <input
              name="number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="tw-border tw-border-gray-300 tw-py-2 tw-pl-4 tw-rounded-md tw-mb-4 tw-w-24"
            />
          </div>
        </div>
      </div>
      <hr />
      {result.length > 0 && (
        <div className="tw-flex tw-flex-wrap tw-gap-3 tw-w-full">
          {result.map((x, index) => {
            return (
              <p key={index} className="tw-text-xl">
                <span
                  className={
                    x === "Fizz"
                      ? `${styles.fizz}`
                      : x === "Buzz"
                      ? `${styles.buzz}`
                      : ""
                  }
                >
                  {x === "FizzBuzz" ? <FizzbuzzText /> : x}
                </span>
                {index < result.length - 1 && ","}
              </p>
            );
          })}
        </div>
      )}
      {showCode && (
        <div className="tw-bg-gray-100 tw-p-4 tw-rounded-md tw-shadow-md">
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {fizzbuzzCode.trim()}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default Algorithms;
