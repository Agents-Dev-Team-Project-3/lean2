(this.webpackJsonplean2=this.webpackJsonplean2||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(34),c=n.n(s),o=(n(75),n(62)),i=n.n(o),d=n(70),l=n(17),u=n(18),h=n(20),j=n(19),m=n(9),b=n(111),p=n(63),O=n(29),g=n(38),f=n.n(g),x=n(50),v=n(22),w="https://afternoon-springs-15413.herokuapp.com",y="http://localhost:4741",C="localhost"===window.location.hostname?y:w,S=n(1);function k(e){var t=Object(r.useState)(!1),n=Object(v.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(null),o=Object(v.a)(c,2),i=o[0],d=o[1],l=Object(r.useState)(""),u=Object(v.a)(l,2),h=u[0],j=u[1],m=Object(r.useState)(!0),b=Object(v.a)(m,2),p=b[0],g=b[1],w=Object(r.useState)(""),y=Object(v.a)(w,2),k=y[0],A=y[1],P=Object(O.useStripe)(),N=Object(O.useElements)(),T=e.refreshCart,I=e.user,E=e.order;Object(r.useEffect)((function(){window.fetch(C+"/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:"xl-tshirt"}]})}).then((function(e){return e.json()})).then((function(e){A(e.clientSecret)}))}),[]);var q={style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"},button:{background:"#5469d4",fontFamily:"Arial, sans-serif",color:"#ffffff",borderRadius:"0 0 4px 4px",border:"0",padding:"12px 16px",fontSize:"16px",fontWeight:"600",cursor:"pointer",display:"block",transition:"all 0.2s ease",boxShadow:"0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",width:"100%"}}},U=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t.empty),d(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(x.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(!0),e.next=4,P.confirmCardPayment(k,{payment_method:{card:N.getElement(O.CardElement)}});case 4:(n=e.sent).error?(d("Payment failed ".concat(n.error.message)),j(!1)):(d(null),j(!1),s(!0),T(E,I));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{id:"checkout",children:Object(S.jsxs)("form",{id:"payment-form",onSubmit:_,children:[Object(S.jsx)(O.CardElement,{id:"card-element",options:q,onChange:U}),Object(S.jsx)("button",{disabled:h||p||a,id:"submit",options:q,children:Object(S.jsx)("span",{id:"button-text",children:h?Object(S.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),i&&Object(S.jsx)("div",{className:"card-error",role:"alert",children:i}),Object(S.jsxs)("p",{className:a?"result-message":"result-message hidden",children:["Payment succeeded. Thank you for shopping with Lean2",Object(S.jsx)("a",{text:"Thank you for your purchase",href:"https://dashboard.stripe.com/test/payments",children:" "})]})]})})}var A=n(110),P=n(109),N=n(68),T=n(35),I=n(64),E=["user","component","render"],q=function(e){var t=e.user,n=e.component,r=e.render,a=Object(I.a)(e,E);return t&&r?Object(S.jsx)(m.b,Object(T.a)(Object(T.a)({},a),{},{render:r})):Object(S.jsx)(m.b,Object(T.a)(Object(T.a)({},a),{},{render:function(e){return t?Object(S.jsx)(n,Object(T.a)({},e)):Object(S.jsx)(m.a,{to:"/"})}}))},U=n(53),_=(n(86),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,a=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){a(s)}),300),Object(S.jsx)(U.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(U.a.Heading,{children:n}),Object(S.jsx)("p",{className:"alert-body",children:r})]})})}}]),n}(a.a.Component)),F=n(69),L=n(39),D=n(8),B=n.p+"static/media/lean-2-logo.4de78565.png",G=Object(S.jsxs)(r.Fragment,{children:[Object(S.jsx)(D.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(S.jsx)(D.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(S.jsx)(D.c,{to:"/cart",className:"nav-link",children:"Cart"})]}),z=Object(S.jsxs)(r.Fragment,{children:[Object(S.jsx)(D.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(S.jsx)(D.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),H=Object(S.jsxs)(r.Fragment,{children:[Object(S.jsx)(D.c,{exact:!0,to:"/",className:"nav-link",children:"Home"}),Object(S.jsx)(D.c,{to:"/products",className:"nav-link",children:"Products"})]}),R=function(e){var t=e.user;return Object(S.jsxs)(L.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(S.jsx)(L.a.Brand,{children:Object(S.jsx)(D.b,{to:"/",style:{color:"#FFF",textDecoration:"none",float:"left !important",marginTop:"-15px !important"},children:Object(S.jsx)("img",{src:B,style:{width:"250px",marginLeft:"25px",marginTop:"-7"}})})}),Object(S.jsx)(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(L.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsxs)(F.a,{className:"ml-auto",children:[t&&Object(S.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),H,t?G:z]})})]})},J=n(25),W=n(13),Y=n.n(W),$=function(e){return Y()({url:C+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},K=n(7),M=n(31),Q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(J.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var t,n=r.props,a=n.msgAlert,s=n.history,c=n.onSignInSuccess,o=n.setUser;(t=r.state,Y()({method:"POST",url:C+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return $(r.state)})).then((function(e){return o(e.data.user),console.log(e),e})).then((function(e){return c(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){r.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},r.state={email:"",password:"",passwordConfirmation:""},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,r=e.passwordConfirmation;return Object(S.jsx)("div",{className:"row",children:Object(S.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(S.jsx)("h3",{className:"text-light",children:"Sign Up"}),Object(S.jsxs)(K.a,{className:"bg-secondary text-light",onSubmit:this.onSignUp,children:[Object(S.jsxs)(K.a.Group,{controlId:"email",children:[Object(S.jsx)(K.a.Label,{children:"Email address"}),Object(S.jsx)(K.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(S.jsxs)(K.a.Group,{controlId:"password",children:[Object(S.jsx)(K.a.Label,{children:"Password"}),Object(S.jsx)(K.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(S.jsxs)(K.a.Group,{controlId:"passwordConfirmation",children:[Object(S.jsx)(K.a.Label,{children:"Password Confirmation"}),Object(S.jsx)(K.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(S.jsx)(M.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),X=Object(m.f)(Q),V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(J.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.setUser,c=t.onSignInSuccess;$(r.state).then((function(e){return s(e.data.user),e})).then((function(e){return c(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},r.state={email:"",password:"",order:{}},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(S.jsx)("div",{className:"row",children:Object(S.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(S.jsx)("h3",{className:"text-light",children:"Sign In"}),Object(S.jsxs)(K.a,{className:"bg-secondary text-light",onSubmit:this.onSignIn,children:[Object(S.jsxs)(K.a.Group,{controlId:"email",children:[Object(S.jsx)(K.a.Label,{children:"Email address"}),Object(S.jsx)(K.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(S.jsxs)(K.a.Group,{controlId:"password",children:[Object(S.jsx)(K.a.Label,{children:"Password"}),Object(S.jsx)(K.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(S.jsx)(M.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),Z=Object(m.f)(V),ee=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,r=e.clearUser,a=e.clearOrder;(function(e){return Y()({url:C+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return r()})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),te=Object(m.f)(ee),ne=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(J.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.user;(function(e,t){return Y()({url:C+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(S.jsx)("div",{className:"row",children:Object(S.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(S.jsx)("h3",{children:"Change Password"}),Object(S.jsxs)(K.a,{onSubmit:this.onChangePassword,children:[Object(S.jsxs)(K.a.Group,{controlId:"oldPassword",children:[Object(S.jsx)(K.a.Label,{children:"Old password"}),Object(S.jsx)(K.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(S.jsxs)(K.a.Group,{controlId:"newPassword",children:[Object(S.jsx)(K.a.Label,{children:"New Password"}),Object(S.jsx)(K.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(S.jsx)(M.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),re=Object(m.f)(ne),ae=n(112),se={margin:"auto",padding:"25px",width:"auto",height:"200px"},ce={margin:"auto",marginTop:"10px"},oe={height:"50px"},ie={backgroundColor:"grey",borderRadius:"0px 0px 8px 8px",color:"white"},de={border:"none",borderRadius:"10px"},le=Object(m.f)((function(e){var t=Object(r.useState)([]),n=Object(v.a)(t,2),a=n[0],s=n[1];Object(r.useEffect)((function(){Y()({method:"GET",url:C+"/products"}).then((function(e){return s(e.data.products)})).catch(console.error)}),[]);var c=a.map((function(e){return Object(S.jsx)(N.a,{xs:12,md:6,lg:4,xl:4,style:ce,children:Object(S.jsxs)(ae.a,{style:de,className:"m-auto",children:[Object(S.jsx)(D.b,{style:{margin:"auto"},to:"/products/".concat(e._id),children:Object(S.jsx)(ae.a.Img,{variant:"top",src:"".concat(e.image),style:se})}),Object(S.jsxs)(ae.a.Body,{style:ie,children:[Object(S.jsx)(ae.a.Title,{style:oe,children:e.name}),Object(S.jsxs)(ae.a.Text,{children:["Price: $",e.price]})]})]})},e._id)}));return Object(S.jsxs)(P.a,{children:[Object(S.jsx)("h3",{className:"text-light",children:"Products"}),Object(S.jsx)(N.a,{xs:12,style:{marginTop:"10px"},children:Object(S.jsx)(P.a,{children:c})}),Object(S.jsx)("div",{className:"col-12 mt-5"})]})})),ue=function(e,t){return Y()({method:"GET",url:C+"/orders/".concat(e),headers:{Authorization:"Bearer ".concat(t.token)}})},he=function(e){return Y()({method:"POST",url:C+"/orders/open",headers:{Authorization:"Bearer ".concat(e.token)}})},je=function(e,t,n){return Y()({method:"PATCH",url:C+"/orders/".concat(e),headers:{Authorization:"Bearer ".concat(n.token)},data:{order:{contents:t}}})},me={border:"none",borderRadius:"10px"},be={margin:"auto",padding:"25px",width:"auto",height:"200px"},pe={height:"50px"},Oe={margin:"auto",marginTop:"10px"},ge={backgroundColor:"grey",borderRadius:"0px 0px 8px 8px",color:"white"},fe={width:"inherit"},xe=Object(m.f)((function(e){var t=Object(r.useState)(null),n=Object(v.a)(t,2),a=n[0],s=n[1],c=e.order,o=e.user,i=e.setOrder,d=e.msgAlert;Object(r.useEffect)((function(){var t;(t=e.match.params.id,Y()({method:"GET",url:C+"/products/".concat(t)})).then((function(e){return s(e.data.product)})).catch(console.error)}),[]);if(!a)return Object(S.jsx)("p",{children:"Loading..."});var l=a.name,u=a.image,h=a.description,j=a.price;return Object(S.jsx)(P.a,{children:Object(S.jsx)(N.a,{xs:10,md:8,style:Oe,children:Object(S.jsxs)(ae.a,{style:me,className:"m-auto",children:[Object(S.jsx)(ae.a.Img,{variant:"top",src:"".concat(u),style:be}),Object(S.jsxs)(ae.a.Body,{style:ge,children:[Object(S.jsx)(ae.a.Title,{style:pe,children:l}),Object(S.jsx)(ae.a.Text,{children:h}),Object(S.jsxs)(ae.a.Text,{children:["$",j]}),Object(S.jsx)(M.a,{style:fe,onClick:function(){var e=c.contents;console.log(e);var t=!1,n={id:a._id,quantity:1,product:a};0===e.length?e.push(n):(e.forEach((function(e){e.id===a._id&&(t=!0,e.quantity++)})),!1===t&&e.push(n));var r=c._id;je(r,e,o).then((function(){return ue(r,o)})).then((function(e){return i(e.data.order)})).then((function(){return d({heading:"Added to Cart...",message:"Successfully added item to cart.",variant:"success"})})).catch((function(){d({heading:"Could not add to Cart.",message:"Please sign in or sign up for an account.",variant:"danger"})}))},variant:"primary",children:"Add to Cart"})," "]})]})})})})),ve={width:"inherit"},we={display:"inline-block",margin:"auto",width:"75%",padding:"25px"},ye=Object(m.f)((function(e){var t=e.order,n=e.user,r=e.setOrder,a=function(e){var a=e.target.value;console.log(a);var s=t.contents;s.forEach((function(e){console.log(e.id),e.id===a&&e.quantity>0&&e.quantity--})),s=s.filter((function(e){return 0!==e.quantity}));var c=t._id;je(c,s,n).then((function(){return ue(c,n)})).then((function(e){return r(e.data.order)})).catch((function(e){return console.error(e)}))},s=function(e){var a=e.target.value,s=t.contents;s.forEach((function(e){e.id===a&&e.quantity++}));var c=t._id;je(c,s,n).then((function(){return ue(c,n)})).then((function(e){return r(e.data.order)})).catch((function(e){return console.error(e)}))},c=function(e){var n=e.target.value;t.contents.forEach((function(e){e.id===n&&(e.quantity=0)})),a(e)},o=0,i=t.contents.map((function(e){return Object(S.jsx)("div",{className:"col-3 mt-5",children:Object(S.jsxs)(ae.a,{style:{width:"25rem"},className:"m-auto",children:[Object(S.jsx)(ae.a.Img,{variant:"top",src:"".concat(e.product.image),style:we}),Object(S.jsxs)(ae.a.Body,{children:[Object(S.jsx)(ae.a.Title,{children:e.product.name}),Object(S.jsxs)(ae.a.Text,{children:["Price: $",e.product.price]}),Object(S.jsxs)(ae.a.Text,{children:["Quantity: ",e.quantity]}),Object(S.jsxs)(ae.a.Text,{children:["Subtotal: $",e.quantity*e.product.price]}),(t=e.quantity*e.product.price,void(o+=t)),Object(S.jsx)(M.a,{style:ve,value:e.product._id,onClick:a,variant:"secondary",children:"-"})," ",Object(S.jsx)(M.a,{style:ve,value:e.product._id,onClick:s,variant:"secondary",children:"+"})," ",Object(S.jsx)(M.a,{style:ve,value:e.product._id,onClick:c,variant:"secondary",children:"Remove All"})," "]})]})},e.product._id);var t}));return Object(S.jsx)("div",{className:"row",children:Object(S.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(S.jsxs)("h3",{style:{color:"white"},children:["Order Total: $",o]}),Object(S.jsx)(D.b,{to:"/cart/checkout",children:Object(S.jsx)(M.a,{style:{width:"100px",textDecoration:"none"},variant:"warning",children:"Checkout"})}),Object(S.jsx)("row",{children:i})]})})})),Ce=Object(p.a)("pk_test_51JS9CaHSvQN3qMqE4F7Y9hKaSrmXTpNlwJH3z1fOItXYo4bkSKWYKTqqNYC2diaE6dgGDlbX12mDtLnzstNDHCAK00HL8Q8w2r"),Se={padding:"0px"},ke=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).setOrder=function(e){return r.setState({order:e})},r.setUser=function(e){return r.setState({user:e})},r.clearOrder=function(){return r.setState({order:{contents:[],owner:r.user,coupon:"",completed:!1}})},r.refreshCart=function(e,t){(function(e,t){return Y()({method:"PATCH",url:C+"/orders/".concat(e),headers:{Authorization:"Bearer ".concat(t.token)},data:{order:{completed:!0}}})})(e._id,t).then((function(){return he(t)})).then((function(e){r.setOrder(e.data.order)})).then((function(e){r.msgAlert({heading:"Checkout successful.",message:"Thank you for your business.",variant:"success"})})).catch((function(e){r.msgAlert({heading:"Checkout failure."+e,message:"Something went wrong.",variant:"danger"})}))},r.clearUser=function(){return r.setState({user:""})},r.onSignInSuccess=function(e){he(e).then((function(e){r.setOrder(e.data.order)}))},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,s=Object(b.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(d.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:s}])}}))},r.state={user:"",msgAlerts:[],order:{contents:[],owner:r.user,coupon:"",completed:!1}},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,a=t.user,s=t.order;return Object(S.jsx)(r.Fragment,{children:Object(S.jsxs)(A.a,{fluid:!0,style:Se,children:[Object(S.jsx)(P.a,{className:"justify-content-center",children:Object(S.jsxs)(N.a,{xs:12,className:"m-auto",children:[Object(S.jsx)(R,{user:a}),n.map((function(t){return Object(S.jsx)(_,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)}))]})}),Object(S.jsxs)("main",{className:"container",children:[Object(S.jsx)(m.b,{path:"/sign-up",render:function(){return Object(S.jsx)(X,{msgAlert:e.msgAlert,setUser:e.setUser,onSignInSuccess:e.onSignInSuccess})}}),Object(S.jsx)(m.b,{path:"/sign-in",render:function(){return Object(S.jsx)(Z,{msgAlert:e.msgAlert,setUser:e.setUser,setOrder:e.setOrder,onSignInSuccess:e.onSignInSuccess,order:s})}}),Object(S.jsx)(m.b,{exact:!0,path:"/products",render:function(){return Object(S.jsx)(le,{msgAlert:e.msgAlert})}}),Object(S.jsx)(m.b,{path:"/products/:id",render:function(){return Object(S.jsx)(xe,{msgAlert:e.msgAlert,setOrder:e.setOrder,order:s,user:a})}}),Object(S.jsx)(q,{user:a,path:"/sign-out",render:function(){return Object(S.jsx)(te,{msgAlert:e.msgAlert,clearUser:e.clearUser,clearOrder:e.clearOrder,user:a})}}),Object(S.jsx)(q,{user:a,path:"/change-password",render:function(){return Object(S.jsx)(re,{msgAlert:e.msgAlert,user:a})}}),Object(S.jsx)(q,{user:a,exact:!0,path:"/cart",render:function(){return Object(S.jsx)(ye,{msgAlert:e.msgAlert,user:a,order:s,setOrder:e.setOrder})}}),Object(S.jsx)(q,{user:a,path:"/cart/checkout",render:function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(O.Elements,{stripe:Ce,children:Object(S.jsx)(k,{refreshCart:e.refreshCart,user:a,order:s})})})}})]})]})})}}]),n}(r.Component);i.a.load({google:{families:["Roboto","sans-serif"]}});var Ae=Object(S.jsx)(D.a,{basename:"/lean2",children:Object(S.jsx)(ke,{})});c.a.render(Ae,document.getElementById("root"))},75:function(e,t,n){},86:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.8fd83da1.chunk.js.map