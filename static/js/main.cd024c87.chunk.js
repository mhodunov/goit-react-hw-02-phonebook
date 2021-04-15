(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1FoWq",contactInput:"ContactForm_contactInput__3_nV2",contactLabel:"ContactForm_contactLabel__1cDIP",contactSpan:"ContactForm_contactSpan__3aRVx",contactButton:"ContactForm_contactButton__2qeqW"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(17),n(12)),s=n(4),l=n(5),u=n(7),m=n(6),d=n(11),b=n(22),j=n(2),f=n.n(j),p=n(0),h=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=Object(b.a)(),a=t.state,c=a.name,r=a.number;if(c){var o={id:n,name:c,number:r};t.props.submitHandler(o),t.reset()}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.contactForm,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:f.a.contactLabel,children:[Object(p.jsx)("span",{className:f.a.contactSpan,children:"Name"}),Object(p.jsx)("input",{type:"name",name:"name",className:f.a.contactInput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleInput,required:!0})]}),Object(p.jsxs)("label",{className:f.a.contactLabel,children:[Object(p.jsx)("span",{className:f.a.contactSpan,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",className:f.a.contactInput,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleInput,required:!0})]}),Object(p.jsx)("button",{className:f.a.contactButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(3),O=n.n(_),x=function(t){var e=t.filtered,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:O.a.contactList,children:e.length?e.map((function(t){return Object(p.jsxs)("li",{className:O.a.contactItem,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:O.a.contactName,children:t.name}),Object(p.jsx)("p",{className:O.a.contactNumber,children:t.number})]}),Object(p.jsx)("button",{className:O.a.contactButton,onClick:function(){n(t.id)},children:"Delete contact"})]},t.id)})):Object(p.jsx)("li",{className:O.a.notification,children:"Nothing found =("})})},N=n(8),C=n.n(N),v=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(p.jsx)("div",{children:Object(p.jsxs)("label",{className:C.a.filterLabel,children:[Object(p.jsx)("span",{className:C.a.filterSpan,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",className:C.a.filterInput,value:e,onChange:n,autoComplete:"off",required:!0})]})})};v.defaultProps={filterValue:""};var L=v,S=(n(19),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitHandler=function(e){var n=t.state.contacts,a=n.find((function(t){return t.name===e.name}));a?alert("".concat(a.name," is already in contacts.")):t.setState({contacts:[e].concat(Object(i.a)(n))})},t.filterUpdate=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){var n=e.name,a=e.number;return n.toLowerCase().includes(t.state.filter.toLocaleLowerCase())||a.includes(t.state.filter)}));return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("h1",{className:"pageTitle",children:"Phonebook"}),Object(p.jsx)(h,{submitHandler:this.submitHandler}),Object(p.jsx)(L,{filterValue:this.state.filter,filterUpdate:this.filterUpdate}),Object(p.jsx)("h2",{className:"contactsTitle",children:"Contacts list"}),Object(p.jsx)(x,{filtered:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={notification:"ContactList_notification__DNjC1",contactList:"ContactList_contactList__2Agc3",contactName:"ContactList_contactName__38zIm",contactNumber:"ContactList_contactNumber__12uoa",contactButton:"ContactList_contactButton__27FKm",contactItem:"ContactList_contactItem__3zNEZ"}},8:function(t,e,n){t.exports={filterInput:"Filter_filterInput__8SFyL",filterLabel:"Filter_filterLabel__1Oxx9",filterSpan:"Filter_filterSpan__3dG1S"}}},[[20,1,2]]]);
//# sourceMappingURL=main.cd024c87.chunk.js.map