'use strict';

// ============================================================
// مراحل
// ============================================================
const LEVELS = [
  {
    ch:1, num:1, width: 1600,
    say:'یه آدم تو تونل. همیشه یکی تو تونله.',
    sky:['#14121a','#2a1e20'], far:'rgba(22,17,30,0.85)', mid:'rgba(9,7,14,0.93)',
    near:'lamp', seed:11, dark:'3,5,12', darkA:0.58,
    amb:'rain', ambCol:'rgba(150,170,210,0.4)',
    start:[40,300], exit:[1520,300,30,50],
    plat:[
      [0, GROUND, 620, 70],
      [740, GROUND, 860, 70],
      [320, 270, 140, 20],
      [960, 260, 130, 20],
      [1180, 220, 100, 20],
    ],
    items:[
      {t:'sword',x:120,y:330},{t:'sed',x:380,y:250},
      {t:'clock',id:'L1C1',x:340,y:240},
      {t:'clock',id:'L1C2',x:990,y:230},
      {t:'clock',id:'L1C3',x:1220,y:190},
    ],
    enemies:[
      {x:400,y:320,min:340,max:560,hp:2,drop:'stone'},
      {x:900,y:320,min:800,max:1050,hp:2,drop:'gun',shoots:true},
      {x:1350,y:320,min:1250,max:1500,hp:3,drop:'mol'},
    ]
  },
  {
    ch:1, num:2, width: 2000,
    say:'دروازه. کی می‌فهمه این چیزا چطور کار می‌کنن؟',
    sky:['#181828','#4a2a20'], far:'rgba(34,18,22,0.85)', mid:'rgba(14,8,10,0.93)',
    near:'stack', seed:23, dark:'8,4,6', darkA:0.52,
    amb:'ember', ambCol:'rgba(255,150,60,0.8)',
    start:[40,300], exit:[1940,300,30,50],
    plat:[
      [0, GROUND, 800, 70],
      [920, GROUND, 1080, 70],
      [180, 260, 120, 20],
      [420, 230, 100, 20],
      [1000, 240, 130, 20],
      [1400, 260, 130, 20],
      [1700, 230, 110, 20],
    ],
    gate:{x:1420,y:0,w:18,h:GROUND,cyc:220,open:120},
    items:[
      {t:'stone',x:220,y:240},{t:'sed',x:440,y:210},{t:'gun',x:1050,y:220},
      {t:'clock',id:'L2C1',x:200,y:230},
      {t:'clock',id:'L2C2',x:1050,y:210},
      {t:'clock',id:'L2C3',x:1740,y:200},
    ],
    enemies:[
      {x:300,y:320,min:200,max:550,hp:2,drop:'sed',shoots:true},
      {x:700,y:320,min:600,max:780,hp:2,drop:'stone',shoots:true},
      {x:1150,y:320,min:1050,max:1350,hp:3,drop:'sword',shoots:true},
      {x:1750,y:320,min:1650,max:1900,hp:3,drop:'mol',shoots:true},
    ]
  },
  {
    ch:1, num:3, width: 2400,
    say:'دو نفر. حداقل دیگه تنها نیستم.',
    sky:['#101018','#3a2028'], far:'rgba(26,18,30,0.85)', mid:'rgba(10,7,13,0.93)',
    near:'tree', seed:37, dark:'5,4,10', darkA:0.58,
    amb:'dust', ambCol:'rgba(200,170,140,0.5)',
    start:[40,300], exit:[2340,300,30,50],
    plat:[
      [0, GROUND, 700, 70],
      [820, GROUND, 700, 70],
      [1640, GROUND, 760, 70],
      [150, 240, 120, 20],
      [400, 200, 100, 20],
      [900, 230, 130, 20],
      [1150, 200, 100, 20],
      [1700, 230, 130, 20],
      [2000, 200, 130, 20],
    ],
    items:[
      {t:'sed',x:100,y:330},{t:'mol',x:200,y:220},{t:'sword',x:600,y:330},{t:'gun',x:1200,y:180},
      {t:'clock',id:'L3C1',x:180,y:210},
      {t:'clock',id:'L3C2',x:1180,y:170},
      {t:'clock',id:'L3C3',x:2040,y:170},
    ],
    enemies:[
      {x:350,y:320,min:250,max:600,hp:3,drop:'gun',shoots:true},
      {x:1050,y:320,min:950,max:1400,hp:3,drop:'sword',shoots:true},
      {x:1200,y:170,min:1152,max:1226,hp:2,drop:'sed'},
      {x:1850,y:320,min:1750,max:2200,hp:4,drop:'mol',shoots:true},
    ]
  },
  {
    ch:1, num:4, width: 2800,
    say:'در قفله. یکی کارتش رو داره.',
    sky:['#0a0a12','#2a1a18'], far:'rgba(20,16,24,0.85)', mid:'rgba(8,6,11,0.93)',
    near:'pipe', seed:41, dark:'4,4,9', darkA:0.6,
    amb:'dust', ambCol:'rgba(160,140,120,0.5)',
    start:[40,300], exit:[2740,300,30,50],
    plat:[
      [0, GROUND, 700, 70],
      [820, GROUND, 900, 70],
      [1840, GROUND, 960, 70],
      [200, 250, 120, 20],
      [450, 220, 100, 20],
      [900, 240, 130, 20],
      [1200, 210, 120, 20],
      [1500, 240, 130, 20],
      [1900, 220, 130, 20],
      [2300, 240, 130, 20],
    ],
    door:{x:2660,y:0,w:18,h:GROUND},
    items:[
      {t:'sword',x:80,y:330},{t:'sed',x:140,y:330},{t:'gun',x:270,y:330},{t:'mol',x:1250,y:190},
      {t:'clock',id:'L4C1',x:240,y:220},
      {t:'clock',id:'L4C2',x:1240,y:180},
      {t:'clock',id:'L4C3',x:2340,y:210},
    ],
    enemies:[
      {x:400,y:320,min:300,max:650,hp:3,drop:'stone',shoots:true},
      {x:1000,y:320,min:900,max:1250,hp:3,drop:'gun',shoots:true},
      {x:1450,y:320,min:1350,max:1750,hp:3,drop:'card',shoots:true},
      {x:2100,y:320,min:2000,max:2400,hp:4,drop:'mol',shoots:true},
      {x:2500,y:320,min:2400,max:2700,hp:4,drop:'sword',shoots:true},
    ]
  },
  {
    ch:1, num:6, width: 800,
    say:'تنها کسی که ماسک نداره.',
    sky:['#080810','#3a1818'], far:'rgba(30,14,18,0.85)', mid:'rgba(12,5,8,0.93)',
    near:'pillar', seed:53, dark:'8,3,4', darkA:0.55,
    amb:'ember', ambCol:'rgba(255,80,40,0.85)',
    start:[90,300], exit:[-200,290,30,50],
    plat:[
      [0, GROUND, 800, 70],
      [150, 265, 130, 20],
      [520, 235, 130, 20],
    ],
    traps:[
      {t:'jet',x:330,y:GROUND,w:34,h:110,period:260,warn:50,on:80,off:0},
      {t:'jet',x:440,y:GROUND,w:34,h:110,period:260,warn:50,on:80,off:130},
    ],
    items:[
      {t:'sword',x:50,y:330},{t:'sed',x:100,y:330},{t:'mol',x:200,y:240},
      {t:'clock',id:'L5C1',x:560,y:205},
      {t:'clock',id:'L5C2',x:740,y:320},
    ],
    enemies:[
      {x:560,y:GROUND-60,min:220,max:740,hp:40,drop:null,boss:true,kian:true,shoots:true}
    ],
    boss:true
  }
];
LEVELS[0].enemies.forEach(e => e.human = true);
LEVELS[1].enemies.forEach(e => e.human = true);
LEVELS[2].enemies.slice(0, 2).forEach(e => e.human = true);
LEVELS[3].enemies.slice(0, 2).forEach(e => e.human = true);

