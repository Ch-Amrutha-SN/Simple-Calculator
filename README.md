# Simple-Calculator

Details of SIMPLE CALCULATOR Folder<br/>
1.Calc_Server_Nodejs<br/>
1.a.app.js<br/>
1.b.index.html<br/>
This is a nodejs Calculator application using nodejs,Express.js It use POST request.<br/>

2.Calculator_JS<br/>
2.a.app.js<br/>
2.b.index.html<br/>
This is a Calculator using html,Javascript(Using ids in html, getElementById in js)<br/>

--EXTENTION--<br/>
2.c.styles.css <br/>
2.d.index.html these are for adding styles to the calculator<br/>

3.Web_components<br/>
3.a.calculator.js<br/>
3.b.script.js--(this is same as app.js in 2.a)<br/>
3.c index_2.html<br/>
This is Reusable HTML Component using inbulit web components(Instead We would have used React instead but This one is using Inbuilt components)
Here We have used Web Components Custom elements and lifecycle callback function(connectedCallback()).
(The Main goal is to know the usage of HTML reusable components becoz instead of installing 3rd party frameworks like React we can trye some of the things using inbuilt)<br/>
We can use calculator.js(REUSABLE HTML COMPONENT) in a newly created index_2.html code directly by calling <calculator-component> and get rendered our Calculator created along with the styles<img width="961" alt="Screenshot 2022-05-22 at 1 40 04 PM" src="https://user-images.githubusercontent.com/105914357/169685244-d5d35c83-95b2-4c98-a0a0-0e0a8489297a.png">
