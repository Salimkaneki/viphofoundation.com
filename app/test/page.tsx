import ExpandableCard from "@/components/cards/expandable-card";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col align-center">
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Page de Test</h1>
        <ExpandableCard />
      </div>
    </div>
  );
}