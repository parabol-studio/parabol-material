import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';


@Component({
  selector: 'conichi-text',
  templateUrl: './text.html'
})

export class ConichiTextComponent implements AfterViewChecked, OnInit {
  public controlType: string;
  public maskArray: Array<any>;
  public maskControlArray: Array<any>;
  public maskEditableIndexes: Array<any>;
  public position: number;
  public isMobile: boolean;

  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() type: string;
  @Input() mask: string;
  @Input() model: string;

  @ViewChild('input') input: ElementRef;
  @ViewChild('maskLayer') maskLayer: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.isMobile = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

    if (this.isMobile) { this.mask = null; }

    if (this.mask && !this.isMobile) {
      this.maskArray = this.mask.split('');
      this.maskControlArray = [];
      const editableIndexes = [];

      this.maskArray.forEach(function(char, index) {
        if (char.match(/^[a-zA-Z0-9]*$/)) { editableIndexes.push(index); }
      });

      this.maskEditableIndexes = editableIndexes;
    }
  }

  ngAfterViewChecked() {
    if (!this.type) { this.type = 'text'; }
    if (this.type === 'password') { this.controlType = 'password'; }
    if (this.mask && !this.isMobile) { this.applyMask(null); }
    this.cd.detectChanges();
  }

  showPassword() {
    if (this.type === 'text') { this.type = 'password'; } else
      if (this.type === 'password') { this.type = 'text'; }
  }

  applyMask(event) {
    if (!this.isMobile) {
      this.model = this.maskArray.join('');
      this.input.nativeElement.style.color = 'transparent';

      if (event) {
        if (event.key === 'Backspace') { this.maskControlArray.pop(); }

        if (this.maskControlArray.length < this.maskEditableIndexes.length && event.key.match(/^[a-zA-Z0-9]*$/) && event.key.length === 1) {
          this.maskControlArray.push(event.key);
        }

        this.maskArray = this.mask.split('');
        const maskArray = this.maskArray;
        const editableIndexes = this.maskEditableIndexes;

        this.maskControlArray.map(function(char, index) {
          const editableIndex = editableIndexes[index];
          maskArray[editableIndex] = char;
        });

        this.model = maskArray.join('');
        this.input.nativeElement.value = this.model;

        if (this.maskControlArray.length === this.maskEditableIndexes.length) { this.modelChange.emit(this.model); }
      }

      this.applyStyle(event);
    }
  }

  applyStyle(event) {
    this.maskLayer.nativeElement.innerHTML = this.model;

    const editableIndexes = this.maskEditableIndexes;
    const maskControlArray = this.maskControlArray;
    let position = this.position;

    const formattedChars = this.maskLayer.nativeElement.innerHTML.split('').map((char, index) => {
      position = editableIndexes[maskControlArray.length - 1];

      if (index === position) { return `<span class="char">${ char }</span><span class="carat"></span>`; }
      else if (index <= position) { return `<span class="char">${ char }</span>`; }
      else { return `<span>${ char }</span>`; }
    });

    if (position === undefined) { formattedChars['0'] = `<span class="carat"></span><span>${ this.maskArray[0] }</span>`; }

    this.position = position;
    this.maskLayer.nativeElement.innerHTML = formattedChars.join('');
  }

  emit(event) {
    if (this.mask && !this.isMobile) { this.applyMask(event); }
    else { this.modelChange.emit(this.model); }
  }
}