// ---- مرحله‌های بلندتر: قطعه‌های مشترک پشت مرحله‌ی دست‌ساز ----
const SEG = {
  flat(L, x, w) { L.plat.push([x, GROUND, w, 70]); return x + w; },
  spikes(L, x, w, n) {
    n = Math.min(n, 3); w = Math.max(w, 260 + n * 190);
    L.plat.push([x, GROUND, w, 70]);
    for (let i = 0; i < n; i++) L.traps.push({t:'spike', x:x + 130 + i * ((w - 260) / n), y:GROUND - 14, w:70});
    return x + w;
  },
  saws(L, x, w, n, sp) {
    n = Math.min(n, 3); w = Math.max(w, 330 + 240 * (n - 1));
    L.plat.push([x, GROUND, w, 70]);
    for (let i = 0; i < n; i++) L.traps.push({t:'saw', y:GROUND - 14, r:14, min:x + 90 + i * ((w - 330) / Math.max(1, n - 1 || 1)), max:x + 200 + i * ((w - 330) / Math.max(1, n - 1 || 1)), sp, ph:i * 1.7});
    return x + w;
  },
  jets(L, x, w, n) {
    n = Math.min(n, 4); w = Math.max(w, 220 + n * 135);
    L.plat.push([x, GROUND, w, 70]);
    for (let i = 0; i < n; i++) L.traps.push({t:'jet', x:x + 110 + i * ((w - 220) / n), y:GROUND, w:30, h:100, period:210, warn:40, on:70, off:i * 55});
    return x + w;
  },
  stairs(L, x, n, gap, clock) {
    let cx = x;
    for (let i = 0; i < n; i++) {
      const y = GROUND - 50 - (i % 2) * 45;
      L.plat.push([cx + gap, y, 96, 16]);
      if (clock && i === Math.floor(n / 2)) L.items.push({t:'clock', id:clock, x:cx + gap + 40, y:y - 26});
      cx += gap + 96;
    }
    return cx + gap;
  },
  arena(L, x, w, list, k) {
    L.plat.push([x, GROUND, w, 70]); (L.cp = L.cp || []).push(x + 20);
    const drops = L.noGun ? ['sed', 'sword', 'stone', 'mol', 'sword'] : ['sed', 'sword', 'gun', 'stone', 'mol'], KIND = {h:{hp:2,h:1}, hs:{hp:2,h:1,sh:1}, hb:{hp:4,h:1}, a:{hp:3}, as:{hp:3,sh:1}, ab:{hp:5,sh:1}, ah:{hp:5}, bd:{hp:1,fly:1}, sd:{hp:4,shield:1}, ph:{hp:2,phantom:1}, lg:{hp:3,lunger:1}, lh:{hp:5,lunger:1}, sl:{hp:3,sh:1,slower:1}, slh:{hp:4,sh:1,slower:1,lunger:1}};
    list.forEach((kn, i) => {
      const ex = x + 120 + i * ((w - 240) / Math.max(1, list.length - 1)), d = KIND[kn];
      L.enemies.push({x:ex, y:d.fly ? GROUND - 75 : 320, min:Math.max(x + 20, ex - 110), max:Math.min(x + w - 20, ex + 110), hp:d.hp, drop:drops[(k + i) % 5], shoots:!!d.sh, human:!!d.h, fly:!!d.fly, shield:!!d.shield, phantom:!!d.phantom, lunger:!!d.lunger, slower:!!d.slower});
    });
    L.items.push({t:drops[(k + 2) % 5], x:x + 50, y:322}, {t:drops[(k + 4) % 5], x:x + 90, y:322});
    if (k % 2 === 0) L.items.push({t:'heart', x:x + w - 70, y:322});
    return x + w;
  },
};
const EXT = [
  [['flat',260],['spikes',560,2],['stairs',3,70,'L1X'],['arena',640,['h','h','hs'],0],['saws',620,2,0.03],['stairs',4,76],['arena',680,['bd','h','hs'],1],['spikes',620,3],['saws',560,3,0.04],['arena',700,['bd','hs','bd'],2],['stairs',4,78],['saws',600,3,0.04],['flat',200]],
  [['flat',260],['jets',600,3],['stairs',4,72,'L2X'],['arena',700,['sd','h','hs'],2],['saws',640,3,0.04],['spikes',560,3],['stairs',5,78],['arena',720,['sd','bd','hs','h'],3],['jets',640,4],['flat',200]],
  [['flat',240],['spikes',600,3],['arena',700,['ph','as','a'],4],['stairs',5,78,'L3X'],['saws',700,3,0.045],['jets',640,4],['arena',760,['ph','sd','as','bd'],0],['stairs',5,84],['saws',660,4,0.05],['arena',720,['ph','ph','as'],1],['flat',200]],
  [['flat',240],['stairs',5,80,'L4X'],['arena',760,['sd','ph','as','bd'],2],['jets',700,5],['saws',720,4,0.05],['spikes',640,4],['stairs',6,84],['arena',780,['ab','sd','ph','bd'],3],['saws',720,5,0.055],['jets',640,4],['arena',760,['sd','bd','ph'],4],['flat',200]],
];
EXT.forEach((segs, i) => {
  const L = LEVELS[i]; L.traps = L.traps || []; let x = L.width; L.items.push({t:'sword',x:x + 60,y:322},{t:'sed',x:x + 100,y:322}); (L.cp = L.cp || []).push(x + 30);
  for (const [n, ...a] of segs) x = SEG[n](L, x, ...a);
  L.width = x; L.exit = [x - 70, 300, 30, 50];
});

