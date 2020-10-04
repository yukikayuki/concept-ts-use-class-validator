export type User = {
  id: number
  firstName: string
  lastName: string
  age: number
}

class UserBehavior {
  get user() {
    return (this as any) as User
  }

  getFullName() {
    const {user} = this
    return `${user.firstName} ${user.lastName}`
  }
}

export type UserWithBehavior = User & UserBehavior

export function extendUserWithBehavior(user: User): UserWithBehavior {
  return Object.assign<UserBehavior, User>(new UserBehavior(), user)
}
