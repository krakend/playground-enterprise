"use client";
import React, { ReactNode } from "react";
import integrationData from "@/data/integrations.json";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface IntegrationLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: IntegrationLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the slug from the pathname
  const slug = pathname.split("/").pop();

  // Find the integration data based on the slug
  const integration = integrationData.integrations.find(
    (integration) => integration.slug === slug
  );

  if (!integration) {
    return <div>Integration not found</div>;
  }

  return (
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
          <div className="flex items-center gap-3 mb-2">
            {integration.iconUrl && (
              <Image
                src={integration.iconUrl}
                alt={`${integration.name} logo`}
                width={30}
                height={30}
                className="object-contain"
              />
            )}
            <span className="uppercase tracking-wider text-sm text-brand-neutral-300">
              {integration.name}
            </span>
          </div>
          <h1 className="heading--h2 mb-10">{integration.title}</h1>
        </div>

        <div>
          <div className="prose--mdx" style={{maxWidth: "none"}}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
