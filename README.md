# React ItraSideNav

React side navigation component, It has list of options [See Options List Section] that can be selected based on requirement. ItraSideNav can also handle dynamic data very well.

## Demo

Live Demo URL : http://demo.techhysahil.com/react-ItraSideNav/

## Getting Started

The easiest way to use React ItraSideNav is to install it using NPM.

```javascript
npm install react-itra-sidenav --save
```
Now import React ItraSideNav into your project.

```js
import ItraSideNav from 'react-itra-sidenav';

// Be sure to include styles at some point
import 'react-multi-select/dist/font/icons.css';
import 'react-multi-select/dist/react-ItraSideNav.min.css';
```

### Usage

After adding react-itra-sidenav into your project, just add below tag into your templete.


```
let dataSource = [
        {
            displayText : "Overview",
            linkValue : "http://test.analytics.mn/overview.jsp",
            iconClass : "icon icon_Icon_AnalyticsInterface-20",
            isOpen : false,
            isActive : true,
            isDisable : false
        },
        {
            displayText : "Reports",
            linkValue : null,
            iconClass : "icon icon_Icon_AnalyticsInterface-32",
            isOpen : false,
            isActive : false,
            isDisable : false,
            nestedNavgation : [
                {
                    displayText : "Analyse",
                    linkValue : "/analyse",
                    iconClass : "fa fa-minus",
                    isActive : false,
                    isDisable : false
                },
                {
                    displayText : "Saved",
                    linkValue : "/report",
                    iconClass : "fa fa-minus",
                    isActive : false,
                    isDisable : false                        }
            ]
        },
        {
            displayText : "Team Specs",
            linkValue : "/team-specs",
            iconClass : "icon icon_Icon_AnalyticsInterface-19",
            isOpen : false,
            isActive : true,
            isDisable : false
        },
        {
            displayText : "User Specs",
            linkValue : "/user-specs",
            iconClass : "icon icon_Icon_AnalyticsInterface-30",
            isOpen : false,
            isActive : true,
            isDisable : false
        }
    ];

<ItraSideNav 
  dataSource = {dataSource}
  leftnavToggle = {this.leftnavToggle} 
/>
```

### ItraSideNav Options

| OPtion | Required/Optional | Description |
| --- | --- | --- |
| `dataSource` | Required | Contains list of naviagation item. It can be nested navigation too.|
| `isCollapsed` | Optional | Defines weather ItraSideNav will be collapsed or not|

## Navigation Item Options

| OPtion | Required/Optional | Description |
| --- | --- | --- |
| `displayText` | Required | Text that needs to be displayed|
| `linkValue` | Required | Relative link for react js app with respect to base url & Absolute url for external links |
| `iconClass` | Required | class of left icon |
| `isOpen` | Required | state of nested nav by  default|
| `isActive` | Required | Active navigation item by default |
| `isDisable` | Required | Disable Navigation item|
| `nestedNavgation` | Required | Array of Nested item

### Events

| OPtion | Required/Optional | Description |
| --- | --- | --- |
| `leftnavToggle` | Required | Emit state of isCollapsed|

## Authors

***Sahil Gupta** [Github](https://github.com/techhysahil)

## License

This project is licensed under the Custom License - see the [LICENSE.md](LICENSE.md) file for details
