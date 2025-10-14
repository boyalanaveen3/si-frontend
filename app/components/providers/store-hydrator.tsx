'use client';

import { useEffect } from 'react';
import { BlogSummary } from '../../types/content';
import { useStaticContentStore } from '../../store/static-content';

/**
 * @deprecated Use `HomeStoreHydrator` from `page-store-hydrators.tsx` instead.
 */
interface StoreHydratorProps {
  blogs?: BlogSummary[];
}

export function StoreHydrator({ blogs }: StoreHydratorProps) {
  const setBlogs = useStaticContentStore((state) => state.setBlogs);

  useEffect(() => {
    if (blogs && blogs.length) {
      setBlogs(blogs);
    }
  }, [blogs, setBlogs]);

  return null;
}
