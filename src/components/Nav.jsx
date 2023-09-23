const Nav = () => {
  return (
    <header className=" w-full">
      <nav className="w-full flex justify-center font-bold" id="navBar">
        <div className="w-[75px] h-[40px]"><img src="https://i.etsystatic.com/21635101/r/il/ae2965/2704626428/il_fullxfull.2704626428_7hu6.jpg" className="w-full h-auto"/></div>
        <span id="title"><a href=".">Philly Sceene</a></span>
        <span id="contact"><a rel="noopener" target="_blank" href="#">Contact Us</a></span>
      </nav>
      <div className="flex flex-col justify-center">
        <h2 className="text-center">Welcome to the Philly Sceene!</h2>
        
        <p className="m-auto w-[50%]">This single page application is designed to showcase some of the amazing museums the Philadelphia scene has to offer. You can view the name, address, type of museum, and ticket price range for these establishments below.</p>
      </div>
      
    </header>
  );
};

export default Nav;
