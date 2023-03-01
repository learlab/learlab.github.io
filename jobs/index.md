---
title: Jobs
nav:
  order: 5
  tooltip: Hiring
---

# <i class="fas fa-envelope"></i>Jobs


<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'tab1')">Tab 1</button>
  <button class="tablinks" onclick="openTab(event, 'tab2')">Tab 2</button>

  <div id="tab1" class="tabcontent">
    <h3>Tab 1 Content</h3>
    <p>Details of tab 1 content.</p>
  </div>

  <div id="tab2" class="tabcontent">
    <h3>Tab 2 Content</h3>
    <p>Details of tab 2 content.</p>
  </div>
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