// ---- فصل ۲: خندانور (بدون سلاح گرم، تله‌های بیشتر) ----
function mkLevel2(num, th, say, segs) {
  const L = {ch:2, num, width:600, say, ...th, start:[40,300], exit:[0,300,30,50], noGun:true,
    plat:[[0, GROUND, 600, 70]], items:[{t:'sword',x:80,y:322},{t:'sed',x:130,y:322},{t:'mol',x:180,y:322}], enemies:[], traps:[]};
  let x = 600; for (const [n, ...a] of segs) x = SEG[n](L, x, ...a);
  L.width = x; L.exit = [x - 70, 300, 30, 50]; return L;
}
function mkQuiet(ch, num, th, say, deco, lore, ids) {
  const T = (x, cyc, len, ph) => ({x, y:320, w:110, h:16, cyc, len, ph});
  const L = {ch, num, width:2800, say, ...th, start:[40,300], exit:[2740,300,30,50], quiet:true,
    plat:[[0, GROUND, 520, 70], [1240, GROUND, 480, 70], [2440, GROUND, 360, 70], [900, 200, 80, 16], [2100, 190, 80, 16]],
    tplat:[T(620,260,170,0), T(830,260,170,190), T(1040,260,170,120), T(1820,240,160,0), T(2030,240,160,160), T(2240,240,160,80)],
    items:[{t:'clock', id:ids[0], x:925, y:172}, {t:'clock', id:ids[1], x:2125, y:162}],
    enemies:[], traps:[], cp:[1300, 2460], deco, lore};
  return L;
}
LEVELS.splice(4, 0, mkQuiet(1, 5,
  {sky:['#0b0f1a','#1c2638'], far:'rgba(18,26,42,0.85)', mid:'rgba(7,10,18,0.93)', near:'lamp', seed:71, dark:'3,6,14', darkA:0.5, amb:'dust', ambCol:'rgba(150,200,240,0.45)'},
  'اینجا هیچ‌کس نیست. فقط من و زمان.',
  [{x:380, k:'child'}, {x:1480, k:'still'}, {x:2560, k:'ring'}],
  [{x:200, s:'اینجا آرام است. مشکوک‌ترین چیزی که تا حالا دیده‌ام.'},
   {x:330, s:'پسرم. هر شش ثانیه همین‌جا می‌دود. هر بار همین‌جا می‌ایستد.'},
   {x:1410, s:'زنم. می‌خواهم دستش را بگیرم. دستم از او رد می‌شود.'},
   {x:2480, s:'نمی‌توانم بیرونشان بیاورم. هنوز نه.'}],
  ['Q1A', 'Q1B']));
