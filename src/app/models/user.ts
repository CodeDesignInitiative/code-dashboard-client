export class User {
  public email: string;
  public first_name: string;
  public last_name: string;
  public token: string;
  public admin: boolean;
  public messenger: boolean;
  public parent: boolean;


  constructor(email: string, first_name: string, last_name: string, token: string, admin: boolean, messenger: boolean, parent: boolean) {
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.token = token;
    this.admin = admin;
    this.messenger = messenger;
    this.parent = parent;
  }
}
