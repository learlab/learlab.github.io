---
title: Jobs
nav:
  order: 5
  tooltip: Hiring
---

# <i class="fas fa-envelope"></i>Jobs

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


<Tabs
    defaultActiveKey="1"
    indicatorColor="#E18F68"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="1" title="Keynesian Zone">
       Near the equilibrium Ek, in the <b>Keynesian zon</b> at the SRAS curve's far left, small shifts in AD to the right or the left will affect the output level Yk, but will not affect the price level by much. In the Keynesian zone, AD largely determines the quantity of output. 
    </Tab>
    <Tab eventKey="2" title="Neoclassical Zone">
        Near the equilibrium En, in the <b>neoclassical zone</b>, at the SRAS curve's far right, small shifts in AD to the right or the left will have relatively little effect on the output level Yn, but instead will have a greater effect on the price level. In the neoclassical zone, the near-vertical SRAS curve close to the level of potential GDP (as represented by the LRAS line) largely determines the quantity of output. 
    </Tab>
</Tabs>

<br/>


<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<!-- Tab content -->
<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p>
</div>


{%
  include link.html
  type="email"
  icon=""
  text="lear.lab.vu@gmail.com"
  tooltip=""
  link="lear.lab.vu@gmail.com"
  style="button"
%}
{:.center}

{% include section.html %}

