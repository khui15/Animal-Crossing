---
title: BIOM9450 - HTML
date: "2020-09-12T22:40:32.169Z"
---
# Contents
1. Environment setup
2. HTML crash course
3. Hello World
4. Anatomy of HTML
5. CSS
6. Forms
7. Developer console
8. Good HTML practice

---

# Environment setup

Not necessarily a requirement, but using VS Code is highly suggested as it makes everything much easier due to Intellisense. 

---

# HTML crash course

HTML is a what is used to define what is seen on the web page. It is coded using a series of **tags** which have contents and attributes (attributes are usually optional).

_eg_. `<div> Hello </div>`

Tags can be one-sided or two-sided.

* **Two-sided tags** are tags such as `div` tags, as seen above. They have an opening tag, defined by the tag name enclosed in angular brackets, and a closing tag, which look the same as the opening tag, but has a forward slash before the tag name. The contents lie between the opening andd closing tags.

* **One-sided tags** do not require the closing tag and do not have contents. This is generally because the contents are defined in the attributes, which are always in the opening tag.

_eg_. `<img src=''>`

There are also special attributes which can be added to any tag: `id` and `class`.

* `id`: a unique identifier of a particular instance of a tag.

* `class`: used to group tags together, for CSS/JavaScript purposes.

---
# Hello World

1. Open up VS Code.

2. Create a new file by pressing `CTRL` + `N`.

3. Save the new file as `hello.html`.

4. In the empty file, type `doc` and then press `TAB.`

    It should result in a boilerplate being created as follows:

    ```HTML
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>
    ```

5. Replace the contents between the `title` tags with 'Title goes here'.

6. Replace the contents between the `body` tag with 'Hello world'.

    The resulting file should look as follows:

    ```HTML
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Title goes here</title>
    </head>
    <body>
      Hello world
    </body>
    </html>
    ```

7. Save the file and open it up on your browser.

Well done. You're basically a web developer now.

---

# Anatomy
There are two main sections of an HTML file defined by the `head` tag and the `body` tag.

The `head` tag stores a lot of unseen data, such as the tab title, meta data and links to resources such as scripts and stylesheets.

The `body` tag is where most of the code is placed and defines what is seen by the user.

---
# CSS

There are three ways you can define styling:

1. In-line - defined usign the `style` attribute.

    _eg_. `<h1 style='color: red'>hello</h1>`

2. In the same HTML file - using a style tag 

    _eg_.

    ```HTML
    <style>
      h1 {
        color: red
      }
    </style>
    ```
3. Externally - by referencing the source file using a `link` tag within the `head` section of the file.

    _eg_.  `<link rel="stylesheet" href="styles.css">`

I prefer linking stylesheets externally as I usually have VS Code in split screen - one side for the HTML code, the other for the CSS code.

---
# Forms

One tag that will be very useful throughout the course is the `form` tag.

Within a form tag, you can have multiple input elements such as:

* `textarea`: which is generally for input requiring large amounts of text, such as a description of some sort.

* `select`: which provides the user with a dropdown menu.

* `input`: which takes in various types of input, depending on the `type` attribute:

    * `text`
    * `radio`
    * `checkbox`
    * `submit`: which sends the form when it is pressed

There are two important attributes of a form tag: `action` and `method`.

## General flow

This is the general flow of a form:

1. User enters data in defined input fields.

2. User presses the submit button.

3. Data is sent, as defined by the `method` attribute, to the location defined by `action`.

The `method` attribute is generally `POST`, as POST requests allow for payloads to be attached.

---
# Developer console

One very useful tool that will help you out is... the beloved developer console. This can be accessed via navigating to your browser and pressing `CTRL` + `SHIFT` + `I` if you're on Windows or `CMD` + `OPTION` + `I` if you're on windows. If these don't work, Google.

## Elements

Navigate to the `Elements` tab on the dev console. Here, you'll be able to view the HTML code that is currently rendered on your screen. You're able to expand tags, and if you hover over them, you'll see where they apply on your screen.

There's also a little icon with an arrow towards the top of your dev console. If you click this and hover over your page, you'll see sections of code under `Elements` light up. The code that lights up is the code section responsible for whatever it is you're hovering over.

You're also able to see the styles corresponding to different tags by clicking the tag and viewing what `Styles` towards the bottom of the dev console.

---

# Good HTML practice

Indentation is your best friend! Every time you open a new tag, indent by either pressing space a few times (traditionally 3 or 4 spaces) or by pressing tab. It'll help you in the case of missing closing tags.

```HTML
<div>
  <div>
    <h1>Hello</h1>
    <div>
      Hello
    </div>
  </div>
  <div>
    <h1>Hello again</h1>
  </div>
</div>
```