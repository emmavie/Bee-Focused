const generateHTML = (page) => {
  return `
    <html lang="en">
    <body>
        <div class="stage">
        <div class="hex"></div>
        <div class="middle-hex"></div>
        <div class="last-hex"></div>
        <div class="fof">
        <h1>404</h1>
        <h2> un-BEE-lievable! You're not focusing? </h2>
        <h2> Studying > ${page} </h2>
        </div>
            <div class="bee">
                <div class="bee__body">
                    <div class="bee__circle bee__circle--black"></div>
                    <div class="bee__circle bee__circle--yellow helper__shift--right-1"></div>
                    <div class="bee__circle bee__circle--black helper__shift--right-2"></div>
                    <div class="bee__circle bee__circle--yellow helper__shift--right-3"></div>
                    <div class="bee__circle bee__circle--black helper__shift--right-4 bee__face">
                        <div class="bee__eyes">
                            <span class="bee__eye"></span>
                            <span class="bee__eye"></span>
                        </div>
                        <div class="bee__antennas">
                            <span class="bee__antenna bee__antenna--left"></span>
                            <span class="bee__antenna bee__antenna--right"></span>
                        </div>
                    </div>
                    <div class="bee__wings">
                        <span class="bee__wing bee__wing--left"></span>
                        <span class="bee__wing bee__wing--right"></span>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`;
};

const generateCSS = () => {
  return `
  <title>BEE-focused</title>
  <<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Noto+Serif+HK:wght@300&display=swap');
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Noto Serif HK', serif;
    background:radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
      radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
      linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
      linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
      linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
      linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
    background-size: 40px 60px; 
    overflow:hidden;
  }
  
  .stage {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
  }
  
  .bee {
      position: relative;
      animation: movement 10s linear infinite;
      top: -50px;
      width: 100%;
      height: 100%;
  }
  .bee__body {
    position: relative;
  }
  .bee__circle {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .bee__circle--black {
    background-color: #000000;
  }
  .bee__circle--yellow {
    background-color: #FCE323;
  }
  .bee__face {
    position: relative;
    z-index: 3;
  }
  .bee__eyes {
    position: absolute;
    width: 40px;
    height: 10px;
    top: 25%;
    left: 25%;
  }
  .bee__eye {
    display: inline-block;
    background-color: white;
    width: 12px;
    height: 6px;
    margin: 1px;
    border-radius: 0 0 12px 12px;
  }
  .bee__antennas {
    position: relative;
    width: 60px;
    top: -25px;
    text-align: center;
    z-index: 2;
  }
  .bee__antenna {
    display: inline-block;
    width: 10px;
    height: 30px;
    border-radius: 20px 20px 0 0;
    background-color: black;
    margin: 5px;
  }
  .bee__antenna--left {
    transform: rotate(-20deg);
    transform-origin: bottom left;
    animation: waving-left 1s linear infinite;
  }
  .bee__antenna--right {
    transform-origin: bottom right;
    transform: rotate(20deg);
    animation: waving-right 1s linear infinite;
  }
  .bee__wings {
    position: absolute;
    top: -10px;
    left: 20px;
    width: 70px;
    z-index: 1;
  }
  .bee__wing {
    border-radius: 100%;
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #e9f7f0d5;
  }
  .bee__wing--left {
    transform: skewY(30deg) rotate(-20deg, 10deg);
    animation: flap 0.5s linear infinite;
  }
  
  .helper__shift--right-1 {
    left: 10px;
  }
  
  .helper__shift--right-2 {
    left: 20px;
  }
  
  .helper__shift--right-3 {
    left: 30px;
  }
  
  .helper__shift--right-4 {
    left: 40px;
  }
  
  @keyframes movement {
    0% {
      left: 0%;
    }
    50%, 80% {
      top: 10%;
      left: 50%;
  }
    100% {
      left: 80%;
    }
  }
  div.fof{
      display: flex;
      padding: 1rem;
      flex-direction: column;
      margin: 2rem;
      align-items: center;
      position: absolute;
      top: 4rem;
  }
  .hex{
      width: 0;
      border-bottom: 120px solid #fcdb23bf;
      border-left: 208px solid transparent;
      border-right: 208px solid transparent;
  }
  .middle-hex{
      width: 416px;
      height: 500px;
      background-color: #fcdb23bf;
  }
   .last-hex{
      width: 0;
      border-top: 120px solid #fcdb23bf;
      border-left: 208px solid transparent;
      border-right: 208px solid transparent;
   }
   .fof h1{
      font-family: 'Dancing Script', cursive;
      font-size: 7rem;
      margin-bottom:.6rem;
      margin: 0;
   }
   .fof h2{
      font-size: 1.2rem;
   }>
   </style>`;
};
var checkbox = document.querySelector("#allow");


switch (window.location.hostname) {
//common distractions
case "www.youtube.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("YouTube"); 
    break;
case "www.facebook.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Facebook");
    break;
case "www.netflix.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Netflix");
    break;
case "www.tiktok.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("TikTok");
    break;
case "www.tumblr.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Tumblr");
    break;
case "www.twitter.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Twitter");
    break;
case "www.linkedin.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("LinkedIn");
    break;   
case "www.pinterest.ca":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Pinterest");
    break; 
case "www.buzzfeed.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Buzzfeed");
    break; 
case "discord.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Discord");
    break;
case "imgur.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Fooling Around");
    break;  
case "9gag.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Fooling Around");
    break;  
case "4chan.org":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("4chan");
    break;  

    //shopping sites
case "www.amazon.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;  
case "www.amazon.ca":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;   
case "www.wish.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;     
case "www.ebay.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;  
case "www.ebay.ca":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;
case "www.etsy.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;
case "www.costco.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break; 
case "www.costco.ca":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;        
case "www.kijiji.ca":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;
case "www.wayfair.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;
case "www.wayfair.ca":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;
case "www.target.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Shopping");
    break;

//video websites 
case "www.twitch.tv":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Twitch");
    break; 
case "www.primevideo.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("TV");
    break; 
case "www.disneyplus.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("TV");
    break; 
case "www.dailymotion.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dailymotion");
    break;  
case "www.hulu.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("TV");
    break;   
case "www.crunchyroll.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Anime");
    break; 
case "fmovies.to":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("TV");
    break; 
case "animepisode.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Anime");
    break;     
case "anilist.co":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Anilist");
    break;  
case "www.webtoons.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Webtoon");
    break;     
case "www.hbomax.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("TV");
    break;    

//dating websites
case "www.pof.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dating");
    break; 
case "tinder.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dating");
    break;
case "www.match.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dating");
    break;  
case "www.grindr.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dating");
    break; 
case "www.web.grindr.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dating");
    break; 
case "bumble.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Dating");
    break; 

//sports 
case "www.espn.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Sports");
    break;  
case "www.nfl.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Sports");
    break; 
case "www.nhl.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Sports");
    break; 
case "www.sportingnews.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Sports");
    break;
case "bleacherreport.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Sports");
    break;  

//online games
case "www.addictinggames.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Gaming");
    break; 
case "www.bet365.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Gambling");
    break; 
case "www.miniclip.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Gaming");
    break; 
case "www.onlinegambling.com":
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML("Gambling");
    break; 
}
