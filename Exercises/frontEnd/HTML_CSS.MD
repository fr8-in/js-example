# **HTML5 & CSS3**

## **Basic template in HTML5**

<hr>

- The document type declaration (or **doctype**)
- The `<html>` Element
- The _character encoding_
- The _viewport meta_ element
- `<title>`, _description_, and _author_
- Open Graph meta elements for social cards
- Favicons and touch icons
- Links to _stylesheets_ and _scripts_

### **_The HTML5 Doctype_**

Your HTML5 template needs to start with a document type declaration, or doctype. A doctype is simply a way to tell the browser — or any other parser — what type of document it’s looking at.

In the case of HTML files, it means the specific version and flavor of HTML. The doctype should always be the first item at the top of any HTML file.

Many years ago, the doctype declaration was an ugly and hard-to-remember mess, often specified as “XHTML Strict”
or “HTML Transitional”.

    <!doctype html>

### **_The `<html>` Element_**

    <html lang="en">

This hasn’t undergone any significant change since the advent of HTML5. In the code snippet above, we’ve included the lang attribute with a value of en, which specifies that the document is in English.

This isn’t required for a page to validate, but you’ll get a warning from most validators if you don’t include it.

The `<html>` element is divided into two parts, the `<head>` and `<body>` sections. The `<head>` section contains important information about the document that isn’t displayed to the end user — such as the character encoding, and links to CSS files and possibly JavaScript.

The `<body>` section contains everything that’s displayed in the browser — text, images, and so on.

### **_HTML Document Character Encoding_**

The first line inside the <head> section of an HTML document is the one that defines the character encoding for the document.

This is an optional feature and won’t cause any warnings in validators, but it’s recommended for most HTML pages:

    <meta charset="utf-8">

In nearly all cases, **utf-8** is the value you’ll be using in your documents.

### **_The Viewport Meta Element_**

The viewport meta element is a feature you’ll see in just about every HTML5 template. It’s important for responsive web design and mobile-first design:

    <meta name="viewport" content="width=device-width, initial-scale=1">

This `<meta>` element includes two attributes that work together as a name/value set. In this case, the name is set to viwport and the value is width=device-width, initial-scale=1. This is used by mobile devices only. You’ll notice the value has two parts to it, described here:

- **width=device-width**: the pixel width of the viewport that you want the website to be rendered at.

- **initial-scale**: this should be a positive number between 0.0 and 10.0. A value of “1” indicates that there’s a 1:1 ratio between the device width and the viewport size.

### **_The `<title>`, description, and author_**

    <title>A Basic HTML5 Template</title>
    <meta name="description" content="A simple HTML5 Template for new projects.">
    <meta name="author" content="SitePoint">

These elements have been part of HTML for a long time, so there’s nothing too new here. The `<title>` is what’s displayed in the browser’s title bar (such as when you hover over a browser tab). This element is the only mandatory element inside the `<head>`.

The other two are optional `<meta>` elements defining a description for SEO purposes along with an author. All elements inside `<head>` are optional with the exception of `<title>`. In fact, you can put as many valid `<meta>` elements in the `<head>` as you like.

### **_Open Graph Meta Elements for Social Cards_**

All meta elements are optional but many have benefits for SEO and social media marketing. The next section in our HTML5 boilerplate includes some of those meta element options:

    <meta property="og:title" content="A Basic HTML5 Template">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
    <meta property="og:description" content="A simple HTML5 Template for new projects.">
    <meta property="og:image" content="image.png">

- **og:audio** - A URL to an audio file to accompany this object.
- **og:description** - A one to two sentence description of your object.
- **og:determiner** - The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
- **og:locale** - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
- **og:locale:alternate** - An array of other locales this page is available in.
- **og:site_name** - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
- **og:video** - A URL to a video file that complements this object.

### **_Favicons and Touch Icons_**

The HTML5 template includes `<link>` elements that indicate resources to include as a favicon and apple touch icon:

    <link rel="icon" href="/favicon.ico">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

The **favicon.ico** file is for legacy browsers and doesn’t have to be included in the code. As long as your favicon.ico file is included in the root of your project, the browser will automatically find it.

