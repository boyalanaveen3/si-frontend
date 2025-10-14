'use client';

import { useEffect } from 'react';

import { BlogSummary, PageResponse } from '../../types/content';
import { useHomeStore } from '../../store/homestore';
import { useAboutUsStore } from '../../store/aboutusstore';
import { useOurServicesStore } from '../../store/ourservicestore';
import { useBlogStore } from '../../store/blogstore';

interface HomeStoreHydratorProps {
  page?: PageResponse['data'] | null;
  blogs?: BlogSummary[];
}

export function HomeStoreHydrator({ page = null, blogs }: HomeStoreHydratorProps) {
  const hydrate = useHomeStore((state) => state.hydrate);

  useEffect(() => {
    hydrate({ page, blogs });
  }, [hydrate, page, blogs]);

  return null;
}

interface AboutStoreHydratorProps {
  data?: PageResponse['data'] | null;
}

export function AboutStoreHydrator({ data = null }: AboutStoreHydratorProps) {
  const setData = useAboutUsStore((state) => state.setData);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return null;
}

interface ServicesStoreHydratorProps {
  data?: PageResponse['data'] | null;
}

export function ServicesStoreHydrator({ data = null }: ServicesStoreHydratorProps) {
  const setData = useOurServicesStore((state) => state.setData);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return null;
}

interface BlogStoreHydratorProps {
  blogs?: BlogSummary[];
  detail?: {
    slug: string;
    data: BlogSummary;
  };
}

export function BlogStoreHydrator({ blogs, detail }: BlogStoreHydratorProps) {
  const hydrate = useBlogStore((state) => state.hydrate);

  useEffect(() => {
    if (blogs || detail) {
      hydrate({
        // blogs,
        blogDetails: detail ? { [detail.slug]: detail.data as any } : undefined
      });
    }
  }, [blogs, detail, hydrate]);

  return null;
}
