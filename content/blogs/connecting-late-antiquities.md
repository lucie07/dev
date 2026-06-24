---
title: Connecting Late Antiquities
date: 15th May 2026
description: The digitisation of the Prosopography of the Later Roman Empire, with permission from Cambridge University Press. This three-volume reference work is being...
image: /blogs-img/cla_feature-image.png
alt: Connecting Late Antiquities
ogImage: /blogs-img/cla_feature-image.png
tags: ['eXist-db', 'XML', 'TEI', 'geojson data', 'mapping', 'UX/UI', 'Prosopography', 'colonial history', 'history', 'classics', 'Digital Humanities', 'AHRC', 'University of Exeter']
published: true
---

**Role:** Developer

### Overview

Connecting Late Antiquities (CLA) is a collaborative project to create open, digital prosopographical resources for the Roman and post-Roman territories between the third and seventh centuries AD.

### Context

![A group of late antiquite people](blogs-img/cla_feature-image.png)

A group of late antiquite people

The pilot phase of Connecting Late Antiquities commenced in 2023 with two years of funding from the UK’s [Arts and Humanities Research Council](https://www.ukri.org/councils/ahrc/) and Germany’s [Deutsche Forschungsgemeinschaft](https://www.dfg.de/). Its main aim is the digitisation of the Prosopography of the Later Roman Empire, with permission from Cambridge University Press.

Many of the resources used in the study of this ancient time involve prosopography – a form of research that brings together biographical information about particular individuals and groups in search of patterns and connections. But often, key texts, such as the Prosopography of the Later Roman Empire, have remained relatively inaccessible either as expensive print publications found in reference-only volumes in university libraries, or in the form of specialist databases.

The need for a late-antique prosopography has long been recognised, with Theodor Mommsen planning such a project after the completion of the Prosopographia Imperii Romani. In the second half of the twentieth century, the Prosopography of the Later Roman Empire and the ongoing Prosopographie chrétienne du Bas-Empire have done much to realise this aim, although no electronic version is available for either of these invaluable reference works.

### Technologies and Processes

As part of the CLA team, in my role as a developer, I focused on the design and development of the project’s digital resources in eXist-db, incorporating the case studies, PLRE and PCBE. The CLA resource is integrated with the digital edition of the revised open-access Prosopography of the Later Roman Empire (PLRE), which is encoded and marked up in TEI XML.

Working together with the project team and partners at Exeter, London and Bonn, my work involves the creation of an open, accessible and searchable database, with internal cross-references and the interlinked entities for persons, places and roles.  

For person entities, I designed database structures for people metadata using XQuery and XSLT, drawing raw data from the decoded XML. By employing a system of Uniform Resource Identifiers (URIs), I created stable and unique URIs for each person entry across three volumes of PLRE. Each individual URI resolves to an HTML page, allowing the entry to be cited, accessed and linked from many other digital projects. These person records bring together multiple types of information, including textual resources, dates active, stemmata and family connections. The data is rendered and displayed visually within central CLA interface, enriching the understanding of relationships and networks of people and the interconnectivity between different social strata.

Alongside person data, the major CLA entity, I also worked on mapping place entities as part of the process of building an interlinked, cross-referenced system. This involved using Pleiades IDs, QGIS, OpenStreetMap, location markers, and transforming the processed geographical data into GeoJSON datasets. I generated an array of Place JSON from extracted map data in Oxygen XML Editor, and deployed the outputs to eXist-db for use within the CLA web interface. The resulting place data includes metadata such as XML IDs, place names, coordinates and calculated text counts.

Search and filtering have also been a major part of the development work. I implemented an index-backed search system based on Apache Lucene, an open source Java library, and built it into the db's configuration and indexing pipeline. This supports free-text search and search filter within person entries, making sorting and faceting efficient across more than 4,500 of person entries in PLRE Volume 1. I also handled Lucene with faceted browse and search interface with multiple filters that can be applied, including alphabetical filtering and timeline-based data visualization.

The CLA site soft-launched in December 2025. In its current 2026 form, the digital edition of PLRE vol. 1, the first volume of the three-volume reference work, has been transformed into a central CLA resource. The TEI XML files will be made freely available to access and download on GitHub under a CC-BY licence. The data created by CLA will also be deposited in the University of Exeter’s publicly available institutional repository, Open Research Exeter (ORE), independently of CLA web interface. The final database serves as a new online infrastructure, opening up new ways to explore prosopographical material and social relationships across the late-antique world.

### Project Links

- [Project URL](https://connectinglateantiquities.org/index.html)
- [UKRI Gateway to Research profile](https://gtr.ukri.org/projects?ref=AH%2FX002381%2F1)
