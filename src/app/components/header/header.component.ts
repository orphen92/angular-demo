import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
/**State */
import * as fromRoot from '@app/store'
import * as fromNavigation from '@app/store/navigation'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public categoriesNav = [
    {
      name: 'Angular Stuff',
      link: '#'
    },
    {
      name: 'Dev Projects',
      link: '#'
    },
    {
      name: 'Algo Resolutions',
      link: '#'
    },
  ]

  @ViewChild('marker') marker: ElementRef;
  @ViewChild('link') link: ElementRef;
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    console.log(this.link);

  }

  toggleMenu(){
    this.store.dispatch(new fromNavigation.NavToggle);
  }

  moveMarker(elem: any): void {
    let linkWidth = elem.srcElement.offsetWidth;
    let LinkPosition = elem.srcElement.offsetLeft;

    this.marker.nativeElement.style.width = linkWidth - 20 + 'px';
    this.marker.nativeElement.style.left = LinkPosition + 8 + 'px';
  }
}
