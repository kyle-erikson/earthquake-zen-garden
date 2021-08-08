import React from "react";

interface TableItemProps {
  title: string,
  value: string
}

const TableItem = ({title, value}: TableItemProps) => {
  return (
    <tr>
      <td className="title">{title}</td>
      <td>{value}</td>
    </tr>
  );
};

export default TableItem;
