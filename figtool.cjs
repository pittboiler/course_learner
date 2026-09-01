// figtool.cjs <course> [...]  — detailed per-file overflow report for fixing.
const fs=require('fs'),path=require('path');
const W={' ':278,'!':278,'"':355,'#':556,'$':556,'%':889,'&':667,"'":191,'(':333,')':333,'*':389,'+':584,',':278,'-':333,'.':278,'/':278,':':278,';':278,'<':584,'=':584,'>':584,'?':556,'@':1015,'[':278,']':278,'^':469,'_':556,'`':333,'{':334,'|':260,'}':334,'~':584};
for(let c=48;c<=57;c++)W[String.fromCharCode(c)]=556;
Object.assign(W,{A:667,B:667,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:500,K:667,L:556,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611});
Object.assign(W,{a:556,b:556,c:500,d:556,e:556,f:278,g:556,h:556,i:222,j:222,k:500,l:222,m:833,n:556,o:556,p:556,q:556,r:333,s:500,t:278,u:556,v:500,w:722,x:500,y:500,z:500});
const decode=s=>s.replace(/&#(\d+);/g,(m,d)=>String.fromCharCode(+d)).replace(/&#x([0-9a-f]+);/gi,(m,d)=>String.fromCharCode(parseInt(d,16))).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const tw=(t,s)=>[...t].reduce((w,ch)=>w+(W[ch]!==undefined?W[ch]:600),0)/1000*s;
function sizeAt(s,at,defSize){let size=defSize;const stack=[];const re=/<g\b([^>]*)>|<\/g>/g;let m;while((m=re.exec(s))&&m.index<at){if(m[0]==='</g>')stack.pop();else stack.push((m[1].match(/font-size="([\d.]+)"/)||[])[1]);}for(let i=stack.length-1;i>=0;i--)if(stack[i]!==undefined){size=parseFloat(stack[i]);break;}return size;}
const MIN=+(process.env.MIN||0);
for(const course of process.argv.slice(2)){
  const adir=`courses/${course}/lessons/assets`;
  if(!fs.existsSync(adir))continue;
  for(const f of fs.readdirSync(adir).filter(x=>x.endsWith('.svg')).sort()){
    const p=path.join(adir,f), s=fs.readFileSync(p,'utf8');
    const vb=s.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/); if(!vb)continue;
    const VW=+vb[1],VH=+vb[2];
    const grouped=/<g[^>]*transform=/i.test(s);
    const defSize=parseFloat((s.match(/font-size="([\d.]+)"/)||[0,13])[1]);
    const lines=s.split('\n'); const out=[];
    for(const m of s.matchAll(/<text([^>]*)>([\s\S]*?)<\/text>/g)){
      const attrs=m[1], txt=decode(m[2].replace(/<[^>]*>/g,''));
      if(/transform=/.test(attrs))continue;
      const x=parseFloat((attrs.match(/\bx="(-?[\d.]+)"/)||[0,0])[1]);
      const y=parseFloat((attrs.match(/\by="(-?[\d.]+)"/)||[0,0])[1]);
      const size=parseFloat((attrs.match(/font-size="([\d.]+)"/)||[0,sizeAt(s,m.index,defSize)])[1]);
      const anchor=(attrs.match(/text-anchor="(\w+)"/)||[0,'start'])[1];
      const w=tw(txt,size); let x0=x,x1=x+w;
      if(anchor==='middle'){x0=x-w/2;x1=x+w/2;} if(anchor==='end'){x0=x-w;x1=x;}
      if(!(x1>VW-2||x0<0||y>VH-1||y<8))continue;
      const over=Math.max(x1-(VW-2),-x0,y-(VH-1),8-y);
      if(over<MIN)continue;
      const ln=lines.findIndex(L=>L.includes(m[0].split('\n')[0]))+1;
      out.push(`  L${ln} over=${over.toFixed(0)} ${anchor} x=${x} y=${y} sz=${size} w=${w.toFixed(0)} span=${x0.toFixed(0)}..${x1.toFixed(0)} | ${txt}`);
    }
    if(out.length)console.log(`${course}/${f}  viewBox ${VW}x${VH}${grouped?'  [GROUPED-CHECK]':''}\n`+out.join('\n'));
  }
}
