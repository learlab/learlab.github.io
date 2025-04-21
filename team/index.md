---
title: Team
nav:
  order: 3
  tooltip: About our team
---



# {% include icon.html icon="fas fa-users" %}Team


<center>We have a diverse and supportive team with a wide range of skillsets and backgrounds. </center>

{%
  include figure.html
  image="images/GroupLabPic.jpg"
  width="80%"
%}




{% include section.html %}

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi, group: "
%}
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: phd, group: "
%}
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: ma, group: "
%}
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: undergrad, group: "
%}
{:.center}

## Alumni


{% include list.html data="members" component="portrait" filters="role: ma, group: alum" %}

{% include list.html data="members" component="portrait" filters="role: undergrad, group: alum" %}



{% include section.html background="images/banner.jpg" dark=true%}

Teamwork makes the dream work.

{% include section.html %}

## Funding

Our work is made possible by funding from several organizations.
{:.center}


{% capture content %}
  {% 
    include figure.html
    image="images/nsf.png"
    caption="National Science Foundation"
    link="https://beta.nsf.gov/funding/opportunities/national-artificial-intelligence-research"
    width="400px" 
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}
  {% 
    include figure.html
    image="images/learning-agency.png"
    caption="The Learning Agency"
    link="https://www.the-learning-agency.com/"
    width="400px" 
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}
  {% 
    include figure.html
    image="images/white-ies-logo.png"
    caption="Institute for Education Sciences"
    link="https://ies.ed.gov/"
    width="400px" 
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}
  {% 
    include figure.html
    image="images/white-bmg-logo.png"
    caption="Bill & Melinda Gates Foundation"
    link="https://www.gatesfoundation.org/"
    width="400px" 
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}
  {% 
    include figure.html
    image="images/white-wff-logo.png"
    caption="Walton Family Foundation"
    link="https://www.waltonfamilyfoundation.org/"
    width="400px"
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}
  {% 
    include figure.html
    image="images/white-czi-logo.png"
    caption="Chan Zuckerberg Initiative"
    link="https://chanzuckerberg.com/"
    width="400px"
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}
  {% 
    include figure.html
    image="images/white-nih-logo.png"
    caption="National Institutes of Health"
    link="https://www.nih.gov/"
    width="400px"
    style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
  %}

{% endcapture %}

{%
  include grid.html
  content=content
  style="square"
  style="border: 2px solid #ddd; padding: 10px; margin: 10px;"
%}
