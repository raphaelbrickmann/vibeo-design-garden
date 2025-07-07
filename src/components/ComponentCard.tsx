
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Download, Eye } from "lucide-react";

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

interface ComponentCardProps {
  component: Component;
  onClick: () => void;
}

export const ComponentCard = ({ component, onClick }: ComponentCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white overflow-hidden">
      <div className="relative">
        <img
          src={`https://images.unsplash.com/${component.image}?w=400&h=200&fit=crop`}
          alt={component.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          size="sm"
          className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4" onClick={onClick}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
            {component.name}
          </h3>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm ml-1">{component.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {component.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {component.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between text-sm text-gray-500">
        <span>by {component.author}</span>
        <div className="flex items-center">
          <Download className="h-4 w-4 mr-1" />
          <span>{component.downloads.toLocaleString()}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
