'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useUpdateQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return updateQueryParams;
};

export default useUpdateQueryParams;
