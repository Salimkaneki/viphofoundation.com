interface BlogCardProps {
  cardColor?: string;
  title?: string;
}

export default function BlogCard({
  cardColor = "bg-primary-300",
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}: BlogCardProps) {
  return (
    <div className="shrink-0 w-80 group">
      <div className={`w-full h-48 ${cardColor}`}></div>
      <h2 className="font-sans text-xl font-medium text-gray-600 mt-4 underline hover:text-primary-400 hover:no-underline cursor-pointer">
        {title}
      </h2>
    </div>
  );
}