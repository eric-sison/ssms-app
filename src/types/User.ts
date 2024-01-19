export type RawUser = {
  created_at: Date;
  updated_at: Date;
  user_id: string;
  email: string;
  password: string;
};

export type User = {
  userId: string;
  email: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type AccessToken = {
  token: string | undefined;
};
