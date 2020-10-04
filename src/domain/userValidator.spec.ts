import {attachUserBehaviorTo, UserWithBehavior} from './userBehavior'
import {UserValidator} from './userValidator'
import {User} from './user'

describe('User', () => {
  it('Userの振る舞いをattachできること', () => {
    const user: User = {
      id: 1,
      firstName: 'Taro',
      lastName: 'Tanaka',
      age: 15,
      birthday: '2005-03-21',
    }
    const userValidator = new UserValidator(user)
    const userWithBehavior = attachUserBehaviorTo(userValidator)

    expect(userWithBehavior.fullName).toBe('Taro Tanaka')
  })
})
