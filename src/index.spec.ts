import {extendUserWithBehavior, User} from './index'

describe('extendUserWithBehavior', () => {
  it('userに振る舞いを追加できること', () => {
    const userObject: User = {
      id: 1,
      firstName: 'Taro',
      lastName: 'Tanaka',
      age: 15,
    }
    const user = extendUserWithBehavior(userObject)

    expect(user.id).toBe(1)
    expect(user.firstName).toBe('Taro')
    expect(user.lastName).toBe('Tanaka')
    expect(user.age).toBe(15)
    expect(user.getFullName()).toBe('Taro Tanaka')
  })
})
