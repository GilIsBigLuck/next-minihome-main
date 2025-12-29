// Health API Response
export interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

// Templates API Response
export interface Template {
  id: number;
  category: string;
  title: string;
  desc: string;
  imgUrl: string;
  projectUrl: string;
  badge: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TemplatesResponse {
  templates: Template[];
  count: number;
}

// Projects API Response
export interface Project {
  id: number;
  category: string;
  title: string;
  desc: string;
  imgUrl: string;
  projectUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectsResponse {
  projects: Project[];
  count: number;
}

