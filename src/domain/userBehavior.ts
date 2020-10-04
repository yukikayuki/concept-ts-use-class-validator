import {User} from './user'

export type UserWithBehavior = User & UserBehavior

class UserBehavior {
  get user() {
    return (this as any) as User
  }

  get fullName() {
    const {user} = this

    return `${user.firstName} ${user.lastName}`
  }
}

export function attachUserBehaviorTo(user: User): UserWithBehavior {
  return Object.assign<UserBehavior, User>(new UserBehavior(), user)
}
