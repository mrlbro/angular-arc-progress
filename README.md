# Angular Progress Arc

Simple animated configurable progress bar for Angular

## Examples

![Example 1](src/assets/red-65-3s.gif)
![Example 2](src/assets/purple-0.png)
![Example 3](src/assets/yellow-15-bg-15.png)

## Installation

1. Install via npm: `npm install angular-arc-progress`
2. Import to your module `import { AngularArcProgressModule } from 'angular-arc-progress';`
3. Don't forget to add `AngularProgressArc` to your module imports `@NgModule({ ... imports: [ ... AngularArcProgressModule ] })`

## Usage

Add component selector to your HTML: `<angular-arc-progress></angular-arc-progress>`

## Attributes

|Name               |Type    |Default|Description                                          |
|-------------------|--------|-------|-----------------------------------------------------|
|`radius`           |`number`|200    |Arc radius in pixels                                 |
|`progress`         |`number`|0      |Progress from 0 to 100                               |
|`color`            |`string`|None   |Progress bar color                                   |
|`bgColor`          |`string`|#cccccc|Background color                                     |
|`strokeWidth`      |`string`|10     |Progress bar width                                   |
|`bgStrokeWidth`    |`string`|10     |Background width                                     |
|`animationDuration`|`string`|850ms  |Default CSS values, e.g. `1s`, `250ms`               |
|`animationType`    |`string`|linear |Corresponds to CSS `animation-timing-function` values|

To bind values use standart HTML `attribute` syntax or Angular `property binding`:
`<angular-arc-progress radius="350" [color]="yourColorVariable"></angular-arc-progress>`