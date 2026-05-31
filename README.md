<!--
File: README.md
Document Title: WinXP Theme Documentation
Author: Alysha Pursley, BSCS Software Developer
Date: May 31, 2026
-->

<div align="center">

# WinXP Theme Documentation

A static GitHub Pages-ready website theme inspired by Windows XP styling
</div>

---

## Table of Contents

- [Theme Purpose & Use Case](#theme-purpose--use-case)
  - [Purpose](#purpose)
  - [Who This Theme Is For](#who-this-theme-is-for)
  - [Design Summary](#design-summary)
- [Theme Preview](#theme-preview)
  - [Screenshots](#screenshots)
- [Site Structure](#site-structure)
  - [Page Structure](#page-structure)
  - [Component Structure](#component-structure)
  - [Asset Structure](#asset-structure)
- [Personalization Guide](#personalization-guide)
  - [Before Editing](#before-editing)
  - [Change the Site Owner Name](#change-the-site-owner-name)
  - [Change the Life Story / Biography](#change-the-life-story--biography)
  - [Change Projects or Featured Work](#change-projects-or-featured-work)
  - [Change Contact and Social Links](#change-contact-and-social-links)
  - [Change Images and Screenshots](#change-images-and-screenshots)
  - [Change Colors, Fonts, and Visual Style](#change-colors-fonts-and-visual-style)
- [GitHub Repository & Pages Setup](#github-repository--pages-setup)
  - [Standalone Theme Repository](#standalone-theme-repository)
  - [Connection to Portfolio Themes Templates](#connection-to-portfolio-themes-templates)
  - [Deploying with GitHub Pages](#deploying-with-github-pages)
- [Troubleshooting & Maintenance](#troubleshooting--maintenance)
  - [Common Issues](#common-issues)
  - [Maintenance Notes](#maintenance-notes)
- [Copyright](#copyright)

---

<div align="center">

# Theme Purpose & Use Case

---

### Section Title: WinXP Static Website Theme Documentation

### Documentation By: Alysha Pursley
#### *BSCS Software Development*
#### May 31, 2026

---

</div>

---

<details open><summary>

## Purpose

</summary>

The **WinXP** theme is a static website theme designed to be used as a complete starting point for a personal website, professional profile, creative site, developer presence, or small project website. The theme is intended to work as a standalone GitHub repository and can be deployed through GitHub Pages without requiring a backend, database, server setup, or framework build process.

This documentation is written for someone who wants to use the theme for their own site, not just view it as a design sample. It explains what the theme contains, where the important files are located, what content needs to be replaced, and how to make the theme fit a different person’s story, work, goals, and contact information. The README should be kept in the theme repository so future users can understand the project without needing to inspect every file first.

</details>

---

<details open><summary>

## Who This Theme Is For

</summary>

This theme is useful for people who want a ready-to-edit static website with a clear structure and a distinctive visual direction. It can work for developers, designers, students, freelancers, artists, writers, small business owners, or anyone who wants a personal site that can be edited directly with HTML, CSS, and JavaScript.

A user does not need advanced web development experience to customize this theme. Most required edits involve replacing text, updating links, changing images, and adjusting colors in the stylesheet. More advanced customization is possible, but the theme should still remain approachable for someone who is only comfortable editing basic HTML files.

</details>

---

<details open><summary>

## Design Summary

</summary>

**Design Category:** personal website / portfolio

The visual direction of this theme is best described as **clean presentation sections, editable biography areas, project cards, image blocks, and contact details**. The structure is meant to provide enough personality to feel memorable while still giving users practical sections for biography content, projects, skills, contact information, and navigation.

The main content areas found or expected in this theme include:

- About
- Projects
- Portfolio
- Skills
- Contact
- Testimonials
- Work

</details>

---

# Theme Preview

<details open><summary>

## Screenshots

</summary>

#### Homepage preview

![WinXP Homepage preview](images/winxp-screenshot-01.png)

#### Additional theme preview 2

![WinXP Additional theme preview 2](images/winxp-screenshot-02.png)

#### Additional theme preview 3

![WinXP Additional theme preview 3](images/winxp-screenshot-03.png)

#### Additional theme preview 4

![WinXP Additional theme preview 4](images/winxp-screenshot-04.png)

#### Additional theme preview 5

![WinXP Additional theme preview 5](images/winxp-screenshot-05.png)

#### Additional theme preview 6

![WinXP Additional theme preview 6](images/winxp-screenshot-06.png)

These screenshots should remain in the repository so users can quickly see what the theme looks like before opening the files. If the theme is customized, users should replace these preview images with screenshots of their own edited version.

</details>

---

# Site Structure

<details open><summary>

## Page Structure

</summary>

The static version of this theme is organized as a multi-page website. Each page is a normal `.html` file so it can be opened in a browser, uploaded to GitHub, and published through GitHub Pages.

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces the theme, establishes the main visual style, and points visitors toward the most important sections. |
| About | `about.html` | Holds the personal story, background summary, values, experience, and credibility details that should be rewritten for the site owner. |
| Projects | `projects.html` | Displays featured work, case studies, project cards, links, screenshots, and descriptions. |
| Case Studies | `case-studies.html` | Supports the theme’s navigation and gives the site owner another editable content area. |
| Skills | `skills.html` | Supports the theme’s navigation and gives the site owner another editable content area. |
| Articles | `articles.html` | Supports the theme’s navigation and gives the site owner another editable content area. |
| Testimonials | `testimonials.html` | Supports the theme’s navigation and gives the site owner another editable content area. |
| Contact | `contact.html` | Gives visitors the easiest way to contact the site owner and find social/profile links. |

When customizing the theme, start with `index.html` because it is the first page visitors see. After that, update the supporting pages so the full site tells one consistent story.

</details>

---

<details open><summary>

## Component Structure

</summary>

Reusable pieces of the design are documented as components. These files are meant to make repeated sections easier to find, understand, and update.

| Component | File | What It Controls |
|---|---|---|
| Aqua Button | `components/aqua-button.html` | Reusable section used across the theme. |
| Bubbles | `components/bubbles.html` | Reusable section used across the theme. |
| Aqua Panel | `components/aqua-panel.html` | Reusable section used across the theme. |
| Aqua Window | `components/aqua-window.html` | Reusable section used across the theme. |
| Taskbar | `components/taskbar.html` | Reusable section used across the theme. |
| Start Menu | `components/start-menu.html` | Reusable section used across the theme. |
| Layout | `components/layout.html` | Holds shared structure used by multiple pages, including repeated wrapper markup. |
| Header | `components/header.html` | Controls the top navigation, site title, page links, and first impression branding. |
| Navigation | `components/navigation.html` | Controls the top navigation, site title, page links, and first impression branding. |
| Footer | `components/footer.html` | Holds copyright, closing links, repeated contact details, and repository relationship notes. |

If the same navigation, footer, or repeated section appears on more than one page, update the matching component first. Then check every page that uses the same section to make sure the text and links still make sense.

</details>

---

<details open><summary>

## Asset Structure

</summary>

Images and screenshots should be stored inside the `images/` folder. Styles belong in `css/theme.css`, and interactive behavior belongs in `js/theme.js`. Keeping these files separated makes the theme easier to edit and easier to move into its own standalone repository.

Recommended structure:

```text
winxp/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── components/
├── css/
│   └── theme.css
├── js/
│   └── theme.js
├── images/
└── README.md
```

</details>

---

# Personalization Guide

<details open><summary>

## Before Editing

</summary>

Before changing the theme, make a copy of the original folder. This gives you a safe version to return to if a layout breaks or a file is accidentally deleted. Open the site locally by double-clicking `index.html`, or use a local preview extension in VS Code if you want automatic refresh while editing.

Users should replace placeholder content in small sections instead of rewriting the entire file at once. Update the name, biography, projects, images, and contact links first. Then adjust colors, fonts, animations, and optional sections after the basic personal information is correct.

</details>

---

<details open><summary>

## Change the Site Owner Name

</summary>

Most users will need to replace the original site owner name with their own name, brand, studio name, or project name.

| What to Change | Where to Look | What to Do |
|---|---|---|
| Browser title | `index.html` and other `.html` pages | Update the text inside the `<title>` tag. |
| Header or logo text | `components/header.html` or `components/navigation.html` | Replace the visible name with the new site owner name. |
| Hero name/headline | `index.html` or `components/hero.html` | Replace the main headline with the user’s own introduction. |
| Footer copyright | `components/footer.html` or footer section in each page | Replace the name only if the new repository is not owned by Alysha Pursley. |

Search the project for the current name or title text and replace it carefully. Do not replace text inside image filenames unless the actual image file is also renamed.

</details>

---

<details open><summary>

## Change the Life Story / Biography

</summary>

The biography should be rewritten so it reflects the person using the theme. This is usually one of the most important edits because it changes the theme from a generic design into a personal website.

| Content Area | File Location | What to Replace |
|---|---|---|
| Short intro | `index.html` or `components/hero.html` | Replace the opening sentence with a short summary of who the user is. |
| Longer biography | `about.html` | Replace background, personal story, education, experience, and goals. |
| Skills or strengths | `about.html` or `components/skills.html` | Replace skill names, tools, technologies, or service areas. |
| Personal details | `about.html` | Remove anything that does not apply and add details that fit the new user. |

A strong biography should answer three basic questions: who the user is, what they do, and why someone should keep reading. The user can write this casually or professionally depending on the theme’s tone, but the content should always feel specific to them.

</details>

---

<details open><summary>

## Change Projects or Featured Work

</summary>

Project sections should be updated with the user’s real work. If the user does not have projects yet, this section can be changed into writing samples, services, certifications, artwork, client work, product links, or favorite examples.

| Project Detail | File Location | What to Change |
|---|---|---|
| Project title | `projects.html` or `components/project-card.html` | Replace each sample project title. |
| Project description | `projects.html` | Write a clear explanation of what the project is and what problem it solves. |
| Project image | `images/` | Replace sample screenshots with the user’s own images. |
| Project links | `projects.html` | Update GitHub, demo, case study, or external links. |
| Technology list | `projects.html` or project component files | Replace tools and languages with the correct ones. |

Each project card should be specific. Instead of writing “Website Project,” users should write the actual name of the project and a short description of what makes it useful.

</details>

---

<details open><summary>

## Change Contact and Social Links

</summary>

Contact details should be checked before publishing. Broken contact links make the site feel unfinished and can cause visitors to give up instead of reaching out.

| Contact Item | File Location | What to Change |
|---|---|---|
| Email address | `contact.html` and `components/footer.html` | Replace placeholder email addresses with the user’s email. |
| GitHub link | `components/navigation.html`, `contact.html`, or footer | Replace with the user’s GitHub profile or remove it. |
| LinkedIn link | `contact.html` or footer | Replace with the correct LinkedIn profile. |
| Portfolio/demo links | `projects.html` | Update links so each button points to the correct live project. |
| Location text | `about.html` or `contact.html` | Replace or remove location details depending on privacy needs. |

After editing contact links, click every link in the browser and confirm it opens the correct destination.

</details>

---

<details open><summary>

## Change Images and Screenshots

</summary>

Images are stored in the `images/` folder. Users should replace screenshots, profile images, project images, logos, and decorative images with files that match their own site.

Recommended image naming:

```text
images/winxp-homepage-preview.png
images/winxp-profile-photo.png
images/winxp-project-one.png
images/winxp-project-two.png
```

When replacing an image, keep the filename the same if you do not want to edit HTML. If you rename the image file, also update every matching `<img src="...">` reference in the HTML files.

</details>

---

<details open><summary>

## Change Colors, Fonts, and Visual Style

</summary>

Most visual edits should happen in `css/theme.css`. Users should look near the top of the file first for color variables, root styles, font imports, or repeated theme values.

Common edits:

| Visual Detail | File Location | What to Change |
|---|---|---|
| Main colors | `css/theme.css` | Update color variables or repeated hex codes. |
| Font family | `css/theme.css` | Change the `font-family` rules or font import. |
| Button style | `css/theme.css` | Edit button background, border, hover, and spacing rules. |
| Section spacing | `css/theme.css` | Adjust padding and margin values. |
| Mobile layout | `css/theme.css` | Check media queries near the bottom of the file. |

Change one visual area at a time and preview after each change. This makes it easier to spot which edit caused a layout problem.

</details>

---

# GitHub Repository & Pages Setup

<details open><summary>

## Standalone Theme Repository

</summary>

This theme is intended to live in its own standalone GitHub repository. The standalone repository should contain only this theme’s files, screenshots, and documentation. That makes the theme easier to download, customize, deploy, and maintain without forcing users to clone the entire collection.

Suggested standalone repository name:

```text
winxp
```

</details>

---

<details open><summary>

## Connection to Portfolio Themes Templates

</summary>

This theme is also part of the larger **Portfolio Themes Templates** collection. The standalone repository should link back to the main collection repository so users can browse related themes, find updates, and compare other design options.

Recommended repository note:

```md
This theme is part of the Portfolio Themes Templates collection by Alysha Pursley.
```

</details>

---

<details open><summary>

## Deploying with GitHub Pages

</summary>

To publish this theme with GitHub Pages:

1. Create a new GitHub repository for this theme.
2. Upload the theme files into the repository.
3. Make sure `index.html` is in the root of the repository.
4. Open the repository settings.
5. Go to **Pages**.
6. Choose the main branch as the source.
7. Save the Pages settings.
8. Wait for GitHub to publish the site.
9. Open the published GitHub Pages link and test every page.

If a page shows a 404 error, confirm that the file exists and that the link uses the correct filename. GitHub Pages is case-sensitive, so `About.html` and `about.html` are not treated the same.

</details>

---

# Troubleshooting & Maintenance

<details open><summary>

## Common Issues

</summary>

| Issue | Likely Cause | Fix |
|---|---|---|
| Images do not load | Wrong image path or renamed file | Check the `src` path and confirm the image exists in `images/`. |
| CSS does not apply | Stylesheet link is incorrect | Confirm every page links to `css/theme.css`. |
| JavaScript does not work | Script path is incorrect | Confirm every page links to `js/theme.js`. |
| GitHub Pages shows 404 | Missing root `index.html` | Place `index.html` in the repository root. |
| Navigation links break | File names do not match link paths | Update the href values in navigation. |
| Mobile layout looks off | Responsive CSS needs adjustment | Check media queries in `css/theme.css`. |

</details>

---

<details open><summary>

## Maintenance Notes

</summary>

Keep file names simple and readable. Avoid random strings, generated filenames, spaces in important web paths, and duplicate image names. When updating screenshots, use names that explain what the image shows, such as `homepage-preview.png` or `projects-page-preview.png`.

Review the README whenever the theme structure changes. If a page is renamed, a component is removed, or a screenshot is replaced, update the documentation so future users are not sent hunting through the project like it is a drawer full of mystery cables.

</details>

---

## Copyright

© Alysha Pursley. All Rights Reserved.
