import { Code } from "lucide-react";
import { MethodBadge } from "./MethodBadge";
import { CodeBlock } from "./CodeBlock";

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
  return (
    <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden border border-border/50 bg-card hover-glow animate-fade-in shadow-md hover:shadow-xl transition-all duration-300">
      {/* Endpoint Header */}
      <div className="p-4 sm:p-6 border-b border-border/50 bg-gradient-to-r from-card to-muted/20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
          <MethodBadge method={method} />
          <code className="text-sm sm:text-base md:text-lg font-semibold text-foreground font-mono break-all">
            {path}
          </code>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Endpoint Body - Always Visible */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {requestBody && (
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                Request Body
              </h4>
            </div>
            <CodeBlock code={requestBody} language="json" />
          </div>
        )}

        {responseBody && (
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-success" />
              <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                Response
              </h4>
            </div>
            <CodeBlock code={responseBody} language="json" />
          </div>
        )}
      </div>
    </div>
  );
}
