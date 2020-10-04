import {User} from './user'
import {attachUserBehaviorTo} from './userBehavior'

describe('User', () => {
  it('Userの振る舞いをattachできること', () => {
    const user: User = {
      id: 1,
      firstName: 'Taro',
      lastName: 'Tanaka',
      age: 15,
      birthday: '2005-03-21',
    }
    const userWithBehavior = attachUserBehaviorTo(user)

    expect(userWithBehavior.fullName).toBe('Taro Tanaka')
  })
})
