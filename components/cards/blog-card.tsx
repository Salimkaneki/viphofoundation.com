interface BlogCardProps {
  cardColor?: string;
  title?: string;
  href?: string;
}

import Link from "next/link";

export default function BlogCard({
  cardColor = "bg-primary-300",
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  href
}: BlogCardProps) {
  const content = (
    <div className="shrink-0 w-125 group cursor-pointer">
      <div className={`w-full h-75 ${cardColor}`}></div>
      <h2 className="font-sans text-xl font-medium text-gray-600 mt-4 underline group-hover:text-primary-400 group-hover:no-underline">
        {title}
      </h2>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}