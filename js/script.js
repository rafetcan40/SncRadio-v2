//      -------------------------------------------
//      -------------------------------------------
//      -------------- Js Radio V2 ----------------
//      -------------------------------------------
//      ---------------- @tiltX_ ------------------
//      -------------------------------------------
//      -------------------------------------------
//      https://www.instagram.com/tiltx_/

var ID,ADI,URL;
            var audio = new Audio();
            audio.src = "http://46.20.7.126/;stream.mp3"; // Varsayılan Radio Linki
            audio.loop = true;
            audio.play();
            function play(){audio.play();}
            function pause(){audio.pause();} 
        
$(document).ready(function(){play();});


  // Tek Yapmanız Gereken Favori Radiolarınızı Aşağıya Eklemek.
var radio = [
    {id: 0,name: 'Best Fm',     url: 'http://46.20.7.126/;stream.mp3'},
    {id: 1,name: 'Dream Türk',  url: 'http://radyo.dogannet.tv/dream'},
    {id: 2,name: 'Fenomen',     url: 'http://fenomen.listenfenomen.com/fenomen/128/icecast.audio'},
    {id: 3,name: 'Hit Fm',      url: 'http://yayin.turkiletisim.com.tr:1094/;'},
    {id: 4,name: 'Metropol Fm', url: 'http://mfm1.webradiostreaming.de:8250/1'},
    {id: 5,name: 'Metro Fm',    url: 'https://17703.live.streamtheworld.com/METRO_FM.mp3'},
    {id: 6,name: 'Moral Fm',    url: 'http://yayin2.canliyayin.org:8886/;'},
    {id: 7,name: 'Number 1',    url: 'http://20043.live.streamtheworld.com/NUMBER1FM.mp3'},
    {id: 8,name: 'Powertürk Fm',url: 'http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio'},
    {id: 9,name: 'Dost Fm Ankara',      url: 'http://yayin.dostfm.com:8920/;'}
];

function buttonlar(){
    var text = "", i;
    for (i = 0; i < radio.length; i++) {
      text += "<button class='radio' id='name' onclick='Clicks("+radio[i].id+")'>" + radio[i].name + "</button>";
      if (i == 7){
        text+="<br>"
      }
    }
    document.getElementById("buttonlar").innerHTML = text;
}
function Clicks(tıklananID){
    tıklananNAME =  document.getElementById("name").innerHTML;
    var user = radio.find(function (user) {
        if (user.id === tıklananID) {
            ID = user.id;ADI = user.name;URL = user.url;
            // alert(URL)
            audio.src = URL;
            audio.play();
            document.getElementById('yazi').innerHTML = "Çalan Radio : " + ADI;
            $('#pause').show();
            $('#play').hide();
        }
      })
}

function NeVeriyimAbime(ne){
  if (ne == "ileri"){ID++;Clicks(ID);}
  else{ID--;Clicks(ID);}
}

function RadioLink(){
  window.open("http://radyodelisi.blogspot.com/2011/11/turk-radyolari-guncel-ip-adresleri.html","_blank")
}
