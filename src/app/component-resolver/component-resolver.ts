import { LoanApplicationComponent } from "../loan-application/loan-application.component";
import { UserInfoComponent } from "../user-info/user-info.component";

export class ComponentResolver {
    static resolveComponentByKey(key: string): any {
      switch (key) {
        case 'UserInfo':
          return UserInfoComponent;
        case 'LoanApplication':
          return LoanApplicationComponent;
        default:
          return null; // Or handle unknown keys as needed
      }
    }
  }