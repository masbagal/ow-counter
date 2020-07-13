import CharSelect from "../components/characterSelect";

function SearchBox() {
  return (
    <div className="relative mx-auto text-center mb-4">
      <input
        type="search"
        className="bg-purple-white shadow rounded border-0 p-3"
        placeholder="Search by name..."
      />
      <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter" />
    </div>
  );
}

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
