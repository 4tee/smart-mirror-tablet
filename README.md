##SmartMirror-Angular-Annyang

I was motivated by the _HomeMirror_ project by **Hannah Mitt** [[link]](https://github.com/HannahMitt/HomeMirror). One of the biggest issues was looking for two ways mirror. After looking hard, I finally found a factory based in Singapore who could sell me two ways mirror. I have purchased and built one mirror based on Hannah Mitt project and it was pretty awesome.
<br/>
The next thing that I wanted to do it to add _interactivity_ into the project. Currently, the display device (in my case, Surface Pro 3) is hidden behind the mirror, hence, the touch surface becomes inaccessible. I have started to explore some solutions. I have forked **Evan Cohen** [[SmartMirror]](https://github.com/evancohen/smart-mirror) project so that I can work with Smart Mirror Open Source community.
<br/>
<br/>
###Project Demo Page
Click this [[link]](https://4tee.github.io/smart-mirror-tablet/).
<br/>
<br/>
###In Action
How to build a mirror [[Youtube]](https://youtu.be/Ej8670gUz20).<br/>
Testing the page [[Youtube]](https://youtu.be/vG80heyKBfs).
<br/>
<br/>
####Web App in AngularJS
<p align="center">
  <img align="left" src="https://angularjs.org/img/AngularJS-large.png" alt="AngularJS Logo"/>
</p>
Since we are not using _Google Now_ for the project, I have decided to go for web app since it can be easily run on any platform. All I need will be the Speech Recognition engine and some UI elements using JavaScript, CSS and HTML. I found somewhere on the web about _AngularJS_. I have been working in Java for sometimes and I thought I will give a shot. It is a good learning opportunity and soon enough, I really love AngularJS for its MVC framework. Simple, clean and magical.. Kudo and two thumbs up to _Miško Hevery_ who created this framework.
<br/>
<br/>
####Annyang Speech Recognition
While looking at **Evan Cohen** [[SmartMirror]](https://github.com/evancohen/smart-mirror) project, I found something interesting - _Annyang_ Speech Recognition JavaScript [[lib]](https://github.com/TalAter/annyang). [[Annyang]](https://github.com/TalAter/annyang) is a small lightweight library that uses the build-in Speech Recognition API. It was created by **TalAlter** and it it really very easy to use it. Chrome works really well with Annyang library and since chrome support full screen mode, it is my choice of platform for this project.
<br/>
<br/>
