import bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    return null;
  }
};
