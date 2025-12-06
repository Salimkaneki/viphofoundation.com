'use client';
import React, { useState } from "react";
import Footer from "@/components/layout/footer";
import TextBlogCard from "@/components/cards/text-blogCard";
import Pagination from "@/components/pagination";


export default function TestPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}