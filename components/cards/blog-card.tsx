interface BlogCardProps {
  cardColor?: string;
  title?: string;
}

export default function BlogCard({
  cardColor = "bg-primary-300",
  title = "Lorem ipsum dolor sit am et,con sectetur adipiscing elit."
}: BlogCardProps) {
  return (
    <div className="shrink-0 w-125 group ]:">
      <div className={`w-full h-75 ${cardColor}`}></div>
      <h2 className="font-sans text-xl font-medium text-gray-600 mt-4 underline hover:text-primary-400 hover:no-underline cursor-pointer">
        {title}
      </h2>
    </div>
  );
}