export const getErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "The email address is invalid.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "The password is incorrect.";
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/weak-password":
        return "The password is too weak. Use at least 6 characters.";
      case "auth/invalid-credential":
        return "Invalid email or password.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };