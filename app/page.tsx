 
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-15">
        <div className="w-full flex flex-col items-center justify-between gap-8">
          <h1 className=" w-[960px] font-display text-5xl font-bold text-center text-gray-800 mt-10 px-4">
            Quand la solidarite devient un geste,
            l’espoir renait dans chaque vie.
          </h1>

          <div className="flex flex-row w-full gap-8">
            <div className="flex-1 h-[346px] bg-primary-300"></div>
            <div className="w-[346px] h-[346px] bg-primary-500"></div>
          </div>
        </div>
      </section>

      <section className="w-full h-[200px] bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-gray-800 mt-10 mb-8">
            Nos domaines d&apos;intervention
          </h2>
        </div>
      </section>

      <section id="" className="flex flex-row px-15">
        <div id="" className="flex-1">
          <div className="flex flex-row items-center">
            <h1 className="font-display font-bold text-2xl ">A propos</h1>
            <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
          </div>
          
        </div>
        <div id="" className="flex-1 h-[350px] bg-primary-300">
              
              
        </div>
      </section>


    </div>
  );
}
