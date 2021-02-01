import { CompareFieldsValidation } from '@src/implementation/validation/validators/compare-fields-validation'
import { DbAddUser } from '@src/implementation/usecases/users/db-add-user'
import { RequiredFieldsValidation } from '@src/implementation/validation/validators/required-fields-validation'
import { ValidationCompositor } from '@src/implementation/validation/validators/validation-compositor'
import { MongoUserRepository } from '@src/infra/db/users/user-repository'
import { UsersController } from '@src/presentation/controllers/users'
import { BcryptAdapter } from '@src/infra/cryptography/bcrypt-adapter'
import { EmailValidatorAdapter } from '@src/infra/validations/validator-adapter'

const mognoUserRepository = new MongoUserRepository()
const hasher = new BcryptAdapter(12)
const dbAddUser = new DbAddUser(
  hasher,
  mognoUserRepository,
  mognoUserRepository
)

const requiredFieldsValidation = new RequiredFieldsValidation([
  'name',
  'email',
  'password',
  'passwordConfirmation'
])

const compareFieldsValidation = new CompareFieldsValidation(
  'password',
  'passwordConfirmation'
)

const emailValidator = new EmailValidatorAdapter()

const validation = new ValidationCompositor([
  requiredFieldsValidation,
  emailValidator,
  compareFieldsValidation
])

export const usersController = new UsersController(dbAddUser, validation)