LEVELS.push(
  mkLevel2(1, {sky:['#1a0f26','#3a1a3a'], far:'rgba(40,18,52,0.85)', mid:'rgba(14,6,20,0.93)', near:'lamp', seed:61, dark:'10,3,16', darkA:0.55, amb:'dust', ambCol:'rgba(220,150,230,0.45)'},
    'همه می‌خندن. فقط من نمی‌دونم به چی.',
    [['flat',200],['spikes',560,3],['arena',640,['h','h','h'],0],['saws',620,3,0.04],['stairs',4,76,'L2X1'],['arena',680,['h','hb','h'],1],['jets',620,3],['spikes',620,3],['arena',700,['bd','h','a'],2],['flat',200]]),
  mkLevel2(2, {sky:['#0d1420','#1e2a3a'], far:'rgba(18,28,44,0.85)', mid:'rgba(6,10,18,0.93)', near:'pipe', seed:62, dark:'4,8,16', darkA:0.58, amb:'rain', ambCol:'rgba(150,200,230,0.4)'},
    'بوی سیرک می‌ده. سیرکِ سوخته.',
    [['flat',200],['jets',620,4],['stairs',5,78],['arena',700,['sd','a','bd','a'],3],['saws',660,4,0.045],['spikes',600,4],['stairs',5,82,'L2X2'],['arena',720,['hb','sd','hb'],4],['jets',640,4],['saws',640,4,0.05],['flat',200]]),
  mkLevel2(3, {sky:['#1a1020','#4a2030'], far:'rgba(48,20,34,0.85)', mid:'rgba(16,6,12,0.93)', near:'pillar', seed:63, dark:'12,4,8', darkA:0.55, amb:'ember', ambCol:'rgba(255,150,120,0.8)'},
    'اره‌ها دارن می‌خندن. حس می‌کنم بهم می‌خندن.',
    [['flat',200],['stairs',5,80],['arena',720,['ph','ah','a'],0],['saws',700,5,0.05],['jets',680,5],['stairs',6,84,'L2X3'],['arena',760,['ah','sd','ph','a'],1],['spikes',660,5],['saws',700,5,0.055],['arena',740,['ah','ph','bd'],2],['flat',200]]),
  mkLevel2(4, {sky:['#101a18','#203a30'], far:'rgba(20,40,36,0.85)', mid:'rgba(6,14,12,0.93)', near:'pipe', seed:64, dark:'3,10,8', darkA:0.58, amb:'dust', ambCol:'rgba(150,230,200,0.4)'},
    'یه سؤال دارم. جواب هم ندارم. باحاله.',
    [['flat',200],['jets',640,5],['stairs',6,84],['saws',720,5,0.055],['arena',760,['ah','sd','ah','ph'],3],['spikes',680,5],['stairs',6,86,'L2X4'],['jets',700,5],['arena',780,['ah','bd','ph','ah'],4],['saws',720,6,0.06],['flat',200]]),
  mkQuiet(2, 5,
    {sky:['#1a1020','#3a2240'], far:'rgba(36,20,48,0.85)', mid:'rgba(14,6,18,0.93)', near:'pillar', seed:72, dark:'10,4,14', darkA:0.5, amb:'ember', ambCol:'rgba(240,200,140,0.7)'},
    'سکوت. این‌جا حتی خنده هم نیست.',
    [{x:380, k:'laugh'}, {x:1480, k:'dog'}, {x:2560, k:'hat'}],
    [{x:200, s:'از دیوارها صدای خنده می‌آید. بدون هیچ دهانی.'},
     {x:330, s:'همان خنده. بار سوم که می‌شنوم، هنوز نمی‌دانم کجاست.'},
     {x:1410, s:'یک سگ. خواب است. کسی دوستش دارد.'},
     {x:2480, s:'یک کلاه روی زمین. صاحبش هنوز نمرده.'}],
    ['Q2A', 'Q2B']),
  {
    ch:2, num:6, width:1400, say:'اول سگش. بعد خودش.',
    sky:['#1c0f2a','#5a2048'], far:'rgba(50,20,56,0.85)', mid:'rgba(16,6,20,0.93)', near:'pillar', seed:65, dark:'12,4,16', darkA:0.5,
    amb:'ember', ambCol:'rgba(255,210,120,0.8)', noGun:true,
    start:[90,300], exit:[-200,290,30,50],
    plat:[[0, GROUND, 1400, 70],[260, 190, 150, 16],[640, 190, 150, 16],[1020, 190, 150, 16]],
    items:[{t:'sword',x:50,y:330},{t:'sed',x:100,y:330},{t:'mol',x:310,y:165},{t:'clock',id:'L2B1',x:700,y:160}],
    enemies:[
      {x:1000,y:GROUND-170,min:600,max:1300,hp:36,drop:null,boss:true,khand:true},
      {x:1150,y:GROUND-56,min:300,max:1300,hp:8,drop:'heart',dog:true}
    ],
    traps:[],
    boss:true, bossId:2
  }
);

