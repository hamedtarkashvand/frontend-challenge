export type User = {
  id: string
  name: string
  username: string
  email: string
  profile: Profile
}

export type Profile = {
  avatar: string
  bio: string
  website: string
}
