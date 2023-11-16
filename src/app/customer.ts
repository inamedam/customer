export class Customer {
  id: string = '';
  firstName: string = "First Name";
  lastName: string = "Last Name";
  email: string = "Email";
  userName: string = "User Name";
  password: string = "Password";
  creationDate: Date = new Date();
  lastLogin: Date = new Date();
  lastUpdate: Date = new Date();
  validAccount: boolean = false;
  active: boolean = false;
  roles: string[] = [];

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
