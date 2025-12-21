export default function ExpandableCard() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Conteneur fixe (évite le reflow) */}
      <div
        className="
          bg-primary-dark
          w-301.5 h-75
          overflow-hidden
          flex flex-col
          justify-center
          p-2
          transition-transform duration-300 ease-out
          group
          hover:scale-105
        "
      >
        {/* Titre */}
        <h3 className="text-primary-100 text-lg font-semibold text-center">
          Titre de la carte
        </h3>

        {/* Contenu masqué */}
        <div
          className="
            origin-top
            transform scale-y-0
            opacity-0
            group-hover:scale-y-100
            group-hover:opacity-100
            transition-all duration-300 ease-out
            mt-2
          "
        >
          <p className="text-primary-100 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
