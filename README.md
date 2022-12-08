![npm](https://img.shields.io/npm/v/flatpickr-prefabs)
[![Release new version to NPMJS](https://github.com/kylescudder/flatpickr-prefabs/actions/workflows/publish.yml/badge.svg)](https://github.com/kylescudder/flatpickr-prefabs/actions/workflows/publish.yml)

# flatpickr-prefabs
A collection of flatpickr prefabs

## Install
### NPM
`npm i flatpickr-prefabs`
### CDN
`<script src="https://unpkg.com/flatpickr-prefabs/dist/index.min.js"></script>`

## Usage
### Date of Birth
Add the class `dateofbirthpicker` to your input

**index.html**
```
<input type="date" id="txtDateOfBirth" class="dateofbirthpicker">
```
**index.js**
```
import { dateofbirthpicker } from 'flatpickr-prefabs'

dateofbirthpicker()
```

### Date
Add the class `datepicker` to your input

**index.html**
```
<input type="date" id="txtDate" class="datepicker">
```
**index.js**
```
import { datepicker } from 'flatpickr-prefabs'

datepicker()
```

### Date/Time
Add the class `datetimepicker` to your input

**index.html**
```
<input type="date" id="txtDateTime" class="datetimepicker">
```
**index.js**
```
import { datetimepicker } from 'flatpickr-prefabs'

datetimepicker()
```

### Time
Add the class `timepicker` to your input

**index.html**
```
<input type="date" id="txtTime" class="timepicker">
```
**index.js**
```
import { timepicker } from 'flatpickr-prefabs'

timepicker()
```

### Add Request
Add the class `addrequestdatepicker` to your input

**index.html**
```
<input type="date" id="txtAddRequestDate" class="addrequestdatepicker">
```
**index.js**
```
import { addrequestdatepicker } from 'flatpickr-prefabs'

addrequestdatepicker()
```

### Request
Add the class `requestdatepicker` to your input

**index.html**
```
<input type="date" id="txtRequestDate" class="requestdatepicker">
```
**index.js**
```
import { requestdatepicker } from 'flatpickr-prefabs'

requestdatepicker()
```
