Space Kitty Yeoman Generators
=============================

Yeoman generators for Space Kitty style component modlets. Specifically for React development and Meteor development;
however, this pattern can be used outside of Meteor and the Space Kitty pattern.

```
npm install -g yo
npm install -g generator-space-kitty
```

## Commands

### yo space-kitty "Your Component Name"

This will create a full modlet in the
current working directory, including:

* a React file
* a SCSS file
* a Story file
* a test file

### yo space-kitty:react "Your Component Name"

Create a react file with BEM style class names.

### yo space-kitty:scss "Your Component Name"

Create a SCSS file with BEM style class names.

### yo space-kitty:story "Your Component Name"

Create a story file that assumes `./YourComponentName.js` exists.

### yo space-kitty:test "Your Component Name"

Create a test file that assumes `./YourComponentName.js` exists.
