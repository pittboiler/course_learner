// autowiden.cjs <course> [...] — for text that overflows the right/bottom edge by a
// small amount, grow the viewBox instead of moving the label. Cannot create overlaps.
// Keeps a full-canvas background rect (legacy light-bg figures) in sync with the new size.
const fs=require('fs'),path=require('path');
const W={' ':278,'!':278,'"':355,'#':556,'$':556,'%':889,'&':667,"'":191,'(':333,')':333,'*':389,'+':584,',':278,'-':333,'.':278,'/':278,':':278,';':278,'<':584,'=':584,'>':584,'?':556,'@':1015,'[':278,']':278,'^':469,'_':556,'`':333,'{':334,'|':260,'}':334,'~':584};
for(let c=48;c<=57;c++)W[String.fromCharCode(c)]=556;
Object.assign(W,{A:667,B:667,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:500,K:667,L:556,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611});
Object.assign(W,{a:556,b:556,c:500,d:556,e:556,f:278,g:556,h:556,i:222,j:222,k:500,l:222,m:833,n:556,o:556,p:556,q:556,r:333,s:500,t:278,u:556,v:500,w:722,x:500,y:500,z:500});
const decode=s=>s.replace(/&#(\d+);/g,(m,d)=>String.fromCharCode(+d)).replace(/&#x([0-9a-f]+);/gi,(m,d)=>String.fromCharCode(parseInt(d,16))).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const tw=(t,s)=>[...t].reduce((w,ch)=>w+(W[ch]!==undefined?W[ch]:600),0)/1000*s;
function sizeAt(s,at,defSize){let size=defSize;const stack=[];const re=/<g\b([^>]*)>|<\/g>/g;let m;while((m=re.exec(s))&&m.index<at){if(m[0]==='</g>')stack.pop();else stack.push((m[1].match(/font-size="([\d.]+)"/)||[])[1]);}for(let i=stack.length-1;i>=0;i--)if(stack[i]!==undefined){size=parseFloat(stack[i]);break;}return size;}
const MAX=+(process.env.MAXWIDEN||25);
let nf=0;
for(const course of process.argv.slice(2)){
  const adir=`courses/${course}/lessons/assets`;
  if(!fs.existsSync(adir))continue;
  for(const f of fs.readdirSync(adir).filter(x=>x.endsWith('.svg'))){
    const p=path.join(adir,f); let s=fs.readFileSync(p,'utf8');
    const vb=s.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/); if(!vb)continue;
    const VW=+vb[1],VH=+vb[2];
    if(/<g[^>]*transform=/i.test(s))continue;
    const defSize=parseFloat((s.match(/font-size="([\d.]+)"/)||[0,13])[1]);
    let dR=0,dB=0,blocked=false;
    for(const m of s.matchAll(/<text([^>]*)>([\s\S]*?)<\/text>/g)){
      const attrs=m[1]; if(/transform=/.test(attrs))continue;
      const txt=decode(m[2].replace(/<[^>]*>/g,''));
      const xm=attrs.match(/\bx="(-?[\d.]+)"/), ym=attrs.match(/\by="(-?[\d.]+)"/);
      if(!xm||!ym)continue;
      const x=+xm[1],y=+ym[1];
      const size=parseFloat((attrs.match(/font-size="([\d.]+)"/)||[0,sizeAt(s,m.index,defSize)])[1]);
      const anchor=(attrs.match(/text-anchor="(\w+)"/)||[0,'start'])[1];
      const w=tw(txt,size); let x0=x,x1=x+w;
      if(anchor==='middle'){x0=x-w/2;x1=x+w/2;} if(anchor==='end'){x0=x-w;x1=x;}
      if(x0<0||y<8){blocked=true;continue;}          // left/top: widening cannot help
      dR=Math.max(dR,x1-(VW-4)); dB=Math.max(dB,y-(VH-3));
    }
    if(dR<=0&&dB<=0)continue;
    if(dR>MAX||dB>MAX)continue;                      // too big: needs a human
    const NW=dR>0?Math.ceil(VW+dR+2):VW, NH=dB>0?Math.ceil(VH+dB+2):VH;
    // keep a full-canvas background rect covering the new canvas
    s=s.replace(new RegExp(`(<rect[^>]*?)width="${VW}"([^>]*?)height="${VH}"`,'g'),`$1width="${NW}"$2height="${NH}"`);
    s=s.replace(new RegExp(`(<rect[^>]*?)height="${VH}"([^>]*?)width="${VW}"`,'g'),`$1height="${NH}"$2width="${NW}"`);
    s=s.replace(/viewBox="0 0 [\d.]+ [\d.]+"/,`viewBox="0 0 ${NW} ${NH}"`);
    s=s.replace(/(<svg[^>]*?)\bwidth="[\d.]+"([^>]*?)\bheight="[\d.]+"/,`$1width="${NW}"$2height="${NH}"`);
    fs.writeFileSync(p,s); nf++;
  }
}
console.log(`widened ${nf} file(s)`);
