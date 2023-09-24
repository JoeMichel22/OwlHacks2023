const Nav = () => {
  return (
    <header className=" w-full">
      <nav className="w-full flex justify-between" id="navBar">
        <div className="w-[75px] h-auto flex items-center">
          <img
            src="https://i.etsystatic.com/21635101/r/il/ae2965/2704626428/il_fullxfull.2704626428_7hu6.jpg"
            className="w-full h-auto"
          />
        </div>
        <span id="title">
          <a href="." className="font-OleoScript text-subheading text-white">
            Philly Sceene
          </a>
        </span>
        <div id="contact" className="flex justify-center  items-center text-white">
          <a
            rel="noopener"
            target="_blank"
            href="#"
            className="mx-auto text-lg"
          >
            Contact Us
          </a>
        </div>
      </nav>
      <div className="mt-5 flex flex-col justify-center">
        <h2 className="my-2 text-center text-heading font-OleoScript italic font-bold">
          Welcome to the Philly Sceene!
        </h2>

        <p className="m-auto w-[70%] text-xl">
          This single page application is designed to showcase some of the
          amazing museums the Philadelphia scene has to offer. You can view the
          name, address, type of museum, and ticket price range for these
          establishments below.
        </p>
      </div>
    </header>
  );
};

export default Nav;
