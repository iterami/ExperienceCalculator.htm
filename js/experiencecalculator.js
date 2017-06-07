'use strict';

function calculate(){
    core_storage_save();

    // Fetch XP value without , or ..
    var xp = sanitize_integer('xp');

    var ids = {
      // Other
      'custom': sanitize_integer('custom-xp') / 100,
      // Diablo 2
      'd2lod-99': 35204852.54,
      // RuneScape
      'rs-99': 130344.31,
      'rs-120': 1042731.67,
      'rs-f2p': 32000038.8,
      'rs-max': 2000000,
      'rs-p2p': 52000000,
    };
    for(var id in ids){
        document.getElementById(id).innerHTML = (xp / ids[id]).toFixed(7);
    };
}

function repo_init(){
    core_repo_init({
      'storage': {
        'custom-xp': '0',
        'xp': '0',
      },
      'title': 'ExperienceCalculator.htm',
    });

    document.getElementById('custom-xp').oninput = calculate;
    document.getElementById('xp').oninput = calculate;

    core_storage_update();
    calculate();
}

function sanitize_integer(id){
    return parseInt(
      document.getElementById(id).value.replace(/(\,|\.)/g, ''),
      10
    );
}
