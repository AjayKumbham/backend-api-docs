
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
    <div className="mb-8 overflow-hidden">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-secondary text-secondary-foreground">
              <th className="px-4 py-2 text-left font-medium text-sm border-b">Parameter</th>
              <th className="px-4 py-2 text-left font-medium text-sm border-b">Type</th>
              <th className="px-4 py-2 text-left font-medium text-sm border-b">Required</th>
              <th className="px-4 py-2 text-left font-medium text-sm border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-muted/50">
                <td className="px-4 py-2 text-sm font-mono border-b border-border/50">{row.parameter}</td>
                <td className="px-4 py-2 text-sm border-b border-border/50">{row.type}</td>
                <td className="px-4 py-2 text-sm border-b border-border/50">
                  <span className={row.required ? "text-green-600" : "text-muted-foreground"}>
                    {row.required ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm border-b border-border/50">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