// ---- فصل ۳: ققنوس زمان ----
function mkLevelN(ch, num, th, say, segs) {
  const L = {ch, num, width:600, say, ...th, start:[40,300], exit:[0,300,30,50],
    plat:[[0, GROUND, 600, 70]], items:[{t:'sword',x:80,y:322},{t:'sed',x:130,y:322},{t:'gun',x:180,y:322}], enemies:[], traps:[]};
  let x = 600; for (const [n, ...a] of segs) x = SEG[n](L, x, ...a);
  L.width = x; L.exit = [x - 70, 300, 30, 50]; return L;
}
LEVELS.push(
  mkLevelN(3, 1, {sky:['#1c1008','#4a2410'], far:'rgba(60,30,14,0.85)', mid:'rgba(20,10,5,0.93)', near:'hourglass', nearList:['hourglass','clocktower','pillar','stack'], seed:81, dark:'14,6,2', darkA:0.5, amb:'ember', ambCol:'rgba(255,170,90,0.85)'},
    'گرمایی که آرامم نمی‌کند.',
    [['flat',200],['spikes',560,3],['arena',640,['lg','a','lg'],0],['saws',620,3,0.045],['stairs',4,76,'L3X1'],['arena',680,['sl','lg','a'],1],['jets',620,3],['arena',700,['lg','sd','sl'],2],['flat',200]]),
  mkLevelN(3, 2, {sky:['#101018','#34283a'], far:'rgba(30,24,44,0.85)', mid:'rgba(10,8,18,0.93)', near:'clocktower', nearList:['clocktower','pipe','hourglass'], seed:82, dark:'8,6,16', darkA:0.55, amb:'dust', ambCol:'rgba(200,170,240,0.5)'},
    'ساعت‌ها ایستاده‌اند. یا من ایستاده‌ام.',
    [['flat',200],['jets',640,4],['stairs',5,78],['arena',700,['sl','lg','bd','lg'],3],['saws',660,3,0.05],['spikes',620,3],['stairs',5,82,'L3X2'],['arena',720,['lh','sl','ph'],4],['jets',640,4],['arena',740,['sl','lg','sl'],0],['flat',200]]),
  mkLevelN(3, 3, {sky:['#1a0c0c','#5a2a18'], far:'rgba(72,32,18,0.85)', mid:'rgba(24,10,6,0.93)', near:'pillar', nearList:['pillar','hourglass','stack','tree'], seed:83, dark:'16,6,4', darkA:0.5, amb:'ember', ambCol:'rgba(255,150,100,0.85)'},
    'هر دشمنی اینجا زمان را به دلخواه خودش می‌پیچد.',
    [['flat',200],['stairs',5,80],['arena',720,['lh','sd','sl'],1],['saws',700,3,0.055],['jets',680,4],['stairs',6,84,'L3X3'],['arena',760,['slh','lg','ph','sl'],2],['spikes',660,3],['saws',700,3,0.06],['arena',740,['lh','slh','sd'],3],['flat',200]]),
  mkLevelN(3, 4, {sky:['#0c1418','#2a3a40'], far:'rgba(24,40,46,0.85)', mid:'rgba(6,14,18,0.93)', near:'hourglass', nearList:['hourglass','clocktower','pipe','tree'], seed:84, dark:'4,10,14', darkA:0.55, amb:'rain', ambCol:'rgba(170,210,230,0.4)'},
    'هر پر سفیدی که پیدا می‌کنم، هنوز گرم است.',
    [['flat',200],['jets',640,4],['stairs',6,84],['saws',720,3,0.06],['arena',760,['slh','lh','sl','bd'],4],['spikes',680,3],['stairs',6,86,'L3X4'],['jets',700,4],['arena',780,['slh','lh','slh','ph'],0],['saws',720,3,0.065],['arena',760,['lh','slh','sd','bd'],1],['flat',200]]),
  mkQuiet(3, 5,
    {sky:['#1c1210','#3a2418'], far:'rgba(48,28,18,0.85)', mid:'rgba(18,10,6,0.93)', near:'hourglass', nearList:['hourglass','clocktower'], seed:73, dark:'12,6,4', darkA:0.5, amb:'ember', ambCol:'rgba(255,200,140,0.75)'},
    'اینجا گرم است. اما نه خطرناک.',
    [{x:380, k:'feather'}, {x:1480, k:'ring'}, {x:2560, k:'feather'}],
    [{x:200, s:'گرما. اما نه از آن گرماهایی که آدم را آرام می‌کند.'},
     {x:330, s:'یک پر سفید. هنوز گرم است. انگار تازه افتاده.'},
     {x:1410, s:'هر چیزی که اینجا می‌میرد، دوباره برمی‌گردد. من هم.'},
     {x:2480, s:'کاش یک بار، فقط یک بار، چیزی را نکشته بودم.'}],
    ['Q3A', 'Q3B']),
  {
    ch:3, num:6, width:1400, say:'نکش. ولی یک‌جا هم نایست.',
    sky:['#14100c','#6a3a18'], far:'rgba(70,34,14,0.85)', mid:'rgba(22,10,4,0.93)', near:'hourglass', nearList:['hourglass','clocktower','pillar'], seed:85, dark:'16,6,2', darkA:0.45,
    amb:'ember', ambCol:'rgba(255,200,120,0.9)',
    start:[90,300], exit:[-200,290,30,50],
    plat:[[0, GROUND, 1400, 70],[260, 190, 150, 16],[640, 190, 150, 16],[1020, 190, 150, 16]],
    items:[{t:'clock',id:'L3C1',x:700,y:160}],
    enemies:[{x:560,y:GROUND-165,min:80,max:1320,hp:14,drop:null,boss:true,phoenix:true}],
    traps:[], boss:true, bossId:3, phoenix:true
  }
);




