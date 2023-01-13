import { User } from '@app/core/models/user.model';

export interface AuthenticationState {
    isAuthenticated: boolean;
    user: User;
    errorMessage: string;
    successMessage: string;
}
