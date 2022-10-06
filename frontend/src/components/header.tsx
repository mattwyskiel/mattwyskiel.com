const headerNavBarStyle = {
  backgroundColor: 'Black',
};

export default function Header(props) {
  return (
    <>
      <style type="text/css">
        {`
                    .bg-black {
                        background-color: black;
                    }
                `}
      </style>
      <header>
        <Navbar expand="sm" bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <span className={custom['site-title']}>Matthew Wyskiel</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
