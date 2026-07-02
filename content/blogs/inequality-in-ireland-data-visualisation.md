---
title: Inequality in Ireland – Data Visualisation
date: 15th Jan 2026
description: Inequality in Ireland is an interactive data visualisation developed within a team at Trinity College Dublin. The aim of the project is to raise awareness about socio-economic inequality in Ireland.
image: /blogs-img/datavis-feature-image.jpg
alt: View of Dublin
ogImage: /blogs-img/datavis-feature-image.jpg
tags: ['Data Visualisation', 'Interactive Map', 'GeoJSON', 'mapping', 'geospatial data', 'Mapbox', 'Census', 'Deprivation Index', 'survey data', 'storytelling', 'Social Science', 'MSc Interactive Digital Media', 'Trinity College Dublin', 'Dublin', 'Ireland']
published: true
---

### Overview

![View of Dublin](blogs-img/datavis-feature-image.jpg)

View of Dublin

Inequality in Ireland was a social science research project. It was developed as the summer major project for my Master,  MSc Interactive Digital Media at the School of Computer Science and Statistics, Trinity College Dublin. 

The project was an interactive data visualisation developed collaboratively by a team of five. Its aim was to make complex social and demographic data more accessible, helping users understand how inequality can vary across local, regional and national contexts. The visualisation focused on indicators such as unemployment, education, housing, population change, social status and health. By presenting these datasets through an interactive interface, the project highlighted regional patterns of affluence and deprivation, and invited users to explore the factors that contribute to poverty and inequality in different parts of Ireland.

At its core, the project brought together interaction design, data science and information visualisation. It created a more engaging and intuitive way for users to explore data-driven results and reflect on the lived realities behind them.

### Context

The visualisation is based on data from the Pobal HP deprivation index and [CSO](https://www.cso.ie/en/databases/) 2016 census. The Pobal index is Ireland’s most widely used social gradient metric, which scores each small area in terms of affluence or disadvantage. During the background research, I found out that many countries around the world are facing acute challenges in terms of the efficiency of urban operation. This project utilized Ireland as an example, successfully demonstrated what it means to live in an area of extreme affluence or deprivation and, just how divided the Irish society has become.

![Explore mode](blogs-img/datavis--explore-mode.png)

Explore mode

The project was developed from scratch, built and deployed within three months. It consists of a dashboard that contains the main statistics for each region, as well as storytelling, exploration, and comparison modes for users to interact with data in the map. We applied a mix of personalized and customized features in order to give high priority to user control and involvement. We used multiple tools in the process of transforming mapping data from the raw data to the format we needed. All the data were extracted, analysed and mapped in Excel and Mapbox, then merged into a single GeoJSON and used tippecanoe to create the MBTiles which can be uploaded to Mapbox Studio as a Tileset. We dealt with large databases and datasets, employed innovative techniques and tools to visualise data. The foundation of the web framework was developed with HTML, CSS and JavaScript. Mapbox js library, D3.js, Geolocation API, local storage, cookies, node.js were also extensively used.

The ultimate goal of the project is to achieve a better and more sustainable future for us all, as a blueprint of sustainable development goals to reducing inequalities between countries and within countries by supporting the marginalised and disadvantaged.

### Project Links

- [Project URL](https://inequality-ireland.scss.tcd.ie/register.html)
- [GitHub repository](https://github.com/lucie07/inequality-in-ireland)