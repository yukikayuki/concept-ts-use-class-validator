import {InputUser, InputUserValidator} from './form'
import {validateSync} from 'class-validator'
import {attachUserBehaviorTo} from '../domain/userBehavior'

describe('InputUserValidator', () => {
  describe('validなとき', () => {
    const validInputUser: InputUser = {
      id: '1',
      firstName: 'Taro',
      lastName: 'Tanaka',
      age: '15',
      birthYear: '2005',
      birthMonth: '03',
      birthDay: '21',
    }

    it('validなときバリデーションエラーにならないこと', () => {
      const inputUserValidator = new InputUserValidator(validInputUser)
      const validationErrors = validateSync(inputUserValidator)

      expect(validationErrors.length).toBe(0)
      expect(Object.keys(inputUserValidator)).toEqual(
        expect.arrayContaining(['id', 'firstName', 'lastName', 'age', 'birthday']),
      )
      expect(inputUserValidator.id).toBe(1)
      expect(inputUserValidator.firstName).toBe('Taro')
      expect(inputUserValidator.lastName).toBe('Tanaka')
      expect(inputUserValidator.age).toBe(15)
      expect(inputUserValidator.birthday).toBe('2005-03-21')
    })

    it('Userの振る舞いをattachできること', () => {
      const inputUserValidator = new InputUserValidator(validInputUser)
      const user = attachUserBehaviorTo(inputUserValidator)

      expect(user.fullName).toBe('Taro Tanaka')
    })
  })
})
