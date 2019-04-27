//      -------------------------------------------
//      -------------------------------------------
//      -------------- Js Radio V2 ----------------
//      -------------------------------------------
//      ---------------- @tiltX_ ------------------
//      -------------------------------------------
//      -------------------------------------------
//      https://www.instagram.com/tiltx_/

var ID = -1,ADI,URL,mute = false; // true ise durdur
            var audio = new Audio();
            audio.src = "http://46.20.7.126/;stream.mp3"; // Varsayılan Radio
            // audio.loop = true;
            function play(){audio.play();}
            function pause(){audio.pause();}
			function mutes(){
				if (mute==false){mute=true;audio.pause();}
        else {mute=false;audio.play();}}
        
  // Tek Yapmanız Gereken Dinlemek istediğiniz Radioları Aşağıya Eklemek.
var radio = [
    {id: 0,name: 'Best Fm',        favori: 0,   url: 'http://46.20.7.126/;stream.mp3'},
    {id: 1,name: 'Dream Türk',     favori: 0,   url: 'http://radyo.dogannet.tv/dream'},
    {id: 2,name: 'Fenomen',        favori: 0,   url: 'http://fenomen.listenfenomen.com/fenomen/128/icecast.audio'},
    {id: 3,name: 'Hit Fm',         favori: 1,   url: 'http://yayin.turkiletisim.com.tr:1094/;'},
    {id: 4,name: 'Metropol Fm',    favori: 0,   url: 'http://mfm1.webradiostreaming.de:8250/1'},
    {id: 5,name: 'Metro Fm',       favori: 0,   url: 'https://17703.live.streamtheworld.com/METRO_FM.mp3'},
    {id: 6,name: 'Moral Fm',       favori: 0,   url: 'http://yayin2.canliyayin.org:8886/;'},
    {id: 7,name: 'Number 1',       favori: 0,   url: 'http://20043.live.streamtheworld.com/NUMBER1FM.mp3'},
    {id: 8,name: 'Powertürk Fm',   favori: 1,   url: 'http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio'},
    {id: 9,name: 'Dost Fm Ankara', favori: 0,   url: 'http://yayin.dostfm.com:8920/;'}
];

function buttonlar(){
    var text = "", i,s = 0;
    for (i = 0; i < radio.length; i++) {
      s++;
      if (radio[i].favori !=0 )
      {
        text += "<button class='favRadio' id='name' onclick='Clicks("+radio[i].id+")'>" + radio[i].name + "</button>";
      }
      else{
        text += "<button class='radio' id='name' onclick='Clicks("+radio[i].id+")'>" + radio[i].name + "</button>";
      }
    if (s == 8){ // 8
      text+="<br>";  s=0;
      }
    }
    document.getElementById("buttonlar").innerHTML = text;
}
function Clicks(tıklananID){
    tıklananNAME =  document.getElementById("name").innerHTML;
    var user = radio.find(function (user) {
        if (user.id === tıklananID) {
            ID = user.id;
		      	ADI = user.name;
			      URL = user.url;
            audio.src = URL;
            audio.play();
            document.getElementById('yazi').innerHTML = "Çalan Radio : " + ADI;
            $('#pause').show();
            $('#play').hide();
        }
      })
}

function NeVeriyimAbime(ne){
  if (ID != null)
  {
    if (ne == 'ileri')
    {
      ID++;
      Clicks(ID);
      if (ID >= radio.length)
      {
        ID = 0;
        Clicks(ID);
      }
    }
    else
    {   // geri ise
      if (ID <=0)
      {
        ID = radio.length;
        ID--;
        Clicks(ID);
      }
      else{
        ID--;
        Clicks(ID);
      }
    }
  }
}
function RadioLink(){
  window.open("https://radyodelisi.blogspot.com/2019/01/turk-radyolari-2019-guncel-ip-adresleri.html","_blank")
}

