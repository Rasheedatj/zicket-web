"use client";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data";

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

export function CategoryFilter({
  onCategoryChange,
  activeCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={`cursor-pointer transition-colors ${
            activeCategory === category
              ? "bg-purple-600 hover:bg-purple-700"
              : "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
