
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  { id: "all", label: "All Components" },
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Forms" },
  { id: "navigation", label: "Navigation" },
  { id: "cards", label: "Cards" },
  { id: "modals", label: "Modals" },
  { id: "animations", label: "Animations" }
];

export const FilterBar = ({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}: FilterBarProps) => {
  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white/70 backdrop-blur-sm border-white/20 focus:bg-white"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`
              ${selectedCategory === category.id 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                : "bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white"
              }
            `}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
