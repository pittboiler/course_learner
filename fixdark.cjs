// fixdark.cjs <file> [...] — repair SVGs whose dark ink is invisible on the dark lesson card.
//   theme-palette figures (they already use #4a90d9 + #8a8a8a): recolour the stray dark
//     ink to the palette grey, keeping the no-background style.
//   legacy light-theme figures (arbitrary multi-hue schemes designed for a white page):
//     give them the full-canvas white rect they always assumed, preserving their colours.
const fs=require('fs');
let a=0,b=0;
for(const p of process.argv.slice(2)){
  let s=fs.readFileSync(p,'utf8');
  const vb=s.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/); if(!vb){console.log('NO VIEWBOX '+p);continue;}
  const themed=/#4a90d9/i.test(s)&&/#8a8a8a/i.test(s);
  if(themed){
    s=s.replace(/#(000000|000|111111|111|222222|222|333333|333|444444|444|555555|555)\b/gi,'#8a8a8a')
       .replace(/(fill|stroke)="black"/gi,'$1="#8a8a8a"');
    a++;
  }else{
    s=s.replace(/(<svg[^>]*>)/,`$1\n  <rect x="0" y="0" width="${vb[1]}" height="${vb[2]}" fill="#ffffff"/>`);
    b++;
  }
  fs.writeFileSync(p,s);
}
console.log(`recoloured ${a} theme-palette figure(s), added background to ${b} legacy figure(s)`);
