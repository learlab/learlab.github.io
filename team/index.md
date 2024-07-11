---
title: Team
nav:
  order: 3
  tooltip: About our team
---



# <i class="fas fa-users"></i>Team


<center>We have a diverse and supportive team with a wide range of skillsets and backgrounds. </center>

{%
  include figure.html
  image="images/lab_photo.jpg"
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

## Join

### Undergraduate/ Graduate Student Researchers

We are always looking for new talent on the team. If you are interested in joining, please contact us below. We often have volunteer and paid opportunities available. We are generally looking for students who are interested in natural language processing (NLP) techniques, the application of computational tools in learning environments, and the use machine learning algorithms.
Feel free to reach out with any questions!



<!-- {% include link.html type="external" link="https://google.com/" text="Apply Now" icon="" style="button" %} -->

{%
  include link.html
  type="email"
  icon=""
  text="Join our team"
  tooltip=""
  link="lear.lab.vu@gmail.com"
  style="button"
%}
{:.center}

{% include section.html %}

## Funding

Our work is made possible by funding from several organizations.
{:.center}


{%
  include gallery.html
  style="square"

  image1="https://www.nsf.gov/images/logos/NSF_4-Color_bitmap_Logo.png"
  link1="https://beta.nsf.gov/funding/opportunities/national-artificial-intelligence-research"
  tooltip1="National Science Foundation"

  image2="images/learning-agency.png"
  link2="https://www.the-learning-agency.com/"
  tooltip2="The Learning Agency"

  image3="images/white-ies-logo.png"
  link3="https://ies.ed.gov/"
  tooltip3="Institute for Education Sciences"
  width="100%"

  image4="images/white-bmg-logo.png"
  link4="https://www.gatesfoundation.org/"
  tooltip4="Bill & Melinda Gates Foundation"
  width="100%"

  image5="images/white-wff-logo.png"
  link5="https://www.waltonfamilyfoundation.org/"
  tooltip5="Walton Family Foundation"
  width="100%"

  image6="images/white-czi-logo.png"
  link6="https://chanzuckerberg.com/"
  tooltip6="Chan Zuckerberg Initiative"
  width="100%"

  image7="images/white-nih-logo.png"
  link7="https://www.nih.gov/"
  tooltip7="National Institutes of Health"
  width="100%"

%}
