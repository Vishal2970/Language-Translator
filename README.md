# Norwegian Translator App
===========================

A simple React application that translates English text to Norwegian using a predefined dictionary.

## Features
------------

* Translate English text to Norwegian
* Supports basic sentence structure (individual words separated by spaces)
* Displays translated text in a separate section

## How to Use
--------------

1. Clone the repository and run `npm install` to install dependencies.
2. Run `npm start` to start the application.
3. Open the application in your web browser.
4. Enter English text in the textarea and click the "Submit" button.
5. The translated Norwegian text will be displayed below.

## Technical Details
--------------------

* Built using React and JavaScript.
* Uses the `useState` hook to manage state.
* Utilizes a predefined dictionary to translate English words to Norwegian.
* Supports basic sentence structure by splitting input text into individual words and translating each word separately.

## Dictionary
-------------

The application uses a predefined dictionary to translate English words to Norwegian. The dictionary is defined as follows:

```javascript
const norwegianDictionary = {
  hello: "hej",
  world: "verden",
  how: "hvordan",
  are: "er",
  you: "du",
};
