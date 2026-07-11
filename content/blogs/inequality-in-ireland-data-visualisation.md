---
title: Inequality in Ireland – Data Visualisation
date: 15th Jan 2026
description: Inequality in Ireland was a social science research project. It was developed as the summer major project for my Master, MSc Interactive Digital Media at the School of Computer Science and Statistics, Trinity College Dublin..
image: /blogs-img/datavis-feature-image.jpg
alt: View of Dublin
ogImage: /blogs-img/datavis-feature-image.jpg
tags: ['Data Visualisation', 'Interactive Map', 'GeoJSON', 'mapping', 'geospatial data', 'Mapbox', 'Census', 'Deprivation Index', 'survey data', 'storytelling', 'Social Science', 'MSc Interactive Digital Media', 'Trinity College Dublin', 'Dublin', 'Ireland']
published: true
---

### Overview

![View of Dublin](blogs-img/datavis-feature-image.jpg)

View of Dublin

Inequality in Ireland was a social science research project. It was developed as the summer major project for my Master, MSc Interactive Digital Media at the School of Computer Science and Statistics, Trinity College Dublin.

The project was an interactive data visualisation developed collaboratively by a team of five. Its aim was to make complex social and demographic data more accessible, helping users understand how inequality can vary across local, regional and national contexts. The visualisation focused on indicators such as unemployment, education, housing, population change, social status and health. By presenting these datasets through an interactive interface, the project highlighted regional patterns of affluence and deprivation, and invited users to explore the factors that contribute to poverty and inequality in different parts of Ireland.

At its core, the project brought together interaction design, data science and information visualisation. It created a more engaging and intuitive way for users to explore data-driven results and reflect on the lived realities behind them.

### Context

![Explore mode](blogs-img/datavis--explore-mode.png)

Explore mode

The visualisation was based on data from the Pobal HP Deprivation Index and the [CSO](https://www.cso.ie/en/databases/) 2016 census. The Pobal HP Deprivation Index is a widely used social gradient metric for understanding social disadvantage in Ireland, scoring small areas according to levels of affluence or deprivation. Combined with census data, it provided a detailed foundation for comparing social and economic conditions across different parts of the country.

During the early background research stage of the project, I became interested in how urban and regional data can reveal broader social challenges. Many countries face growing questions around inequality, public services, housing, employment and the uneven distribution of resources. As I explored the available survey data and deprivation metrics, particularly in the years after 2010, I became increasingly aware of the quite visible social and economic differences across Ireland. This made the country a focused case study for exploring these issues through data, particularly at a local level where differences between neighbouring areas can be particularly revealing. The project used Ireland as an example to examine what it means to live in areas of relative affluence or deprivation, and how these conditions can shape people’s access to opportunities, services and quality of life.

![Storytelling mode](blogs-img/datavis--storytelling-mode.png)

Storytelling mode

By translating statistical datasets into a visual and interactive format, the project sought to make patterns of inequality easier to see, compare and question. This context shaped both the design direction and the technical development of the project, laying the groundwork for decisions around data processing, mapping, user interaction and visual storytelling.

More broadly, the project was connected to the aims of the [United Nations Sustainable Development Goals](https://sdgs.un.org/goals), particularly the goal of reducing inequalities within and between countries. By focusing on affluence, deprivation and access to opportunity across Ireland, the project used data visualisation as a way to support public understanding of inequality and the conditions affecting marginalised and disadvantaged communities.

### Technologies and Processes

As part of the Inequality in Ireland team, I worked as one of four developers, together with one designer contributing to the development and implementation of the interactive visualisation. The project was developed from scratch and built within three months, from early research and data gathering through to interface development and deployment. 

The final data visualisation centred on an interactive dashboard, allowing users to explore inequality across different regions of Ireland. It included key statistics for each area, alongside several modes of interaction, including Storytelling, Exploration and Comparison. These modes were designed to support a more personalised and flexible user experience, giving users greater control over how they engaged with the data.

The frontend of the project was developed using HTML, CSS and JavaScript. We used the Mapbox JavaScript library to render and control the interactive map, while D3.js was used to support data-driven visual elements and charts. We also worked with browser-based technologies such as the Geolocation API, local storage and cookies to support user interaction, preferences and personalised features. Node.js was used as part of the development workflow.

A significant part of the development process involved preparing and transforming the datasets into a suitable geospatial format. We worked with data from the Pobal HP Deprivation Index and the CSO 2016 Census, cleaning, organising and analysing the raw data before connecting it to regional mapping boundaries. The data was first processed in Excel and then prepared for mapping, with the relevant statistical values joined to geographical features and exported as GeoJSON. To make the map data suitable for the visualisation, we used Tippecanoe to convert the GeoJSON into MBTiles. These tiles were then uploaded to Mapbox Studio as a tileset, allowing the project to display large geospatial datasets more efficiently within the interactive map interface. This workflow transformed statistical and spatial data into a browser-based visualisation that was easier to load, style and explore interactively.

Through this process, the project combined interaction design, data processing and web-based geospatial visualisation. Large datasets were transformed into usable map formats, supporting an interface where complex social data could be explored, compared and understood more intuitively.

### Project Links

- [Project URL](https://inequality-ireland.scss.tcd.ie/register.html)
- [GitHub repository](https://github.com/lucie07/inequality-in-ireland)