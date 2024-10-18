"use client";
import { useRef, useState } from "react";

interface URLInputBoxProps {
  endpoint?: string;
  placeholder?: string;
  helpText?: string;
}

const URLInputBox: React.FC<URLInputBoxProps> = ({
  endpoint,
  placeholder,
  helpText,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [buttonText, setButtonText] = useState<string>("Copy"); // Button text state
  const [isCopied, setIsCopied] = useState(false); // State to track if the URL is copied

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input
    }
  };

  const handleCopyUrl = () => {
    const inputValue = inputRef.current?.value || "";

    // Concatenate the URL and input value
    const fullUrl = `${endpoint}${inputValue}`;

    // Copy to clipboard
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        setButtonText("Copied!");
        setIsCopied(true);

        setTimeout(() => {
          setButtonText("Copy");
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="not-prose">
      <div
        className="bg-white py-2 px-4 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between"
        onClick={handleDivClick}
      >
        <div className="flex text-brand-neutral-600 w-9/12">
          <p>{endpoint || ""}</p>
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="focus:outline-none w-full"
          />
        </div>

        <button
          className={`bg-brand-neutral-900 text-white rounded-md px-6 py-2 mt-4 sm:mt-0 ${
            isCopied ? "bg-blue-500" : ""
          }`}
          onClick={handleCopyUrl}
        >
          {buttonText}
        </button>
      </div>
      {helpText && (
        <small className="mt-2 text-sm font-normal">{helpText}</small>
      )}
    </div>
  );
};

export default URLInputBox;
