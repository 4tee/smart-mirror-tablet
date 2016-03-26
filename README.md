##SmartMirror-Angular-Annyang

I was motivated by the _HomeMirror_ project by **Hannah Mitt** [[link]](https://github.com/HannahMitt/HomeMirror). One of the biggest issues was looking for two ways mirror. After looking hard, I finally found a factory based in Singapore who could sell me two ways mirror. I have purchased and built one mirror based on Hannah Mitt project and it was pretty awesome.
<br/>
The next thing that I wanted to do it to add _interactivity_ into the project. Currently, the display device (in my case, Nexus 7 & Surface Pro 3) is hidden behind the mirror, hence, the touch surface becomes inaccessible. I have started to explore some solutions. I have forked **Evan Cohen** [[SmartMirror]](https://github.com/evancohen/smart-mirror) project so that I can work with Smart Mirror Open Source community.
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
###1. Using Voice Command
####Google Now
Since the HomeMirror project was on Android platform, _Google Now_ is the most promising feature to look into it. Since _KitKit_  (Android 4.4) and above, Google Now voice command can be activated from anywhere in Android even if the screen is Off. _Open Mic+_  (FREE) app also allows user to replace the built-in command voice. With combination with _Tasker_ ($4.99) app, there is a huge potential on what it can be done with it. 
<br/>
<br/>
<p align="center">
  <img src="http://cdn01.androidauthority.net/wp-content/uploads/2013/06/Google-Now-Voice-Search1-645x386.jpg" alt="Google Now Voice Search"/><br/>Sample photo taken from Android Authority
</p>
<br/>
After experimenting for sometimes, I abandoned this approach. I found that the background of dialog box in Google Now (Even if you use Open Mic+, it will also launch the same dialog box) could not customize to the color that I need. For me, Only black color will make the mirror as traditional mirror. I have also tried adding _Nova Launcher_ (FREE) to change background color and _SunFilter_ (FREE) to add filter color, but in vain.
<br/>
<br/>
####Web App
Since we are not using _Google Now_ for the project, I have decided to go for web application since it can be easily run on any platform. All I need will be the Speech Recognition engine and some UI elements using JavaScript, CSS and HTML.
<br/>
<br/>
####Annyang Speech Recognition
While looking at **Evan Cohen** [[SmartMirror]](https://github.com/evancohen/smart-mirror) project, I found something interesting - _Annyang_ Speech Recognition JavaScript [[lib]](https://github.com/TalAter/annyang). Annyang is a small lightweight library that works well with most desktop browsers. However, Chrome is the only browser that currently supports Speech Recognition API and requires later version of Chrome (I have tested and worked on Android 4.2.2 with Chrome version 47.0.2526.83). Nevertheless, Chrome supports _immersive mode_ in my later chrome version, therefore I can create a full screen web app on Android Chrome browser.
<br/>
<br/>
To suit my version of mirror project, I have to change the UI of the page. Next, I have mod the page so that it responses to some commands and display my own message. You can see the video of testing in [[Youtube]](https://youtu.be/HuCJeNwWzEY). There is an little issue though. It is inherient problem of using voice - there are possibilites of incorrect voice recognition due to noise and accents.
<br/>
**Tips:** Chrome in Android only enters into Immersive mode when the page is longer than the screen. The navigation keys aka Soft keys can be hidden with _Auto Hide Soft Keys_ (FREE). You need to root device. But if you have higher Android OS (Lollipop and above), you don't need to root and can hide both navigation keys and status bar.
<br/>
<br/>
###2. Using Leap Motion [TBD] 

Here is a cool [[demo]](https://youtu.be/Pqjq7whLkPQ) by **Mohamed Ahmed** using _Leap Motion_ to make any surface become a touch screen. I hope it can be incorporated into SmartMirror project in the later stage.

