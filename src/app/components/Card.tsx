"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Card = ({
  image,
  title,
  description,
  className,
}: {
  image: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-5 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-md hover:shadow-lg transition-all",
        className
      )}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default Card