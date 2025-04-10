export const getFirstLetter = (nameOrEmail?: string): string => {
    if (!nameOrEmail) return "?";
    const firstPart = nameOrEmail.split(" ")[0];
    return firstPart.charAt(0).toUpperCase();
  };