# smart-guage
smart guage based on Angular

<h1>Uses</h1>

<h3>Selector</h3>

``` bash
<app-smartguage [params]="params">
</app-smartguage>
```

<h3>Parameters</h3>

``` bash
export interface Params {
  min: number;
  max: number;
  value: number;
  width?: string;
  height?: string;
  color?: string;
  bgcolor?: string;
}
```

<h3>Default Parameters</h3>

``` bash
width: 60px;
height: 54px;
color: rgb(74, 129, 238);
bgcolor: rgba(255, 255, 255, 0.2);
```
