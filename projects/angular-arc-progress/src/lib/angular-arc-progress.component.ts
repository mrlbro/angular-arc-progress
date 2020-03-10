import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'lib-angular-arc-progress',
  templateUrl: './angular-arc-progress.component.html',
  styleUrls: ['./angular-arc-progress.component.scss'],
})
export class AngularArcProgressComponent implements OnInit {

  constructor() { }

  @ViewChild('progress', {static: true}) progressRef: ElementRef;
  @ViewChild('background', {static: true}) backgroundRef: ElementRef;
  @ViewChild('wrapper', {static: true}) wrapperRef: ElementRef;

  @Input() radius: number;

  @Input() progress: number;
  @Input() color: string;
  @Input() strokeWidth: number;

  @Input() animationDuration: string;
  @Input() animationType: string;

  @Input() bgColor: string;
  @Input() bgStrokeWidth: number;

  ngOnInit() {
    this.setWrapper();
    this.setBackground();
    this.setProgress();
  }

  private setWrapper() {
    const wrapper = this.wrapperRef.nativeElement;
    wrapper.style.width = this.radius;
    wrapper.style.height = this.radius;
  }

  private setBackground() {
    const background = this.backgroundRef.nativeElement;
    background.style.stroke = this.bgColor;
    background.style.strokeWidth = this.bgStrokeWidth;
  }

  private setProgress() {
    const progress = this.progressRef.nativeElement;
    const length = progress.getTotalLength();
    const to = length * ((100 - this.progress) / 100);
    progress.getBoundingClientRect();
    progress.style.strokeDashoffset = Math.max(0, to).toString();
    progress.style.stroke = this.color;
  }
}
