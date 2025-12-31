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