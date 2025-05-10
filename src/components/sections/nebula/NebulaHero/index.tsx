import SearchPanel from './SearchPanel';

export default function NebulaHero() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-5xl">
          <h1 className="text-center text-3xl font-bold md:text-4xl">
            Find your ML dataset or model
          </h1>
        </div>

        <div className="mx-auto mb-12 max-w-5xl">
          <SearchPanel />
        </div>
      </div>
    </section>
  );
}
