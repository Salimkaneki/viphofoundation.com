interface TextBlogCardProps {
  // Define any props if needed in the future
  date?: string;
  readTime?: string;
  title?: string;
}

export default function TextBlogCard({date, readTime, title}: TextBlogCardProps) {
    return (
        <div className="w-50 py-10 border-b border-gray-700 text-gray-700 gap-4 flex flex-col cursor-pointer">
            <p className="">{date} • {readTime} min de lecture</p>
            <a href="" className="text-gray-700 text-2xl underline  hover:text-primary-400 hover:no-underline">{title}   </a>
        </div>
    );
}