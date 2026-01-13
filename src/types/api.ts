// API 공통 응답 형식
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  meta?: {
    count?: number;
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
    stats?: Record<string, number>;
  };
}

// Health API Response
export interface HealthData {
  status: string;
  db: string;
  timestamp: string;
}

export type HealthResponse = ApiResponse<HealthData>;

// Templates API Response
export interface Template {
  id: number;
  category: string;
  title: string;
  desc: string | null;
  imgUrl: string | null;
  projectUrl: string | null;
  badge: string[] | null;
  createdAt: string;
  updatedAt: string;
}

export interface TemplatesData {
  templates: Template[];
}

export type TemplatesResponse = ApiResponse<TemplatesData>;

// Projects API Response
export interface Project {
  id: number;
  category: string;
  title: string;
  desc: string | null;
  imgUrl: string | null;
  projectUrl: string | null;
  badge: string[] | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectsData {
  projects: Project[];
}

export type ProjectsResponse = ApiResponse<ProjectsData>;

