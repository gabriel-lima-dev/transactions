import { Component, HostListener, Input, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DropdownService } from '@app/shared/services';
import { Dropdown } from '@app/shared/models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {
  @Input() dropdowbObject: any;
  @Input() dropdownOptionText: string;
  @ViewChild('title') title: ElementRef;
  @ViewChild('trigger') trigger: ElementRef;
  showDropdown: boolean = false;
  defaultLabel: string;
  optionSelected: string;

  constructor(
    private dropdownService: DropdownService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const triggerWidth = this.trigger.nativeElement.offsetWidth;

    this.renderer.setStyle(this.trigger.nativeElement, 'width', `${triggerWidth}px`);
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  clickOption(object: any, optionSelected: string) {
    const dropdown: Dropdown = {
      dropdownObject: object,
      dropdownOptionSelected: optionSelected
    };

    this.title.nativeElement.innerHTML = optionSelected;
    this.optionSelected = optionSelected;
    this.dropdownService.dropdownOptionSelected.emit(dropdown);
  }

  clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();

    if (this.showDropdown){
      this.showDropdown = false;
    }
  }

  @HostListener('document:click')
  clickedOutside(){
    if (this.showDropdown){
      this.showDropdown = false;
    }
  }
}
