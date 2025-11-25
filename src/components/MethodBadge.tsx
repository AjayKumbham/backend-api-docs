import { cn } from "@/lib/utils";

interface MethodBadgeProps {
    method: "GET" | "POST" | "PUT" | "DELETE";
    className?: string;
}

export function MethodBadge({ method, className }: MethodBadgeProps) {
    const methodStyles = {
        GET: "method-get",
        POST: "method-post",
        PUT: "method-put",
        DELETE: "method-delete",
    };

    return (
        <span className={cn("method-badge", methodStyles[method], className)}>
            {method}
        </span>
    );
}
