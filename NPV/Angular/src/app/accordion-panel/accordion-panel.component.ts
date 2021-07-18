import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class AccordionPanelComponent implements OnInit {

    @Input() header: string;
    @Input() panelIcon: string = ""; 
    @Input() showHeading: boolean = true;
    expanded: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }
}
