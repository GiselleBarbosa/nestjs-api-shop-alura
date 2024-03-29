import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

import { EmailEhUnico } from '../validator/emailEhUnico.validator';

export class CriaUsuariosDTO {
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @IsString({ message: 'CPF inválido' })
  cpf: string;

  @IsString({ message: 'Nome invalido' })
  name: string;

  @IsString({ message: 'Telefone informado é obrigátorio' })
  mobile: string;

  @EmailEhUnico({ message: 'Já existe uma conta com o email informado.' })
  @IsEmail(undefined, { message: 'Email informado é invalido' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no minímo 6 caracteres' })
  password: string;

  @IsString({ message: 'Data inválida' })
  birthday: string;
}
