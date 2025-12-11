export default function DataTable({
  headers,
  rows
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
      <thead className="bg-teal-800 text-white">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="py-2 px-2 text-left">{h}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={`${
              i % 2 === 0 ? "bg-white" : "bg-teal-600"
            } hover:bg-teal-50 transition`}
          >
            {row.map((col, j) => (
              <td key={j} className="py-2 px-2">{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
