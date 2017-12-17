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

  /**
   * Whether the dropdown is active or not, which will set the `active` CSS class when true.
   *
   * @public
   * @type {boolean}
   */
  @HostBinding('class.active') isActive = false;

  /**
   * The text used in the dropdown button
   *
   * @public
   * @type {string}
   */
  @Input() dropdownText = 'Username';

  /**
   * Reference to the dropdown menu DOM element
   *
   * @public
   * @type {HTMLElement}
   */
  @ViewChild('menu', { read: ElementRef }) menu: ElementRef;

  /**
   * Constructor
   *
   * @param {ElementRef} element - Reference to the DOM element of this component
   */
  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('ui');
    this.element.nativeElement.classList.add('dropdown');
    this.element.nativeElement.classList.add('item');
  }

  /**
   * OnInit lifecycle hook
   *
   * @public
   * @return void
   */
  ngOnInit() {
  }

  /**
   * Click event handler on the dropdown to open and close it.
   *
   * @private
   * @return void
   */
  @HostListener('click')
  private _clickHandler(): void {
    this._toggleDropdown();
  }

  /**
   * Click handler on the document, which is used to close the dropdown
   * if the user clicks anywhere outside of the dropdown.
   *
   * @private
   * @param {Event} event - The click event
   * @return void
   */
  @HostListener('document:click', ['$event'])
  private _clickedOutside(event: Event): void {
    if (!this.element.nativeElement.contains(event.target) && this.isActive) {
      this._toggleDropdown();
    }
  }

  /**
   * Opens or closes the dropdown.
   *
   * @private
   * @return void
   */
  private _toggleDropdown(): void {
    this.menu.nativeElement.classList.toggle('visible');
    this.isActive = !this.isActive;
  }

}
