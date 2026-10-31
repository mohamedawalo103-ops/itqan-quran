const norm=s=>s.normalize('NFD').replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^\u0621-\u064A ]/g,'').replace(/\s+/g,' ').trim();
const sk=w=>norm(w).replace(/ا/g,''),CONF={ق:'ك',ك:'ق',ح:'ه',ه:'ح',ص:'س',س:'ص',ط:'ت',ت:'ط',ض:'د',د:'ض',ظ:'ز',ز:'ظ',ذ:'ز',ث:'س',خ:'ح',غ:'خ'};
function lev(a,b){const d=[...Array(a.length+1)].map((_,i)=>[i]);for(let j=1;j<=b.length;j++)d[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]!==b[j-1]));return d[a.length][b.length]}
const sim=(a,b)=>1-lev(a,b)/Math.max(a.length,b.length,1);
function align(T,H){const n=T.length,m=H.length,d=[...Array(n+1)].map(()=>Array(m+1).fill(0)),e=1e-9,s=(i,j)=>d[i-1][j-1]+1-sim(T[i-1],H[j-1]);for(let i=0;i<=n;i++)d[i][0]=i;for(let j=0;j<=m;j++)d[0][j]=j;
for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,s(i,j));
let i=n,j=m;const out=Array(n).fill(null),extra=[];while(i>0||j>0){if(i>0&&j>0&&Math.abs(d[i][j]-s(i,j))<e){out[i-1]=H[j-1];i--;j--}else if(i>0&&Math.abs(d[i][j]-d[i-1][j]-1)<e)i--;else{extra.unshift(H[j-1]);j--}}return{out,extra}}
function conf(a,h){if(a.length!==h.length)return null;let k=-1;for(let i=0;i<a.length;i++)if(a[i]!==h[i]){if(k>=0)return null;k=i}return k>=0&&CONF[a[k]]===h[k]?[a[k],h[k]]:null}
if(typeof module!=='undefined')module.exports={norm,sk,sim,align,conf};
