(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{421:function(e,a,t){"use strict";t.r(a);var n=t(8),i=t(9),l=t(11),r=t(10),c=t(12),s=t(24),o=t(1),u=t.n(o),m=t(3),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).onEntering=t.onEntering.bind(Object(s.a)(Object(s.a)(t))),t.onEntered=t.onEntered.bind(Object(s.a)(Object(s.a)(t))),t.onExiting=t.onExiting.bind(Object(s.a)(Object(s.a)(t))),t.onExited=t.onExited.bind(Object(s.a)(Object(s.a)(t))),t.toggle=t.toggle.bind(Object(s.a)(Object(s.a)(t))),t.toggleAccordion=t.toggleAccordion.bind(Object(s.a)(Object(s.a)(t))),t.toggleCustom=t.toggleCustom.bind(Object(s.a)(Object(s.a)(t))),t.toggleFade=t.toggleFade.bind(Object(s.a)(Object(s.a)(t))),t.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleAccordion",value:function(e){var a=this.state.accordion.map(function(a,t){return e===t&&!a});this.setState({accordion:a})}},{key:"toggleCustom",value:function(e){var a=this.state.custom.map(function(a,t){return e===t&&!a});this.setState({custom:a})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.hb,null,u.a.createElement(m.u,{xl:"6"},u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Collapse"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/collapse/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(m.v,{isOpen:this.state.collapse,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},u.a.createElement(m.j,null,u.a.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."),u.a.createElement("p",null,"Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus. Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu, vehicula sagittis elit leo id nisi."))),u.a.createElement(m.l,null,u.a.createElement(m.e,{color:"primary",onClick:this.toggle,style:{marginBottom:"1rem"}},"Toggle"),u.a.createElement("h5",null,"Current state: ",this.state.status))),u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Fade"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/fade/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(m.j,null,u.a.createElement(m.B,{timeout:this.state.timeout,in:this.state.fadeIn,tag:"h5",className:"mt-3"},"This content will fade in and out as the button is pressed...")),u.a.createElement(m.l,null,u.a.createElement(m.e,{color:"primary",onClick:this.toggleFade},"Toggle Fade")))),u.a.createElement(m.u,{xl:"6"},u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",u.a.createElement("small",null,"accordion"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(m.b,null,"NEW"))),u.a.createElement(m.j,null,u.a.createElement("div",{id:"accordion"},u.a.createElement(m.i,null,u.a.createElement(m.n,{id:"headingOne"},u.a.createElement(m.e,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #1"))),u.a.createElement(m.v,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},u.a.createElement(m.j,null,"1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.a.createElement(m.i,null,u.a.createElement(m.n,{id:"headingTwo"},u.a.createElement(m.e,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #2"))),u.a.createElement(m.v,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},u.a.createElement(m.j,null,"2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.a.createElement(m.i,null,u.a.createElement(m.n,{id:"headingThree"},u.a.createElement(m.e,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #3"))),u.a.createElement(m.v,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},u.a.createElement(m.j,null,"3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))),u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",u.a.createElement("small",null,"custom accordion"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(m.b,null,"NEW"))),u.a.createElement(m.j,null,u.a.createElement("div",{id:"exampleAccordion","data-children":".item"},u.a.createElement("div",{className:"item"},u.a.createElement(m.e,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(0)},"aria-expanded":this.state.custom[0],"aria-controls":"exampleAccordion1"},"Toggle item"),u.a.createElement(m.v,{isOpen:this.state.custom[0],"data-parent":"#exampleAccordion",id:"exampleAccordion1"},u.a.createElement("p",{className:"mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare."))),u.a.createElement("div",{className:"item"},u.a.createElement(m.e,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(1)},"aria-expanded":this.state.custom[1],"aria-controls":"exampleAccordion2"},"Toggle item 2"),u.a.createElement(m.v,{isOpen:this.state.custom[1],"data-parent":"#exampleAccordion",id:"exampleAccordion2"},u.a.createElement("p",{className:"mb-3"},"Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")))))))))}}]),a}(o.Component);a.default=d}}]);
//# sourceMappingURL=5.18728a2e.chunk.js.map