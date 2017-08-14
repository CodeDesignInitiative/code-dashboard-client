export class User {
  public email: String;
  public token: String;
  public admin: boolean;

  constructor(email: String, token: String, admin: boolean) {
    this.email = email;
    this.token = token;
    this.admin = admin;
  }
}
