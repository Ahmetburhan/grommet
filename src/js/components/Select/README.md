## Select
An select-like field with optional search capability.

[![](https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png)](https://storybook.grommet.io/?selectedKind=Select&full=0&addons=0&stories=1&panelRight=0) [![](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=select&module=%2Fsrc%2FSelect.js)
## Usage

```javascript
import { Select } from 'grommet';
<Select />
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**alignSelf**

How to align along the cross axis when contained in
      a Box or along the column axis when contained in a Grid.

```
start
center
end
stretch
```

**gridArea**

The name of the area to place
    this inside a parent Grid.

```
string
```

**margin**

The amount of margin around the component. An object can
      be specified to distinguish horizontal margin, vertical margin, and
      margin on a particular side.

```
none
xxsmall
xsmall
small
medium
large
xlarge
{
  bottom: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  horizontal: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  left: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  right: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  top: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  vertical: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string
}
string
```

**children**

Function that will be called when each option is rendered.
      It will be passed (option, index, options, state) where option
      is the option to render, index is the index of that option in the
      options array, and state is an object with
      { active, disabled, selected } keys indicating the current state
      of the option.

```
function
```

**closeOnChange**

Wether to close the drop when a selection is made. Defaults to `true`.

```
boolean
```

**disabled**

Whether the entire select or individual options should be disabled.
        An array of numbers indicates the indexes into 'options' of the
        disabled options. An array of strings or objects work the same way
        as the 'value' to indicate which options are disabled.

```
boolean
[
  number
  string
  object
]
```

**disabledKey**

When the options array contains objects, this property indicates how
      to determine which options should be disabled. If a string is
      provided, it is used as the key for each item object and if that key
      returns truthy, the option is disabled. If a function is provided, it is
      called with the option and the return value determines if the option
      is disabled.

```
string
function
```

**dropAlign**

How to align the drop. Defaults to `{
  "top": "top",
  "left": "left"
}`.

```
{
  top: 
    top
    bottom,
  bottom: 
    top
    bottom,
  right: 
    left
    right,
  left: 
    left
    right
}
```

**dropTarget**

Target where the options drop will be aligned to. This should be
      a React reference. Typically, this is not required as the drop will be
      aligned to the Select itself by default.

```
object
```

**focusIndicator**

Whether when 'plain' it should receive a focus outline.

```
boolean
```

**labelKey**

When the options array contains objects, this property indicates how
      to determine the label of each option. If a string is
      provided, it is used as the key to retrieve each option's label.
      If a function is provided, it is called with the option and the
      return value indicates the label.

```
string
function
```

**messages**

Custom messages.

```
{
  multiple: string
}
```

**multiple**

Whether to allow multiple options to be selected.

```
boolean
```

**onChange**

Function that will be called when the user selects an option.

```
function
```

**onClose**

Function that will be called when the Select drop closes.

```
function
```

**onOpen**

Function that will be called when the Select drop opens.

```
function
```

**onSearch**

Function that will be called when the user types in the search input.
      If this property is not provided, no search field will be rendered.

```
function
```

**options**

Required. Options can be either a string or an object. If an object is used, use
      children callback in order to render anything based on the current item.

```
[
  string
  element
  object
]
```

**placeholder**

Placeholder text to use when no value is provided.

```
string
node
```

**plain**

Whether this is a plain Select input with no border or padding.

```
boolean
```

**searchPlaceholder**

Placeholder text to use in the search box when the search input is empty.

```
string
```

**selected**

Index of the currently selected option. When multiple, the set of
      options selected. NOTE: This is deprecated in favor of indicating
      the selected values via the 'value' property.

```
number
[number]
```

**size**

The size of the select.

```
small
medium
large
xlarge
string
```

**value**

Currently selected value. This can be an array
      when multiple. Passing an element allows the caller to control how
      the value is rendered. Passing an element is deprecated. Instead,
      use the 'valueLabel' property.

```
string
element
object
[
  string
  object
]
```

**valueLabel**

Provides custom rendering of the value. If not provided, Select
      will render the value automatically.

```
node
```

**valueKey**

When the options array contains objects, this property indicates how
      to determine the value of each option. If a string is
      provided, it is used as the key to retrieve each option's value.
      If a function is provided, it is called with the option and the
      return value indicates the value.

```
string
function
```
  