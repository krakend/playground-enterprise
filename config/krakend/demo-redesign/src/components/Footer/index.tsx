const Footer = () => {
  return (
    <footer className="bg-brand-neutral-900">
      <div className="container--boxed-xl flex flex-col items-center justify-between w-full">
        <div className="border-brand-neutral-600 border-t w-full"></div>
        <div className="relative px-0 py-4 lg:pb-10 lg:pt-8 w-full">
          <div className=" text-white flex items-center justify-between">
            <p className="text-brand-neutral-300 text-sm">
              &copy; 2017 - {new Date().getFullYear()} KRAKEND S.L.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
