---
layout: ../layouts/MainLayout.astro
title: "index"
source: ""
scope: "public"
type: "source"
created: "2024-11-15T10:26Z"
modified: "2024-11-15T10:26Z"
---

## ## Current project

Codename: web

Phase: sketching

Releasing: 2024-12-15

Description:
<br> > website restructuring & redesign

## ## Calendar
Project development will be in 4 stages:
- 🌖 sketch (requirements and ux design)
- 🌘 prototype (minimal working version)
- 🌒 alpha (adding features)
- 🌔 release (refactoring and polishing)

The reason why `lipu` failed is because I restarted and edited it constantly. Its time to learn that
1. there is no editing stage
2. destruction is a form of *done*
3. perfection is boring

Don't get stuck on a project. Make four more.
(Quoting [COD](https://github.com/0atman/noboilerplate/blob/main/scripts/33-COD.md) here)

Written: 2024-10-31T19:26:35Z

## ## Development notes
### ### Sketch (requirements)

*Architecture*
- ui.css (pure css components for all my web-things to use)
- index (links to projects and wiki)
- wiki (knowledge base)
- projects
- todo.txt (`.gitignore`d tasklist inside the wiki)

*Index* is a vanilla-html page that relies heavily on *ui.css*.
I don't think something this simple needs a framework.

*Wiki* has 2 parts
- repository (the vault itself, containing raw markdown files)
- generator (the SSG,
  runs as a [gh action](https://docs.github.com/en/actions)
  on the `repo`, outputs HTML)

The literal repos will probably be called `wiki` and `wiki-gen`.

*Projects* are my repos that
- are linked to from *index*
- have a devlog and some docs in the *wiki*
- are available instantly in the browser
- ideally have a CLI version

*Link structure*
- janKeli.github.io (index)
- janKeli.github.io/ui.css (part of the index repo)
- janKeli.github.io/wiki/\<doc\> (all in one directory, managed via links/tags)
- janKeli.github.io/\<proj\> (e.g. `lipu`, which is scheduled for next lunar month)
- janKeli.github.io/v1/doc-name (the current site)

