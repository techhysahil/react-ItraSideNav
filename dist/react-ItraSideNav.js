"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

exports.default = ItraSideNav;