
import { Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UX</span>
              </div>
              <span className="font-semibold text-gray-900">Component Hub</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Inspiration
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Find Components
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Support
              </a>
            </nav>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
            
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm">U</span>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
