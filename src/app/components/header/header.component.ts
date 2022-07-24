import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
/**State */
import * as fromRoot from '@app/store';
import * as fromNavigation from '@app/store/navigation';
import { NavigationEnd, Event, Router } from '@angular/router';
import { delay, map, Observable } from 'rxjs';
import { Category } from '@app/models/backend';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public categoriesNav: Array<Category> = [];

  @ViewChild('marker') marker: ElementRef;
  @ViewChild('link') link: ElementRef;

  fullMenuCat$: Observable<any>;
  fullMenu$: Observable<any>;
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private activeLink: ElementRef
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          window.setTimeout(() => {
            this.resetMarkerPos();
          },0)

      }
    })
  }

  ngOnInit(): void {
    this.fullMenuCat$ = this.store.pipe(select(fromNavigation.fullMenuCat));
    this.fullMenu$ = this.store.pipe(select(fromNavigation.getFullMenu));
    this.fullMenuCat$.subscribe((data) => {
      this.categoriesNav = data;
    })
  }

  ngAfterViewInit(): void {
      this.markerSize(this.link.nativeElement.offsetWidth, 0);
      this.marker.nativeElement.style.display = 'block';
  }

  private markerSize(width:number, left: number): void{
    this.marker.nativeElement.style.width = width - 20 + 'px';
    this.marker.nativeElement.style.left = left + 8 + 'px';
  }



  toggleMenu(){
    this.store.dispatch(new fromNavigation.NavToggle);

  }

  moveMarker(elem: any): void {
    this.markerSize(elem.srcElement.offsetWidth, elem.srcElement.offsetLeft);
  }

  resetMarkerPos():void {
    const link = this.activeLink.nativeElement.querySelector('.header__categories__navitem-active');
    this.markerSize(link.offsetWidth, link.offsetLeft);
  }

}
