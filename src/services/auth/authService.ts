import {
  CreateUserWithEmailAndPassword,
  SignInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../../../firebase/config';

interface LoginRequest extends SignInWithEmailAndPassword {}
interface CreateAccountRequest extends CreateUserWithEmailAndPassword {}

//Login Request
const loginRequest: LoginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

//New User Create Request
const createAccountRequest: CreateAccountRequest = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export { createAccountRequest, loginRequest };
