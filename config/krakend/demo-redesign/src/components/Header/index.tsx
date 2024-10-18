import ExternalIcon from "@/image/icons/icon-external.svg";
import KrakendLogo from "@/image/logos/logo-krakend-bw.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-brand-neutral-900">
      <div className="container--boxed-xl">
        <div className="relative px-0 py-4 lg:py-6  ">
          <div className="text-white flex items-center justify-between h-full">
            <div className="relative z-10">
              <Link href={""}>
                <KrakendLogo />
              </Link>
            </div>
            <nav className="flex items-center justify-end">
              <ul className="flex gap-3 md:gap-6 items-center justify-between">
                <li>
                  <Link
                    href={"https://www.krakend.io/docs/"}
                    className="font-medium text-base hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="flex items-center gap-1">
                      Docs
                      <ExternalIcon />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.krakend.io"}
                    className="font-medium text-base hover:underline"
                  >
                    <span className="flex items-center gap-1">
                      Website
                      <ExternalIcon />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
