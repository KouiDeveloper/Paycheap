import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HometopupComponent } from './hometopup/hometopup.component';
import { UbalanceComponent } from './ubalance/ubalance.component';
import { UrechargeRequestCashierComponent } from './urecharge-request-cashier/urecharge-request-cashier.component';
import { URechargeRequestComponent } from './u-recharge-request/u-recharge-request.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { ItemsComponent } from './items/items.component';
import { ItemShopComponent } from './item-shop/item-shop.component';
import { TestComponent } from './test/test.component';
import { LogoutComponent } from './logout/logout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AllMenuComponent } from './all-menu/all-menu.component';
import { HelloClientComponent } from './hello-client/hello-client.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangePhoneComponent } from './change-phone/change-phone.component';
import { ResiterSuccessPageComponent } from './register-success-page/resiter-success-page.component';
import { ModalComponent } from './modal/modal.component';
import { GTransactionComponent } from './X-moneyGit/g-transaction/g-transaction.component';
import { GAllMenuForGitComponent } from './X-moneyGit/g-all-menu-for-git/g-all-menu-for-git.component';
import { GBuyGitComponent } from './X-moneyGit/g-buy-git/g-buy-git.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'hometopup', component: HometopupComponent },
  { path: 'ubalance', component: UbalanceComponent },
  { path: 'urecharge', component: UrechargeRequestCashierComponent },
  { path: 'u-recharge-request', component: URechargeRequestComponent },
  { path: 'transfer-history', component: TransferHistoryComponent },
  { path: 'admin-history', component: AdminHistoryComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item-shop', component: ItemShopComponent },
  { path: 'hello-client', component: HelloClientComponent },
  { path: 'test', component: TestComponent },
  { path: 'logout', component: AllMenuComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'all-menu', component: AllMenuComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'change-phone', component: ChangePhoneComponent },
  { path: 'register-success-page', component: ResiterSuccessPageComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'g-transaction', component: GTransactionComponent },
  { path: 'g-all-menu-forgit', component: GAllMenuForGitComponent },
  { path: 'g-buy-git',  component: GBuyGitComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
