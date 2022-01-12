import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

class AuthService {
    login(providerName) {
        const authProvider = new `${providerName}AuthProvider`();
        return signInWithPopup(authProvider);
    }
}

export default AuthService;