The **favicon.svg** file is for modern browsers that support SVG icons. The last element references the icon that’s used on Apple devices when the page is added to the user’s home screen.

### **_Including a Stylesheet and Scripts_**

    <link rel="stylesheet" href="css/styles.css?v=1.0">

The stylesheet is included using the `<link>` element with an appropriate rel attribute. A stylesheet can be included anywhere in a document, but you’ll customarily see it inside the `<head>`. And unlike older versions of HTML, there’s no need to include a type attribute.

    <script src="js/scripts.js"></script>

Placing the `<script>` element at the bottom of the page is for the purposes of the page-load speed. When a browser encounters a script, it will pause downloading and rendering the rest of the page while it parses the script.

This results in the page appearing to load much more slowly when large scripts are included at the top of the page before any content.

Thus, most scripts should be placed at the very bottom of the page, so that they’ll only be parsed after the rest of the page has loaded.

But note that in some cases, the script may need to be placed in the head of your document, because you want it to take effect before the browser starts rendering the page.

Similar to stylesheet references, the type attribute on scripts is not (and never was) needed.

    type="text/javascript

## **Types of ways to apply CSS**

<hr>

- **Inline styles:** are placed within the HTML elements.

- **Internal styles:** are placed in head head section of the web page you are writing.

- **External Styles:** are placed on the External Style Sheet, which is a separate page linked to the web page (recommended).

## **CSS Box Model**

<hr>

The CSS box model is essentially a box that wraps around every HTML element. It consists of: _margins, borders, padding, and the actual content_.

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent

## **CSS rules**

<hr>

- **@import**
- **@charset**
- **@font-face**
- **!important**

### **_@import_**

The _@import_ rule allows you to import styles from another style sheet. It should appear right at the start of the style sheet before any of the rules, and its value is a URL.

    <style type = "text/css">
        @charset "iso-8859-1"
        .......other CSS rules .....
    </style>

### **_@font-face Rule_**

The _@font-face_ rule is used to exhaustively describe a font face for use in a document. _@font-face_ may also be used to define the location of a font for download, although this may run into implementation-specific limits.

In general, _@font-face_ is extremely complicated, and its use is not recommended for any except those who are expert in font metrics.

    <style type = "text/css">
        @font-face {
            font-family: "Scarborough Light";
            src: url("http://www.font.site/s/scarbo-lt");
        }
        @font-face {
            font-family: Santiago;
            src: local ("Santiago"),
            url("http://www.font.site/s/santiago.tt")
            format("truetype");
            unicode-range: U+??,U+100-220;
            font-size: all;
            font-family: sans-serif;
        }
    </style>

### **_!important_**

The _!important_ rule provides a way to make your CSS cascade. It also includes the rules that are to be applied always. A rule having a _!important_ property will always be applied, no matter where that rule appears in the CSS document.

**CSS**

    <style type = "text/css">
        p { color: #ff0000; }
        p { color: #000000; }
    </style>

**HTML**

    <html>
    <head>
        <style type = "text/css">
            p { color: #ff0000 !important; }
            p { color: #000000; }
        </style>
    </head>

    <body>
        <p>Tutorialspoint.com</p>
    </body>
    </html>

Here you have made `p { color: #ff0000 !important; }` mandatory, now this rule will always apply even you have defined another rule `p { color: #000000; }`

## **CSS Selector**

<hr>

- Element Selector
- Id Selector
- Class Selector
- Universal Selector
- Group Selector

### **_Element Selector_**

The element selector selects the HTML element by name.

### **_Id Selector_**

The id selector selects the id attribute of an HTML element to select a specific element. An id is always _unique_ within the page so it is chosen to select a single, _unique_ element.

It is written with the hash character (**#**), followed by the id of the element.

### **_Class Selector_**

The _class_ selector selects HTML elements with a specific _class_ attribute. It is used with a period character **.** _(full stop symbol)_ followed by the class name.

### **_Universal Selector_**

The universal selector is used as a **wildcard (\*)** character. It selects all the elements on the pages.

### **_Group Selector_**

The grouping selector is used to select all the elements with the same style definitions.

Grouping selector is used to minimize the code. Commas are used to separate each selector in grouping.
