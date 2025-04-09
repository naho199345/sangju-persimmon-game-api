import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 예: 닉네임으로 유저 생성
  it('should create user with nickname', async () => {
    // const user = await service.create({
    //   nickname: '곶감왕',
    //   email: 'gogam@naver.com',
    //   provider: 'naver',
    // });
    // expect(user.nickname).toBe('곶감왕');
  });
});
