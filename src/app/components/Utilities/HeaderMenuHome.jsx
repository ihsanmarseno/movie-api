import Link from "next/link";
import React from "react";

export default function HeaderMenuHome({ title, caption, resource }) {
  return (
    <div className="flex items-center justify-between pt-4">
      <p className="ml-8 text-2xl font-semibold">{title}</p>
      <Link href={`/${resource}`} className="mr-8 text-white underline">
        {caption}
      </Link>
    </div>
  );
}
