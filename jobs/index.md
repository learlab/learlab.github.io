---
title: Jobs
nav:
  order: 5
  tooltip: Hiring
---

# <i class="fas fa-envelope"></i>Jobs



<div class="tabs">
  <button class="tablink" onclick="openTab('tab1')">Tab 1</button>
  <button class="tablink" onclick="openTab('tab2')">Tab 2</button>

  <div id="tab1" class="tabcontent">
    <h2>Tab 1 Content</h2>
    <p>This is the content for Tab 1.</p>
  </div>

  <div id="tab2" class="tabcontent">
    <h2>Tab 2 Content</h2>
    <p>This is the content for Tab 2.</p>
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
