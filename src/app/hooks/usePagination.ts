import { useState } from 'react';

type PaginationHookOptions<T> = {
  itemsPerPage: number;
  initialPage?: number;
};

export const usePagination = <T>(
  items: T[],
  options: PaginationHookOptions<T>
) => {
  const { itemsPerPage, initialPage = 1 } = options;

  const [currentPage, setCurrentPage] = useState(initialPage);

  const currentItems = items.slice(
    0,
    currentPage * itemsPerPage
  );

  const addMoreItems = () => {
    if (currentItems.length < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentItems,
    addMoreItems,
  };
};
