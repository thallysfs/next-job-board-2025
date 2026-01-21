export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'job-seeker' | 'recruiter';
  profile_pic: string;
  resume_url: string;
  bio: string;
  created_at: string;
  updated_At: string;
}

export interface IJob {
  id: number;
  recruiter_id: string;
  title: string;
  description: string;
  location: string;
  skills : string[];
  job_type: string;
  min_salary: number;
  max_salary: number;
  exp_required: string;
  last_date_to_apply: string;
  status: string;
  created_at: string;
  updated_at: string;
}