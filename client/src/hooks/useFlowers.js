import {useMemo} from 'react';

// Кастомный хук, возвращает новый массив постов по сортировке
export const useSortedFlowers = (flowers, sort) => {
  
    const sortedFlowers = useMemo(() => {
        if (!flowers.length) {
          return flowers;
        }
        else if (sort) {
          return [...flowers].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString()))
        }
        return flowers;
      }, [flowers, sort])

    return sortedFlowers;
}

// Кастомный хук, возвращает новый массив постов по сортировке и фильтру
export const useFlowers = (flowers, sort, query) => {
    const sortedFlowers = useSortedFlowers(flowers, sort);

    const sortedAndSearchedFlowers = useMemo(() => {
        return sortedFlowers.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedFlowers])

    return sortedAndSearchedFlowers;
}