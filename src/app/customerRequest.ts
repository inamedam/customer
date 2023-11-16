export class CustomerRequest {
  firstName: string = "First Name";
  lastName: string = "Last Name";
  email: string = "Email";
  password: string = "Password";
  validAccount: boolean = false;
  active: boolean = false;

  constructor(){}

  // constructor(id: number, firstName: string, lastName: string, email: string, userName: string, password: string, creationDate: Date, lastLogin: Date, lastUpdate: Date, validAccount: boolean, active: boolean, roles: string[]) {
  //   this.id = id;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.userName = userName;
  //   this.password = password;
  //   this.creationDate = creationDate;
  //   this.lastLogin = lastLogin;
  //   this.lastUpdate = lastUpdate;
  //   this.validAccount = validAccount;
  //   this.active = active;
  //   this.roles = roles;
  // }
}
