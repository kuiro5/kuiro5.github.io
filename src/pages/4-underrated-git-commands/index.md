---
title: 4 Underrated Git Commands
date: "2017-10-25T00:42:50.790Z"
---

### 1. List Branches by Last Modified

For the branch hoarders out there, this one is for you.

    git for-each-ref --sort='-authordate:iso8601' --format=' %(authordate:iso8601)%09%(refname)' refs/head

### 2. Add Hunks of Patch

This is a great alternative to the nuclear git add -A command. It allows you to interactively view each hunk of changes and decide whether or not to stage them.

    git add -p

### 3. Delete Merged Branches

This command checks your local branches (excluding master — more exclusions can be added) and deletes the ones that have been merged.

    git branch --merged | grep -v "\*|master" | xargs -n 1 git branch -d

### 4. Log of All Changes

This command has saved me many, many times. Reflog tracks all changes in your local repository and gives you a reference point to revert back to. For example, git reset — hard HEAD@{0}.

    git reflog

_Happy Coding_ 😊⚡️💻
