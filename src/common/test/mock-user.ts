import { User } from '../../user/schemas/user.schema';

export default class UserMock {

    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}