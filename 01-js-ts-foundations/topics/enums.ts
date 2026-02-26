// This file demonstrates the use of Enums in TypeScript.

enum UserRole {
  // Define a numeric enum UserRole with members Admin, Editor, and Viewer.
  // Assign appropriate numeric values (e.g., 0, 1, 2).
}

function isAdmin(role: UserRole): boolean {
  // Return true if the given role is UserRole.Admin, and false otherwise.
}

export { UserRole, isAdmin };