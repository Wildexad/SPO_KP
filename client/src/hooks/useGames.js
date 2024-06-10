import {useMemo} from 'react';

// Кастомный хук, возвращает новый массив постов по сортировке
export const useSortedGames = (flowers, sort) => {
  
    const sortedGames = useMemo(() => {
        if (!flowers.length) {
          return flowers;
        }
        else if (sort) {
          return [...flowers].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString()))
        }
        return flowers;
      }, [flowers, sort])

    return sortedGames;
}

// Кастомный хук, возвращает новый массив постов по сортировке и фильтру
export const useGames = (flowers, sort, query) => {
    const sortedGames = useSortedGames(flowers, sort);

    const sortedAndSearchedGames = useMemo(() => {
        return sortedGames.filter(post => post.flower_name.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedGames])

    return sortedAndSearchedGames;
}