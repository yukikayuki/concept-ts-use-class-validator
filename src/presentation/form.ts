import {User} from '../domain/user'
import {UserValidator} from '../domain/userValidator'

export type InputUser = {[key in keyof Omit<User, 'birthday'>]: string} & {
  birthYear: string
  birthMonth: string
  birthDay: string
}

export class InputUserValidator extends UserValidator {
  convert(args: InputUser): User {
    const birthday = `${args.birthYear}-${args.birthMonth}-${args.birthDay}`

    return {
      id: parseInt(args.id, 10),
      firstName: args.firstName,
      lastName: args.lastName,
      age: parseInt(args.age, 10),
      birthday,
    }
  }
}
