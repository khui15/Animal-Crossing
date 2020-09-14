---
title: BIOM9450 - PHP
date: "2020-09-14T22:40:32.169Z"
---
# Contents
1. Environment setup
2. PHP foreword
3. Crash course
4. Hello World
5. Anatomy of PHP
6. Developer console

---

# Environment setup
Assumes you have VS Code and are able to open up the dev console on your chosen browser.

---
# PHP foreword

PHP is one of the most hated programming languages, due to its many security flaws. It is thought of as outdated and disgusting. Regardless, most of the web still run on PHP. Wordpress also uses PHP, so after this course, you're basically on your way to becoming a PHP developer.

I for one believe that most people hate PHP because:

1. Its the stereotype to hate PHP.
2. They've never tried PHP.

# PHP crash course

PHP files are defined within a special PHP tag:

```PHP
<?php
    PHP stuff goes here :)
?>
```

Inside these tags, you can put in many things.

## Variables

Variables in PHP are defined by using the `$` symbol.

You can perform operations on numbers:

```PHP
  <?php
    $x = 5;
    $y = 10
    $z = $x + $y
  ?>
```

You can also perform string contantenation. Unlike JavaScript, concatenation is done using the `.` symbol.

```PHP
  <?php
    $x = 'Hello ';
    $y = 'World';
    $z = $x . $y
  ?>
```

## Echo
There is a special... thing... called `echo`. It is known as a construct and prints out whatever follows it into the document as text.

As such, you're able to use it to write whole HTML and JavaScript documents.

_eg_.

```PHP
<?php
    $x = 5;
    $y = 10
  echo ($x + $y)
?>
```

```PHP
<?php
  echo "<h1>hello world</h1>"
?>
```

## Syntax

### Quotation marks
When using quotation marks within commands, ensure that you either:

1. Use double quotation marks to mark the contents of the echo and single quotation marks within the contents, or vice versa.

2. Escape the contents of the echo by prepending a backslash prior to the symbol. This will tell echo that the symbol is part data and not part of the command.

### Operators

### Comments