(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){},,,,,function(e,t,n){e.exports=n.p+"static/media/alaram.4b9995ee.mp3"},,,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(4),r=n.n(i),o=(n(16),n(5)),c=n(6),l=n(10),u=n(7),d=n(9),h=n(1);n(18);var m=function(){return s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Pomodoro Timer"))};n(20);var p=function(e){var t=e.isBreakTime,n=e.quoteText;return s.a.createElement("div",{className:"quote",style:t?{color:"#3066be"}:{}},t?s.a.createElement("h2",null,"It's ok to take a break"):s.a.createElement("p",null,n))};n(3);var b=function(e){return s.a.createElement("input",Object.assign({type:"button"},e))};n(23);var S=function(e){var t=e.elapsedMinutes,n=e.elapsedSeconds,a=e.isBreakTime,i=e.isTimerRunning,r=e.onStartTimer,o=e.onResetTimer;return document.title="".concat("".concat(t<10?"0".concat(t):t," : "),n<10?"0".concat(n):n),s.a.createElement("div",{className:"timer"},s.a.createElement("div",{className:"clock",style:a?{boxShadow:" 0 0 10px 10px #3066be,0px 0px 3px 3px inset #6d9dc5"}:{}},t<10?"0".concat(t):t," : ",n<10?"0".concat(n):n),s.a.createElement("br",null),s.a.createElement("div",{className:"btn-controls"},s.a.createElement(b,{name:"start",value:i?"Pause":"Start",className:i?"btn btn-stop":"btn btn-start",onClick:r}),s.a.createElement(b,{name:"reset",value:"Reset",className:"btn btn-reset",onClick:o})))};n(25);var k=function(e){var t=e.sessionLength,n=e.breakLength,a=e.isSoundOn,i=e.isAutoStart,r=e.onUpdateSession,o=e.onUpdateBreak,c=e.onUpdateSound,l=e.onAutoStart;return s.a.createElement("div",{className:"timer-settings"},s.a.createElement("h2",null,"settings"),s.a.createElement("label",{htmlFor:"session"},"Session Length",s.a.createElement("input",{type:"number",id:"session",min:"1",max:"60",value:t,name:"sessionTime",onChange:r})),s.a.createElement("label",{htmlFor:"break"},"Break Length",s.a.createElement("input",{type:"number",id:"break",min:"1",max:"20",value:n,name:"breakTime",onChange:o})),s.a.createElement("label",{htmlFor:"sounds"},"Sounds",s.a.createElement("input",{type:"checkbox",id:"sounds",name:"timer-sounds",checked:a,onChange:c}),s.a.createElement("span",null)),s.a.createElement("label",{htmlFor:"auto-start"},"Auto start session",s.a.createElement("input",{type:"checkbox",id:"auto-start",name:"timer-sounds",checked:i,onChange:l}),s.a.createElement("span",null)))},g=n(8),v=n.n(g),f=(n(27),function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sessionLength:25,breakLength:5,elapsedMinutes:0,elapsedSeconds:0,isBreakTime:!1,isTimerRunning:!1,isSoundOn:!0,isAutoStart:!0,quoteText:"Self-trust is the first secret of success"};var a=n.state.sessionLength;return n.state.elapsedMinutes=a,n.audioRef=s.a.createRef(),n.randomNum=Math.round(1e4*Math.random()),n.callbackMethodName="cb_".concat(n.randomNum),n.END_POINT="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=",n.handleStart=n.handleStart.bind(Object(h.a)(Object(h.a)(n))),n.handleReset=n.handleReset.bind(Object(h.a)(Object(h.a)(n))),n.handleSessionLength=n.handleSessionLength.bind(Object(h.a)(Object(h.a)(n))),n.handleBreakLength=n.handleBreakLength.bind(Object(h.a)(Object(h.a)(n))),n.handleSoundSetting=n.handleSoundSetting.bind(Object(h.a)(Object(h.a)(n))),n.handleAutoStart=n.handleAutoStart.bind(Object(h.a)(Object(h.a)(n))),n.runTimer=n.runTimer.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window[this.callbackMethodName]=function(t){e.setState({quoteText:t.quoteText})},this.getJsonp(this.END_POINT,this.callbackMethodName)}},{key:"getJsonp",value:function(e,t){var n=document.createElement("script");n.id="script_".concat(this.callbackMethodName),n.src=e+t,document.body.appendChild(n),document.getElementById(n.id).remove()}},{key:"handleStart",value:function(){this.state.isTimerRunning?clearInterval(this.timerId):this.timerId=setInterval(this.runTimer,1e3),this.setState(function(e){return{isTimerRunning:!e.isTimerRunning}})}},{key:"handleReset",value:function(){var e=this.state.sessionLength;clearInterval(this.timerId),this.setState({elapsedMinutes:e,elapsedSeconds:0,isTimerRunning:!1,isBreakTime:!1})}},{key:"handleSessionLength",value:function(e){var t=this.state.isTimerRunning,n=parseInt(e.target.value,10),a=Number.isNaN(n)?1:n;this.setState({sessionLength:a}),t||this.setState({elapsedMinutes:a})}},{key:"handleBreakLength",value:function(e){var t=parseInt(e.target.value,10),n=Number.isNaN(t)?1:t;this.setState({breakLength:n})}},{key:"handleAutoStart",value:function(e){this.setState({isAutoStart:e.target.checked})}},{key:"handleSoundSetting",value:function(e){this.setState({isSoundOn:e.target.checked})}},{key:"runTimer",value:function(){var e=this.state,t=e.elapsedMinutes,n=e.elapsedSeconds,a=e.sessionLength,s=e.breakLength,i=e.isBreakTime,r=e.isSoundOn,o=e.isAutoStart;0===n&&0!==t?this.setState(function(e){return{elapsedSeconds:59,elapsedMinutes:e.elapsedMinutes-1}}):0===t&&0===n&&!1===i?(r&&this.audioRef.current.play(),this.setState({elapsedMinutes:s,elapsedSeconds:0,isBreakTime:!0})):0===t&&0===n&&!0===i?(this.getJsonp(this.END_POINT,this.callbackMethodName),o?this.setState({elapsedMinutes:a}):this.handleReset(),this.setState({isBreakTime:!1})):this.setState(function(e){return{elapsedSeconds:e.elapsedSeconds-1}})}},{key:"render",value:function(){var e=this.state,t=e.isBreakTime,n=e.quoteText;return s.a.createElement("div",{className:"container"},s.a.createElement(m,null),s.a.createElement(p,{isBreakTime:t,quoteText:n}),s.a.createElement(S,Object.assign({},this.state,{onStartTimer:this.handleStart,onResetTimer:this.handleReset})),s.a.createElement(k,Object.assign({},this.state,{onUpdateSession:this.handleSessionLength,onUpdateBreak:this.handleBreakLength,onUpdateSound:this.handleSoundSetting,onAutoStart:this.handleAutoStart})),s.a.createElement("audio",{src:v.a,ref:this.audioRef}))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.13c6592f.chunk.js.map