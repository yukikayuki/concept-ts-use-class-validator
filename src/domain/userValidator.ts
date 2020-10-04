import {IsInt, IsISO8601, IsString} from 'class-validator'
import {ISO8601, User} from './user'

export class UserValidator implements User {
  @IsInt()
  id: number

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsISO8601()
  birthday: ISO8601

  @IsInt()
  age: number

  constructor(args: any) {
    const converted = this.convert(args)

    this.id = converted.id
    this.firstName = converted.firstName
    this.lastName = converted.lastName
    this.birthday = converted.birthday
    this.age = converted.age
  }

  /**
   * argsの型は継承先で任意に設定すること
   * @param args
   */
  convert(args: any): User {
    return {
      id: args.id,
      firstName: args.firstName,
      lastName: args.lastName,
      age: args.age,
      birthday: args.birthday,
    }
  }
}
