export interface IBlog {
  blogs: BlogPost[];
  blogDetails: Record<string, BlogPost>;
  fetchBlogData: () => Promise<ApiResponse<BlogPost[]>>;
  createBlog: (payload: CreateBlogPayload) => Promise<ApiResponse<BlogPost>>;
  hydrate: (payload: { blogs?: BlogPost[]; blogDetails?: Record<string, BlogPost> }) => void;
}

export interface ApiResponse<T> {
  status: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface BlogResponse {
  status: number;
  data: BlogPost[];
}

export interface CreateBlogPayload {
  title: string;
  slug: string;
  summary: string;
  content: string;
  author?: string;
  published: boolean;
  bid?: string;
}

  export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    author?: string;
    published: boolean;
    bid?: string;           
    createdAt: string;
    updatedAt: string;
    image:string
    __v: number;
  }
  export interface UpdateBlogPayload {
    title: string;
    slug: string;
    summary: string;
    content: string;
    author?: string;
    published: boolean;
    bid?: string;
  }