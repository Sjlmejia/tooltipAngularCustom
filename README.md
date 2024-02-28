# Custom Tooltip

This repository contains all the necessary files for implementing a custom tooltip.

## Usage

In the `custom-tooltip` folder, you will find all the files needed for the tooltip.I'm using content-projection for this tooltip.

### Example

```html
<div [customTooltip]="exampleTooltip">
  info_outline
</div>

<ng-template #exampleTooltip let-dataTooltip="tooltipDef">
  <!-- Put your template here! -->
  <!-- Customize your tooltip content as needed -->
</ng-template>
