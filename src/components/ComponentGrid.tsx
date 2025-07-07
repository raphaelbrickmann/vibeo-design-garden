
import { useState } from "react";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentModal } from "@/components/ComponentModal";

interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  author: string;
  downloads: number;
  rating: number;
  codeSnippet: string;
  preview: string;
}

const mockComponents: Component[] = [
  {
    id: "1",
    name: "Glassmorphism Card",
    description: "Beautiful glass effect card with backdrop blur and gradient borders",
    category: "cards",
    image: "photo-1649972904349-6e44c42644a7",
    tags: ["glassmorphism", "modern", "card"],
    author: "Sarah Chen",
    downloads: 2341,
    rating: 4.8,
    codeSnippet: `<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600">Your content here...</p>
</div>`,
    preview: "A stunning card with glass morphism effect"
  },
  {
    id: "2",
    name: "Animated Button",
    description: "Interactive button with smooth hover animations and micro-interactions",
    category: "buttons",
    image: "photo-1488590528505-98d2b5aba04b",
    tags: ["animation", "button", "interactive"],
    author: "Alex Rivera",
    downloads: 5672,
    rating: 4.9,
    codeSnippet: `<button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
  Click me
</button>`,
    preview: "Smooth animated button with hover effects"
  },
  {
    id: "3",
    name: "Navigation Sidebar",
    description: "Responsive sidebar navigation with collapsible menu items",
    category: "navigation",
    image: "photo-1518770660439-4636190af475",
    tags: ["navigation", "sidebar", "responsive"],
    author: "Maria Garcia",
    downloads: 3456,
    rating: 4.7,
    codeSnippet: `<nav className="w-64 bg-white shadow-lg h-full">
  <div className="p-4">
    <h2 className="text-xl font-bold">Menu</h2>
    <ul className="mt-4 space-y-2">
      <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
    </ul>
  </div>
</nav>`,
    preview: "Clean and responsive navigation sidebar"
  },
  {
    id: "4",
    name: "Form Input with Animation",
    description: "Elegant form input with floating label animation",
    category: "forms",
    image: "photo-1461749280684-dccba630e2f6",
    tags: ["form", "input", "animation"],
    author: "David Kim",
    downloads: 4123,
    rating: 4.6,
    codeSnippet: `<div className="relative">
  <input type="text" className="peer w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 placeholder-transparent" placeholder="Name" />
  <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-blue-500 transition-all">Name</label>
</div>`,
    preview: "Beautiful floating label input animation"
  },
  {
    id: "5",
    name: "Modal Dialog",
    description: "Accessible modal dialog with backdrop blur and smooth animations",
    category: "modals",
    image: "photo-1486312338219-ce68d2c6f44d",
    tags: ["modal", "dialog", "accessible"],
    author: "Emma Thompson",
    downloads: 2890,
    rating: 4.8,
    codeSnippet: `<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
  <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
    <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
    <p className="text-gray-600 mb-6">Modal content goes here...</p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Close</button>
  </div>
</div>`,
    preview: "Professional modal with backdrop blur"
  },
  {
    id: "6",
    name: "Loading Animation",
    description: "Smooth loading spinner with pulsing effect",
    category: "animations",
    image: "photo-1581091226825-a6a2a5aee158",
    tags: ["loading", "animation", "spinner"],
    author: "James Wilson",
    downloads: 6234,
    rating: 4.5,
    codeSnippet: `<div className="flex items-center justify-center">
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  <span className="ml-2 text-gray-600">Loading...</span>
</div>`,
    preview: "Elegant loading animation"
  }
];

interface ComponentGridProps {
  selectedCategory: string;
  searchQuery: string;
}

export const ComponentGrid = ({ selectedCategory, searchQuery }: ComponentGridProps) => {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  const filteredComponents = mockComponents.filter(component => {
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <ComponentCard
            key={component.id}
            component={component}
            onClick={() => setSelectedComponent(component)}
          />
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No components found matching your search.</p>
        </div>
      )}

      {selectedComponent && (
        <ComponentModal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </>
  );
};
