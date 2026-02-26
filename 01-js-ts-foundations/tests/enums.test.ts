import { UserRole, isAdmin } from '../topics/enums';

describe('Enums', () => {
  test('isAdmin should return true for Admin role', () => {
    // Assuming UserRole.Admin is correctly implemented by the user
    expect(isAdmin(UserRole.Admin)).toBe(true);
  });

  test('isAdmin should return false for Editor role', () => {
    // Assuming UserRole.Editor is correctly implemented by the user
    expect(isAdmin(UserRole.Editor)).toBe(false);
  });

  test('isAdmin should return false for Viewer role', () => {
    // Assuming UserRole.Viewer is correctly implemented by the user
    expect(isAdmin(UserRole.Viewer)).toBe(false);
  });
});