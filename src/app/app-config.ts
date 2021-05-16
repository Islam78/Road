import { CoreConfig } from '@core/types'

/**
 * Default App Config
 *
 * ? TIP:
 *
 * Change app config based on your preferences.
 * You can also change them per component basis. i.e `app/main/pages/authentication/auth-login-v1/auth-login-v1.component.ts`
 *
 * ! IMPORTANT: Make sure you clear the browser local storage (https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete)
 * ! If enableLocalStorage option is true, else it will not take the below config changes and use stored config from local storage. *
 *
 */

// prettier-ignore
export const coreConfig: CoreConfig = {
  app: {
    appName     : 'Vuexy',                                        // App Name
    appTitle    : 'Vuexy - Angular 11+ Bootstrap Admin Template', // App Title
    appLogoImage: 'assets/images/logo/logo.svg',                  // App Logo
  },
  layout: {
    skin  : 'default',                        // default, dark, bordered, semi-dark
    type  : 'vertical',                       // vertical, horizontal
    menu : {
      hidden               : false,           // Boolean: true, false
      collapsed            : false,           // Boolean: true, false
    },
    // ? For horizontal menu, navbar type will work for navMenu type
    navbar: {
      hidden               : false,           // Boolean: true, false
      type                 : 'floating-nav',  // navbar-static-top, fixed-top, floating-nav, d-none
      background           : 'navbar-light',  // navbar-light. navbar-dark
      customBackgroundColor: true,            // Boolean: true, false
      backgroundColor      : ''               // BS color i.e bg-primary, bg-success
    },
    footer: {
      hidden               : false,           // Boolean: true, false
      type                 : 'footer-static', // footer-static, footer-sticky, d-none
      background           : 'footer-light',  // footer-light. footer-dark
      customBackgroundColor: false,           // Boolean: true, false
      backgroundColor      : ''               // BS color i.e bg-primary, bg-success
    },
    enableLocalStorage: true,
    customizer  : false,                       // Boolean: true, false (Enable theme customizer)
    scrollTop   : false,                       // Boolean: true, false (Enable scroll to top button)
    buyNow      : false                        // Boolean: true, false (Set false in real project, For demo purpose only)
  }
}
