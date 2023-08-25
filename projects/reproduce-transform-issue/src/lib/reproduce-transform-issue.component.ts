import { Component, Input } from '@angular/core';

function transformFunction(input: Component): boolean {
  return true;
}

@Component({
  selector: 'lib-reproduce-transform-issue',
  template: `
    <p>
      reproduce-transform-issue works!
    </p>
  `,
  styles: [
  ]
})
export class ReproduceTransformIssueComponent {
  @Input({required: true, transform: transformFunction}) test!: boolean;
}
