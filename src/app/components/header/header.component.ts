import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;

  constructor(private router: Router) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
  //
  // setLanguage(language: string) {
  //   this.i18nService.language = language;
  // }
  //
  // logout() {
  //   this.authenticationService.logout()
  //     .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  // }
  //
  // get currentLanguage(): string {
  //   return this.i18nService.language;
  // }
  //
  // get languages(): string[] {
  //   return this.i18nService.supportedLanguages;
  // }
  //
  // get username(): string | null {
  //   const credentials = this.authenticationService.credentials;
  //   return credentials ? credentials.username : null;
  // }

}
