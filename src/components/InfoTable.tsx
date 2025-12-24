interface TableRowProps {
  parameter: string;
  type: string;
  required: boolean;
  description: string;
}

interface InfoTableProps {
  title: string;
  rows: TableRowProps[];
}

export function InfoTable({ title, rows }: InfoTableProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-base sm:text-lg font-semibold px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-card to-muted/20 border-b border-border/50">
        {title}
      </h3>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-muted/50 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Parameter
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Required
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {rows.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-muted/30 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm font-mono font-medium text-primary">
                  {row.parameter}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  <code className="px-2 py-1 rounded bg-muted/50 text-xs">
                    {row.type}
                  </code>
                </td>
                <td className="px-6 py-4 text-sm">
                  {row.required ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                      Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground">
                      No
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-foreground/90">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-border/30">
        {rows.map((row, index) => (
          <div
            key={index}
            className="p-4 hover:bg-muted/30 transition-colors duration-200 space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="font-mono font-medium text-primary text-sm break-all">
                  {row.parameter}
                </div>
                <div className="mt-1">
                  <code className="px-2 py-1 rounded bg-muted/50 text-xs text-muted-foreground">
                    {row.type}
                  </code>
                </div>
              </div>
              <div className="flex-shrink-0">
                {row.required ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success whitespace-nowrap">
                    Required
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground whitespace-nowrap">
                    Optional
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {row.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
