---
title: Jobs
nav:
  order: 5
  tooltip: Hiring
---

# <i class="fas fa-envelope"></i>Jobs



<h3>NLP</h3>
[Detail](https://learlab.org/jobs/NLP)



<h3>Developer</h3>
[Detail](https://learlab.org/jobs/Developer)
[click2](NLP)


<html>
<head>
  <title>Tab Example2</title>
  <style>
    .tab {
      display: flex;
      flex-wrap: wrap;
    }

    .tab input[type="radio"] {
      display: none;
    }

    .tab label {
      margin-right: 10px;
      padding: 10px 20px;
      cursor: pointer;
      background-color: #eee;
      border: 1px solid #ccc;
      border-bottom: none;
    }

    .tab input[type="radio"]:checked + label {
      background-color: #fff;
      border-bottom: 1px solid #fff;
    }

    .tab-content {
      display: none;
      padding: 20px;
      border: 1px solid #ccc;
      border-top: none;
    }

    .tab input[type="radio"]:checked + label + .tab-content {
      display: block;
    }
  </style>
</head>
<body>
  <div class="tab">
    <input type="radio" name="tabs" id="tab1" checked>
    <label for="tab1">Tab 1</label>
    <div class="tab-content">
      <h3>Tab 1 Content</h3>
      <p>Details of tab 1 content.</p>
    </div>

    <input type="radio" name="tabs" id="tab2">
    <label for="tab2">Tab 2</label>
    <div class="tab-content">
      <h3>Tab 2 Content23123</h3>
      <p>Details of tab 2 content.</p>
    </div>
  </div>
</body>
</html>




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

