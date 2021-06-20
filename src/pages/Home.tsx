export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const textContainerClasses: string =
    "w-full lg:w-3/4 m-auto cursor-default md:shadow-2xl";
  const textClasses: string = "font-sans text-white text-6xl md:text-9xl";

  return (
    <div className="flex flex-col content-center justify-center w-full md:w-3/4 m-auto">
      <div className={`bg-blue ${textContainerClasses}`}>
        <p className={textClasses}>embodied</p>
      </div>
      <div className={`bg-red ${textContainerClasses}`}>
        <p className={textClasses}>together</p>
      </div>
      <div className={`bg-blue-light ${textContainerClasses}`}>
        <p className={textClasses}>embodied</p>
      </div>
    </div>
  );
};

export default Home;
