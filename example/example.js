"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItraSideNav = function (_React$Component) {
    _inherits(ItraSideNav, _React$Component);

    function ItraSideNav(props) {
        _classCallCheck(this, ItraSideNav);

        var _this = _possibleConstructorReturn(this, (ItraSideNav.__proto__ || Object.getPrototypeOf(ItraSideNav)).call(this, props));

        _this.state = {
            dataSource: _this.props.dataSource,
            isCollapsed: _this.props.isCollapsed || false
        };
        _this.nestedNavigation = _this.nestedNavigation.bind(_this);
        _this.toggleNavigation = _this.toggleNavigation.bind(_this);
        _this.navHeadingAction = _this.navHeadingAction.bind(_this);
        return _this;
    }

    _createClass(ItraSideNav, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                dataSource: nextProps.dataSource,
                isCollapsed: this.props.isCollapsed || false
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "navHeadingAction",
        value: function navHeadingAction(item, index) {
            if (!item.nestedNavgation) {
                if (item.linkValue.indexOf("http") != -1) {
                    window.location = item.linkValue;
                } else {
                    if (item.linkValue) {
                        var link = "/reports" + item.linkValue;
                        browserHistory.push(link);
                    }
                }
            } else {
                var temp = JSON.parse(JSON.stringify(this.state.dataSource));
                temp[index].isOpen = !temp[index].isOpen;
                this.setState({
                    dataSource: temp
                });
            }
        }
    }, {
        key: "toggleNavItem",
        value: function toggleNavItem(item, index) {}
    }, {
        key: "toggleNavigation",
        value: function toggleNavigation() {
            var _this2 = this;

            var temp = JSON.parse(JSON.stringify(this.state.dataSource));
            temp.map(function (item, index) {
                item.isOpen = false;
                return item;
            });

            this.setState({
                isCollapsed: !this.state.isCollapsed,
                dataSource: temp
            }, function () {
                _this2.props.leftnavToggle(_this2.state.isCollapsed);
            });
        }
    }, {
        key: "nestedNavigation",
        value: function nestedNavigation(itemList, navItem) {
            var _this3 = this;

            var subNav = null;
            if (itemList) {
                return React.createElement(
                    "div",
                    { className: "sub-nav " + (navItem.isOpen ? 'show' : '') },
                    itemList.map(function (item, index) {
                        return React.createElement(
                            "span",
                            { className: "nav" + (item.isDisable === true ? " disabled" : ""), onClick: function onClick() {
                                    return _this3.navHeadingAction(item, index);
                                }, key: index },
                            React.createElement("i", { className: "fa fa-minus", "aria-hidden": "true" }),
                            React.createElement(
                                "span",
                                { className: "txt" },
                                item.displayText
                            )
                        );
                    })
                );
            } else {
                return null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                { className: "itra-leftnav-wrapper " + (this.state.isCollapsed ? "collapse" : ""), id: "itra-leftnav-wrapper" },
                React.createElement(
                    "div",
                    { className: "collapse-trigger", onClick: this.toggleNavigation },
                    React.createElement("i", { className: "icon icon_Group-12", "aria-hidden": "true" })
                ),
                this.state.dataSource.map(function (item, index) {
                    var itemRightIcon = null;
                    if (item.nestedNavgation) {
                        itemRightIcon = React.createElement("i", { className: "icon icon_Icon_AnalyticsInterface-24" + (item.isOpen ? " rotate180" : ""), "aria-hidden": "true" });
                    }

                    return React.createElement(
                        "div",
                        { className: "nav-item" + (item.isDisable === true ? " disabled" : ""), key: index },
                        React.createElement(
                            "span",
                            { className: "nav-heading", onClick: function onClick() {
                                    return _this4.navHeadingAction(item, index);
                                } },
                            React.createElement("i", { className: item.iconClass, "aria-hidden": "true" }),
                            React.createElement(
                                "span",
                                { className: "txt" },
                                item.displayText
                            ),
                            itemRightIcon
                        ),
                        _this4.nestedNavigation(item.nestedNavgation, item)
                    );
                })
            );
        }
    }]);

    return ItraSideNav;
}(React.Component);

var TestMultiSelect = function (_React$Component2) {
    _inherits(TestMultiSelect, _React$Component2);

    function TestMultiSelect(props) {
        _classCallCheck(this, TestMultiSelect);

        var _this5 = _possibleConstructorReturn(this, (TestMultiSelect.__proto__ || Object.getPrototypeOf(TestMultiSelect)).call(this, props));

        _this5.state = {};
        _this5.leftnavToggle = _this5.leftnavToggle.bind(_this5);
        return _this5;
    }

    _createClass(TestMultiSelect, [{
        key: "leftnavToggle",
        value: function leftnavToggle(isCollapse) {
            console.log("isCollapse" + isCollapse);
        }
    }, {
        key: "render",
        value: function render() {
            var dataSource = [{
                displayText: "Overview",
                linkValue: "http://test.analytics.mn/overview.jsp",
                iconClass: "icon icon_Icon_AnalyticsInterface-20",
                isOpen: false,
                isActive: true,
                isDisable: false
            }, {
                displayText: "Reports",
                linkValue: null,
                iconClass: "icon icon_Icon_AnalyticsInterface-32",
                isOpen: false,
                isActive: false,
                isDisable: false,
                nestedNavgation: [{
                    displayText: "Analyse",
                    linkValue: "/analyse",
                    iconClass: "fa fa-minus",
                    isActive: false,
                    isDisable: false
                }, {
                    displayText: "Saved",
                    linkValue: "/report",
                    iconClass: "fa fa-minus",
                    isActive: false,
                    isDisable: false }]
            }, {
                displayText: "Team Specs",
                linkValue: "/team-specs",
                iconClass: "icon icon_Icon_AnalyticsInterface-19",
                isOpen: false,
                isActive: true,
                isDisable: false
            }, {
                displayText: "User Specs",
                linkValue: "/user-specs",
                iconClass: "icon icon_Icon_AnalyticsInterface-30",
                isOpen: false,
                isActive: true,
                isDisable: false
            }];

            return React.createElement(
                "div",
                { className: "example-wrapper" },
                React.createElement(
                    "div",
                    { className: "title" },
                    "React ItraSideNav Example"
                ),
                React.createElement(
                    "div",
                    { className: "example-body" },
                    React.createElement(
                        "div",
                        { className: "heading" },
                        "Simple react ItraSideNav control."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "A simple react ItraSideNav"
                    ),
                    React.createElement(ItraSideNav, {
                        dataSource: dataSource,
                        leftnavToggle: this.leftnavToggle
                    }),
                    React.createElement(
                        "div",
                        { className: "heading" },
                        "React ItraSideNav control in collapsed state by default"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "A simple react ItraSideNav in collapsed state on initial load with \"isCollapsed\" props set to true."
                    ),
                    React.createElement(ItraSideNav, {
                        dataSource: dataSource,
                        isCollapsed: true,
                        leftnavToggle: this.leftnavToggle
                    })
                )
            );
        }
    }]);

    return TestMultiSelect;
}(React.Component);

ReactDOM.render(React.createElement(TestMultiSelect, null), document.getElementById('example'));