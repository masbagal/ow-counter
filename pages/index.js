import CharSelect from "../components/characterSelect";

function IndexPage() {
  return (
    <div>
      <header>
        <h1 className='title'>OVERWATCH HERO COUNTERS</h1>
        <img src='/img/logo.png' className='logo' />
      </header>
      <div className='orangeLine sm mx-auto my-2 md:my-12' />
      <div className="container mx-auto mt-4 md:mt-8">
        <CharSelect />
      </div>
    </div>
  );
}

export default IndexPage;
