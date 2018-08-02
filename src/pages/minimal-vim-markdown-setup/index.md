---
title: Minimal Vim Markdown Setup
date: "2018-07-03T15:44:25.976Z"
---

## 1. Setting Text Width

This will create a max text width for markdown files.

```
 autocmd BufRead,BufNewFile *.md setlocal textwidth=80
```

## 2. Setting Autoformat Options

This will autoformat options on change.

```
 autocmd BufRead,BufNewFile *.md setlocal formatoptions+=t
```

## 3. Formatting Existing Markdown Files

The above settings will work on new files, but what about existing files?

```
# highlight the entire file
gg
cmd + v
G

# format
gQ
```
