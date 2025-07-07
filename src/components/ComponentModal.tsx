
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, Star, Github, ExternalLink } from "lucide-react";
import { toast } from "sonner";

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

interface ComponentModalProps {
  component: Component;
  onClose: () => void;
}

export const ComponentModal = ({ component, onClose }: ComponentModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(component.codeSnippet);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl mb-2">{component.name}</DialogTitle>
              <p className="text-gray-600 mb-3">{component.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>by {component.author}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                  <span>{component.rating}</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  <span>{component.downloads.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-4">
            <div className="rounded-lg border bg-gray-50 p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <img
                  src={`https://images.unsplash.com/${component.image}?w=400&h=300&fit=crop`}
                  alt={component.name}
                  className="rounded-lg mb-4 max-w-md mx-auto"
                />
                <p className="text-gray-600">{component.preview}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {component.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="space-y-4">
            <div className="relative">
              <Button
                size="sm"
                className="absolute top-2 right-2 z-10"
                onClick={handleCopyCode}
              >
                <Copy className="h-4 w-4 mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{component.codeSnippet}</code>
              </pre>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Installation</h4>
              <p className="text-blue-800 text-sm">
                Copy the code above and paste it into your project. Make sure you have Tailwind CSS configured.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
