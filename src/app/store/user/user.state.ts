import { UserModel, UserI } from "src/app/model/user"
import { createEntityAdapter } from "@ngrx/entity"

export const UserAdapter=createEntityAdapter<UserI>()

export const UserState = UserAdapter.getInitialState();