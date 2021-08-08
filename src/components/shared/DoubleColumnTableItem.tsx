import React from "react";
import formatDate from "../../helpers/timeFormatter";

interface TableItemProps {
  title: string,
  value: string | number | null
}

const TableItem = ({title, value}: TableItemProps) => {
  if (typeof value === 'number' && title.toLowerCase() === 'time') value = formatDate(value);

  return (
    <tr>
      <td className="title">{title}</td>
      <td>{value ?? ''}</td>
    </tr>
  );
};

export default TableItem;
