import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    className?: string;
}

export function CodeBlock({
    code,
    language = "json",
    showLineNumbers = false,
    className
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
        <div className={cn("code-block group relative", className)}>
            {/* Language Badge and Copy Button */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                    {language.toUpperCase()}
                </span>
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-md bg-muted/50 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-success" />
                    ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                </button>
            </div>

            {/* Code Content */}
            <pre className="overflow-x-auto">
                <code className="text-sm leading-relaxed">
                    {showLineNumbers ? (
                        <div className="flex">
                            <div className="select-none pr-4 text-muted-foreground border-r border-border/50">
                                {lines.map((_, i) => (
                                    <div key={i} className="text-right">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <div className="pl-4 flex-1">
                                {code}
                            </div>
                        </div>
                    ) : (
                        code
                    )}
                </code>
            </pre>
        </div>
    );
}
