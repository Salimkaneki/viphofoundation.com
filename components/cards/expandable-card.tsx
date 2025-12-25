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
        "
      >
      </div>
    </div>
  );
}
