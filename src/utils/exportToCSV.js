export function exportToCSV(data, fileName) {
  if (!data.length) return;

  const headers = Object.keys(data[0]);

  const csvRows = [
    headers.join(","),

    ...data.map((row) => headers.map((header) => row[header]).join(",")),
  ];

  const csvString = csvRows.join("\n");

  const blob = new Blob([csvString], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${fileName}.csv`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
