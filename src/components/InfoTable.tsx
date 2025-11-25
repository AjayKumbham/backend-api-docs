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
    <div className="mb-8 overflow-hidden rounded-xl border border-border/50 bg-card">
      <h3 className="text-lg font-semibold px-6 py-4 bg-gradient-to-r from-card to-muted/20 border-b border-border/50">
        {title}
      </h3>
      <div className="overflow-x-auto">
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
                className="hover:bg-muted/30 transition-colors"
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
    </div>
  );
}
