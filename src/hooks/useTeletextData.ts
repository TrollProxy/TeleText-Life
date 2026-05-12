import { useQuery } from '@tanstack/react-query';
import { fetchHeadlines, fetchLondonWeather } from '../services/api';

export const useHeadlines = () => useQuery({ queryKey: ['headlines'], queryFn: fetchHeadlines, refetchInterval: 1000 * 60 * 10 });
export const useWeather = () => useQuery({ queryKey: ['weather'], queryFn: fetchLondonWeather, refetchInterval: 1000 * 60 * 15 });
