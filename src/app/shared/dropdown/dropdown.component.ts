import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'png-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {

  @HostBinding('class.active') isActive = false;

  @Input() dropdownText = 'Username';

  @ViewChild('menu', { read: ElementRef }) menu: ElementRef;

  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('ui');
    this.element.nativeElement.classList.add('dropdown');
    this.element.nativeElement.classList.add('item');
  }

  ngOnInit() {
  }

  @HostListener('click')
  private _clickHandler() {
    this._toggleDropdown();
  }

  @HostListener('document:click', ['$event'])
  private _clickedOutside($event) {
    if (!this.element.nativeElement.contains($event.target) && this.isActive) {
      this._toggleDropdown();
    }
  }

  private _toggleDropdown() {
    this.menu.nativeElement.classList.toggle('visible');
    this.isActive = !this.isActive;
  }

}
