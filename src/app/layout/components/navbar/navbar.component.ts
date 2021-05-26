import { Component, OnDestroy, OnInit, HostBinding, HostListener, ViewEncapsulation } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'

import * as _ from 'lodash'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { TranslateService } from '@ngx-translate/core'

import { AuthenticationService } from 'app/auth/service'
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service'
import { CoreConfigService } from '@core/services/config.service'
import { CoreMediaService } from '@core/services/media.service'
import { locale as en } from './../../../main/sample/i18n/en'
import { locale as ar } from './../../../main/sample/i18n/ar'
import { User } from 'app/auth/models'

import { Router } from '@angular/router'
import { CoreTranslationService } from '@core/services/translation.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
  public horizontalMenu: boolean
  public hiddenMenu: boolean

  public coreConfig: any
  public currentSkin: string
  public prevSkin: string

  public currentUser: User

  public languageOptions: any
  public navigation: any
  public selectedLanguage: any = 'de'

  @HostBinding('class.fixed-top')
  public isFixed = false

  @HostBinding('class.navbar-static-style-on-scroll')
  public windowScrolled = false

  // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) &&
      this.coreConfig.layout.navbar.type == 'navbar-static-top'
    ) {
      this.windowScrolled = true
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false
    }
  }

  // Private
  private _unsubscribeAll: Subject<any>

  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreMediaService} _coreMediaService
   * @param {MediaObserver} _mediaObserver
   * @param {TranslateService} _translateService
   */

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _coreConfigService: CoreConfigService,
    private _coreMediaService: CoreMediaService,
    private _coreSidebarService: CoreSidebarService,
    private _mediaObserver: MediaObserver,
    public _translateService: TranslateService,
    private _coreTranslationService: CoreTranslationService
  ) {


    this._authenticationService.currentUser.subscribe(x => (this.currentUser = x))
    this.LanguageSetUp()

  }
  LanguageSetUp() {

    this.languageOptions = {
      en: {
        title: 'En',
        flag: 'us'
      },
      ar: {
        title: 'العربية',
        flag: 'Ar'
      }
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject()

    this._coreTranslationService.translate(en, ar)

  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebar(key): void {
    this._coreSidebarService.getSidebarRegistry(key).toggleOpen()
  }

  /**
   * Set the language
   *
   * @param language
   */
  setLanguage(language): void {
    // Set the selected language for the navbar on change
    this.selectedLanguage = language
    // Use the selected language id for translations
    this._translateService.use(language)
    if (language == 'ar') {
      document.body.style.direction = "rtl";
      document.getElementById('AppContent').style.marginRight = '260px'
      document.getElementById('AppContent').style.marginLeft = '0px'
      document.getElementById('mdRight').style.textAlign = 'left'
      document.getElementById('navbarHead').style.left = '0'
      document.getElementById('navbarHead').style.right = '260px'
      document.getElementById('navbarIcon').style.marginLeft = 'inherit'
      document.getElementById('navbarIcon').style.marginRight = 'auto'
      
      
      // navbarHead
      // doc
      // alert('')
    }else{
      document.body.style.direction = "ltr";
      document.getElementById('AppContent').style.marginRight = '0'
      document.getElementById('AppContent').style.marginLeft = '260px'
      document.getElementById('mdRight').style.textAlign = 'right'
      document.getElementById('navbarHead').style.right = '0'
      document.getElementById('navbarIcon').style.marginLeft = 'auto'
      document.getElementById('navbarIcon').style.marginRight = 'inherit'
    }
  }


  /**
   * Toggle Dark Skin
   */
  toggleDarkSkin() {
    // Get the current skin
    this._coreConfigService
      .getConfig()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.currentSkin = config.layout.skin
      })

    // Toggle Dark skin with prevSkin skin
    this.prevSkin = localStorage.getItem('prevSkin')

    if (this.currentSkin === 'dark') {
      this._coreConfigService.setConfig(
        { layout: { skin: this.prevSkin ? this.prevSkin : 'default' } },
        { emitEvent: true }
      )
    } else {
      localStorage.setItem('prevSkin', this.currentSkin)
      this._coreConfigService.setConfig({ layout: { skin: 'dark' } }, { emitEvent: true })
    }
  }

  /**
   * Logout method
   */
  logout() {
    this._authenticationService.logout()
    this._router.navigate(['/pages/authentication/login-v2'])
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {

    // get the currentUser details from localStorage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))

    // Subscribe to the config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config
      this.horizontalMenu = config.layout.type === 'horizontal'
      this.hiddenMenu = config.layout.menu.hidden === true
      this.currentSkin = config.layout.skin

      // Fix: for vertical layout if default navbar fixed-top than set isFixed = true
      if (this.coreConfig.layout.type === 'vertical') {
        setTimeout(() => {
          if (this.coreConfig.layout.navbar.type === 'fixed-top') {
            this.isFixed = true
          }
        }, 0)
      }
    })

    // Horizontal Layout Only: Add class fixed-top to navbar below large screen
    if (this.coreConfig.layout.type == 'horizontal') {
      // On every media(screen) change
      this._coreMediaService.onMediaUpdate.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
        const isFixedTop = this._mediaObserver.isActive('bs-gt-xl')
        if (isFixedTop) {
          this.isFixed = false
        } else {
          this.isFixed = true
        }
      })
    }


    // Set the selected language from default languageOptions
    this.selectedLanguage = _.find(this.languageOptions, {
      id: this._translateService.currentLang
    })
    this.setLanguage('en');
    this._translateService.use('en')
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next()
    this._unsubscribeAll.complete()
  }
}
