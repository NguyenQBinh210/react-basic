const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div>
          <h4>start bootstrap</h4>
          <div className="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">
              <nav>Shop</nav>
            </a>
          </div>
        </div>
        <div>
          <button>
            <div className="cartButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="17.5" cy="19.5" r="1.5"></circle>
              </svg>
              <p>Cart</p>
              <div>
                <p className="a0">0</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
