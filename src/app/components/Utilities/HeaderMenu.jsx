import React from "react";

export default function HeaderMenu({ title }) {
  return (
    <div className="flex justify-center pt-4 text-2xl font-semibold">
      {title}
    </div>
  );
}
