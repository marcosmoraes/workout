import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';


const mockUser = [{
  id: '1',
  name: 'Marcos'
}]

describe('UserService', () => {
  let userService: UserService

  const mockUserModel = {
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn()
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        }
      ],
    }).compile();
    userService = module.get<UserService>(UserService);
  });


  beforeEach(() => {
    mockUserModel.create.mockReset()
    mockUserModel.find.mockReset()
    mockUserModel.findOne.mockReset()
    mockUserModel.findByIdAndUpdate.mockReset()
    mockUserModel.findByIdAndRemove.mockReset()
  })


  describe('#create', () => {
    it('should create an user', async () => {

      mockUserModel.create.mockReturnValue(mockUser)
      const savedUser = await userService.create(new CreateUserDto())
      expect(savedUser).toMatchObject(mockUser)
      expect(mockUserModel.create).toHaveBeenCalledTimes(1);
    });
  })

  describe('#users', () => {
    it('should return all users', async () => {
      mockUserModel.find.mockReturnValue(mockUser);
      const users = await userService.findAll();
      expect(users).toHaveLength(1);
      expect(mockUserModel.find).toHaveBeenCalledTimes(1);
    });
  })

  describe('#usersById', () => {
    it('should find an existing user', async () => {
      mockUserModel.findOne.mockReturnValue(mockUser[0]);
      const userFound = await userService.findOne('1');
      expect(userFound).toMatchObject({ id: '1', name: 'Marcos' });
      expect(mockUserModel.findOne).toHaveBeenCalledTimes(1);

    });
    it('should return an exception when does not to find an user', async () => {
      mockUserModel.findOne.mockReturnValue(null);
      expect(userService.findOne('1')).rejects.toBeInstanceOf(NotFoundException);
      expect(mockUserModel.findOne).toHaveBeenCalledTimes(1);
    });
  })

  describe('#updateUser', () => {
    let dto = new CreateUserDto()
      dto.name = 'Marcos'
      dto.age = 9
    it('should update an user', async () => {
      mockUserModel.findByIdAndUpdate.mockReturnValue(mockUser)
      const updatedUser = await userService.update('1', dto)
      expect(updatedUser).toMatchObject(mockUser)
      expect(mockUserModel.findByIdAndUpdate).toHaveBeenCalledTimes(1)
    })

    it('should return an exception when does not to update an user', async () => {
      mockUserModel.findByIdAndUpdate.mockReturnValue(null);
      expect(userService.update('1', dto)).rejects.toBeInstanceOf(NotFoundException);
      expect(mockUserModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
    })
  })

  describe('#removeUser', () => {
    let dto = new CreateUserDto()
      dto.name = 'Marcos'
      dto.age = 9
    it('should remove an user', async () => {
      mockUserModel.findByIdAndRemove.mockReturnValue(mockUser)
      const removedUser = await userService.remove('1')
      expect(removedUser).toMatchObject(mockUser)
      expect(mockUserModel.findByIdAndRemove).toHaveBeenCalledTimes(1)
    })

    it('should return an exception when does not to remove an user', async () => {
      mockUserModel.findByIdAndRemove.mockReturnValue(null);
      expect(userService.remove('1')).rejects.toBeInstanceOf(NotFoundException);
      expect(mockUserModel.findByIdAndRemove).toHaveBeenCalledTimes(1);
    })
  })
})

//npm i nodemon -D