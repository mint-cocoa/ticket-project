// src/users/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: '사용자의 이메일 주소입니다.' })
  @IsEmail({}, { message: '유효한 이메일 주소여야 합니다.' })
  email: string;

  @ApiProperty({ example: 'password123', description: '사용자의 비밀번호입니다. 최소 6자 이상이어야 합니다.' })
  @IsString({ message: '비밀번호는 문자열이어야 합니다.' })
  @MinLength(6, { message: '비밀번호는 최소 6자 이상이어야 합니다.' })
  password: string;
  }
