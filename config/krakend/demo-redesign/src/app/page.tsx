"use client";

import { Integration, UseCases } from "@/components/Home";
import Architecture from "@/components/Architecture";
import BGPurplePattern from "@/image/background/bg-pattern-purple.webp";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const Page: FC<any> = () => {
  const [currentTab, setCurrentTab] = useState("use-cases");

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-neutral-900 section--sm relative">
        <div className="container--boxed">
          <Image
            src={BGPurplePattern}
            width={580}
            height={321}
            alt=""
            className="absolute top-8 left-1/2 -translate-x-1/2 z-0"
          />
          <div className="relative z-10">
            <h1 className="heading--h1 flex flex-col items-center text-center mb-4 md:mb-7">
              <span className="text-white">KrakenD Enterprise</span>
              <span className="text-gradient--lavender leading-normal">
                Playground
              </span>
            </h1>
            <p
              className="text-brand-neutral-300 text--lg text-center mx-auto"
              style={{ maxWidth: "722px" }}
            >
              This is a demonstration environment that puts together the
              necessary pieces to get you started with our API Gateway, using
              example use-cases.
            </p>
          </div>
        </div>
      </section>

      <main className="section--xl bg-brand-neutral-900 relative">
        <div className="container--boxed">
          <div className="flex flex-col md:flex-row items-stretch gap-8 justify-between">
            <div className="md:w-1/3 ">
              <div className="flex items-center gap-1.5 mb-2.5">
                <button
                  className={`px-4 py-2 font-medium rounded-md rounded-l-full ${
                    currentTab === "use-cases"
                      ? "bg-white text-brand-neutral-900"
                      : "bg-brand-neutral-600 text-brand-neutral-300"
                  }`}
                  onClick={() => setCurrentTab("use-cases")}
                >
                  Use-cases
                </button>
                <button
                  className={`px-4 py-2 font-medium rounded-r-full rounded-l-md ${
                    currentTab === "integrations"
                      ? "bg-white text-brand-neutral-900"
                      : "bg-brand-neutral-600 text-brand-neutral-300"
                  }`}
                  onClick={() => setCurrentTab("integrations")}
                >
                  Integrations
                </button>
              </div>
              {currentTab === "use-cases" && <UseCases />}
              {currentTab === "integrations" && <Integration />}
            </div>

            {/* Line */}
            <div
              className="h-auto"
              style={{
                width: "1px",
                backgroundImage:
                  "linear-gradient(to bottom, #0b0c10 0%, #545d78 25%, #545d78 51%, #545d78 75%, #0b0c10 100%)",
              }}
            />

            {/* Diagram */}
            <div className="flex-1 flex items-start">
              <div className="sticky top-4 w-full max-h-full h-[95vh] flex items-center justify-center">
                <Architecture />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Questions */}
      <section className="section--xl pt-0 bg-brand-neutral-900">
        <div className="container--boxed flex items-center flex-col ">
          <h2 className="text-center heading--h2 text-white mb-6 md:mb-8">
            Questions?
          </h2>
          <Link
            href={"mailto:support@krakend.io?subject=Enterprise-docs"}
            className="button--primary"
          >
            Ask Support
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
