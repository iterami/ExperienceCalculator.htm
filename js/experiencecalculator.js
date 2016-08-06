'use strict';

function calculate(){
    settings_save();

    // Fetch XP value without , or ..
    var xp = parseInt(
      document.getElementById('xp').value.replace(/(\,|\.)/g, ''),
      10
    );

    var ids = {
      // Diablo 2 and Diablo 2: Lord of Destruction
      'd2lod-99': 38377390.17,
      // Runescape
      'rs-99': 130344.31,
      'rs-120': 1042731.67,
      'rs-f2p': 32000038.8,
      'rs-max': 2000000,
      'rs-p2p': 52000000,
      // Custom
      'custom': parseInt(
        document.getElementById('custom-xp').value.replace(/(\,|\.)/g, ''),
        10
      ) / 100,
    };
    for(var id in ids){
        document.getElementById(id).innerHTML = (xp / ids[id]).toFixed(7);
    };
}

window.onload = function(e){
    settings_init(
      'KeyInfo.htm-',
      {
        'xp': '0',
      }
    );

    document.getElementById('xp').oninput = calculate;

    settings_update();
    calculate();
};
