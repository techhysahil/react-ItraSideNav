import ItraSideNav from '../dist/react-ItraSideNav'

class TestMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.leftnavToggle = this.leftnavToggle.bind(this);
  }

  leftnavToggle(isCollapse){
    console.log("isCollapse"+ isCollapse);
  }
  
  render() {
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

    return (
        <div className="example-wrapper">
          <div className="title">React ItraSideNav Example</div>
          <div className="example-body">
            <div className="heading">Simple react ItraSideNav control.</div>
            <p>A simple react ItraSideNav</p>

            <ItraSideNav 
              dataSource = {dataSource}
              leftnavToggle = {this.leftnavToggle} 
            />

            <div className="heading">React ItraSideNav control in collapsed state by default</div>
            <p>A simple react ItraSideNav in collapsed state on initial load with "isCollapsed" props set to true.</p>

            <ItraSideNav 
              dataSource = {dataSource}
              isCollapsed = {true}
              leftnavToggle = {this.leftnavToggle} 
            />

          </div>
        </div>
    )
  }
}

ReactDOM.render(<TestMultiSelect />, document.getElementById('example'));