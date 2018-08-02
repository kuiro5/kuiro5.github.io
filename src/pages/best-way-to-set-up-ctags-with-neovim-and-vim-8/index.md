---
title: Best Way to Set up Ctags with Neovim and Vim 8
date: "2017-11-04T00:42:50.790Z"
published: true
---

Ctags are a great way to navigate large projects when using Vim or Neovim by jumping to definition with a simple command. With the recent addition of async jobs in Vim 8 and Neovim, you can now generate your project’s tags in the background, making the whole process relatively seamless.

![](https://cdn-images-1.medium.com/max/2000/1*1vEtvLDS8MHVP2g4p3UaCg.gif)

### Prerequisites

* Mac OSX (for this tutorial, can be installed on other operating systems)

* <a href="https://brew.sh/" target="_blank">Homebrew</a>

### Install <a href="https://github.com/universal-ctags/ctags" target="_blank">universal-ctags</a>

First, we’ll install universal-ctags for our OS. Universal-ctags is an actively maintained ctags implementation (as of November 2017). This tool will allow us to generate the tag file for our project:

Using homebrew:

    brew install --HEAD universal-ctags/universal-ctags/universal-ctags

### Install <a href="https://github.com/ludovicchabant/vim-gutentags" target="_blank">vim-gutentags</a>

Next, we’ll install vim-gutentags which is an awesome plugin that makes managing our tag file painless. When opening a project for the first time, vim-gutentags will kick off the creation of our tag file in the background. For subsequent opens, it will asynchronously update our tag file on save.

Using the syntax for your respective package manager (I use vim-p[lug](https://github.com/junegunn/vim-plug)), add the following to your .vimrc (Vim users) or init.vim (Neovim users):

    Plug 'ludovicchabant/vim-gutentags'

And install:

    :PlugInstall

### Jump Around

Navigate to a project that you’d like to generate tags for and open it with Vim or Neovim. The tag creation will kick off in the background and it may take a few minutes for it to finish depending on the size of the project. Once finished, you can use C-] to jump to definition.

Enjoy project navigation bliss.

![](https://cdn-images-1.medium.com/max/2000/1*UTpnhehNgm2pTbCRt52u4w.gif)
