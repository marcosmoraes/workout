// import { Test } from "@nestjs/testing";
// import { User } from "./schemas/user.schema";
// import { UserController } from "./user.controller";
// import { UserService } from "./user.service";

// var userMock = { "name": "Marcos", "age": 39 }

// describe('UserController', () => {
//     let userController: UserController
//     let userService: UserService

//     beforeEach(async () => {
//         const moduleRef = await Test.createTestingModule({
//             imports:[User],
//             controllers: [UserController],
//             providers: [UserService],
//         }).compile();

//         userService = moduleRef.get<UserService>(UserService);
//         userController = moduleRef.get<UserController>(UserController);
//     });

//     describe('findAll', () => {
//         it("should return an entity of user if successful", async () => {

//             const spy = jest.spyOn(userService, 'findAll')
//             await userController.findAll()
//             expect(spy).toHaveBeenCalled();
//         });
//     });
// });
