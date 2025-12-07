import Breadcrumb from "@/components/breadcrumb";

export default function ArticlePage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog-et-activite" },
          { label: "Article", href: "/blog-et-activite/article" },
        ]}
      />

      {/* Section principale */}
      <section className="w-full bg-yellow-50 mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
        <h1 className="font-display text-5xl font-bold text-center text-gray-800 mb-6">
          Lorem article ipsum dolor sit amet consectetur.
        </h1>
        <div className="bg-primary-400 w-[1246px] h-[346px]"></div>
      </section>

      {/* Section secondaire */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-800">
          fnùfgù
        </div>
      </section>
    </div>
  );
}
