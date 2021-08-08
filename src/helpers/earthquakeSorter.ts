import {useState, useMemo} from "react";
import { Feature, SortConfig } from "../types";

interface KeysForSort {
  title: string;
  mag: string;
  time: number;
}

const useSortableData = (items: Feature[], config: SortConfig = {key:'title', direction: 'desc'}) => {
  const [sortConfig, setSortConfig] = useState(config);
  
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    if (sortConfig.key !== null && sortConfig.direction !== null) {
      sortableItems.sort((a, b) => {
        const key = sortConfig.key as keyof KeysForSort;

        if (a.properties[key] < b.properties[key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        
        if (a.properties[key] > b.properties[key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        
        return 0;
      });
    }
    
    return sortableItems;
  }, [items, sortConfig]);

  const sortItems = (key: string) => {
    let direction = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
  }

  return { sortedItems, sortItems };
}

export default useSortableData;