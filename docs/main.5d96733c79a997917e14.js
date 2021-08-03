(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.d({},{L:()=>v});var n=document.querySelector(".todo-list"),o=document.querySelector(".new-todo"),a=document.querySelector(".clear-completed"),i=document.querySelector(".filters"),l=document.querySelectorAll(".filtro"),c=function(e){var t='\n  <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n    <div class="view">\n      <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n      <label>").concat(e.tarea,'</label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n  </li>\n  '),r=document.createElement("div");return r.innerHTML=t,n.append(r.firstElementChild),r.firstElementChild};function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.addEventListener("keyup",(function(e){if(13===e.keyCode&&o.value.length>0){var t=new s(o.value);v.nuevoTodo(t),c(t),o.value=""}})),n.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,o=r.getAttribute("data-id");console.log(t),t.includes("input")?(v.marcarCompletado(o),r.classList.toggle("completed")):t.includes("button")&&(v.eliminarTodo(o),n.removeChild(r)),console.log(v)})),a.addEventListener("click",(function(){v.eliminarCompletados();for(var e=n.children.length-1;e>=0;e--){var t=n.children[e];t.classList.contains("completed")&&n.removeChild(t)}})),i.addEventListener("click",(function(e){var r=e.target.text;if(r){l.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var o,a=t(n.children);try{for(a.s();!(o=a.n()).done;){var i=o.value;i.classList.remove("hidden");var c=i.classList.contains("completed");switch(r){case"Pendientes":c&&i.classList.add("hidden");break;case"Completados":c||i.classList.add("hidden")}}}catch(e){a.e(e)}finally{a.f()}}}));var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var t,r,n;return t=e,n=[{key:"fromJson",value:function(t){var r=t.id,n=t.tarea,o=t.completado,a=t.creado,i=new e(n);return i.id=r,i.completado=o,i.creado=a,i}}],(r=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&u(t.prototype,r),n&&u(t,n),e}();function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,r,n;return t=e,(r=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,r=d(this.todos);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.id==e){n.completado=!n.completado,this.guardarLocalStorage();break}}}catch(e){r.e(e)}finally{r.f()}}},{key:"eliminarCompletados",value:function(e){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(s.fromJson)}}])&&m(t.prototype,r),n&&m(t,n),e}());v.todos.forEach(c);new s("Aprender Javascript");v.todos[0].imprimirClase(),console.log("todos ",v.todos)})();