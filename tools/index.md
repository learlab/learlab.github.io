---
title: Tools
nav:
  order: 3
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fas fa-tools" %}Tools

Our work wouldn't be possible without the contributions of hundreds of other labs. Here are some tools and resources that we have developed for the research community.

{% include search-info.html %}

{% include section.html %}

## iTELL

{% capture itell-description %}
  What if students could interact with their textbooks? We are building an open source digital textbook framework powered by AI.
  {%
    include button.html
    type="source"
    text="Frontend"
#   link="https://github.com/learlab/itell-strapi-demo"
  %}
  {%
    include button.html
    type="source"
    text="Scoring API"
#   link="https://github.com/learlab/itell-api"
  %}
  {%
    include button.html
    type="source"
    text="Textbook Demo"
#   link="https://demo.itell.ai/"
  %}
{% endcapture %}

{% capture col1 %}![iTELL Demonstration](https://www.youtube.com/watch?v=_q-d9_jjpMk){% endcapture %}
{% capture col2 %}{%
  include card.html
  image="images/itell-logo.png"
  link="https://www.youtube.com/watch?v=_q-d9_jjpMk"
  title="iTELL"
  subtitle= "Intelligent Texts for Enhanced Lifelong Learning"
  description=itell-description
  tooltip="iTELL"
%}{% endcapture %}

{%
  include cols.html
  col1=col1
  col2=col2
%}

{% include section.html %}

## Lexical Analysis Tools

Along with colleagues at the University of Oregon (Kris Kyle), Arizona State University (Danielle McNamara), and Georgia State University (Joon Suh Choi), we have developed a number of tools that can be used to automatically extract linguistic features, language components, and readability formulas from texts.

{% include list.html component="card" data="tools" filters="group: salat" style="small" %}

{% include section.html %}

## Other Tools

{% include list.html component="card" data="tools" filters="group: featured|more" %}

<!-- {% include section.html %} -->

<!-- ## More

{% include list.html component="card" data="tools" filters="group: more" style="small" %} -->
