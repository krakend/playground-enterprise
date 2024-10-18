"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import userCases from "@/data/krakend.json";

import CopyIcon from "@/image/icons/copy.svg";
import Prism from "prismjs";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

require("prismjs/components/prism-json");

const Layout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.replace("/use-cases/", "");

  const [isCopied, setIsCopied] = useState(false);

  // Finding specific use case based on the slug
  const useCase = userCases.endpoints.find(
    (uc) => uc.custom_fields.slug === slug
  );

  if (!useCase) {
    return <p>Use Case not found</p>;
  }

  // Created a new object excluding the custom_fields property
  const { custom_fields, ...useCaseWithoutCustomFields } = useCase;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(JSON.stringify(useCaseWithoutCustomFields, null, 2))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch((err) => console.error("Failed to copy!", err));
  };

  return (
    <>
      <div className="bg-brand-neutral-900 text-white">
        <div className="container--boxed-xl py-8">
          <button
            onClick={() => router.back()}
            className="bg-brand-neutral-600 hover:scale-95 transition-transform rounded-full px-4 py-2 flex items-center justify-center gap-1"
          >
            <ArrowLeftIcon className="size-5" />
            <span className="text-base">Go back</span>
          </button>

          <div className="mt-10">
            <p className="uppercase tracking-wider text-sm text-brand-neutral-300 mb-2">
              {useCase.custom_fields.tag}
            </p>
            <h1 className="heading--h2 mb-10">{useCase.custom_fields.name}</h1>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left section */}
              <div className="lg:w-1/2 overflow-auto">
                <p className="font-semibold mb-2">KrakenD Config</p>
                <pre className="text-sm relative">
                  <button
                    className={`absolute right-2 top-3 sm:right-6 sm:top-4 icon ${
                      isCopied ? "text-green-500" : "text-brand-neutral-200"
                    }`}
                    onClick={handleCopy}
                  >
                    <CopyIcon width={20} height={20} />
                  </button>
                  <code className="language-json">
                    {JSON.stringify(useCaseWithoutCustomFields, null, 2)}
                  </code>
                </pre>
              </div>

              {/* Right section */}
              <div className="lg:w-1/2">
                <div className="prose--mdx">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
