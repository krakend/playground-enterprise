import integrationData from "@/data/integrations.json";
import Image from "next/image";
import Link from "next/link";

const Integration = () => {
  return (
    <div
      className="py-5 px-6 flex flex-col rounded-xl"
      style={{ background: "#171921" }}
    >
      <p className="text-white mb-4 font-medium">
        Explore demos for these integrations:
      </p>
      {integrationData.integrations.map((singleIntegrationData, index) => {
        return (
          <Link
            key={index}
            href={`/integrations/${singleIntegrationData.slug}`}
            className="flex flex-col gap-2 p-4 mb-4 rounded-md border border-brand-neutral-600 hover:outline hover:outline-brand-neutral-300 transition-colors shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={singleIntegrationData.iconUrl}
                height={40}
                width={40}
                alt=""
                className="object-contain"
              />
              <span className="font-medium text-white">
                {singleIntegrationData.title}
              </span>
            </div>
            <div className="flex flex-col gap-4 mb-4 last:mb-0">
              {singleIntegrationData.description.map((description, index) => {
                return (
                  <p
                    className="text-brand-neutral-300"
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                );
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Integration;
