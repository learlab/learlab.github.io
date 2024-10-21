---
title: Home
---


{%
  include figure.html
  image="images/lab-logo.jpg"
%}


# What We Do

At the Language and Educational Analytics Research Lab, we use data science to generate insights about language, learning, and education that support AI-driven theory, applications, research, and interventions.

Our work generally focuses on the use of natural language processing (NLP) techniques and the application of computational tools and machine learning algorithms to better understand language learning, student writing, and text comprehensibility as means to understand underlying cognitive functions. The LEAR lab works with collaborators to develop NLP tools for use by researchers, industry partners, and educational administrators. We also assess the application of NLP techniques like Large Language Models in educational settings (K-12 and adults) as a means of generating and testing student domain knowledge.

{%
  include link.html
  type="github"
  icon=""
  text="Find us on GitHub"
  link="learlab"
  style="button"
%}
{:.center}

{% include section.html full=true %}

<!-- {% include banner.html image="images/banner.jpg" %} -->

{% include section.html %}

## Highlights

{% capture text %}
Our research is consistently accompanied by source code and supplementary materials to promote accessibility and reproducibility. We also share early versions of our work on preprint platforms, ensuring free access to our findings ahead of formal publication. By offering these resources, we aim to advance transparency and foster meaningful collaborations across our research community.
{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/research.svg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}
We produce comprehensive, publicly available datasets designed to support a wide range of research efforts. To encourage innovation, we host data-centric competitions where teams of scientists can test their models and solutions. These efforts help drive progress in data analysis while promoting collaboration and knowledge exchange.

{%
  include button.html
  link="data"
  text="Explore our data"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/data.svg"
  link="data"
  title="Datasets and Competitions"
  flip=true
  text=text
%}

{% capture text %}
We develop specialized tools to assist researchers in the analysis of complex language data. Our software is accompanied by clear documentation and reproducible code to ensure ease of use and integration into various workflows. Through comprehensive tutorials and resources, we empower researchers to effectively leverage these tools in their own studies.

{%
  include button.html
  link="tools"
  text="Browse our tools"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/tools.svg"
  link="tools"
  title="Software and Tutorials"
  text=text
%}

{% capture text %}
We are a multidisciplinary group of researchers with expertise spanning various fields and perspectives. Our team values collaboration, innovation, and a commitment to pushing the boundaries of scientific knowledge. Together, we create an environment that fosters creativity and tackles the most pressing challenges in our research domain.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/team.svg"
  link="team"
  title="Our Team"
  flip=true
  text=text
%}

{% comment %}
Text can go here.
{% endcomment %}
