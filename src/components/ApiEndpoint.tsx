
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Code } from "lucide-react";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  requestBody?: string;
  responseBody?: string;
}

export function ApiEndpoint({
  method,
  path,
  description,
  requestBody,
  responseBody,
}: ApiEndpointProps) {
  const [isOpen, setIsOpen] = useState(false);

  const methodColors = {
    GET: "bg-blue-100 text-blue-700",
    POST: "bg-green-100 text-green-700",
    PUT: "bg-amber-100 text-amber-700",
    DELETE: "bg-red-100 text-red-700",
  };

  return (
    <div className="mb-6 border border-border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              methodColors[method]
            )}
          >
            {method}
          </span>
          <span className="text-sm md:text-base font-mono truncate">{path}</span>
        </div>
        <ChevronRight
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform",
            isOpen && "transform rotate-90"
          )}
        />
      </div>
      
      {isOpen && (
        <div className="border-t border-border p-4 animate-slide-in">
          <p className="text-muted-foreground mb-4">{description}</p>
          
          {requestBody && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium">Request Body</h4>
              </div>
              <pre className="bg-secondary p-3 rounded-md overflow-x-auto text-xs md:text-sm font-mono">
                {requestBody}
              </pre>
            </div>
          )}
          
          {responseBody && (
            <div>
              <div className="flex items-center mb-2">
                <Code className="mr-2 h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium">Response</h4>
              </div>
              <pre className="bg-secondary p-3 rounded-md overflow-x-auto text-xs md:text-sm font-mono">
                {responseBody}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
