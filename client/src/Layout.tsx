interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const paths: string[] = ["/", "/calendar"];
  return (
    <nav className="flex w-full m-auto justify-end bg-blue-dark text-white py-2">
      <div>
        {["Home", "Calendar"].map((link, i) => (
          <a className={"ml-4 px-8"} key={String(i)} href={paths[i]}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

interface ContainerProps {}

const Container: React.FunctionComponent<ContainerProps> = (props) => {
  return <div className="flex flex-grow">{props.children}</div>;
};

export interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
