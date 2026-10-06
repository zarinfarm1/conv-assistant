(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jl="180",Df=0,Du=1,Uf=2,uh=1,dh=2,ci=3,Hi=0,an=1,Fe=2,Bi=0,sr=1,Uu=2,Nu=3,Fu=4,Nf=5,hs=100,Ff=101,Of=102,Bf=103,zf=104,kf=200,Hf=201,Vf=202,Gf=203,Tc=204,Ac=205,Wf=206,Xf=207,qf=208,Yf=209,$f=210,Zf=211,Kf=212,Jf=213,jf=214,Rc=0,Cc=1,Pc=2,ar=3,Lc=4,Ic=5,Dc=6,Uc=7,hh=0,Qf=1,tp=2,zi=0,ep=1,np=2,ip=3,jl=4,sp=5,rp=6,op=7,fh=300,cr=301,lr=302,Nc=303,Fc=304,Ma=306,Wr=1e3,Ii=1001,Oc=1002,Un=1003,ap=1004,uo=1005,$n=1006,La=1007,vs=1008,jn=1009,ph=1010,mh=1011,Xr=1012,Ql=1013,Es=1014,fi=1015,oo=1016,tu=1017,eu=1018,qr=1020,gh=35902,_h=35899,vh=1021,xh=1022,Dn=1023,Yr=1026,$r=1027,Mh=1028,nu=1029,Sh=1030,iu=1031,su=1033,Zo=33776,Ko=33777,Jo=33778,jo=33779,Bc=35840,zc=35841,kc=35842,Hc=35843,Vc=36196,Gc=37492,Wc=37496,Xc=37808,qc=37809,Yc=37810,$c=37811,Zc=37812,Kc=37813,Jc=37814,jc=37815,Qc=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,cl=36283,ll=36284,ul=36285,dl=36286,cp=3200,lp=3201,yh=0,up=1,Li="",Ae="srgb",ur="srgb-linear",ca="linear",ce="srgb",Ls=7680,Ou=519,dp=512,hp=513,fp=514,wh=515,pp=516,mp=517,gp=518,_p=519,hl=35044,Bu="300 es",Zn=2e3,la=2001;class gr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,fl=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function vp(i,t){return(i%t+t)%t}function Da(i,t,e){return(1-e)*i+e*t}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-a;const p=l*h+c*f+u*g+d*_,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),T=Math.atan2(R,p*w);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const x=a*w;if(l=l*m+h*x,c=c*m+f*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new P,zu=new Xi;class Vt{constructor(t,e,n,s,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],E=s[4],x=s[7],R=s[2],T=s[5],L=s[8];return r[0]=o*_+a*w+l*R,r[3]=o*m+a*E+l*T,r[6]=o*p+a*x+l*L,r[1]=c*_+u*w+d*R,r[4]=c*m+u*E+d*T,r[7]=c*p+u*x+d*L,r[2]=h*_+f*w+g*R,r[5]=h*m+f*E+g*T,r[8]=h*p+f*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Vt;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){const i=Zr("canvas");return i.style.display="block",i}const ku={};function Kr(i){i in ku||(ku[i]=!0,console.warn(i))}function Mp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Hu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){const i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:t,whitePoint:n,transfer:ca,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),i}const te=Sp();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Is;class yp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=Zr("canvas")),Is.width=t.width,Is.height=t.height;const s=Is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wp=0;class ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ep=0;const Oa=new P;class Je extends gr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Ii,s=Ii,r=$n,o=vs,a=Dn,l=jn,c=Je.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=mi(),this.name="",this.source=new ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=fh;Je.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(f+1)/2,R=(p+1)/2,T=(u+h)/4,L=(d+_)/4,D=(g+m)/4;return E>x&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=L/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=L/r,s=D/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends gr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Je(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ru(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bh extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tp extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),fo.subVectors(this.max,Mr),Ds.subVectors(t.a,Mr),Us.subVectors(t.b,Mr),Ns.subVectors(t.c,Mr),xi.subVectors(Us,Ds),Mi.subVectors(Ns,Us),Zi.subVectors(Ds,Ns);let e=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-Zi.z,Zi.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,Zi.z,0,-Zi.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-Zi.y,Zi.x,0];return!Ba(e,Ds,Us,Ns,fo)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,Ds,Us,Ns,fo))?!1:(po.crossVectors(xi,Mi),e=[po.x,po.y,po.z],Ba(e,Ds,Us,Ns,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ni=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,ho=new Rs,Ds=new P,Us=new P,Ns=new P,xi=new P,Mi=new P,Zi=new P,Mr=new P,fo=new P,po=new P,Ki=new P;function Ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ap=new Rs,Sr=new P,za=new P;class ao{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(za)),this.expandByPoint(Sr.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ii=new P,ka=new P,mo=new P,Si=new P,Ha=new P,go=new P,Va=new P;class Th{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=Si.dot(this.direction),l=-Si.dot(mo),c=Si.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ka).addScaledVector(mo,h),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){Ha.subVectors(e,t),go.subVectors(n,t),Va.crossVectors(Ha,go);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);const l=a*this.direction.dot(go.crossVectors(Si,go));if(l<0)return null;const c=a*this.direction.dot(Ha.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(Va);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,l,c,u,d,h,f,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,h,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rp,t,Cp)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),yi.crossVectors(n,dn),yi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),yi.crossVectors(n,dn)),yi.normalize(),_o.crossVectors(dn,yi),s[0]=yi.x,s[4]=_o.x,s[8]=dn.x,s[1]=yi.y,s[5]=_o.y,s[9]=dn.y,s[2]=yi.z,s[6]=_o.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],E=n[7],x=n[11],R=n[15],T=s[0],L=s[4],D=s[8],S=s[12],M=s[1],A=s[5],N=s[9],k=s[13],X=s[2],q=s[6],H=s[10],Q=s[14],G=s[3],rt=s[7],lt=s[11],Mt=s[15];return r[0]=o*T+a*M+l*X+c*G,r[4]=o*L+a*A+l*q+c*rt,r[8]=o*D+a*N+l*H+c*lt,r[12]=o*S+a*k+l*Q+c*Mt,r[1]=u*T+d*M+h*X+f*G,r[5]=u*L+d*A+h*q+f*rt,r[9]=u*D+d*N+h*H+f*lt,r[13]=u*S+d*k+h*Q+f*Mt,r[2]=g*T+_*M+m*X+p*G,r[6]=g*L+_*A+m*q+p*rt,r[10]=g*D+_*N+m*H+p*lt,r[14]=g*S+_*k+m*Q+p*Mt,r[3]=w*T+E*M+x*X+R*G,r[7]=w*L+E*A+x*q+R*rt,r[11]=w*D+E*N+x*H+R*lt,r[15]=w*S+E*k+x*Q+R*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*f-n*l*f)+_*(+e*l*f-e*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*d+e*a*h+s*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=d*m*c-_*h*c+_*l*f-a*m*f-d*l*p+a*h*p,E=g*h*c-u*m*c-g*l*f+o*m*f+u*l*p-o*h*p,x=u*_*c-g*d*c+g*a*f-o*_*f-u*a*p+o*d*p,R=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,T=e*w+n*E+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return t[0]=w*L,t[1]=(_*h*r-d*m*r-_*s*f+n*m*f+d*s*p-n*h*p)*L,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*L,t[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*f-n*l*f)*L,t[4]=E*L,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*L,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*L,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*f+e*l*f)*L,t[8]=x*L,t[9]=(g*d*r-u*_*r-g*n*f+e*_*f+u*n*p-e*d*p)*L,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*L,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*f-e*a*f)*L,t[12]=R*L,t[13]=(u*_*s-g*d*s+g*n*h-e*_*h-u*n*m+e*d*m)*L,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*L,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*h+e*a*h)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,w=l*c,E=l*u,x=l*d,R=n.x,T=n.y,L=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+x)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(h+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+E)*L,s[9]=(m-w)*L,s[10]=(1-(h+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Fs.set(s[0],s[1],s[2]).length();const o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const c=1/r,u=1/o,d=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Zn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Zn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===la)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Zn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Zn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===la)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fs=new P,Tn=new fe,Rp=new P(0,0,0),Cp=new P(1,1,1),yi=new P,_o=new P,dn=new P,Gu=new fe,Wu=new Xi;class Fn{constructor(t=0,e=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pp=0;const Xu=new P,Os=new Xi,si=new fe,vo=new P,yr=new P,Lp=new P,Ip=new Xi,qu=new P(1,0,0),Yu=new P(0,1,0),$u=new P(0,0,1),Zu={type:"added"},Dp={type:"removed"},Bs={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Be extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new P,e=new Fn,n=new Xi,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Vt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(qu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis($u,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis($u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(yr,vo,this.up):si.lookAt(vo,yr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(si),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dp),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,Lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new P(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new P,ri=new P,Wa=new P,oi=new P,zs=new P,ks=new P,Ku=new P,Xa=new P,qa=new P,Ya=new P,$a=new ue,Za=new ue,Ka=new ue;class yn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),ri.subVectors(n,e),Wa.subVectors(t,e);const o=An.dot(An),a=An.dot(ri),l=An.dot(Wa),c=ri.dot(ri),u=ri.dot(Wa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return $a.setScalar(0),Za.setScalar(0),Ka.setScalar(0),$a.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,n),Ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ka,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),ri.subVectors(t,e),An.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),An.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,n),ks.subVectors(r,n),Xa.subVectors(t,n);const l=zs.dot(Xa),c=ks.dot(Xa);if(l<=0&&c<=0)return e.copy(n);qa.subVectors(t,s);const u=zs.dot(qa),d=ks.dot(qa);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(zs,o);Ya.subVectors(t,r);const f=zs.dot(Ya),g=ks.dot(Ya);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ks,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Ku.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Ku,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=vp(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return te.workingToColorSpace(Ye.copy(this),t),Math.round(Zt(Ye.r*255,0,255))*65536+Math.round(Zt(Ye.g*255,0,255))*256+Math.round(Zt(Ye.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ae){te.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(xo);const n=Da(wi.h,xo.h,e),s=Da(wi.s,xo.s,e),r=Da(wi.l,xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Gt;Gt.NAMES=Ah;let Up=0;class _r extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=sr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dr extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,Mo=new _t;let Np=0;class Nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hl&&(t.usage=this.usage),t}}class Rh extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ch extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fp=0;const _n=new fe,ja=new Be,Hs=new P,hn=new Rs,wr=new Rs,Ue=new P;class cn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Ch:Rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(hn.min,wr.min),hn.expandByPoint(Ue),Ue.addVectors(hn.max,wr.max),hn.expandByPoint(Ue)):(hn.expandByPoint(wr.min),hn.expandByPoint(wr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),Ue.add(Hs)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,u=new P,d=new P,h=new _t,f=new _t,g=new _t,_=new P,m=new P;function p(D,S,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[D].add(_),a[S].add(_),a[M].add(_),l[D].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,S=w.length;D<S;++D){const M=w[D],A=M.start,N=M.count;for(let k=A,X=A+N;k<X;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new P,x=new P,R=new P,T=new P;function L(D){R.fromBufferAttribute(s,D),T.copy(R);const S=a[D];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(T,S);const A=x.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,A)}for(let D=0,S=w.length;D<S;++D){const M=w[D],A=M.start,N=M.count;for(let k=A,X=A+N;k<X;k+=3)L(t.getX(k+0)),L(t.getX(k+1)),L(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Nn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new fe,Ji=new Th,So=new ao,ju=new P,yo=new P,wo=new P,Eo=new P,Qa=new P,bo=new P,Qu=new P,To=new P;class U extends Be{constructor(t=new cn,e=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Qa.fromBufferAttribute(d,t),o?bo.addScaledVector(Qa,u):bo.addScaledVector(Qa.sub(e),u))}e.add(bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(So.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(So,ju)===null||Ji.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Ju.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,R=E;x<R;x+=3){const T=a.getX(x),L=a.getX(x+1),D=a.getX(x+2);s=Ao(this,p,t,n,c,u,d,T,L,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Ao(this,o,t,n,c,u,d,w,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,R=E;x<R;x+=3){const T=x,L=x+1,D=x+2;s=Ao(this,p,t,n,c,u,d,T,L,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,E=m+1,x=m+2;s=Ao(this,o,t,n,c,u,d,w,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Op(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Hi,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:i}}function Ao(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,yo),i.getVertexPosition(l,wo),i.getVertexPosition(c,Eo);const u=Op(i,t,e,n,yo,wo,Eo,Qu);if(u){const d=new P;yn.getBarycoord(Qu,yo,wo,Eo,d),s&&(u.uv=yn.getInterpolatedAttribute(s,a,l,c,d,new _t)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,l,c,d,new _t)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};yn.getNormal(yo,wo,Eo,h.normal),u.face=h,u.barycoord=d}return u}class ot extends cn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function g(_,m,p,w,E,x,R,T,L,D,S){const M=x/L,A=R/D,N=x/2,k=R/2,X=T/2,q=L+1,H=D+1;let Q=0,G=0;const rt=new P;for(let lt=0;lt<H;lt++){const Mt=lt*A-k;for(let Wt=0;Wt<q;Wt++){const ne=Wt*M-N;rt[_]=ne*w,rt[m]=Mt*E,rt[p]=X,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=T>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(Wt/L),d.push(1-lt/D),Q+=1}}for(let lt=0;lt<D;lt++)for(let Mt=0;Mt<L;Mt++){const Wt=h+Mt+q*lt,ne=h+Mt+q*(lt+1),ie=h+(Mt+1)+q*(lt+1),Kt=h+(Mt+1)+q*lt;l.push(Wt,ne,Kt),l.push(ne,ie,Kt),G+=6}a.addGroup(f,G,S),f+=G,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=hr(i[e]);for(const s in n)t[s]=n[s]}return t}function Bp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const zp={clone:hr,merge:tn};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lh extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new P,td=new _t,ed=new _t;class on extends Lh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vs=-90,Gs=1;class Vp extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Vs,Gs,t,e);s.layers=this.layers,this.add(s);const r=new on(Vs,Gs,t,e);r.layers=this.layers,this.add(r);const o=new on(Vs,Gs,t,e);o.layers=this.layers,this.add(o);const a=new on(Vs,Gs,t,e);a.layers=this.layers,this.add(a);const l=new on(Vs,Gs,t,e);l.layers=this.layers,this.add(l);const c=new on(Vs,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ih extends Je{constructor(t=[],e=cr,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gp extends bs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ih(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ot(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Bi});r.uniforms.tEquirect.value=e;const o=new U(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=$n),new Vp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Xe extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class au{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new au(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dh extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new P;class ua{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uh extends _r{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const Er=new P,Xs=new P,qs=new P,Ys=new _t,br=new _t,Nh=new fe,Ro=new P,Tr=new P,Co=new P,nd=new _t,ec=new _t,id=new _t;class qp extends Be{constructor(t=new Uh){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new cn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xp(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new ua(n,3,0,!1)),Ws.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new _t(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Po(Ro.set(-.5,-.5,0),qs,o,Xs,s,r),Po(Tr.set(.5,-.5,0),qs,o,Xs,s,r),Po(Co.set(.5,.5,0),qs,o,Xs,s,r),nd.set(0,0),ec.set(1,0),id.set(1,1);let a=t.ray.intersectTriangle(Ro,Tr,Co,!1,Er);if(a===null&&(Po(Tr.set(-.5,.5,0),qs,o,Xs,s,r),ec.set(0,1),a=t.ray.intersectTriangle(Ro,Co,Tr,!1,Er),a===null))return;const l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:yn.getInterpolation(Er,Ro,Tr,Co,nd,ec,id,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Po(i,t,e,n,s,r){Ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(br.x=r*Ys.x-s*Ys.y,br.y=s*Ys.x+r*Ys.y):br.copy(Ys),i.copy(t),i.x+=br.x,i.y+=br.y,i.applyMatrix4(Nh)}const nc=new P,Yp=new P,$p=new Vt;class cs{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nc.subVectors(n,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$p.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new ao,Zp=new _t(.5,.5),Lo=new P;class cu{constructor(t=new cs,e=new cs,n=new cs,s=new cs,r=new cs,o=new cs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],w=r[12],E=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,f-u,p-g,R-w).normalize(),s[1].setComponents(c+o,f+u,p+g,R+w).normalize(),s[2].setComponents(c+a,f+d,p+_,R+E).normalize(),s[3].setComponents(c-a,f-d,p-_,R-E).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,f-h,p-m,R-x).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-x).normalize(),e===Zn)s[5].setComponents(c+l,f+h,p+m,R+x).normalize();else if(e===la)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);const e=Zp.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sa extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fh extends Je{constructor(t,e,n=Es,s,r,o,a=Un,l=Un,c,u=Yr,d=1){if(u!==Yr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ru(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Oh extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lu extends cn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,u=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends cn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function w(){const x=new P,R=new P;let T=0;const L=(e-t)/n;for(let D=0;D<=r;D++){const S=[],M=D/r,A=M*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,X=k*l+a,q=Math.sin(X),H=Math.cos(X);R.x=A*q,R.y=-M*n+m,R.z=A*H,d.push(R.x,R.y,R.z),x.set(q,L,H).normalize(),h.push(x.x,x.y,x.z),f.push(k,1-M),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const M=_[S][D],A=_[S+1][D],N=_[S+1][D+1],k=_[S][D+1];(t>0||S!==0)&&(u.push(M,A,k),T+=3),(e>0||S!==r-1)&&(u.push(A,N,k),T+=3)}c.addGroup(p,T,0),p+=T}function E(x){const R=g,T=new _t,L=new P;let D=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const A=g;for(let N=0;N<=s;N++){const X=N/s*l+a,q=Math.cos(X),H=Math.sin(X);L.x=S*H,L.y=m*M,L.z=S*q,d.push(L.x,L.y,L.z),h.push(0,M,0),T.x=q*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),g++}for(let N=0;N<s;N++){const k=R+N,X=A+N;x===!0?u.push(X,X+1,k):u.push(X+1,X,k),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ya extends oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ya(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new fe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class uu extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kp extends uu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function du(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Io=new P,ic=new du,sc=new du,rc=new du;class hu extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Io.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ic.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),sc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),rc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),sc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),rc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ic.calc(l),sc.calc(l),rc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Jp(i,t){const e=1-i;return e*e*t}function jp(i,t){return 2*(1-i)*i*t}function Qp(i,t){return i*i*t}function zr(i,t,e,n){return Jp(i,t)+jp(i,e)+Qp(i,n)}function tm(i,t){const e=1-i;return e*e*e*t}function em(i,t){const e=1-i;return 3*e*e*i*t}function nm(i,t){return 3*(1-i)*i*i*t}function im(i,t){return i*i*i*t}function kr(i,t,e,n,s){return tm(i,t)+em(i,e)+nm(i,n)+im(i,s)}class Bh extends Qn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sm extends Qn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends Qn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rm extends Qn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends Qn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends Qn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y),zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(sd(a,l.x,c.x,u.x,d.x),sd(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var rd=Object.freeze({__proto__:null,ArcCurve:Kp,CatmullRomCurve3:hu,CubicBezierCurve:Bh,CubicBezierCurve3:sm,EllipseCurve:uu,LineCurve:zh,LineCurve3:rm,QuadraticBezierCurve:kh,QuadraticBezierCurve3:om,SplineCurve:Hh});class am extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rd[s.type]().fromJSON(s))}return this}}class od extends am{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new kh(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Bh(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new uu(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vh extends od{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new od().fromJSON(s))}return this}}function cm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Gh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fm(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=e;h<s;h+=e){const f=i[h],g=i[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Jr(r,o,e,a,l,c,0),o}function Gh(i,t,e,n,s){let r;if(s===Em(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=ad(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ad(o/n|0,i[o],i[o+1],r);return r&&fr(r,r.next)&&(Qr(r),r=r.next),r}function Ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fr(e,e.next)||Se(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&vm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?um(i,n,s,r):lm(i)){t.push(l.i,i.i,c.i),Qr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=dm(Ts(i),t),Jr(i,t,e,n,s,r,2)):o===2&&hm(i,t,e,n,s,r):Jr(Ts(i),t,e,n,s,r,1);break}}}function lm(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Dr(s,a,r,l,o,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function um(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),_=Math.max(a,l,c),m=Math.max(u,d,h),p=pl(f,g,t,e,n),w=pl(_,m,t,e,n);let E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=w;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Dr(a,u,l,d,c,h,E.x,E.y)&&Se(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Dr(a,u,l,d,c,h,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Dr(a,u,l,d,c,h,E.x,E.y)&&Se(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Dr(a,u,l,d,c,h,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!fr(n,s)&&Xh(n,e,e.next,s)&&jr(n,s)&&jr(s,n)&&(t.push(n.i,e.i,s.i),Qr(e),Qr(e.next),e=i=s),e=e.next}while(e!==i);return Ts(e)}function hm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sm(o,a)){let l=qh(o,a);o=Ts(o,o.next),l=Ts(l,l.next),Jr(o,t,e,n,s,r,0),Jr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Gh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mm(c))}s.sort(pm);for(let r=0;r<s.length;r++)e=mm(s[r],e);return e}function pm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mm(i,t){const e=gm(i,t);if(!e)return t;const n=qh(e,i);return Ts(n,n.next),Ts(e,e.next)}function gm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(fr(i,e))return e;do{if(fr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);jr(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&_m(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function _m(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function vm(i,t,e,n){let s=i;do s.z===0&&(s.z=pl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function pl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Dr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wh(i,t,e,n,s,r,o,a)}function Sm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ym(i,t)&&(jr(i,t)&&jr(t,i)&&wm(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||fr(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fr(i,t){return i.x===t.x&&i.y===t.y}function Xh(i,t,e,n){const s=Uo(Se(i,t,e)),r=Uo(Se(i,t,n)),o=Uo(Se(e,n,i)),a=Uo(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Do(i,e,t)||r===0&&Do(i,n,t)||o===0&&Do(e,i,n)||a===0&&Do(e,t,n))}function Do(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Uo(i){return i>0?1:i<0?-1:0}function ym(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function wm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qh(i,t){const e=ml(i.i,i.x,i.y),n=ml(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ad(i,t,e,n){const s=ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ml(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Em(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class bm{static triangulate(t,e,n=2){return cm(t,e,n)}}class Hr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];cd(t),ld(n,t);let o=t.length;e.forEach(cd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ld(n,e[l]);const a=bm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function cd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ld(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class zt extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*h-o;for(let E=0;E<c;E++){const x=E*d-r;g.push(x,-w,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const E=w+c*p,x=w+c*(p+1),R=w+1+c*(p+1),T=w+1+c*p;f.push(E,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.width,t.height,t.widthSegments,t.heightSegments)}}class fu extends cn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,f=new P,g=new _t;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const w=p+m,E=w,x=w+n+1,R=w+n+2,T=w+1;a.push(E,x,T),a.push(x,R,T)}}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pu extends cn{constructor(t=new Vh([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(o,2));function c(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;Hr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];Hr.isClockWise(w)===!0&&(g[m]=w.reverse())}const _=Hr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){const w=f[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=_.length;m<p;m++){const w=_[m],E=w[0]+d,x=w[1]+d,R=w[2]+d;n.push(E,x,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Tm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new pu(n,t.curveSegments)}}function Tm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class En extends cn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],E=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+x,1-E),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const E=u[p][w+1],x=u[p][w],R=u[p+1][w],T=u[p+1][w+1];(p!==0||o>0)&&f.push(E,x,T),(p!==n-1||l<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class to extends cn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new P,d=new P,h=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class st extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Am extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rm extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Pm=new Cm;class mu{constructor(t){this.manager=t!==void 0?t:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}mu.DEFAULT_MATERIAL_NAME="__DEFAULT";const $s=new WeakMap;class Lm extends mu{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=oc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=$s.get(o);d===void 0&&(d=[],$s.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=Zr("img");function l(){u(),e&&e(this);const d=$s.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}$s.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),oc.remove(`image:${t}`);const h=$s.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}$s.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),oc.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Yh extends mu{constructor(t){super(t)}load(t,e,n,s){const r=new Je,o=new Lm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class wa extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $h extends wa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ac=new fe,ud=new P,dd=new P;class Zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cu,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dd),e.updateMatrixWorld(),ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hd=new fe,Ar=new P,cc=new P;class Im extends Zh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ar),cc.copy(n.position),cc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(cc),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,n.coordinateSystem,n.reversedDepth)}}class Re extends wa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kh extends Lh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dm extends Zh{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gl extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jh extends wa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Um extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Nm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const fd=new fe;class Fm{constructor(t,e,n=0,s=1/0){this.ray=new Th(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(pd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,n,e);return n.sort(pd),n}}function pd(i,t){return i.distance-t.distance}function _l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)_l(r[o],t,e,!0)}}function md(i,t,e,n){const s=Om(n);switch(e){case vh:return i*t;case Mh:return i*t/s.components*s.byteLength;case nu:return i*t/s.components*s.byteLength;case Sh:return i*t*2/s.components*s.byteLength;case iu:return i*t*2/s.components*s.byteLength;case xh:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case su:return i*t*4/s.components*s.byteLength;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:case Hc:return Math.max(i,16)*Math.max(t,8)/4;case Bc:case kc:return Math.max(i,8)*Math.max(t,8)/2;case Vc:case Gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cl:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Om(i){switch(i){case jn:case ph:return{byteLength:1,components:1};case Xr:case mh:case oo:return{byteLength:2,components:1};case tu:case eu:return{byteLength:2,components:4};case Es:case Ql:case fi:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function jh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bm(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:zm,alphahash_pars_fragment:km,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Gm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:Ym,batching_vertex:$m,begin_vertex:Zm,beginnormal_vertex:Km,bsdfs:Jm,iridescence_fragment:jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:c0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:h0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:_0,envmap_common_pars_fragment:v0,envmap_pars_fragment:x0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:L0,envmap_vertex:S0,fog_vertex:y0,fog_pars_vertex:w0,fog_fragment:E0,fog_pars_fragment:b0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:D0,lights_phong_fragment:U0,lights_phong_pars_fragment:N0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:k0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:$0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:K0,morphinstance_vertex:J0,morphcolor_vertex:j0,morphnormal_vertex:Q0,morphtarget_pars_vertex:tg,morphtarget_vertex:eg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:hg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:_g,roughnessmap_fragment:vg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Sg,shadowmap_vertex:yg,shadowmask_pars_fragment:wg,skinbase_vertex:Eg,skinning_pars_vertex:bg,skinning_vertex:Tg,skinnormal_vertex:Ag,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Pg,tonemapping_pars_fragment:Lg,transmission_fragment:Ig,transmission_pars_fragment:Dg,uv_pars_fragment:Ug,uv_pars_vertex:Ng,uv_vertex:Fg,worldpos_vertex:Og,background_vert:Bg,background_frag:zg,backgroundCube_vert:kg,backgroundCube_frag:Hg,cube_vert:Vg,cube_frag:Gg,depth_vert:Wg,depth_frag:Xg,distanceRGBA_vert:qg,distanceRGBA_frag:Yg,equirect_vert:$g,equirect_frag:Zg,linedashed_vert:Kg,linedashed_frag:Jg,meshbasic_vert:jg,meshbasic_frag:Qg,meshlambert_vert:t_,meshlambert_frag:e_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:s_,meshnormal_frag:r_,meshphong_vert:o_,meshphong_frag:a_,meshphysical_vert:c_,meshphysical_frag:l_,meshtoon_vert:u_,meshtoon_frag:d_,points_vert:h_,points_frag:f_,shadow_vert:p_,shadow_frag:m_,sprite_vert:g_,sprite_frag:__},ut={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Xn={basic:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([ut.points,ut.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([ut.common,ut.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([ut.sprite,ut.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:tn([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:tn([ut.lights,ut.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Xn.physical={uniforms:tn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const No={r:0,b:0,g:0},Qi=new Fn,v_=new fe;function x_(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const R=g(E);R===null?p(a,l):R&&R.isColor&&(p(R,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Ma)?(u===void 0&&(u=new U(new ot(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:hr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(x.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(Qi)),u.material.toneMapped=te.getTransfer(R.colorSpace)!==ce,(d!==R||h!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new U(new zt(2,2),new Vi({name:"BackgroundMaterial",uniforms:hr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(R.colorSpace)!==ce,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(No,Ph(i)),n.buffers.color.setClear(No.r,No.g,No.b,x,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:w}}function M_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,A,N,k,X){let q=!1;const H=d(k,N,A);r!==H&&(r=H,c(r.object)),q=f(M,k,N,X),q&&g(M,k,N,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(M,A,N,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,A,N){const k=N.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let q=X[A.id];q===void 0&&(q={},X[A.id]=q);let H=q[k];return H===void 0&&(H=h(l()),q[k]=H),H}function h(M){const A=[],N=[],k=[];for(let X=0;X<e;X++)A[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,A,N,k){const X=r.attributes,q=A.attributes;let H=0;const Q=N.getAttributes();for(const G in Q)if(Q[G].location>=0){const lt=X[G];let Mt=q[G];if(Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),lt===void 0||lt.attribute!==Mt||Mt&&lt.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(M,A,N,k){const X={},q=A.attributes;let H=0;const Q=N.getAttributes();for(const G in Q)if(Q[G].location>=0){let lt=q[G];lt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const Mt={};Mt.attribute=lt,lt&&lt.data&&(Mt.data=lt.data),X[G]=Mt,H++}r.attributes=X,r.attributesNum=H,r.index=k}function _(){const M=r.newAttributes;for(let A=0,N=M.length;A<N;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),X[M]!==A&&(i.vertexAttribDivisor(M,A),X[M]=A)}function w(){const M=r.newAttributes,A=r.enabledAttributes;for(let N=0,k=A.length;N<k;N++)A[N]!==M[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function E(M,A,N,k,X,q,H){H===!0?i.vertexAttribIPointer(M,A,N,X,q):i.vertexAttribPointer(M,A,N,k,X,q)}function x(M,A,N,k){_();const X=k.attributes,q=N.getAttributes(),H=A.defaultAttributeValues;for(const Q in q){const G=q[Q];if(G.location>=0){let rt=X[Q];if(rt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const lt=rt.normalized,Mt=rt.itemSize,Wt=t.get(rt);if(Wt===void 0)continue;const ne=Wt.buffer,ie=Wt.type,Kt=Wt.bytesPerElement,Z=ie===i.INT||ie===i.UNSIGNED_INT||rt.gpuType===Ql;if(rt.isInterleavedBufferAttribute){const K=rt.data,ht=K.stride,wt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let yt=0;yt<G.locationSize;yt++)p(G.location+yt,K.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let yt=0;yt<G.locationSize;yt++)m(G.location+yt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let yt=0;yt<G.locationSize;yt++)E(G.location+yt,Mt/G.locationSize,ie,lt,ht*Kt,(wt+Mt/G.locationSize*yt)*Kt,Z)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)p(G.location+K,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let K=0;K<G.locationSize;K++)E(G.location+K,Mt/G.locationSize,ie,lt,Mt*Kt,Mt/G.locationSize*K*Kt,Z)}}else if(H!==void 0){const lt=H[Q];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(G.location,lt);break;case 3:i.vertexAttrib3fv(G.location,lt);break;case 4:i.vertexAttrib4fv(G.location,lt);break;default:i.vertexAttrib1fv(G.location,lt)}}}}w()}function R(){D();for(const M in n){const A=n[M];for(const N in A){const k=A[N];for(const X in k)u(k[X].object),delete k[X];delete A[N]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const N in A){const k=A[N];for(const X in k)u(k[X].object),delete k[X];delete A[N]}delete n[M.id]}function L(M){for(const A in n){const N=n[A];if(N[M.id]===void 0)continue;const k=N[M.id];for(const X in k)u(k[X].object),delete k[X];delete N[M.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function S_(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==jn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==fi&&!D)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function w_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new cs,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,E=w*4;let x=p.clippingState||null;l.value=x,x=u(g,h,E,f);for(let R=0;R!==E;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function E_(i){let t=new WeakMap;function e(o,a){return a===Nc?o.mapping=cr:a===Fc&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nc||a===Fc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const er=4,gd=[.125,.215,.35,.446,.526,.582],fs=20,lc=new Kh,_d=new Gt;let uc=null,dc=0,hc=0,fc=!1;const ls=(1+Math.sqrt(5))/2,Zs=1/ls,vd=[new P(-ls,Zs,0),new P(ls,Zs,0),new P(-Zs,0,ls),new P(Zs,0,ls),new P(0,ls,-Zs),new P(0,ls,Zs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],b_=new P;class xd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=b_}=r;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,hc),this._renderer.xr.enabled=fc,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:oo,format:Dn,colorSpace:ur,depthBuffer:!1},s=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(r)),this._blurMaterial=A_(r,t,e)}return s}_compileMaterial(t){const e=new U(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s,r){const l=new on(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(_d),d.toneMapping=zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new dr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new U(new ot,_);let p=!1;const w=t.background;w?w.isColor&&(_.color.copy(w),t.background=null,p=!0):(_.color.copy(_d),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const R=this._cubeSize;Fo(s,x*R,E>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cr||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new U(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vd[(s-r-1)%vd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new U(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const p=[];let w=0;for(let L=0;L<fs;++L){const D=L/_,S=Math.exp(-D*D/2);p.push(S),L===0?w+=S:L<m&&(w+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/w;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const x=this._sizeLods[s],R=3*x*(s>E-er?s-E+er:0),T=4*(this._cubeSize-x);Fo(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(d,lc)}}function T_(i){const t=[],e=[],n=[];let s=i;const r=i-er+1+gd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-er?l=gd[o-i+er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,D=T>2?0:-1,S=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];w.set(S,_*g*T),E.set(h,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const R=new cn;R.setAttribute("position",new Nn(w,_)),R.setAttribute("uv",new Nn(E,m)),R.setAttribute("faceIndex",new Nn(x,p)),t.push(R),s>er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Md(i,t,e){const n=new bs(i,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function A_(i,t,e){const n=new Float32Array(fs),s=new P(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Sd(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function yd(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nc||l===Fc,u=l===cr||l===lr;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new xd(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new xd(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function C_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P_(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let E=0,x=w.length;E<x;E+=3){const R=w[E+0],T=w[E+1],L=w[E+2];h.push(R,T,T,L,L,R)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,x=w.length/3-1;E<x;E+=3){const R=E+0,T=E+1,L=E+2;h.push(R,T,T,L,L,R)}}else return;const m=new(Eh(h)?Ch:Rh)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function L_(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function I_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function D_(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=a.attributes.position.count*E,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*R*4*d),L=new bh(T,x,R,d);L.type=fi,L.needsUpdate=!0;const D=E*4;for(let M=0;M<d;M++){const A=m[M],N=p[M],k=w[M],X=x*R*4*M;for(let q=0;q<A.count;q++){const H=q*D;f===!0&&(s.fromBufferAttribute(A,q),T[X+H+0]=s.x,T[X+H+1]=s.y,T[X+H+2]=s.z,T[X+H+3]=0),g===!0&&(s.fromBufferAttribute(N,q),T[X+H+4]=s.x,T[X+H+5]=s.y,T[X+H+6]=s.z,T[X+H+7]=0),_===!0&&(s.fromBufferAttribute(k,q),T[X+H+8]=s.x,T[X+H+9]=s.y,T[X+H+10]=s.z,T[X+H+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new _t(x,R)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function U_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Qh=new Je,wd=new Fh(1,1),tf=new bh,ef=new Tp,nf=new Ih,Ed=[],bd=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=bd[t];e===void 0&&(e=new Int32Array(t),bd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),De(e,n)}}function k_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),De(e,n)}}function H_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),De(e,n)}}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function K_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wd.compareFunction=wh,r=wd):r=Qh,e.setTexture2D(t||r,s)}function J_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ef,s)}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nf,s)}function Q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tf,s)}function tv(i){switch(i){case 5126:return N_;case 35664:return F_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return k_;case 35676:return H_;case 5124:case 35670:return V_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return $_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Q_}}function ev(i,t){i.uniform1fv(this.addr,t)}function nv(i,t){const e=vr(t,this.size,2);i.uniform2fv(this.addr,e)}function iv(i,t){const e=vr(t,this.size,3);i.uniform3fv(this.addr,e)}function sv(i,t){const e=vr(t,this.size,4);i.uniform4fv(this.addr,e)}function rv(i,t){const e=vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ov(i,t){const e=vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function av(i,t){const e=vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cv(i,t){i.uniform1iv(this.addr,t)}function lv(i,t){i.uniform2iv(this.addr,t)}function uv(i,t){i.uniform3iv(this.addr,t)}function dv(i,t){i.uniform4iv(this.addr,t)}function hv(i,t){i.uniform1uiv(this.addr,t)}function fv(i,t){i.uniform2uiv(this.addr,t)}function pv(i,t){i.uniform3uiv(this.addr,t)}function mv(i,t){i.uniform4uiv(this.addr,t)}function gv(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qh,r[o])}function _v(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ef,r[o])}function vv(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nf,r[o])}function xv(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tf,r[o])}function Mv(i){switch(i){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return hv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}class Sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tv(e.type)}}class yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mv(e.type)}}class wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function Ev(i,t,e){const n=i.name,s=n.length;for(pc.lastIndex=0;;){const r=pc.exec(n),o=pc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cd(e,c===void 0?new Sv(a,i,t):new yv(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new wv(a),Cd(e,d)),e=d}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ev(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Pd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bv=37297;let Tv=0;function Av(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ld=new Vt;function Rv(i){te._getMatrix(Ld,te.workingColorSpace,i);const t=`mat3( ${Ld.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ca:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Id(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Av(i.getShaderSource(t),a)}else return r}function Cv(i,t){const e=Rv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pv(i,t){let e;switch(t){case ep:e="Linear";break;case np:e="Reinhard";break;case ip:e="Cineon";break;case jl:e="ACESFilmic";break;case rp:e="AgX";break;case op:e="Neutral";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oo=new P;function Lv(){te.getLuminanceCoefficients(Oo);const i=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Dv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ur(i){return i!==""}function Dd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ud(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(Nv,Ov)}const Fv=new Map;function Ov(i,t){let e=qt[t];if(e===void 0){const n=Fv.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(Bv,zv)}function zv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Hv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case lr:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vv(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===lr&&(t="ENVMAP_MODE_REFRACTION"),t}function Gv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case tp:t="ENVMAP_BLENDING_ADD";break}return t}function Wv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kv(e),c=Hv(e),u=Vv(e),d=Gv(e),h=Wv(e),f=Iv(e),g=Dv(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?qt.tonemapping_pars_fragment:"",e.toneMapping!==zi?Pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=vl(o),o=Dd(o,e),o=Ud(o,e),a=vl(a),a=Dd(a,e),a=Ud(a,e),o=Nd(o),a=Nd(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=w+m+o,x=w+p+a,R=Pd(s,s.VERTEX_SHADER,E),T=Pd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(A){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(T)||"",q=N.trim(),H=k.trim(),Q=X.trim();let G=!0,rt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const lt=Id(s,R,"vertex"),Mt=Id(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+lt+`
`+Mt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||Q==="")&&(rt=!1);rt&&(A.diagnostics={runnable:G,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(R),s.deleteShader(T),D=new Qo(s,_),S=Uv(s,_)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,bv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let qv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $v(t),e.set(t,n)),n}}class $v{constructor(t){this.id=qv++,this.code=t,this.usedTimes=0}}function Zv(i,t,e,n,s,r,o){const a=new ou,l=new Yv,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,N,k){const X=N.fog,q=k.geometry,H=S.isMeshStandardMaterial?N.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),G=Q&&Q.mapping===Ma?Q.image.height:null,rt=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=lt!==void 0?lt.length:0;let Wt=0;q.morphAttributes.position!==void 0&&(Wt=1),q.morphAttributes.normal!==void 0&&(Wt=2),q.morphAttributes.color!==void 0&&(Wt=3);let ne,ie,Kt,Z;if(rt){const se=Xn[rt];ne=se.vertexShader,ie=se.fragmentShader}else ne=S.vertexShader,ie=S.fragmentShader,l.update(S),Kt=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const K=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),wt=k.isInstancedMesh===!0,yt=k.isBatchedMesh===!0,Xt=!!S.map,ve=!!S.matcap,C=!!Q,ee=!!S.aoMap,Ft=!!S.lightMap,Pt=!!S.bumpMap,vt=!!S.normalMap,$t=!!S.displacementMap,mt=!!S.emissiveMap,Ut=!!S.metalnessMap,be=!!S.roughnessMap,pe=S.anisotropy>0,b=S.clearcoat>0,v=S.dispersion>0,B=S.iridescence>0,$=S.sheen>0,j=S.transmission>0,Y=pe&&!!S.anisotropyMap,Ct=b&&!!S.clearcoatMap,at=b&&!!S.clearcoatNormalMap,Tt=b&&!!S.clearcoatRoughnessMap,At=B&&!!S.iridescenceMap,nt=B&&!!S.iridescenceThicknessMap,gt=$&&!!S.sheenColorMap,Ot=$&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,ft=!!S.specularColorMap,Ht=!!S.specularIntensityMap,I=j&&!!S.transmissionMap,it=j&&!!S.thicknessMap,ct=!!S.gradientMap,St=!!S.alphaMap,tt=S.alphaTest>0,J=!!S.alphaHash,bt=!!S.extensions;let kt=zi;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(kt=i.toneMapping);const me={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:ie,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:yt,batchingColor:yt&&k._colorsTexture!==null,instancing:wt,instancingColor:wt&&k.instanceColor!==null,instancingMorph:wt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ur,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:ve,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:G,aoMap:ee,lightMap:Ft,bumpMap:Pt,normalMap:vt,displacementMap:h&&$t,emissiveMap:mt,normalMapObjectSpace:vt&&S.normalMapType===up,normalMapTangentSpace:vt&&S.normalMapType===yh,metalnessMap:Ut,roughnessMap:be,anisotropy:pe,anisotropyMap:Y,clearcoat:b,clearcoatMap:Ct,clearcoatNormalMap:at,clearcoatRoughnessMap:Tt,dispersion:v,iridescence:B,iridescenceMap:At,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:gt,sheenRoughnessMap:Ot,specularMap:Rt,specularColorMap:ft,specularIntensityMap:Ht,transmission:j,transmissionMap:I,thicknessMap:it,gradientMap:ct,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:St,alphaTest:tt,alphaHash:J,combine:S.combine,mapUv:Xt&&_(S.map.channel),aoMapUv:ee&&_(S.aoMap.channel),lightMapUv:Ft&&_(S.lightMap.channel),bumpMapUv:Pt&&_(S.bumpMap.channel),normalMapUv:vt&&_(S.normalMap.channel),displacementMapUv:$t&&_(S.displacementMap.channel),emissiveMapUv:mt&&_(S.emissiveMap.channel),metalnessMapUv:Ut&&_(S.metalnessMap.channel),roughnessMapUv:be&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Ct&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(S.sheenRoughnessMap.channel),specularMapUv:Rt&&_(S.specularMap.channel),specularColorMapUv:ft&&_(S.specularColorMap.channel),specularIntensityMapUv:Ht&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:St&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(vt||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Xt||St),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:mt&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fe,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(w(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let A;if(M){const N=Xn[M];A=zp.clone(N.uniforms)}else A=S.uniforms;return A}function R(S,M){let A;for(let N=0,k=u.length;N<k;N++){const X=u[N];if(X.cacheKey===M){A=X,++A.usedTimes;break}}return A===void 0&&(A=new Xv(i,M,S,r),u.push(A)),A}function T(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:D}}function Kv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||Jv),n.length>1&&n.sort(h||Od),s.length>1&&s.sort(h||Od)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function jv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bd,i.set(n,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ex=0;function nx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ix(i){const t=new Qv,e=tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new fe,o=new fe;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,E=0,x=0,R=0,T=0,L=0;c.sort(nx);for(let S=0,M=c.length;S<M;S++){const A=c[S],N=A.color,k=A.intensity,X=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*k,d+=N.g*k,h+=N.b*k;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],k);L++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,G=e.get(A);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=A.shadow.matrix,w++}n.directional[f]=H,f++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(N).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[_]=H;const Q=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,Q.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,A.castShadow){const G=e.get(A);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,x++}_++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(N).multiplyScalar(k),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const Q=A.shadow,G=e.get(A);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,E++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(k),H.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==R||D.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=R,D.numLightProbes=L,n.version=ex++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const E=c[p];if(E.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function zd(i){const t=new ix(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zd(i),t.set(s,[a])):r>=o.length?(a=new zd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ax(i,t,e){let n=new cu;const s=new _t,r=new _t,o=new ue,a=new Am({depthPacking:lp}),l=new Rm,c={},u=e.maxTextureSize,d={[Hi]:an,[an]:Hi,[Fe]:Fe},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new U(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(T,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Bi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==ci&&this.type===ci,X=p===ci&&this.type!==ci;for(let q=0,H=T.length;q<H;q++){const Q=T[q],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const rt=G.getFrameExtents();if(s.multiply(rt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||k===!0||X===!0){const Mt=this.type!==ci?{minFilter:Un,magFilter:Un}:{};G.map!==null&&G.map.dispose(),G.map=new bs(s.x,s.y,Mt),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const lt=G.getViewportCount();for(let Mt=0;Mt<lt;Mt++){const Wt=G.getViewport(Mt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),N.viewport(o),G.updateMatrices(Q,Mt),n=G.getFrustum(),x(L,D,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===ci&&w(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,A)};function w(T,L){const D=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,D,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,D,f,_,null)}function E(T,L,D,S){let M=null;const A=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=M.uuid,k=L.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let q=X[k];q===void 0&&(q=M.clone(),X[k]=q,L.addEventListener("dispose",R)),M=q}if(M.visible=L.visible,M.wireframe=L.wireframe,S===ci?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=D}return M}function x(T,L,D,S,M){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ci)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const k=t.update(T),X=T.material;if(Array.isArray(X)){const q=k.groups;for(let H=0,Q=q.length;H<Q;H++){const G=q[H],rt=X[G.materialIndex];if(rt&&rt.visible){const lt=E(T,rt,S,M);T.onBeforeShadow(i,T,L,D,k,lt,G),i.renderBufferDirect(D,null,k,lt,T,G),T.onAfterShadow(i,T,L,D,k,lt,G)}}}else if(X.visible){const q=E(T,X,S,M);T.onBeforeShadow(i,T,L,D,k,q,null),i.renderBufferDirect(D,null,k,q,T,null),T.onAfterShadow(i,T,L,D,k,q,null)}}const N=T.children;for(let k=0,X=N.length;k<X;k++)x(N[k],L,D,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(const D in c){const S=c[D],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const cx={[Rc]:Cc,[Pc]:Dc,[Lc]:Uc,[ar]:Ic,[Cc]:Rc,[Dc]:Pc,[Uc]:Lc,[Ic]:ar};function lx(i,t){function e(){let I=!1;const it=new ue;let ct=null;const St=new ue(0,0,0,0);return{setMask:function(tt){ct!==tt&&!I&&(i.colorMask(tt,tt,tt,tt),ct=tt)},setLocked:function(tt){I=tt},setClear:function(tt,J,bt,kt,me){me===!0&&(tt*=kt,J*=kt,bt*=kt),it.set(tt,J,bt,kt),St.equals(it)===!1&&(i.clearColor(tt,J,bt,kt),St.copy(it))},reset:function(){I=!1,ct=null,St.set(-1,0,0,0)}}}function n(){let I=!1,it=!1,ct=null,St=null,tt=null;return{setReversed:function(J){if(it!==J){const bt=t.get("EXT_clip_control");J?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),it=J;const kt=tt;tt=null,this.setClear(kt)}},getReversed:function(){return it},setTest:function(J){J?K(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(J){ct!==J&&!I&&(i.depthMask(J),ct=J)},setFunc:function(J){if(it&&(J=cx[J]),St!==J){switch(J){case Rc:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=J}},setLocked:function(J){I=J},setClear:function(J){tt!==J&&(it&&(J=1-J),i.clearDepth(J),tt=J)},reset:function(){I=!1,ct=null,St=null,tt=null,it=!1}}}function s(){let I=!1,it=null,ct=null,St=null,tt=null,J=null,bt=null,kt=null,me=null;return{setTest:function(se){I||(se?K(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(se){it!==se&&!I&&(i.stencilMask(se),it=se)},setFunc:function(se,ei,On){(ct!==se||St!==ei||tt!==On)&&(i.stencilFunc(se,ei,On),ct=se,St=ei,tt=On)},setOp:function(se,ei,On){(J!==se||bt!==ei||kt!==On)&&(i.stencilOp(se,ei,On),J=se,bt=ei,kt=On)},setLocked:function(se){I=se},setClear:function(se){me!==se&&(i.clearStencil(se),me=se)},reset:function(){I=!1,it=null,ct=null,St=null,tt=null,J=null,bt=null,kt=null,me=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,E=null,x=null,R=null,T=null,L=new Gt(0,0,0),D=0,S=!1,M=null,A=null,N=null,k=null,X=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Q>=2);let rt=null,lt={};const Mt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ne=new ue().fromArray(Mt),ie=new ue().fromArray(Wt);function Kt(I,it,ct,St){const tt=new Uint8Array(4),J=i.createTexture();i.bindTexture(I,J),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<ct;bt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return J}const Z={};Z[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(ar),Pt(!1),vt(Du),K(i.CULL_FACE),ee(Bi);function K(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ht(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function wt(I,it){return d[I]!==it?(i.bindFramebuffer(I,it),d[I]=it,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function yt(I,it){let ct=f,St=!1;if(I){ct=h.get(it),ct===void 0&&(ct=[],h.set(it,ct));const tt=I.textures;if(ct.length!==tt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let J=0,bt=tt.length;J<bt;J++)ct[J]=i.COLOR_ATTACHMENT0+J;ct.length=tt.length,St=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,St=!0);St&&i.drawBuffers(ct)}function Xt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const ve={[hs]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};ve[Bf]=i.MIN,ve[zf]=i.MAX;const C={[kf]:i.ZERO,[Hf]:i.ONE,[Vf]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[$f]:i.SRC_ALPHA_SATURATE,[qf]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Jf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(I,it,ct,St,tt,J,bt,kt,me,se){if(I===Bi){_===!0&&(ht(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),I!==Nf){if(I!==m||se!==S){if((p!==hs||x!==hs)&&(i.blendEquation(i.FUNC_ADD),p=hs,x=hs),se)switch(I){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uu:i.blendFunc(i.ONE,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,R=null,T=null,L.set(0,0,0),D=0,m=I,S=se}return}tt=tt||it,J=J||ct,bt=bt||St,(it!==p||tt!==x)&&(i.blendEquationSeparate(ve[it],ve[tt]),p=it,x=tt),(ct!==w||St!==E||J!==R||bt!==T)&&(i.blendFuncSeparate(C[ct],C[St],C[J],C[bt]),w=ct,E=St,R=J,T=bt),(kt.equals(L)===!1||me!==D)&&(i.blendColor(kt.r,kt.g,kt.b,me),L.copy(kt),D=me),m=I,S=!1}function Ft(I,it){I.side===Fe?ht(i.CULL_FACE):K(i.CULL_FACE);let ct=I.side===an;it&&(ct=!ct),Pt(ct),I.blending===sr&&I.transparent===!1?ee(Bi):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const St=I.stencilWrite;a.setTest(St),St&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function vt(I){I!==Df?(K(i.CULL_FACE),I!==A&&(I===Du?i.cullFace(i.BACK):I===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),A=I}function $t(I){I!==N&&(H&&i.lineWidth(I),N=I)}function mt(I,it,ct){I?(K(i.POLYGON_OFFSET_FILL),(k!==it||X!==ct)&&(i.polygonOffset(it,ct),k=it,X=ct)):ht(i.POLYGON_OFFSET_FILL)}function Ut(I){I?K(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function be(I){I===void 0&&(I=i.TEXTURE0+q-1),rt!==I&&(i.activeTexture(I),rt=I)}function pe(I,it,ct){ct===void 0&&(rt===null?ct=i.TEXTURE0+q-1:ct=rt);let St=lt[ct];St===void 0&&(St={type:void 0,texture:void 0},lt[ct]=St),(St.type!==I||St.texture!==it)&&(rt!==ct&&(i.activeTexture(ct),rt=ct),i.bindTexture(I,it||Z[I]),St.type=I,St.texture=it)}function b(){const I=lt[rt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(I){ne.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Ot(I){ie.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function Rt(I,it){let ct=c.get(it);ct===void 0&&(ct=new WeakMap,c.set(it,ct));let St=ct.get(I);St===void 0&&(St=i.getUniformBlockIndex(it,I.name),ct.set(I,St))}function ft(I,it){const St=c.get(it).get(I);l.get(it)!==St&&(i.uniformBlockBinding(it,St,I.__bindingPointIndex),l.set(it,St))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,lt={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,E=null,x=null,R=null,T=null,L=new Gt(0,0,0),D=0,S=!1,M=null,A=null,N=null,k=null,X=null,ne.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ht,bindFramebuffer:wt,drawBuffers:yt,useProgram:Xt,setBlending:ee,setMaterial:Ft,setFlipSided:Pt,setCullFace:vt,setLineWidth:$t,setPolygonOffset:mt,setScissorTest:Ut,activeTexture:be,bindTexture:pe,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:At,texImage3D:nt,updateUBOMapping:Rt,uniformBlockBinding:ft,texStorage2D:at,texStorage3D:Tt,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ct,scissor:gt,viewport:Ot,reset:Ht}}function ux(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):Zr("canvas")}function _(b,v,B){let $=1;const j=pe(b);if((j.width>B||j.height>B)&&($=B/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor($*j.width),Ct=Math.floor($*j.height);d===void 0&&(d=g(Y,Ct));const at=v?g(Y,Ct):d;return at.width=Y,at.height=Ct,at.getContext("2d").drawImage(b,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Ct+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,v,B,$,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=v;if(v===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const Ct=j?ca:te.getTransfer($);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Ct===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(b,v){let B;return b?v===null||v===Es||v===qr?B=i.DEPTH24_STENCIL8:v===fi?B=i.DEPTH32F_STENCIL8:v===Xr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Es||v===qr?B=i.DEPTH_COMPONENT24:v===fi?B=i.DEPTH_COMPONENT32F:v===Xr&&(B=i.DEPTH_COMPONENT16),B}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Un&&b.minFilter!==$n?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){const v=b.target;v.removeEventListener("dispose",T),D(v),v.isVideoTexture&&u.delete(v)}function L(b){const v=b.target;v.removeEventListener("dispose",L),M(v)}function D(b){const v=n.get(b);if(v.__webglInit===void 0)return;const B=b.source,$=h.get(B);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(b),Object.keys($).length===0&&h.delete(B)}n.remove(b)}function S(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const B=b.source,$=h.get(B);delete $[v.__cacheKey],o.memory.textures--}function M(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[$][j]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let $=0,j=B.length;$<j;$++){const Y=n.get(B[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(b)}let A=0;function N(){A=0}function k(){const b=A;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),A+=1,b}function X(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function q(b,v){const B=n.get(b);if(b.isVideoTexture&&Ut(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,b,v);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function H(b,v){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Z(B,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Q(b,v){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Z(B,b,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function G(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){K(B,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const rt={[Wr]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Oc]:i.MIRRORED_REPEAT},lt={[Un]:i.NEAREST,[ap]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},Mt={[dp]:i.NEVER,[_p]:i.ALWAYS,[hp]:i.LESS,[wh]:i.LEQUAL,[fp]:i.EQUAL,[gp]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function Wt(b,v){if(v.type===fi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===$n||v.magFilter===La||v.magFilter===uo||v.magFilter===vs||v.minFilter===$n||v.minFilter===La||v.minFilter===uo||v.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,rt[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,rt[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,rt[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Un||v.minFilter!==uo&&v.minFilter!==vs||v.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",T));const $=v.source;let j=h.get($);j===void 0&&(j={},h.set($,j));const Y=X(v);if(Y!==b.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[Y].usedTimes++;const Ct=j[b.__cacheKey];Ct!==void 0&&(j[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(v)),b.__cacheKey=Y,b.__webglTexture=j[Y].texture}return B}function ie(b,v,B){return Math.floor(Math.floor(b/B)/v)}function Kt(b,v,B,$){const Y=b.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,$,v.data);else{Y.sort((nt,gt)=>nt.start-gt.start);let Ct=0;for(let nt=1;nt<Y.length;nt++){const gt=Y[Ct],Ot=Y[nt],Rt=gt.start+gt.count,ft=ie(Ot.start,v.width,4),Ht=ie(gt.start,v.width,4);Ot.start<=Rt+1&&ft===Ht&&ie(Ot.start+Ot.count-1,v.width,4)===ft?gt.count=Math.max(gt.count,Ot.start+Ot.count-gt.start):(++Ct,Y[Ct]=Ot)}Y.length=Ct+1;const at=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let nt=0,gt=Y.length;nt<gt;nt++){const Ot=Y[nt],Rt=Math.floor(Ot.start/4),ft=Math.ceil(Ot.count/4),Ht=Rt%v.width,I=Math.floor(Rt/v.width),it=ft,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Ht,I,it,ct,B,$,v.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Z(b,v,B){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const j=ne(b,v),Y=v.source;e.bindTexture($,b.__webglTexture,i.TEXTURE0+B);const Ct=n.get(Y);if(Y.version!==Ct.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const at=te.getPrimaries(te.workingColorSpace),Tt=v.colorSpace===Li?null:te.getPrimaries(v.colorSpace),At=v.colorSpace===Li||at===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let nt=_(v.image,!1,s.maxTextureSize);nt=be(v,nt);const gt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type);let Rt=E(v.internalFormat,gt,Ot,v.colorSpace,v.isVideoTexture);Wt($,v);let ft;const Ht=v.mipmaps,I=v.isVideoTexture!==!0,it=Ct.__version===void 0||j===!0,ct=Y.dataReady,St=R(v,nt);if(v.isDepthTexture)Rt=x(v.format===$r,v.type),it&&(I?e.texStorage2D(i.TEXTURE_2D,1,Rt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,nt.width,nt.height,0,gt,Ot,null));else if(v.isDataTexture)if(Ht.length>0){I&&it&&e.texStorage2D(i.TEXTURE_2D,St,Rt,Ht[0].width,Ht[0].height);for(let tt=0,J=Ht.length;tt<J;tt++)ft=Ht[tt],I?ct&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,Ot,ft.data):e.texImage2D(i.TEXTURE_2D,tt,Rt,ft.width,ft.height,0,gt,Ot,ft.data);v.generateMipmaps=!1}else I?(it&&e.texStorage2D(i.TEXTURE_2D,St,Rt,nt.width,nt.height),ct&&Kt(v,nt,gt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Rt,nt.width,nt.height,0,gt,Ot,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,Ht[0].width,Ht[0].height,nt.depth);for(let tt=0,J=Ht.length;tt<J;tt++)if(ft=Ht[tt],v.format!==Dn)if(gt!==null)if(I){if(ct)if(v.layerUpdates.size>0){const bt=md(ft.width,ft.height,v.format,v.type);for(const kt of v.layerUpdates){const me=ft.data.subarray(kt*bt/ft.data.BYTES_PER_ELEMENT,(kt+1)*bt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,kt,ft.width,ft.height,1,gt,me)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,nt.depth,gt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Rt,ft.width,ft.height,nt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,nt.depth,gt,Ot,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Rt,ft.width,ft.height,nt.depth,0,gt,Ot,ft.data)}else{I&&it&&e.texStorage2D(i.TEXTURE_2D,St,Rt,Ht[0].width,Ht[0].height);for(let tt=0,J=Ht.length;tt<J;tt++)ft=Ht[tt],v.format!==Dn?gt!==null?I?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ct&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ft.width,ft.height,gt,Ot,ft.data):e.texImage2D(i.TEXTURE_2D,tt,Rt,ft.width,ft.height,0,gt,Ot,ft.data)}else if(v.isDataArrayTexture)if(I){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,nt.width,nt.height,nt.depth),ct)if(v.layerUpdates.size>0){const tt=md(nt.width,nt.height,v.format,v.type);for(const J of v.layerUpdates){const bt=nt.data.subarray(J*tt/nt.data.BYTES_PER_ELEMENT,(J+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,gt,Ot,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ot,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,nt.width,nt.height,nt.depth,0,gt,Ot,nt.data);else if(v.isData3DTexture)I?(it&&e.texStorage3D(i.TEXTURE_3D,St,Rt,nt.width,nt.height,nt.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ot,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,nt.width,nt.height,nt.depth,0,gt,Ot,nt.data);else if(v.isFramebufferTexture){if(it)if(I)e.texStorage2D(i.TEXTURE_2D,St,Rt,nt.width,nt.height);else{let tt=nt.width,J=nt.height;for(let bt=0;bt<St;bt++)e.texImage2D(i.TEXTURE_2D,bt,Rt,tt,J,0,gt,Ot,null),tt>>=1,J>>=1}}else if(Ht.length>0){if(I&&it){const tt=pe(Ht[0]);e.texStorage2D(i.TEXTURE_2D,St,Rt,tt.width,tt.height)}for(let tt=0,J=Ht.length;tt<J;tt++)ft=Ht[tt],I?ct&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,gt,Ot,ft):e.texImage2D(i.TEXTURE_2D,tt,Rt,gt,Ot,ft);v.generateMipmaps=!1}else if(I){if(it){const tt=pe(nt);e.texStorage2D(i.TEXTURE_2D,St,Rt,tt.width,tt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ot,nt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,gt,Ot,nt);m(v)&&p($),Ct.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function K(b,v,B){if(v.image.length!==6)return;const $=ne(b,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const Y=n.get(j);if(j.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Ct=te.getPrimaries(te.workingColorSpace),at=v.colorSpace===Li?null:te.getPrimaries(v.colorSpace),Tt=v.colorSpace===Li||Ct===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!At&&!nt?gt[J]=_(v.image[J],!0,s.maxCubemapSize):gt[J]=nt?v.image[J].image:v.image[J],gt[J]=be(v,gt[J]);const Ot=gt[0],Rt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),Ht=E(v.internalFormat,Rt,ft,v.colorSpace),I=v.isVideoTexture!==!0,it=Y.__version===void 0||$===!0,ct=j.dataReady;let St=R(v,Ot);Wt(i.TEXTURE_CUBE_MAP,v);let tt;if(At){I&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ht,Ot.width,Ot.height);for(let J=0;J<6;J++){tt=gt[J].mipmaps;for(let bt=0;bt<tt.length;bt++){const kt=tt[bt];v.format!==Dn?Rt!==null?I?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,0,0,kt.width,kt.height,Rt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,Ht,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,0,0,kt.width,kt.height,Rt,ft,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,Ht,kt.width,kt.height,0,Rt,ft,kt.data)}}}else{if(tt=v.mipmaps,I&&it){tt.length>0&&St++;const J=pe(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(nt){I?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Rt,ft,gt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,gt[J].width,gt[J].height,0,Rt,ft,gt[J].data);for(let bt=0;bt<tt.length;bt++){const me=tt[bt].image[J].image;I?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,0,0,me.width,me.height,Rt,ft,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,Ht,me.width,me.height,0,Rt,ft,me.data)}}else{I?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,ft,gt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,Rt,ft,gt[J]);for(let bt=0;bt<tt.length;bt++){const kt=tt[bt];I?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,0,0,Rt,ft,kt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,Ht,Rt,ft,kt.image[J])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Y.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ht(b,v,B,$,j,Y){const Ct=r.convert(B.format,B.colorSpace),at=r.convert(B.type),Tt=E(B.internalFormat,Ct,at,B.colorSpace),At=n.get(v),nt=n.get(B);if(nt.__renderTarget=v,!At.__hasExternalTextures){const gt=Math.max(1,v.width>>Y),Ot=Math.max(1,v.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,Tt,gt,Ot,v.depth,0,Ct,at,null):e.texImage2D(j,Y,Tt,gt,Ot,0,Ct,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,nt.__webglTexture,0,$t(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(b,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,Y=x(v.stencilBuffer,j),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=$t(v);mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,b)}else{const $=v.textures;for(let j=0;j<$.length;j++){const Y=$[j],Ct=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),Tt=E(Y.internalFormat,Ct,at,Y.colorSpace),At=$t(v);B&&mt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Tt,v.width,v.height):mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const j=$.__webglTexture,Y=$t(v);if(v.depthTexture.format===Yr)mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===$r)mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Xt(b){const v=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=b.texture.mipmaps;$&&$.length>0?yt(v.__webglFramebuffer[0],b):yt(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),wt(v.__webglDepthbuffer[$],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const $=b.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),wt(v.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(b,v,B){const $=n.get(b);v!==void 0&&ht($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Xt(b)}function C(b){const v=b.texture,B=n.get(b),$=n.get(v);b.addEventListener("dispose",L);const j=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Ct=j.length>1;if(Ct||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let Tt=0;Tt<v.mipmaps.length;Tt++)B.__webglFramebuffer[at][Tt]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let at=0,Tt=j.length;at<Tt;at++){const At=n.get(j[at]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&mt(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const Tt=j[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const At=r.convert(Tt.format,Tt.colorSpace),nt=r.convert(Tt.type),gt=E(Tt.internalFormat,At,nt,Tt.colorSpace,b.isXRRenderTarget===!0),Ot=$t(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)ht(B.__webglFramebuffer[at][Tt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt);else ht(B.__webglFramebuffer[at],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let at=0,Tt=j.length;at<Tt;at++){const At=j[at],nt=n.get(At);let gt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(gt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),Wt(gt,At),ht(B.__webglFramebuffer,b,At,i.COLOR_ATTACHMENT0+at,gt,0),m(At)&&p(gt)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Wt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)ht(B.__webglFramebuffer[Tt],b,v,i.COLOR_ATTACHMENT0,at,Tt);else ht(B.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&p(at),e.unbindTexture()}b.depthBuffer&&Xt(b)}function ee(b){const v=b.textures;for(let B=0,$=v.length;B<$;B++){const j=v[B];if(m(j)){const Y=w(b),Ct=n.get(j).__webglTexture;e.bindTexture(Y,Ct),p(Y),e.unbindTexture()}}}const Ft=[],Pt=[];function vt(b){if(b.samples>0){if(mt(b)===!1){const v=b.textures,B=b.width,$=b.height;let j=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(b),at=v.length>1;if(at)for(let At=0;At<v.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Tt=b.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<v.length;At++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const nt=n.get(v[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,j,i.NEAREST),l===!0&&(Ft.length=0,Pt.length=0,Ft.push(i.COLOR_ATTACHMENT0+At),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ft.push(Y),Pt.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let At=0;At<v.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const nt=n.get(v[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $t(b){return Math.min(s.maxSamples,b.samples)}function mt(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ut(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function be(b,v){const B=b.colorSpace,$=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==ur&&B!==Li&&(te.getTransfer(B)===ce?($!==Dn||j!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=ve,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=mt}function dx(i,t){function e(n,s=Li){let r;const o=te.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===oo)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===xh)return i.RGB;if(n===Dn)return i.RGBA;if(n===Yr)return i.DEPTH_COMPONENT;if(n===$r)return i.DEPTH_STENCIL;if(n===Mh)return i.RED;if(n===nu)return i.RED_INTEGER;if(n===Sh)return i.RG;if(n===iu)return i.RG_INTEGER;if(n===su)return i.RGBA_INTEGER;if(n===Zo||n===Ko||n===Jo||n===jo)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===zc||n===kc||n===Hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Gc||n===Wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vc||n===Gc)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===Jc||n===jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ll||n===ul||n===dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Oh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vi({vertexShader:hx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new U(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mx extends gr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new px,p={},w=e.getContextAttributes();let E=null,x=null;const R=[],T=[],L=new _t;let D=null;const S=new on;S.viewport=new ue;const M=new on;M.viewport=new ue;const A=[S,M],N=new Um;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=R[Z];return K===void 0&&(K=new tc,R[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=R[Z];return K===void 0&&(K=new tc,R[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=R[Z];return K===void 0&&(K=new tc,R[Z]=K),K.getHandSpace()};function q(Z){const K=T.indexOf(Z.inputSource);if(K===-1)return;const ht=R[K];ht!==void 0&&(ht.update(Z.inputSource,Z.frame,c||o),ht.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<R.length;Z++){const K=T[Z];K!==null&&(T[Z]=null,R[Z].disconnect(K))}k=null,X=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(E),f=null,h=null,d=null,s=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),w.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,wt=null,yt=null;w.depth&&(yt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=w.stencil?$r:Yr,wt=w.stencil?qr:Es);const Xt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Xt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new bs(h.textureWidth,h.textureHeight,{format:Dn,type:jn,depthTexture:new Fh(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ht={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new bs(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let K=0;K<Z.removed.length;K++){const ht=Z.removed[K],wt=T.indexOf(ht);wt>=0&&(T[wt]=null,R[wt].disconnect(ht))}for(let K=0;K<Z.added.length;K++){const ht=Z.added[K];let wt=T.indexOf(ht);if(wt===-1){for(let Xt=0;Xt<R.length;Xt++)if(Xt>=T.length){T.push(ht),wt=Xt;break}else if(T[Xt]===null){T[Xt]=ht,wt=Xt;break}if(wt===-1)break}const yt=R[wt];yt&&yt.connect(ht)}}const G=new P,rt=new P;function lt(Z,K,ht){G.setFromMatrixPosition(K.matrixWorld),rt.setFromMatrixPosition(ht.matrixWorld);const wt=G.distanceTo(rt),yt=K.projectionMatrix.elements,Xt=ht.projectionMatrix.elements,ve=yt[14]/(yt[10]-1),C=yt[14]/(yt[10]+1),ee=(yt[9]+1)/yt[5],Ft=(yt[9]-1)/yt[5],Pt=(yt[8]-1)/yt[0],vt=(Xt[8]+1)/Xt[0],$t=ve*Pt,mt=ve*vt,Ut=wt/(-Pt+vt),be=Ut*-Pt;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(be),Z.translateZ(Ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),yt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const pe=ve+Ut,b=C+Ut,v=$t-be,B=mt+(wt-be),$=ee*C/b*pe,j=Ft*C/b*pe;Z.projectionMatrix.makePerspective(v,B,$,j,pe,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let K=Z.near,ht=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),N.near=M.near=S.near=K,N.far=M.far=S.far=ht,(k!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,X=N.far),N.layers.mask=Z.layers.mask|6,S.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const wt=Z.parent,yt=N.cameras;Mt(N,wt);for(let Xt=0;Xt<yt.length;Xt++)Mt(yt[Xt],wt);yt.length===2?lt(N,S,M):N.projectionMatrix.copy(S.projectionMatrix),Wt(Z,N,wt)};function Wt(Z,K,ht){ht===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(ht.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let ne=null;function ie(Z,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ht=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let wt=!1;ht.length!==N.cameras.length&&(N.cameras.length=0,wt=!0);for(let C=0;C<ht.length;C++){const ee=ht[C];let Ft=null;if(f!==null)Ft=f.getViewport(ee);else{const vt=d.getViewSubImage(h,ee);Ft=vt.viewport,C===0&&(t.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(x))}let Pt=A[C];Pt===void 0&&(Pt=new on,Pt.layers.enable(C),Pt.viewport=new ue,A[C]=Pt),Pt.matrix.fromArray(ee.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(ee.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),C===0&&(N.matrix.copy(Pt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),wt===!0&&N.cameras.push(Pt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const C=d.getDepthInformation(ht[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let C=0;C<ht.length;C++){const ee=ht[C].camera;if(ee){let Ft=p[ee];Ft||(Ft=new Oh,p[ee]=Ft);const Pt=d.getCameraImage(ee);Ft.sourceTexture=Pt}}}}for(let ht=0;ht<R.length;ht++){const wt=T[ht],yt=R[ht];wt!==null&&yt!==void 0&&yt.update(wt,K,c||o)}ne&&ne(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Kt=new jh;Kt.setAnimationLoop(ie),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}const ts=new Fn,gx=new fe;function _x(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ph(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),E=w.envMap,x=w.envMapRotation;E&&(m.envMap.value=E,ts.copy(x),ts.x*=-1,ts.y*=-1,ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(ts)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const x=E.program;n.uniformBlockBinding(w,x)}function c(w,E){let x=s[w.id];x===void 0&&(g(w),x=u(w),s[w.id]=x,w.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(w,R);const T=t.render.frame;r[w.id]!==T&&(h(w),r[w.id]=T)}function u(w){const E=d();w.__bindingPointIndex=E;const x=i.createBuffer(),R=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=s[w.id],x=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,L=x.length;T<L;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=D.length;S<M;S++){const A=D[S];if(f(A,T,S,R)===!0){const N=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let q=0;q<k.length;q++){const H=k[q],Q=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+X,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,E,x,R){const T=w.value,L=E+"_"+x;if(R[L]===void 0)return typeof T=="number"||typeof T=="boolean"?R[L]=T:R[L]=T.clone(),!0;{const D=R[L];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return R[L]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(w){const E=w.uniforms;let x=0;const R=16;for(let L=0,D=E.length;L<D;L++){const S=Array.isArray(E[L])?E[L]:[E[L]];for(let M=0,A=S.length;M<A;M++){const N=S[M],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,q=k.length;X<q;X++){const H=k[X],Q=_(H),G=x%R,rt=G%Q.boundary,lt=G+rt;x+=rt,lt!==0&&R-lt<Q.storage&&(x+=R-lt),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Q.storage}}}const T=x%R;return T>0&&(x+=R-T),w.__size=x,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class sf{constructor(t={}){const{canvas:e=xp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Ae;let T=0,L=0,D=null,S=-1,M=null;const A=new ue,N=new ue;let k=null;const X=new Gt(0);let q=0,H=e.width,Q=e.height,G=1,rt=null,lt=null;const Mt=new ue(0,0,H,Q),Wt=new ue(0,0,H,Q);let ne=!1;const ie=new cu;let Kt=!1,Z=!1;const K=new fe,ht=new P,wt=new ue,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ve(){return D===null?G:1}let C=n;function ee(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",tt,!1),C===null){const F="webgl2";if(C=ee(F,y),C===null)throw ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ft,Pt,vt,$t,mt,Ut,be,pe,b,v,B,$,j,Y,Ct,at,Tt,At,nt,gt,Ot,Rt,ft,Ht;function I(){Ft=new C_(C),Ft.init(),Rt=new dx(C,Ft),Pt=new y_(C,Ft,t,Rt),vt=new lx(C,Ft),Pt.reversedDepthBuffer&&h&&vt.buffers.depth.setReversed(!0),$t=new I_(C),mt=new Kv,Ut=new ux(C,Ft,vt,mt,Pt,Rt,$t),be=new E_(x),pe=new R_(x),b=new Bm(C),ft=new M_(C,b),v=new P_(C,b,$t,ft),B=new U_(C,v,b,$t),nt=new D_(C,Pt,Ut),at=new w_(mt),$=new Zv(x,be,pe,Ft,Pt,ft,at),j=new _x(x,mt),Y=new jv,Ct=new sx(Ft),At=new x_(x,be,pe,vt,B,f,l),Tt=new ax(x,B,Pt),Ht=new vx(C,$t,Pt,vt),gt=new S_(C,Ft,$t),Ot=new L_(C,Ft,$t),$t.programs=$.programs,x.capabilities=Pt,x.extensions=Ft,x.properties=mt,x.renderLists=Y,x.shadowMap=Tt,x.state=vt,x.info=$t}I();const it=new mx(x,C);this.xr=it,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=Ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(H,Q,!1))},this.getSize=function(y){return y.set(H,Q)},this.setSize=function(y,F,V=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,Q=F,e.width=Math.floor(y*G),e.height=Math.floor(F*G),V===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(H*G,Q*G).floor()},this.setDrawingBufferSize=function(y,F,V){H=y,Q=F,G=V,e.width=Math.floor(y*V),e.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,F,V,W){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,F,V,W),vt.viewport(A.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,F,V,W){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,F,V,W),vt.scissor(N.copy(Wt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(y){vt.setScissorTest(ne=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){lt=y},this.getClearColor=function(y){return y.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,V=!0){let W=0;if(y){let O=!1;if(D!==null){const et=D.texture.format;O=et===su||et===iu||et===nu}if(O){const et=D.texture.type,pt=et===jn||et===Es||et===Xr||et===qr||et===tu||et===eu,Et=At.getClearColor(),xt=At.getClearAlpha(),Nt=Et.r,Bt=Et.g,It=Et.b;pt?(g[0]=Nt,g[1]=Bt,g[2]=It,g[3]=xt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Nt,_[1]=Bt,_[2]=It,_[3]=xt,C.clearBufferiv(C.COLOR,0,_))}else W|=C.COLOR_BUFFER_BIT}F&&(W|=C.DEPTH_BUFFER_BIT),V&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),At.dispose(),Y.dispose(),Ct.dispose(),mt.dispose(),be.dispose(),pe.dispose(),B.dispose(),ft.dispose(),Ht.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",On),it.removeEventListener("sessionend",Au),Yi.stop()};function ct(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=$t.autoReset,F=Tt.enabled,V=Tt.autoUpdate,W=Tt.needsUpdate,O=Tt.type;I(),$t.autoReset=y,Tt.enabled=F,Tt.autoUpdate=V,Tt.needsUpdate=W,Tt.type=O}function tt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function J(y){const F=y.target;F.removeEventListener("dispose",J),bt(F)}function bt(y){kt(y),mt.remove(y)}function kt(y){const F=mt.get(y).programs;F!==void 0&&(F.forEach(function(V){$.releaseProgram(V)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,W,O,et){F===null&&(F=yt);const pt=O.isMesh&&O.matrixWorld.determinant()<0,Et=Af(y,F,V,W,O);vt.setMaterial(W,pt);let xt=V.index,Nt=1;if(W.wireframe===!0){if(xt=v.getWireframeAttribute(V),xt===void 0)return;Nt=2}const Bt=V.drawRange,It=V.attributes.position;let Jt=Bt.start*Nt,ae=(Bt.start+Bt.count)*Nt;et!==null&&(Jt=Math.max(Jt,et.start*Nt),ae=Math.min(ae,(et.start+et.count)*Nt)),xt!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,xt.count)):It!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,It.count));const we=ae-Jt;if(we<0||we===1/0)return;ft.setup(O,W,Et,V,xt);let ge,he=gt;if(xt!==null&&(ge=b.get(xt),he=Ot,he.setIndex(ge)),O.isMesh)W.wireframe===!0?(vt.setLineWidth(W.wireframeLinewidth*ve()),he.setMode(C.LINES)):he.setMode(C.TRIANGLES);else if(O.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),vt.setLineWidth(Dt*ve()),O.isLineSegments?he.setMode(C.LINES):O.isLineLoop?he.setMode(C.LINE_LOOP):he.setMode(C.LINE_STRIP)}else O.isPoints?he.setMode(C.POINTS):O.isSprite&&he.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Dt=O._multiDrawStarts,xe=O._multiDrawCounts,Qt=O._multiDrawCount,ln=xt?b.get(xt).bytesPerElement:1,Ps=mt.get(W).currentProgram.getUniforms();for(let un=0;un<Qt;un++)Ps.setValue(C,"_gl_DrawID",un),he.render(Dt[un]/ln,xe[un])}else if(O.isInstancedMesh)he.renderInstances(Jt,we,O.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,Dt);he.renderInstances(Jt,we,xe)}else he.render(Jt,we)};function me(y,F,V){y.transparent===!0&&y.side===Fe&&y.forceSinglePass===!1?(y.side=an,y.needsUpdate=!0,lo(y,F,V),y.side=Hi,y.needsUpdate=!0,lo(y,F,V),y.side=Fe):lo(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),p=Ct.get(V),p.init(F),E.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==V&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const et=O.material;if(et)if(Array.isArray(et))for(let pt=0;pt<et.length;pt++){const Et=et[pt];me(Et,V,O),W.add(Et)}else me(et,V,O),W.add(et)}),p=E.pop(),W},this.compileAsync=function(y,F,V=null){const W=this.compile(y,F,V);return new Promise(O=>{function et(){if(W.forEach(function(pt){mt.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){O(y);return}setTimeout(et,10)}Ft.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let se=null;function ei(y){se&&se(y)}function On(){Yi.stop()}function Au(){Yi.start()}const Yi=new jh;Yi.setAnimationLoop(ei),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(y){se=y,it.setAnimationLoop(y),y===null?Yi.stop():Yi.start()},it.addEventListener("sessionstart",On),it.addEventListener("sessionend",Au),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,F,D),p=Ct.get(y,E.length),p.init(F),E.push(p),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ie.setFromProjectionMatrix(K,Zn,F.reversedDepth),Z=this.localClippingEnabled,Kt=at.init(this.clippingPlanes,Z),m=Y.get(y,w.length),m.init(),w.push(m),it.enabled===!0&&it.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Ca(et,F,-1/0,x.sortObjects)}Ca(y,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,lt),Xt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Xt&&At.addToRenderList(m,y),this.info.render.frame++,Kt===!0&&at.beginShadows();const V=p.state.shadowsArray;Tt.render(V,y,F),Kt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const et=F.cameras;if(O.length>0)for(let pt=0,Et=et.length;pt<Et;pt++){const xt=et[pt];Cu(W,O,y,xt)}Xt&&At.render(y);for(let pt=0,Et=et.length;pt<Et;pt++){const xt=et[pt];Ru(m,y,xt,xt.viewport)}}else O.length>0&&Cu(W,O,y,F),Xt&&At.render(y),Ru(m,y,F);D!==null&&L===0&&(Ut.updateMultisampleRenderTarget(D),Ut.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(x,y,F),ft.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],Kt===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ca(y,F,V,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ie.intersectsSprite(y)){W&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(K);const pt=B.update(y),Et=y.material;Et.visible&&m.push(y,pt,Et,V,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ie.intersectsObject(y))){const pt=B.update(y),Et=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),wt.copy(pt.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(K)),Array.isArray(Et)){const xt=pt.groups;for(let Nt=0,Bt=xt.length;Nt<Bt;Nt++){const It=xt[Nt],Jt=Et[It.materialIndex];Jt&&Jt.visible&&m.push(y,pt,Jt,V,wt.z,It)}}else Et.visible&&m.push(y,pt,Et,V,wt.z,null)}}const et=y.children;for(let pt=0,Et=et.length;pt<Et;pt++)Ca(et[pt],F,V,W)}function Ru(y,F,V,W){const O=y.opaque,et=y.transmissive,pt=y.transparent;p.setupLightsView(V),Kt===!0&&at.setGlobalState(x.clippingPlanes,V),W&&vt.viewport(A.copy(W)),O.length>0&&co(O,F,V),et.length>0&&co(et,F,V),pt.length>0&&co(pt,F,V),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Cu(y,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new bs(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?oo:jn,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const et=p.state.transmissionRenderTarget[W.id],pt=W.viewport||A;et.setSize(pt.z*x.transmissionResolutionScale,pt.w*x.transmissionResolutionScale);const Et=x.getRenderTarget(),xt=x.getActiveCubeFace(),Nt=x.getActiveMipmapLevel();x.setRenderTarget(et),x.getClearColor(X),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&At.render(V);const Bt=x.toneMapping;x.toneMapping=zi;const It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Kt===!0&&at.setGlobalState(x.clippingPlanes,W),co(y,V,W),Ut.updateMultisampleRenderTarget(et),Ut.updateRenderTargetMipmap(et),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ae=0,we=F.length;ae<we;ae++){const ge=F[ae],he=ge.object,Dt=ge.geometry,xe=ge.material,Qt=ge.group;if(xe.side===Fe&&he.layers.test(W.layers)){const ln=xe.side;xe.side=an,xe.needsUpdate=!0,Pu(he,V,W,Dt,xe,Qt),xe.side=ln,xe.needsUpdate=!0,Jt=!0}}Jt===!0&&(Ut.updateMultisampleRenderTarget(et),Ut.updateRenderTargetMipmap(et))}x.setRenderTarget(Et,xt,Nt),x.setClearColor(X,q),It!==void 0&&(W.viewport=It),x.toneMapping=Bt}function co(y,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,et=y.length;O<et;O++){const pt=y[O],Et=pt.object,xt=pt.geometry,Nt=pt.group;let Bt=pt.material;Bt.allowOverride===!0&&W!==null&&(Bt=W),Et.layers.test(V.layers)&&Pu(Et,F,V,xt,Bt,Nt)}}function Pu(y,F,V,W,O,et){y.onBeforeRender(x,F,V,W,O,et),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,F,V,W,y,et),O.transparent===!0&&O.side===Fe&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,y,et),O.side=Hi,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,y,et),O.side=Fe):x.renderBufferDirect(V,F,W,O,y,et),y.onAfterRender(x,F,V,W,O,et)}function lo(y,F,V){F.isScene!==!0&&(F=yt);const W=mt.get(y),O=p.state.lights,et=p.state.shadowsArray,pt=O.state.version,Et=$.getParameters(y,O.state,et,F,V),xt=$.getProgramCacheKey(Et);let Nt=W.programs;W.environment=y.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(y.isMeshStandardMaterial?pe:be).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",J),Nt=new Map,W.programs=Nt);let Bt=Nt.get(xt);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===pt)return Iu(y,Et),Bt}else Et.uniforms=$.getUniforms(y),y.onBeforeCompile(Et,x),Bt=$.acquireProgram(Et,xt),Nt.set(xt,Bt),W.uniforms=Et.uniforms;const It=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=at.uniform),Iu(y,Et),W.needsLights=Cf(y),W.lightsStateVersion=pt,W.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function Lu(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Qo.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Iu(y,F){const V=mt.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Af(y,F,V,W,O){F.isScene!==!0&&(F=yt),Ut.resetTextureUnits();const et=F.fog,pt=W.isMeshStandardMaterial?F.environment:null,Et=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ur,xt=(W.isMeshStandardMaterial?pe:be).get(W.envMap||pt),Nt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let we=zi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(we=x.toneMapping);const ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=ge!==void 0?ge.length:0,Dt=mt.get(W),xe=p.state.lights;if(Kt===!0&&(Z===!0||y!==M)){const je=y===M&&W.id===S;at.setState(W,y,je)}let Qt=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==xe.state.version||Dt.outputColorSpace!==Et||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==xt||W.fog===!0&&Dt.fog!==et||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Nt||Dt.vertexTangents!==Bt||Dt.morphTargets!==It||Dt.morphNormals!==Jt||Dt.morphColors!==ae||Dt.toneMapping!==we||Dt.morphTargetsCount!==he)&&(Qt=!0):(Qt=!0,Dt.__version=W.version);let ln=Dt.currentProgram;Qt===!0&&(ln=lo(W,F,O));let Ps=!1,un=!1,xr=!1;const Me=ln.getUniforms(),mn=Dt.uniforms;if(vt.useProgram(ln.program)&&(Ps=!0,un=!0,xr=!0),W.id!==S&&(S=W.id,un=!0),Ps||M!==y){vt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Me.setValue(C,"projectionMatrix",y.projectionMatrix),Me.setValue(C,"viewMatrix",y.matrixWorldInverse);const nn=Me.map.cameraPosition;nn!==void 0&&nn.setValue(C,ht.setFromMatrixPosition(y.matrixWorld)),Pt.logarithmicDepthBuffer&&Me.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Me.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,un=!0,xr=!0)}if(O.isSkinnedMesh){Me.setOptional(C,O,"bindMatrix"),Me.setOptional(C,O,"bindMatrixInverse");const je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Me.setValue(C,"boneTexture",je.boneTexture,Ut))}O.isBatchedMesh&&(Me.setOptional(C,O,"batchingTexture"),Me.setValue(C,"batchingTexture",O._matricesTexture,Ut),Me.setOptional(C,O,"batchingIdTexture"),Me.setValue(C,"batchingIdTexture",O._indirectTexture,Ut),Me.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Me.setValue(C,"batchingColorTexture",O._colorsTexture,Ut));const gn=V.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&nt.update(O,V,ln),(un||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,Me.setValue(C,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=xt,mn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),un&&(Me.setValue(C,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Rf(mn,xr),et&&W.fog===!0&&j.refreshFogUniforms(mn,et),j.refreshMaterialUniforms(mn,W,G,Q,p.state.transmissionRenderTarget[y.id]),Qo.upload(C,Lu(Dt),mn,Ut)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qo.upload(C,Lu(Dt),mn,Ut),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Me.setValue(C,"center",O.center),Me.setValue(C,"modelViewMatrix",O.modelViewMatrix),Me.setValue(C,"normalMatrix",O.normalMatrix),Me.setValue(C,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const je=W.uniformsGroups;for(let nn=0,Pa=je.length;nn<Pa;nn++){const $i=je[nn];Ht.update($i,ln),Ht.bind($i,ln)}}return ln}function Rf(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Cf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,F,V){const W=mt.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),mt.get(y.texture).__webglTexture=F,mt.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const V=mt.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Pf=C.createFramebuffer();this.setRenderTarget=function(y,F=0,V=0){D=y,T=F,L=V;let W=!0,O=null,et=!1,pt=!1;if(y){const xt=mt.get(y);if(xt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)Ut.setupRenderTarget(y);else if(xt.__hasExternalTextures)Ut.rebindTextures(y,mt.get(y.texture).__webglTexture,mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const It=y.depthTexture;if(xt.__boundDepthTexture!==It){if(It!==null&&mt.has(It)&&(y.width!==It.image.width||y.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(y)}}const Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const Bt=mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?O=Bt[F][V]:O=Bt[F],et=!0):y.samples>0&&Ut.useMultisampledRTT(y)===!1?O=mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[V]:O=Bt,A.copy(y.viewport),N.copy(y.scissor),k=y.scissorTest}else A.copy(Mt).multiplyScalar(G).floor(),N.copy(Wt).multiplyScalar(G).floor(),k=ne;if(V!==0&&(O=Pf),vt.bindFramebuffer(C.FRAMEBUFFER,O)&&W&&vt.drawBuffers(y,O),vt.viewport(A),vt.scissor(N),vt.setScissorTest(k),et){const xt=mt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,xt.__webglTexture,V)}else if(pt){const xt=F;for(let Nt=0;Nt<y.textures.length;Nt++){const Bt=mt.get(y.textures[Nt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,V,xt)}}else if(y!==null&&V!==0){const xt=mt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(y,F,V,W,O,et,pt,Et=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){vt.bindFramebuffer(C.FRAMEBUFFER,xt);try{const Nt=y.textures[Et],Bt=Nt.format,It=Nt.type;if(!Pt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&V>=0&&V<=y.height-O&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Et),C.readPixels(F,V,W,O,Rt.convert(Bt),Rt.convert(It),et))}finally{const Nt=D!==null?mt.get(D).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,W,O,et,pt,Et=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(F>=0&&F<=y.width-W&&V>=0&&V<=y.height-O){vt.bindFramebuffer(C.FRAMEBUFFER,xt);const Nt=y.textures[Et],Bt=Nt.format,It=Nt.type;if(!Pt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Jt),C.bufferData(C.PIXEL_PACK_BUFFER,et.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Et),C.readPixels(F,V,W,O,Rt.convert(Bt),Rt.convert(It),0);const ae=D!==null?mt.get(D).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,ae);const we=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Mp(C,we,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Jt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,et),C.deleteBuffer(Jt),C.deleteSync(we),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,V=0){const W=Math.pow(2,-V),O=Math.floor(y.image.width*W),et=Math.floor(y.image.height*W),pt=F!==null?F.x:0,Et=F!==null?F.y:0;Ut.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,pt,Et,O,et),vt.unbindTexture()};const Lf=C.createFramebuffer(),If=C.createFramebuffer();this.copyTextureToTexture=function(y,F,V=null,W=null,O=0,et=null){et===null&&(O!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=O,O=0):et=0);let pt,Et,xt,Nt,Bt,It,Jt,ae,we;const ge=y.isCompressedTexture?y.mipmaps[et]:y.image;if(V!==null)pt=V.max.x-V.min.x,Et=V.max.y-V.min.y,xt=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Bt=V.min.y,It=V.isBox3?V.min.z:0;else{const gn=Math.pow(2,-O);pt=Math.floor(ge.width*gn),Et=Math.floor(ge.height*gn),y.isDataArrayTexture?xt=ge.depth:y.isData3DTexture?xt=Math.floor(ge.depth*gn):xt=1,Nt=0,Bt=0,It=0}W!==null?(Jt=W.x,ae=W.y,we=W.z):(Jt=0,ae=0,we=0);const he=Rt.convert(F.format),Dt=Rt.convert(F.type);let xe;F.isData3DTexture?(Ut.setTexture3D(F,0),xe=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ut.setTexture2DArray(F,0),xe=C.TEXTURE_2D_ARRAY):(Ut.setTexture2D(F,0),xe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Qt=C.getParameter(C.UNPACK_ROW_LENGTH),ln=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ps=C.getParameter(C.UNPACK_SKIP_PIXELS),un=C.getParameter(C.UNPACK_SKIP_ROWS),xr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,It);const Me=y.isDataArrayTexture||y.isData3DTexture,mn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const gn=mt.get(y),je=mt.get(F),nn=mt.get(gn.__renderTarget),Pa=mt.get(je.__renderTarget);vt.bindFramebuffer(C.READ_FRAMEBUFFER,nn.__webglFramebuffer),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let $i=0;$i<xt;$i++)Me&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(y).__webglTexture,O,It+$i),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(F).__webglTexture,et,we+$i)),C.blitFramebuffer(Nt,Bt,pt,Et,Jt,ae,pt,Et,C.DEPTH_BUFFER_BIT,C.NEAREST);vt.bindFramebuffer(C.READ_FRAMEBUFFER,null),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||mt.has(y)){const gn=mt.get(y),je=mt.get(F);vt.bindFramebuffer(C.READ_FRAMEBUFFER,Lf),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,If);for(let nn=0;nn<xt;nn++)Me?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gn.__webglTexture,O,It+nn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gn.__webglTexture,O),mn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,je.__webglTexture,et,we+nn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,je.__webglTexture,et),O!==0?C.blitFramebuffer(Nt,Bt,pt,Et,Jt,ae,pt,Et,C.COLOR_BUFFER_BIT,C.NEAREST):mn?C.copyTexSubImage3D(xe,et,Jt,ae,we+nn,Nt,Bt,pt,Et):C.copyTexSubImage2D(xe,et,Jt,ae,Nt,Bt,pt,Et);vt.bindFramebuffer(C.READ_FRAMEBUFFER,null),vt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mn?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(xe,et,Jt,ae,we,pt,Et,xt,he,Dt,ge.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(xe,et,Jt,ae,we,pt,Et,xt,he,ge.data):C.texSubImage3D(xe,et,Jt,ae,we,pt,Et,xt,he,Dt,ge):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,et,Jt,ae,pt,Et,he,Dt,ge.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,et,Jt,ae,ge.width,ge.height,he,ge.data):C.texSubImage2D(C.TEXTURE_2D,et,Jt,ae,pt,Et,he,Dt,ge);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ln),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ps),C.pixelStorei(C.UNPACK_SKIP_ROWS,un),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xr),et===0&&F.generateMipmaps&&C.generateMipmap(xe),vt.unbindTexture()},this.initRenderTarget=function(y){mt.get(y).__webglFramebuffer===void 0&&Ut.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ut.setTextureCube(y,0):y.isData3DTexture?Ut.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ut.setTexture2DArray(y,0):Ut.setTexture2D(y,0),vt.unbindTexture()},this.resetState=function(){T=0,L=0,D=null,vt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Kn=-45,pi=45,eo=-85,Di=55,nr=-55,dt=1.7,xx=.35,Mx=0,Sx=-75,rf=11127016,es=-25,ns=25,rn=-12,Bo=40,ke=9,ai=.4,ta=5,ps=6,hi=-40,Ee=-26,Pn=-38,Mn=-18,He=8,mc=-22,is=-14,ss=-48,Rr=-40,Rn=3.5,gc=3,Vn=6,_c=4.5,li=nr,ba=[{id:"outside",title:"محوطه بیرونی",sub:"بیرون از کارخانه",color:9150556,xMin:Kn,xMax:pi,zMin:eo,zMax:nr},{id:"furnace",title:"کوره ذوب",sub:"منطقه ذوب و ریخته‌گری فلز",color:12867886,xMin:-24,xMax:-8,zMin:-10,zMax:10},{id:"press",title:"پرس و شکل‌دهی",sub:"خط شکل‌دهی قوطی فلزی",color:5929894,xMin:-6,xMax:8,zMin:-10,zMax:10},{id:"packaging",title:"خط بسته‌بندی",sub:"نوار نقاله و بسته‌بندی نهایی",color:7310149,xMin:10,xMax:24,zMin:-10,zMax:10},{id:"hall",title:"سوله تولید",sub:"سالن اصلی کارخانه",color:9137470,xMin:-26,xMax:26,zMin:-13,zMax:41},{id:"admin",title:"ساختمان اداری",sub:"دفاتر مدیریت و اداری",color:10705469,xMin:-41,xMax:-25,zMin:-39,zMax:-17},{id:"guard",title:"اتاق نگهبانی",sub:"کنترل ورود و خروج",color:6056857,xMin:-23,xMax:-13,zMin:-49,zMax:-39},{id:"entrance",title:"درب ورودی",sub:"ورودی اصلی کارخانه",color:14068572,xMin:-8,xMax:8,zMin:nr-5,zMax:nr+5},{id:"yard",title:"حیاط کارخانه",sub:"محوطه و پارکینگ",color:6064714,xMin:Kn,xMax:pi,zMin:nr,zMax:Di}],Hn=14,bi=22,us=-48,vn=-40,kd=3.5,rs=1.2,Cr=2.4,yx=document.getElementById("three-canvas"),z=new Dh;z.background=new Gt(rf);z.fog=new au(rf,60,200);const Lt=new on(72,window.innerWidth/window.innerHeight,.05,500);Lt.rotation.order="YXZ";const ze=new sf({canvas:yx,antialias:!0,powerPreference:"high-performance"});ze.setPixelRatio(Math.min(window.devicePixelRatio,2));ze.setSize(window.innerWidth,window.innerHeight);ze.shadowMap.enabled=!0;ze.shadowMap.type=dh;ze.outputColorSpace=Ae;ze.toneMapping=jl;ze.toneMappingExposure=1.05;const sn=new gl(16773846,1.1);function wx(){z.add(new $h(12375280,4866612,.8)),z.add(new Jh(5922928,.45)),sn.position.set(-50,80,-60),sn.castShadow=!0,sn.shadow.mapSize.set(2048,2048),sn.shadow.camera.left=-80,sn.shadow.camera.right=80,sn.shadow.camera.top=80,sn.shadow.camera.bottom=-80,sn.shadow.camera.near=1,sn.shadow.camera.far=300,sn.shadow.bias=-.0012,z.add(sn),z.add(sn.target)}window.addEventListener("resize",()=>{Lt.aspect=window.innerWidth/window.innerHeight,Lt.updateProjectionMatrix(),ze.setSize(window.innerWidth,window.innerHeight)});let no=!1,ki=!1,da="in",Gn=0;const xl=new P,Ml=new Xi,Hd=new P(65,95,-75),Vd=new P(0,3,-15);let Wn=null;function Ex(){Wn=document.createElement("button"),Wn.id="overview-btn",Wn.type="button",Wn.innerHTML=`
    <span class="ov-ico">🗺️</span>
    <span class="ov-txt">نمای کارخانه</span>
  `,Wn.setAttribute("aria-label","نمای بالا"),document.body.appendChild(Wn),Wn.addEventListener("click",zo),Wn.addEventListener("touchstart",i=>{i.preventDefault(),zo()},{passive:!1}),window.addEventListener("keydown",i=>{i.code==="KeyV"&&!ki&&zo(),i.code==="Escape"&&no&&!ki&&zo()})}function bx(){return no}function zo(){ki||(no?(da="out",Gn=0,ki=!0,Wn?.classList.remove("active")):(xl.copy(Lt.position),Ml.copy(Lt.quaternion),no=!0,da="in",Gn=0,ki=!0,Wn?.classList.add("active")))}const ko=new fe,Ho=new Xi;function Tx(i){if(!ki)return;Gn=Math.min(1,Gn+i*(da==="in"?1.2:1.6));const e=Gn<.5?2*Gn*Gn:1-Math.pow(-2*Gn+2,2)/2;da==="in"?(Lt.position.lerpVectors(xl,Hd,e),ko.lookAt(Lt.position,Vd,new P(0,1,0)),Ho.setFromRotationMatrix(ko),Lt.quaternion.slerpQuaternions(Ml,Ho,e),Gn>=1&&(ki=!1)):(Lt.position.lerpVectors(Hd,xl,e),ko.lookAt(Lt.position,Vd,new P(0,1,0)),Ho.setFromRotationMatrix(ko),Lt.quaternion.slerpQuaternions(Ho,Ml,e),Gn>=1&&(ki=!1,no=!1))}let de=null,pn=null,Jn=null,Sn=null,ha=null,qn=null;const ms=[];let Gd=-1,Ta="intro",Nr=!0,Ss=!1,Wd=!1;const Ax=.55;async function Pr(i,t){try{const e=await fetch(t);if(!e.ok)return null;const n=await e.arrayBuffer();return await i.decodeAudioData(n)}catch{return console.warn(`[audio] نتوانست بارگذاری کند: ${t}`),null}}function _u(){if(qn){const i=qn;qn=null;try{i.stop(0)}catch{}try{i.disconnect()}catch{}}if(Jn&&de){const i=de.currentTime;Jn.gain.cancelScheduledValues(i),Jn.gain.setValueAtTime(0,i)}}function io(){if(!de)return;const i=de.currentTime;Ta==="intro"?(Sn&&(Sn.gain.cancelScheduledValues(i),Sn.gain.setValueAtTime(0,i)),ha&&Ss&&de.state==="running"&&!qn&&(qn=de.createBufferSource(),qn.buffer=ha,qn.loop=!0,qn.connect(Jn),Jn.gain.cancelScheduledValues(i),Jn.gain.setValueAtTime(0,i),Jn.gain.linearRampToValueAtTime(1,i+1.5),qn.start(),console.log("[audio] موسیقی پرواز پخش شد"))):(_u(),Sn&&Ss&&de.state==="running"&&(Sn.gain.cancelScheduledValues(i),Sn.gain.setValueAtTime(0,i),Sn.gain.linearRampToValueAtTime(1,i+.3)),console.log("[audio] حالت راه رفتن فعال"))}async function Rx(){if(!de||Wd)return;Wd=!0;const i="/conv-assistant/factory/",t="?v=6",[e,n,s,r,o]=await Promise.all([Pr(de,i+"audio/intro-music.mp3"+t),Pr(de,i+"audio/step-1.mp3"+t),Pr(de,i+"audio/step-2.mp3"+t),Pr(de,i+"audio/step-3.mp3"+t),Pr(de,i+"audio/step-4.mp3"+t)]);ha=e,[n,s,r,o].forEach(a=>{a&&ms.push(a)}),console.log(`[audio] موسیقی: ${ha?"✅":"❌"} — قدم‌ها: ${ms.length}/4`),Ss&&io()}function Cx(){if(de)return;const i=window.AudioContext||window.webkitAudioContext;i&&(de=new i,pn=de.createGain(),pn.gain.value=0,pn.connect(de.destination),Jn=de.createGain(),Jn.gain.value=0,Jn.connect(pn),Sn=de.createGain(),Sn.gain.value=0,Sn.connect(pn),Rx())}function Px(){Ta="intro",io()}function Lx(){Ta="walk",_u(),io()}function Ix(i=1){if(Ta!=="walk"||(qn&&_u(),!de||!Sn||Nr||!Ss)||de.state!=="running"||ms.length===0)return;let t=Math.floor(Math.random()*ms.length);ms.length>1&&t===Gd&&(t=(t+1)%ms.length),Gd=t;const e=de.createBufferSource();e.buffer=ms[t],e.playbackRate.value=.92+Math.random()*.16;const n=de.createGain();n.gain.value=i,e.connect(n),n.connect(Sn),e.start()}function Dx(){if(!de||!pn)return Nr;if(Ss){Ss=!1,Nr=!0;const i=de.currentTime;pn.gain.cancelScheduledValues(i),pn.gain.setValueAtTime(pn.gain.value,i),pn.gain.linearRampToValueAtTime(0,i+.15),console.log("[audio] صدا خاموش شد")}else{Ss=!0,Nr=!1;const i=de.currentTime;pn.gain.cancelScheduledValues(i),pn.gain.setValueAtTime(0,i),pn.gain.linearRampToValueAtTime(Ax,i+.3),de.state==="suspended"?de.resume().then(()=>{io()}).catch(()=>{}):io(),console.log("[audio] صدا روشن شد")}return Nr}const fa=[];function Oe(i,t,e,n,s){fa.push({minX:i,maxX:t,minZ:e,maxZ:n,kind:s})}function Sl(i,t,e=xx){for(let n=0;n<fa.length;n++){const s=fa[n];if(i+e>s.minX&&i-e<s.maxX&&t+e>s.minZ&&t-e<s.maxZ)return!0}return!1}typeof window<"u"&&(window.playerState||(window.playerState={yaw:Math.PI,pitch:0,camY:dt,bobPhase:0}));const Ge=window.playerState;function of(i,t,e){Lt.position.set(i,t,e),Ge.camY=t}const Le={},Ux=5.5,Nx=1.8;function Fx(i){Lt.rotation.set(Ge.pitch,Ge.yaw,0,"YXZ");let t=0,e=0;Le.KeyW&&(t+=1),Le.KeyS&&(t-=1),Le.KeyD&&(e+=1),Le.KeyA&&(e-=1);const n=Math.hypot(t,e),s=n>.02;n>1&&(t/=n,e/=n);const r=Le.ShiftLeft||Le.ShiftRight,o=Ux*(r?Nx:1)*i,a=-Math.sin(Ge.yaw),l=-Math.cos(Ge.yaw),c=-l,u=a,d=(a*t+c*e)*o,h=(l*t+u*e)*o,f=Lt.position.x+d;Sl(f,Lt.position.z)||(Lt.position.x=f);const g=Lt.position.z+h;if(Sl(Lt.position.x,g)||(Lt.position.z=g),Lt.position.x=Math.max(Kn+1,Math.min(pi-1,Lt.position.x)),Lt.position.z=Math.max(eo+1,Math.min(Di-1,Lt.position.z)),s){const m=Ge.bobPhase,p=r?11.5:8.5;Ge.bobPhase+=i*p;const w=Math.floor(m/Math.PI);Math.floor(Ge.bobPhase/Math.PI)!==w&&Ix(r?1.15:1)}else Ge.bobPhase=0;const _=s?Math.sin(Ge.bobPhase)*.045:0;Ge.camY+=(dt+_-Ge.camY)*Math.min(1,i*14),Lt.position.y=Ge.camY}function Ox(){const i=new Fn().setFromQuaternion(Lt.quaternion,"YXZ");Ge.yaw=i.y,Ge.pitch=i.x}const vu={low:{pixelRatio:1,shadowsEnabled:!1,maxVisibleLights:4,particleBudget:0},medium:{pixelRatio:Math.min(window.devicePixelRatio,1.5),shadowsEnabled:!0,maxVisibleLights:10,particleBudget:10},high:{pixelRatio:Math.min(window.devicePixelRatio,2),shadowsEnabled:!0,maxVisibleLights:22,particleBudget:20}},Bx=3,zx=5,kx=1.5,Xd=.1,Hx=48,Vx=55,Gx=28,Wx=22,qd=3,Xx=20,Yd=45;let pa=null,yl=null,wl=null;const af=[],Vr=[];let cf=[],We="medium",El=!0,ea=0,vc=0,ys=60,Ui=0,Ti=0,Ai=0,na=!1,xu=!1,bl=null;const qx=new P,Yx=new P;function $x(){return/Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent)||window.matchMedia("(pointer: coarse)").matches&&window.innerWidth<1024}function Zx(){const i=navigator.hardwareConcurrency??4;let t="mid";try{const e=document.createElement("canvas"),n=e.getContext("webgl2")||e.getContext("webgl");if(n){const s=n.getExtension("WEBGL_debug_renderer_info");if(s){const r=n.getParameter(s.UNMASKED_RENDERER_WEBGL).toLowerCase(),o=r.includes("intel hd")||r.includes("intel uhd")||r.includes("mali")||r.includes("adreno")||r.includes("powervr")||r.includes("videocore"),a=r.includes("nvidia")||r.includes("geforce")||r.includes("rtx")||r.includes("gtx")||r.includes("radeon rx")||r.includes("apple m");o?t="low":a&&(t="high")}n.getExtension("WEBGL_lose_context")?.loseContext()}}catch{}return t==="low"||i<4?"low":t==="high"&&i>=8?"high":"medium"}function lf(){if(!wl||Vr.length===0)return;const i=wl.position;Vr.sort((e,n)=>{const s=e.getWorldPosition(qx),r=n.getWorldPosition(Yx);return s.distanceToSquared(i)-r.distanceToSquared(i)});const t=vu[We].maxVisibleLights;Vr.forEach((e,n)=>{e.visible=n<t})}function Gr(i){const t=i!==We;We=i;const e=vu[i];pa&&pa.setPixelRatio(e.pixelRatio),yl&&(yl.castShadow=e.shadowsEnabled),af.forEach(n=>{n.visible=!0}),lf(),cf.forEach((n,s)=>{n.visible=s<e.particleBudget}),t&&(console.log(`[quality] ${t?"change":"init"} → ${i} | shadows=${e.shadowsEnabled?"ON":"off"} | pixelRatio=${e.pixelRatio.toFixed(2)}`),bl&&bl(i))}function Kx(){if(xu||na)return;if(Ui>0){ys<15&&We!=="low"&&(console.log(`[quality] ⚠️ اضطراری → low (FPS=${ys.toFixed(1)})`),Gr("low"),Ui=Yd,Ti=0,Ai=0);return}const i=ys,t=We==="high"?Gx:We==="medium"?Wx:0,e=We==="low"?Hx:We==="medium"?Vx:1/0;if(t>0&&i<t)Ti++,Ai=0;else if(e<1/0&&i>e)Ai++,Ti=0;else{Ti=0,Ai=0;return}if(Ti>=qd){let n=null;We==="high"?n="medium":We==="medium"&&(n="low"),n&&(console.log(`[quality] ⬇️ ${We} → ${n} (FPS=${i.toFixed(1)})`),Gr(n),Ui=Yd),Ti=0,Ai=0}else if(Ai>=qd){let n=null;We==="low"?n="medium":We==="medium"&&(n="high"),n&&(console.log(`[quality] ⬆️ ${We} → ${n} (FPS=${i.toFixed(1)})`),Gr(n),Ui=Xx),Ti=0,Ai=0}}function Jx(i,t,e,n){pa=i,yl=t,wl=e,bl=null;const s=new URLSearchParams(window.location.search).get("quality");if(s==="low"||s==="medium"||s==="high"){xu=!0,We=s,Gr(s),console.log(`[quality] قفل روی ${s} (URL override)`);return}na=$x();const r=na?"low":Zx();Gr(r),ys=60,Ui=0,El=!0,ea=0,Ti=0,Ai=0,console.log(`[quality] شروع: ${r} | موبایل=${na} | cores=${navigator.hardwareConcurrency??"?"} | DPR=${window.devicePixelRatio}`)}function Ce(i,t=!1){(t?af:Vr).push(i)}function jx(i){cf=i}function Qx(i){if(!pa||xu)return;if(ea+=i,vc+=i,Ui>0&&(Ui=Math.max(0,Ui-i)),i>0){const n=1/i;n>5&&n<200&&(ys=ys*(1-Xd)+n*Xd)}ea>=(El?Bx:zx)&&(Kx(),El=!1,ea=0),vu[We].maxVisibleLights<Vr.length&&vc>=kx&&(vc=0,lf())}function tM(){return We}function eM(){return ys}function ma(i){return`#${i.toString(16).padStart(6,"0")}`}function ti(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t??i,e}function qi(i,t=1,e=1,n=1){const s=new Sa(i);return s.wrapS=s.wrapT=Wr,s.repeat.set(t,e),s.colorSpace=Ae,s.anisotropy=n,s}function uf(i,t,e){const n=ti(t),s=n.getContext("2d"),r=new Gt(i),o=s.createImageData(t,t);for(let a=0;a<t*t;a++){const l=(Math.random()-.5)*e;o.data[a*4]=Math.min(255,Math.max(0,r.r*255+l)),o.data[a*4+1]=Math.min(255,Math.max(0,r.g*255+l)),o.data[a*4+2]=Math.min(255,Math.max(0,r.b*255+l)),o.data[a*4+3]=255}return s.putImageData(o,0,0),qi(n)}function nM(){const t=ti(256),e=t.getContext("2d");e.fillStyle="#5c8a4a",e.fillRect(0,0,256,256);for(let n=0;n<3600;n++){const s=100+Math.random()*70;e.fillStyle=`rgba(${60+Math.random()*30},${s},${50+Math.random()*30},0.5)`,e.fillRect(Math.random()*256,Math.random()*256,1.6,1.6)}return qi(t,40,40)}function iM(){const t=ti(256),e=t.getContext("2d");e.fillStyle="#3a3a3e",e.fillRect(0,0,256,256);for(let n=0;n<2500;n++){const s=60+Math.random()*40;e.fillStyle=`rgba(${s},${s},${s+5},0.6)`,e.fillRect(Math.random()*256,Math.random()*256,1.4,1.4)}return qi(t,8,8)}function Mu(i=10130576){const e=ti(256),n=e.getContext("2d"),s=new Gt(i);n.fillStyle=`#${s.getHexString()}`,n.fillRect(0,0,256,256);for(let r=0;r<400;r++){const o=(Math.random()-.5)*40,a=Math.min(255,Math.max(0,s.r*255+o))|0,l=Math.min(255,Math.max(0,s.g*255+o))|0,c=Math.min(255,Math.max(0,s.b*255+o))|0;n.fillStyle=`rgba(${a},${l},${c},0.35)`,n.fillRect(Math.random()*256,Math.random()*256,4,4)}n.strokeStyle="rgba(60,55,50,0.25)",n.lineWidth=1;for(let r=0;r<8;r++)n.beginPath(),n.moveTo(Math.random()*256,Math.random()*256),n.lineTo(Math.random()*256,Math.random()*256),n.stroke();return qi(e,1,1)}function sM(i=9080210){const e=ti(256),n=e.getContext("2d"),s=new Gt(i);n.fillStyle=`#${s.getHexString()}`,n.fillRect(0,0,256,256);const r=8;for(let o=0;o<256;o+=r)n.fillStyle=`rgba(0,0,0,${o%(r*2)===0?.25:.05})`,n.fillRect(o,0,r/2,256),n.fillStyle=`rgba(255,255,255,${o%(r*2)===0?.1:.02})`,n.fillRect(o+r/2,0,r/2,256);return qi(e,3,1)}function df(i=12888200){const e=ti(256),n=e.getContext("2d");n.fillStyle=`#${new Gt(i).getHexString()}`,n.fillRect(0,0,256,256);const s=16,r=256/s,o=32;for(let a=0;a<s;a++){const l=a*r,c=a%2*(o/2);n.strokeStyle="rgba(80,70,60,0.35)",n.lineWidth=2;for(let u=-o;u<256+o;u+=o)n.strokeRect(u+c,l,o,r)}return qi(e,3,2)}function rM(i=5921374){const e=ti(256),n=e.getContext("2d");n.fillStyle=`#${new Gt(i).getHexString()}`,n.fillRect(0,0,256,256);const s=12;for(let r=0;r<256;r+=s)n.fillStyle=`rgba(0,0,0,${r%(s*2)===0?.3:.05})`,n.fillRect(r,0,1,256);for(let r=0;r<60;r++)n.fillStyle=`rgba(255,255,255,${Math.random()*.06})`,n.fillRect(Math.random()*256,Math.random()*256,3,3);return qi(e,3,4)}function oM(){const t=ti(128),e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(230,228,222,0.55)"),n.addColorStop(.4,"rgba(210,208,202,0.28)"),n.addColorStop(1,"rgba(200,200,200,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new Sa(t);return s.colorSpace=Ae,s}function aM(){const t=ti(64,64),e=t.getContext("2d");e.fillStyle="#16171a",e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.16)";const n=12;for(let s=0;s<64;s+=n*2)e.fillRect(0,s,64,n*.35);return qi(t,1,1)}function As(i,t,e,n=1){const o=ti(800,320),a=o.getContext("2d");a.fillStyle="#f1e9d8",a.fillRect(0,0,800,320);const l=`#${e.toString(16).padStart(6,"0")}`;a.strokeStyle=l,a.lineWidth=14,a.strokeRect(10,10,780,300),a.strokeStyle="rgba(0,0,0,0.08)",a.lineWidth=2,a.strokeRect(28,28,744,264),a.direction="rtl",a.textAlign="center",a.textBaseline="middle";const c=710;let u=76,d=`800 ${u}px Vazirmatn, Tahoma, sans-serif`;for(a.font=d;a.measureText(i).width>c&&u>22;)u-=2,d=`800 ${u}px Vazirmatn, Tahoma, sans-serif`,a.font=d;a.fillStyle="#1a1612",a.fillText(i,800/2,320/2-30);const h=680;let f=36,g=`500 ${f}px Vazirmatn, Tahoma, sans-serif`;for(a.font=g;a.measureText(t).width>h&&f>16;)f-=2,g=`500 ${f}px Vazirmatn, Tahoma, sans-serif`,a.font=g;a.fillStyle="#6b6153",a.fillText(t,800/2,320/2+58);const _=new Sa(o);return _.colorSpace=Ae,_.anisotropy=n,_}const Vo=.2,xn=-29,ga=hi,_a=xn,Bn=.9,os=2.2,gs=4,Fr=[{id:"room-a",zMin:-38,zMax:-31,doorZ:-34.5,open:!1,title:"مدیریت"},{id:"room-b",zMin:-31,zMax:-24,doorZ:-27.5,open:!1,title:"حسابداری"},{id:"room-c",zMin:-24,zMax:-18,doorZ:-21,open:!0,title:"اتاق تماس"}],Go=new st({map:uf(15262418,128,10),roughness:.9}),cM=new st({color:9075304,roughness:.85}),lM=new st({color:15789024,roughness:.95}),zn=new st({color:5914408,roughness:.7}),uM=new st({color:8016432,roughness:.6});new st({color:6318192,metalness:.7,roughness:.4});const dM=new st({color:15788240,roughness:.9}),hM=new st({color:13934666,roughness:.6}),fM=new st({color:15251544,roughness:.6}),$d=new st({color:3824250,roughness:.55}),pM=new st({color:13214541,metalness:.75,roughness:.3});function Wo(i,t,e,n,s,r,o,a=!0){const l=r-s,c=new U(new ot(e,l,n),o);return c.position.set(i,s+l/2,t),c.castShadow=!0,c.receiveShadow=!0,z.add(c),a&&Oe(i-e/2,i+e/2,t-n/2,t+n/2,"wall"),c}let ia=null,sa=null;function mM(){const i=Ee-hi,t=Mn-Pn,e=(hi+Ee)/2,n=(Pn+Mn)/2,s=new U(new zt(i,t),cM);s.rotation.x=-Math.PI/2,s.position.set(e,.02,n),s.receiveShadow=!0,z.add(s);const r=new U(new zt(i,t),lM);r.rotation.x=Math.PI/2,r.position.set(e,gs-.05,n),r.receiveShadow=!0,z.add(r);const o=Fr.map(u=>u.doorZ).sort((u,d)=>u-d);let a=Pn;for(const u of o){const d=u-Bn;d-a>.05&&Wo(xn,(a+d)/2,Vo,d-a,0,gs,Go),Wo(xn,u,Vo,Bn*2,os,gs,Go,!1),a=u+Bn}Mn-a>.05&&Wo(xn,(a+Mn)/2,Vo,Mn-a,0,gs,Go);for(let u=0;u<Fr.length-1;u++){const d=Fr[u].zMax;Wo((ga+_a)/2,d,_a-ga,Vo,0,gs,Go)}for(const u of Fr)if(u.open){const d=new U(new zt(1.2,.3),new st({color:16052196,emissive:9072704,emissiveIntensity:.15,roughness:.7}));d.position.set(xn+.12,os+.25,u.doorZ),d.rotation.y=-Math.PI/2,z.add(d);const h=new Xe;h.position.set(xn,0,u.doorZ-Bn+.05);const f=new U(new ot(.06,os,Bn*2-.1),$d);f.position.set(0,os/2,(Bn*2-.1)/2),f.castShadow=!0,h.add(f),h.rotation.y=-Math.PI/2.2,z.add(h)}else{const d=new U(new ot(.06,os,Bn*2-.1),$d);d.position.set(xn,os/2,u.doorZ),d.castShadow=!0,z.add(d);const h=new U(new En(.05,10,10),pM);h.position.set(xn+.07,1.05,u.doorZ+Bn-.2),z.add(h);const f=new U(new zt(1.2,.3),new st({color:16052196,emissive:9072704,emissiveIntensity:.15,roughness:.7}));f.position.set(xn+.12,os+.25,u.doorZ),f.rotation.y=-Math.PI/2,z.add(f),Oe(xn-.15,xn+.15,u.doorZ-Bn,u.doorZ+Bn,"wall")}for(const u of[-34,-28,-21]){const d=new Re(16770736,.9,8,2);d.position.set((xn+Ee)/2,3.5,u),z.add(d),Ce(d,!0)}const l=new Re(16770736,1.3,12,2);l.position.set(Ee-1.5,2.8,n),z.add(l),Ce(l,!0);const c=new Re(11055296,.35,20,2);c.position.set(e,2.5,n),z.add(c),Ce(c,!0),gM()}function gM(){const i=Fr[2],t=(ga+_a)/2,e=(i.zMin+i.zMax)/2,n=new st({color:9056304,roughness:1}),s=new U(new zt(4.5,3.5),new st({color:2759184,roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(t,.025,e),z.add(s);const r=new U(new zt(4.2,3.2),n);r.rotation.x=-Math.PI/2,r.position.set(t,.03,e),z.add(r);const o=2.4,a=1,l=.85,c=t-.5,u=e,d=new U(new ot(o,.08,a),uM);d.position.set(c,l,u),d.castShadow=!0,d.receiveShadow=!0,z.add(d);for(const $t of[-o/2+.15,o/2-.15])for(const mt of[-a/2+.15,a/2-.15]){const Ut=new U(new ot(.1,l,.1),zn);Ut.position.set(c+$t,l/2,u+mt),Ut.castShadow=!0,z.add(Ut)}const h=c+1.1,f=u,g=new U(new ot(.5,.08,.5),zn);g.position.set(h,.45,f),g.castShadow=!0,z.add(g);const _=new U(new ot(.5,.55,.08),zn);_.position.set(h+.24,.75,f),_.castShadow=!0,z.add(_);for(const $t of[-.6,.6]){const mt=new U(new ot(.5,.08,.5),zn);mt.position.set(c-1.2,.45,u+$t),z.add(mt);const Ut=new U(new ot(.5,.55,.08),zn);Ut.position.set(c-1.44,.75,u+$t),z.add(Ut)}const m=new Xe;m.position.set(c-.4,l+.05,u-.15),m.rotation.y=-Math.PI/8,z.add(m);const p=new U(new ot(.55,.025,.42),hM);p.position.y=0,p.castShadow=!0,m.add(p);const w=new U(new ot(.5,.015,.4),fM);w.position.y=.03,w.rotation.x=-.12,w.castShadow=!0,m.add(w);const E=new U(new ot(.42,.005,.36),dM);E.position.y=.045,m.add(E),ia=p;const x=2.8,R=2,T=.35,L=t-.3,D=i.zMin+.2,S=.15,M=new U(new ot(x,R,T),zn);M.position.set(L,S+R/2,D),M.castShadow=!0,z.add(M);const A=new U(new ot(x-.15,R-.2,T-.08),new st({color:3811352,roughness:.85}));A.position.set(L,S+R/2+.05,D),z.add(A);const N=4,k=[9054762,2771594,2779706,9075242,6957674,2779770,10506272,3816026];for(let $t=0;$t<N;$t++){const mt=S+.3+$t*.45,Ut=new U(new ot(x-.2,.03,T-.1),new st({color:9067066,roughness:.7}));Ut.position.set(L,mt,D),z.add(Ut);const be=8+Math.floor(Math.random()*4);let pe=L-(x-.5)/2;for(let b=0;b<be;b++){const v=.045+Math.random()*.03,B=.32+Math.random()*.08,$=new U(new ot(v,B,T-.18),new st({color:k[Math.floor(Math.random()*k.length)],roughness:.85}));if($.position.set(pe+v/2,mt+B/2+.02,D),$.castShadow=!0,z.add($),pe+=v+.008,Math.random()<.1&&(pe+=.05),pe>L+(x-.5)/2)break}}const X=hi+.175,q=2.4,H=1.6,Q=2.2,G=e,rt=new U(new ot(.08,H+.18,q+.18),zn);rt.position.set(X+.02,Q,G),rt.castShadow=!0,z.add(rt);const lt=new U(new zt(q,H),new st({color:15788240,roughness:.85}));lt.rotation.y=Math.PI/2,lt.position.set(X+.08,Q,G),z.add(lt);const Mt=new Yh,ne="/conv-assistant/factory/"+"map.png";Mt.load(ne,$t=>{$t.colorSpace=Ae;const mt=lt.material;mt.map=$t,mt.color.setHex(16777215),mt.needsUpdate=!0},void 0,()=>console.warn("[admin] map.png پیدا نشد")),sa=lt;const ie=new U(new oe(.35,.35,.04,32),new st({color:16052196,roughness:.6}));ie.rotation.x=Math.PI/2,ie.position.set(t+1.5,3,i.zMax-.15),z.add(ie);const Kt=new U(new to(.35,.03,8,32),zn);Kt.position.set(t+1.5,3,i.zMax-.16),z.add(Kt);const Z=new U(new ot(.02,.2,.005),new dr({color:1709586}));Z.position.set(t+1.5,3,i.zMax-.17),Z.rotation.z=Math.PI/3,z.add(Z);const K=new U(new ot(.015,.28,.005),new dr({color:1709586}));K.position.set(t+1.5,3,i.zMax-.18),K.rotation.z=-Math.PI/6,z.add(K);const ht=new U(new ot(1.2,.9,.06),zn);ht.position.set(t-1.5,2.4,i.zMax-.1),z.add(ht);const wt=new U(new zt(1.05,.75),new st({color:6982312,roughness:.9}));wt.rotation.y=Math.PI,wt.position.set(t-1.5,2.4,i.zMax-.14),z.add(wt);const yt=.8,Xt=.4,ve=1.8,C=new U(new ot(yt,ve,Xt),zn);C.position.set(t+2,ve/2,i.zMax-.7),C.castShadow=!0,z.add(C);const ee=new U(new oe(.22,.18,.38,12),new st({color:6965813,roughness:.8}));ee.position.set(t+2,.19,i.zMin+.6),ee.castShadow=!0,z.add(ee);const Ft=new U(new En(.35,10,10),new st({color:4880954,roughness:.9}));Ft.position.set(t+2,.7,i.zMin+.6),Ft.castShadow=!0,z.add(Ft);const Pt=new Re(16769200,1,8,2);Pt.position.set(t,gs-.5,e),z.add(Pt),Ce(Pt);const vt=new U(new oe(.2,.25,.12,12),new st({color:2764083,roughness:.6}));vt.position.set(t,gs-.55,e),z.add(vt)}const Xo={xMin:ga,xMax:_a,zMin:-24,zMax:-18};let ui=null,fn=null;function _M(){const i=document.getElementById("three-canvas");if(!i||document.pointerLockElement===i)return;fn&&(document.removeEventListener("pointerdown",fn),fn=null),(()=>{try{const e=i.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{fn=()=>{fn&&(document.removeEventListener("pointerdown",fn),fn=null);try{i.requestPointerLock()}catch{}},document.addEventListener("pointerdown",fn,{once:!0})})}catch{fn=()=>{fn&&(document.removeEventListener("pointerdown",fn),fn=null);try{i.requestPointerLock()}catch{}},document.addEventListener("pointerdown",fn,{once:!0})}})()}const vM=4.2,kn=2.4,Or=[{pos:[0,dt,-72],look:[0,dt-.3,-55],speed:kn,pause:1.3},{pos:[0,dt,-58],look:[0,dt-.2,-48]},{pos:[3,dt,-52],look:[10,dt-.2,-47]},{pos:[8,dt,-46],look:[12,dt-.2,-42]},{pos:[10,dt,-41],look:[15,dt-.2,-39]},{pos:[14,dt,-38],look:[18,dt-.2,-40],speed:kn},{pos:[17,dt,-38],look:[18,dt-.3,-41],speed:kn},{pos:[18,dt,-41],look:[18,dt-.2,-45]},{pos:[18,dt,-44],look:[18,dt-.3,-47],speed:kn,card:{title:"🧾 اتاق سفارش‌گیری",body:"اینجا می‌تونید محصول مورد نظرتون رو انتخاب کنید، طرح دلخواهتون رو روی اون ببینید و پیش‌فاکتور PDF بگیرید.",duration:6}},{pos:[18,dt,-41],look:[18,dt-.2,-37]},{pos:[17,dt,-38],look:[13,dt-.2,-36]},{pos:[12,dt,-36],look:[6,dt-.2,-30]},{pos:[6,dt,-30],look:[4,dt-.2,-22]},{pos:[4,dt,-22],look:[2,dt-.2,-16]},{pos:[2,dt,-16],look:[0,dt-.1,-11]},{pos:[0,dt,-13],look:[0,dt-.1,-7],speed:kn,card:{title:"🏭 سوله تولید",body:"سالن اصلی کارخانه با خط کامل تولید: از ورق خام تا قوطی نهایی. کوره ذوب، پرس شکل‌دهی و خط بسته‌بندی.",duration:6}},{pos:[0,dt,-9],look:[-3,dt-.2,-4]},{pos:[-5,dt,-7],look:[-11,dt,-2]},{pos:[-9,dt,-2],look:[-15,dt+.2,0],speed:kn},{pos:[-9,dt,2],look:[-16,dt+.3,0],speed:kn,card:{title:"🔥 کوره ذوب",body:"ورق‌های فلزی در کوره ذوب و قالب‌گیری می‌شوند. دمای بالای کوره و ذرات معلق، بخشی از فرآیند شکل‌دهی است.",duration:5}},{pos:[-6,dt,6],look:[-2,dt+.1,2]},{pos:[-2,dt,7],look:[0,dt+.1,1]},{pos:[0,dt,7],look:[0,dt+.1,0],speed:kn,card:{title:"⚙️ پرس و شکل‌دهی",body:"ورق‌های آماده‌شده در پرس با فشار بالا به شکل قوطی یا ظرف نهایی درمی‌آیند.",duration:5}},{pos:[6,dt,6],look:[12,dt+.1,3]},{pos:[11,dt,3],look:[17,dt-.3,0],speed:kn},{pos:[11,dt,3],look:[17,dt-.3,0],card:{title:"📦 خط بسته‌بندی",body:"قوطی‌های تولید شده روی نوار نقاله حرکت می‌کنند و به ایستگاه بسته‌بندی می‌رسند.",duration:5}},{pos:[6,dt,-3],look:[2,dt-.2,-8]},{pos:[2,dt,-8],look:[0,dt-.2,-13]},{pos:[0,dt,-13],look:[0,dt-.3,-22]},{pos:[3,dt,-20],look:[1,dt-.3,-35]},{pos:[0,dt,-35],look:[0,dt-.3,-50]},{pos:[0,dt,-50],look:[0,dt-.3,-62]},{pos:[0,dt,-66],look:[0,dt-.3,-80],speed:kn,card:{title:"✨ پایان تور",body:"از تماشای کارخانه سپاسگزاریم. برای ثبت سفارش، از منو «پرش سریع» به اتاق سفارش‌گیری بروید.",duration:5}}];let Gi=!1,Ri="idle",ds=0,Br=0,Ni=null,Tl=null,Al=null,Rl=null;function xM(i){Rl=i??null,Ni=document.createElement("div"),Ni.id="tour-card",Ni.innerHTML=`
    <div class="tour-progress-wrap">
      <div class="tour-progress-info">
        <span class="tour-progress-label">پیشرفت تور</span>
        <span class="tour-progress-pct" id="tour-progress-pct">۰٪</span>
      </div>
      <div class="tour-progress-track">
        <div class="tour-progress-fill" id="tour-progress-fill"></div>
      </div>
    </div>

    <div class="tour-card-body">
      <div class="tour-card-eyebrow">تور کارخانه</div>
      <h3 id="tour-card-title"></h3>
      <p id="tour-card-text"></p>
    </div>

    <button id="tour-skip" aria-label="پایان تور" type="button">
      <span>✕</span>
      <span>پایان تور</span>
    </button>
  `,document.body.appendChild(Ni),ui=document.createElement("button"),ui.id="tour-free-btn",ui.type="button",ui.innerHTML=`
    <span class="tfb-ico">🚶</span>
    <span class="tfb-txt">ورود به کارخانه <small>(حرکت آزاد)</small></span>
  `,document.body.appendChild(ui),ui.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),Ci()}),ui.addEventListener("touchstart",e=>{e.stopPropagation(),e.preventDefault(),Ci()},{passive:!1}),Tl=document.getElementById("tour-progress-fill"),Al=document.getElementById("tour-progress-pct");const t=document.getElementById("tour-skip");t.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),Ci()}),t.addEventListener("touchstart",e=>{e.stopPropagation(),e.preventDefault(),Ci()},{passive:!1}),window.addEventListener("keydown",e=>{Gi&&(e.code==="Escape"||e.code==="Space"||e.code==="KeyW"||e.code==="KeyA"||e.code==="KeyS"||e.code==="KeyD"||e.code==="ArrowUp"||e.code==="ArrowDown"||e.code==="ArrowLeft"||e.code==="ArrowRight")&&(e.preventDefault(),Ci())}),document.addEventListener("pointerlockchange",()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden&&Gi&&Ci()})}function so(){return Gi}function hf(){if(Gi)return;Gi=!0,ds=0,Ri="moving",Br=0,document.pointerLockElement&&document.exitPointerLock(),Ni?.classList.add("show"),ui?.classList.add("show"),document.body.classList.add("tour-active"),ff(0);const i=Or[0];Lt.position.set(i.pos[0],i.pos[1],i.pos[2]),Lt.lookAt(i.look[0],i.look[1],i.look[2])}function Ci(){Gi&&(Gi=!1,Ri="idle",Ni?.classList.remove("show","card-show"),ui?.classList.remove("show"),document.body.classList.remove("tour-active"),Rl&&Rl(),setTimeout(()=>_M(),80))}function MM(i){if(!(!Gi||Ri==="idle")){if(Ri==="paused"){if(Br-=i,Br<=0){if(yM(),ds++,ds>=Or.length){Ci();return}Ri="moving"}return}if(Ri==="moving"){const t=Or[ds],e=t.speed??vM,n=new P(t.pos[0],t.pos[1],t.pos[2]),s=new P(t.look[0],t.look[1],t.look[2]),r=Lt.position,o=n.clone().sub(r),a=o.length(),l=Math.max(0,1-a/4),c=(ds+l)/(Or.length-1);if(ff(Math.min(1,c)),a<.12){if(Lt.position.copy(n),Lt.lookAt(s),t.card){SM(t.card.title,t.card.body),Br=t.card.duration,Ri="paused";return}if(t.pause){Br=t.pause,Ri="paused";return}ds++,ds>=Or.length&&Ci();return}const u=Math.min(e*i,a);o.normalize(),r.addScaledVector(o,u);const d=new fe().lookAt(r,s,new P(0,1,0)),h=new Xi().setFromRotationMatrix(d);Lt.quaternion.slerp(h,Math.min(1,i*3.5))}}}function ff(i){if(Tl&&(Tl.style.width=`${(i*100).toFixed(1)}%`),Al){const t=Math.round(i*100);Al.textContent=`${t.toLocaleString("fa-IR")}٪`}}function SM(i,t){const e=document.getElementById("tour-card-title"),n=document.getElementById("tour-card-text");e&&(e.textContent=i),n&&(n.textContent=t),Ni?.classList.add("card-show")}function yM(){Ni?.classList.remove("card-show")}const Ze={company:"بهین ظروف آمیتیس",subtitle:"صنایع بسته‌بندی",phone:"۰۲۱-۹۱۶۹۱۳۱۶",email:"info@yazdpacking.com",website:"test.demo.com",instagram:"demoooo",whatsapp:"demoooo",hours:"شنبه تا چهارشنبه — ۸ تا ۱۶",addresses:[{city:"یزد",text:"تفت، شهرک صنعتی ۱، خیابان مصطفی مهر، شرکت آمیتیس"},{city:"تهران",text:"خیابان شریعتی، خیابان یخچال، ساختمان آبان، طبقه ۲، واحد ۹"}],mapUrl:"https://maps.app.goo.gl/u26sVdzKN3UbWPts7"};let di=null,_i=null,pr=!1,Cl,pf,xs=null;function wM(){Cl=new Fm,pf=new _t(0,0),_i=document.createElement("div"),_i.id="contact-hint",document.body.appendChild(_i),di=document.createElement("div"),di.id="folder-overlay",di.innerHTML=`
    <div class="folder-stage" id="folder-stage">
      <div class="folder-shadow"></div>
      <div class="folder-back">
        <div class="folder-paper">
          <div class="paper-header">
            <div class="paper-eyebrow">اطلاعات تماس</div>
            <h2>${Ze.company}</h2>
            <p>${Ze.subtitle}</p>
          </div>
          <div class="paper-rows">
            <a href="tel:+982191691316" class="paper-row">
              <span class="pr-ico">📞</span>
              <div><b>تلفن</b><span>${Ze.phone}</span></div>
            </a>
            <a href="mailto:${Ze.email}" class="paper-row">
              <span class="pr-ico">📧</span>
              <div><b>ایمیل</b><span>${Ze.email}</span></div>
            </a>
            <a href="https://${Ze.website}" target="_blank" rel="noopener" class="paper-row">
              <span class="pr-ico">🌐</span>
              <div><b>وب‌سایت</b><span>${Ze.website}</span></div>
            </a>
            <a href="https://instagram.com/${Ze.instagram}" target="_blank" rel="noopener" class="paper-row">
              <span class="pr-ico">📱</span>
              <div><b>اینستاگرام</b><span>@${Ze.instagram}</span></div>
            </a>
            <a href="https://wa.me/${Ze.whatsapp}" target="_blank" rel="noopener" class="paper-row">
              <span class="pr-ico">💬</span>
              <div><b>واتساپ</b><span>${Ze.whatsapp}</span></div>
            </a>
            <div class="paper-row static">
              <span class="pr-ico">🕐</span>
              <div><b>ساعت کاری</b><span>${Ze.hours}</span></div>
            </div>
            ${Ze.addresses.map(t=>`
              <div class="paper-row static">
                <span class="pr-ico">📍</span>
                <div><b>آدرس ${t.city}</b><span>${t.text}</span></div>
              </div>
            `).join("")}
          </div>
          <a href="${Ze.mapUrl}" target="_blank" rel="noopener" class="paper-map-btn">
            <span>🗺️</span>
            <span>مشاهده روی نقشه</span>
          </a>
        </div>
      </div>
      <div class="folder-cover">
        <div class="folder-tab"></div>
        <div class="folder-cover-inner">
          <div class="folder-cover-label">
            <span class="fc-ico">📁</span>
            <span>اطلاعات تماس</span>
          </div>
          <div class="folder-cover-hint">برای بستن، E بزنید یا روی پس‌زمینه کلیک کنید</div>
        </div>
      </div>
      <button class="folder-close" id="folder-close" aria-label="بستن">✕</button>
    </div>
  `,document.body.appendChild(di),document.getElementById("folder-close").addEventListener("click",qo),di.addEventListener("click",t=>{t.target===di&&qo()});const i=document.getElementById("three-canvas");i&&i.addEventListener("click",bM),window.addEventListener("keydown",t=>{if(t.code==="Escape"&&pr){qo();return}if(t.code==="KeyE"){if(so()||document.getElementById("order-overlay")?.classList.contains("open")||!Su())return;t.preventDefault(),pr?qo():xs==="map"?window.open(Ze.mapUrl,"_blank","noopener"):mf()}})}function Su(){const i=Lt.position.x,t=Lt.position.z;return i>Xo.xMin+.3&&i<Xo.xMax-.3&&t>Xo.zMin+.3&&t<Xo.zMax-.3}function EM(){if(pr)return;if(!Su()){_i&&_i.classList.remove("show"),xs=null;return}Cl.setFromCamera(pf,Lt);const i=[];ia&&i.push(ia),sa&&i.push(sa);const t=Cl.intersectObjects(i,!1);if(t.length>0){const e=t[0].object;e===ia?(xs="folder",xc("📁 E یا کلیک = اطلاعات تماس")):e===sa&&(xs="map",xc("🗺️ E یا کلیک = نقشه"))}else xs=null,xc("💡 به پوشه یا نقشه نگاه کنید")}function xc(i){_i&&(_i.textContent=i,_i.classList.add("show"))}function bM(i){pr||Su()&&(xs==="folder"?mf():xs==="map"&&window.open(Ze.mapUrl,"_blank","noopener"))}function mf(){di?.classList.add("open"),pr=!0,_i?.classList.remove("show"),document.pointerLockElement&&document.exitPointerLock()}let $e=null;function qo(){if(!di)return;di.classList.remove("open"),pr=!1,$e&&(document.removeEventListener("pointerdown",$e),document.removeEventListener("keydown",$e),$e=null),$e=()=>{const t=document.getElementById("three-canvas");if(t&&document.pointerLockElement!==t){try{const e=t.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}$e&&(document.removeEventListener("pointerdown",$e),document.removeEventListener("keydown",$e),$e=null)}},setTimeout(()=>{$e&&(document.addEventListener("pointerdown",$e,{once:!1}),document.addEventListener("keydown",$e,{once:!1}))},1700),setTimeout(()=>{$e&&(document.removeEventListener("pointerdown",$e),document.removeEventListener("keydown",$e),$e=null)},9700)}const Pl=[{id:"pomp",title:"قوطی تمام تخلیه",subtitle:"Pomp",kind:"cylinder",defaultColor:16053492,dims:[{label:"قطر ۸۳mm × ارتفاع ۵cm",dia:83,height:5},{label:"قطر ۸۳mm × ارتفاع ۱۰cm",dia:83,height:10},{label:"قطر ۹۹mm × ارتفاع ۱۰cm",dia:99,height:10},{label:"قطر ۹۹mm × ارتفاع ۱۲cm",dia:99,height:12},{label:"قطر ۱۵۳mm × ارتفاع ۱۷.۵cm",dia:153,height:17.5},{label:"قطر ۱۶۵mm × ارتفاع ۲۱cm",dia:165,height:21},{label:"قطر ۱۶۵mm × ارتفاع ۲۲cm",dia:165,height:22},{label:"قطر ۱۷۹mm × ارتفاع ۴۵cm",dia:179,height:45},{label:"قطر ۲۷۰mm × ارتفاع ۱۵cm",dia:270,height:15},{label:"قطر ۲۷۰mm × ارتفاع ۳۰cm",dia:270,height:30},{label:"قطر ۲۷۰mm × ارتفاع ۴۰cm",dia:270,height:40}],body:"دو تکه همراه با درب مجزا، قطر متنوع و ارتفاع سفارشی. مناسب صنایع رنگ، رزین، پتروشیمی، چسب و گریس."},{id:"pit",title:"پیت ۱۷ کیلویی",subtitle:"Pail 17kg",kind:"cylinder",defaultColor:16250090,dims:[{label:"استاندارد × ارتفاع ۳۳cm",dia:280,height:33}],body:"جهت مصارف غذایی و شیمیایی، همراه با درب‌های تخلیه تینر، چسب و روغن. مناسب پنیر، خیارشور و شیره."},{id:"shirini",title:"ظرف شیرینی",subtitle:"Sweets Tin",kind:"cylinder",defaultColor:15787730,dims:[{label:"استاندارد × ارتفاع ۱۰cm",dia:200,height:10},{label:"استاندارد × ارتفاع ۱۵cm",dia:200,height:15},{label:"استاندارد × ارتفاع ۲۰cm",dia:220,height:20},{label:"استاندارد × ارتفاع ۲۵cm",dia:240,height:25},{label:"استاندارد × ارتفاع ۳۲cm",dia:260,height:32}],body:"ظروف شیرینی در ارتفاع ۱ تا ۱۰ سانتی‌متر با ابعاد مختلف، مناسب وزن‌های مختلف."},{id:"box",title:"قوطی مستطیلی",subtitle:"Rectangular Tin",kind:"box",defaultColor:13938530,dims:[{label:"کوچک — ۱۰ × ۷ × ۱۸cm",width:100,depth:70,height:18},{label:"متوسط — ۱۲ × ۹ × ۲۲cm",width:120,depth:90,height:22},{label:"بزرگ — ۱۴ × ۱۰ × ۲۶cm",width:140,depth:100,height:26}],body:"قوطی مستطیلی فلزی با درب، مناسب بسته‌بندی روغن، حلال و مواد صنعتی."},{id:"bucket",title:"سطل فلزی",subtitle:"Metal Bucket",kind:"cylinder",defaultColor:11055288,dims:[{label:"کوچک — قطر ۲۰ × ارتفاع ۲۰cm",dia:200,height:20},{label:"متوسط — قطر ۲۴ × ارتفاع ۲۴cm",dia:240,height:24},{label:"بزرگ — قطر ۲۸ × ارتفاع ۲۸cm",dia:280,height:28}],body:"سطل فلزی با دسته و رنگ الکترواستاتیک، مناسب مصارف صنعتی و عمومی."}];function TM(i,t,e){const n=new Xe,s=e?new st({map:e,roughness:.45,metalness:.35}):new st({color:i.defaultColor,roughness:.45,metalness:.35}),r=new st({color:12237498,roughness:.35,metalness:.75});if(i.kind==="cylinder"){const o=(t.dia??150)/1e3,a=t.height/100,l=o/2,c=new oe(l,l,a,64,1,!0),u=new U(c,s);u.position.y=a/2,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const d=new U(new lu(l,48),r);d.rotation.x=-Math.PI/2,d.position.y=5e-4,n.add(d);const h=new U(new to(l,.004,8,48),r);h.rotation.x=Math.PI/2,h.position.y=a,n.add(h);const f=new U(new to(l,.004,8,48),r);f.rotation.x=Math.PI/2,f.position.y=.002,n.add(f)}else{const o=(t.width??120)/1e3,a=(t.depth??90)/1e3,l=t.height/100,c=new ot(o,l,a),u=new U(c,s);u.position.y=l/2,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const d=new U(new ot(o+.008,.006,a+.008),r);d.position.y=l,n.add(d);const h=new U(new ot(o+.008,.006,a+.008),r);h.position.y=.003,n.add(h)}return n}function AM(i,t){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d"),r=t.kind==="box"?"#d4af62":"#f4f4f4";s.fillStyle=r,s.fillRect(0,0,1024,1024);const o=i.width,a=i.height,l=Math.min(1024/o,1024/a)*.82,c=o*l,u=a*l,d=(1024-c)/2,h=(1024-u)/2;s.drawImage(i,d,h,c,u);const f=new Sa(n);return f.colorSpace=Ae,f.anisotropy=8,f.wrapS=Wr,f.wrapT=Ii,f.repeat.set(1,1),f}function RM(){const i=bi-Hn,t=vn-us,e=(Hn+bi)/2,n=(us+vn)/2,s=new st({map:df(14275784),roughness:.9}),r=new st({map:Mu(9078144),roughness:.9}),o=new st({color:5921374,roughness:.7,metalness:.3}),a=new st({color:11061472,emissive:13623536,emissiveIntensity:.3,roughness:.1,metalness:.2,transparent:!0,opacity:.65}),l=new st({color:6965802,roughness:.7}),c=new st({color:2764083,roughness:.6,metalness:.6}),u=new st({color:1714746,emissive:3824266,emissiveIntensity:.9,roughness:.3}),d=new U(new zt(i,t),r);d.rotation.x=-Math.PI/2,d.position.set(e,.01,n),d.receiveShadow=!0,z.add(d);const h=.3,f=kd,g=new U(new ot(i,f,h),s);g.position.set(e,f/2,us),g.castShadow=!0,g.receiveShadow=!0,z.add(g),Oe(e-i/2,e+i/2,us-h/2,us+h/2,"wall");const _=new U(new ot(h,f,t),s);_.position.set(Hn,f/2,n),_.castShadow=!0,_.receiveShadow=!0,z.add(_),Oe(Hn-h/2,Hn+h/2,n-t/2,n+t/2,"wall");const m=new U(new ot(h,f,t),s);m.position.set(bi,f/2,n),m.castShadow=!0,m.receiveShadow=!0,z.add(m),Oe(bi-h/2,bi+h/2,n-t/2,n+t/2,"wall");const p=e-rs-Hn,w=new U(new ot(p,f,h),s);w.position.set(Hn+p/2,f/2,vn),w.castShadow=!0,w.receiveShadow=!0,z.add(w),Oe(Hn,e-rs,vn-h/2,vn+h/2,"wall");const E=bi-(e+rs),x=new U(new ot(E,f,h),s);x.position.set(e+rs+E/2,f/2,vn),x.castShadow=!0,x.receiveShadow=!0,z.add(x),Oe(e+rs,bi,vn-h/2,vn+h/2,"wall");const R=new U(new ot(rs*2,f-Cr,h),s);R.position.set(e,Cr+(f-Cr)/2,vn),z.add(R);const T=new U(new zt(rs*2-.2,Cr-.4),a);T.position.set(e,Cr/2,vn-.16),T.rotation.y=Math.PI,z.add(T);const L=new U(new ot(i+.4,.2,t+.4),o);L.position.set(e,f+.1,n),L.castShadow=!0,z.add(L);const D=3,S=.9,M=.85,A=e,N=n-1.5,k=new U(new ot(D,.08,S),l);k.position.set(A,M,N),k.castShadow=!0,k.receiveShadow=!0,z.add(k);for(const K of[-1.3,1.3])for(const ht of[-.35,.35]){const wt=new U(new ot(.08,M,.08),l);wt.position.set(A+K,M/2,N+ht),wt.castShadow=!0,z.add(wt)}const X=new U(new ot(.5,.08,.5),l);X.position.set(A,.45,N+1),X.castShadow=!0,z.add(X);const q=new U(new ot(.5,.5,.08),l);q.position.set(A,.7,N+1.24),q.castShadow=!0,z.add(q);const H=new U(new ot(.65,.42,.04),c);H.position.set(A+.8,M+.42,N-.15),H.castShadow=!0,z.add(H);const Q=new U(new zt(.6,.38),u);Q.position.set(A+.8,M+.42,N-.18),z.add(Q);const G=new U(new oe(.03,.03,.15,8),c);G.position.set(A+.8,M+.2,N-.2),z.add(G);const rt=new U(new ot(.45,.02,.15),c);rt.position.set(A+.8,M+.05,N+.1),z.add(rt);const lt=["products/04_Frame-1-2.png","products/05_Frame-1.png","products/06_Frame-1-4.png","products/07_Frame-1-3.png","products/08_Frame-2-1.png"],Mt=1.7,Wt=Pl.length,ne=i/(Wt+1),ie=new Yh,Kt="/conv-assistant/factory/";console.log("[order] baseUrl:",Kt),Pl.forEach((K,ht)=>{const wt=Hn+ne*(ht+1),yt=us+.16,Xt=new U(new ot(1.35,1.65,.08),new st({color:16052196,roughness:.7}));Xt.position.set(wt,Mt,yt),Xt.castShadow=!0,z.add(Xt);const ve=Kt+lt[ht];console.log(`[order] loading: ${ve}`);const C=ie.load(ve,()=>console.log(`[order] ✅ loaded: ${ve}`),void 0,$t=>console.error(`[order] ❌ failed: ${ve}`,$t));C.colorSpace=Ae;const ee=new U(new zt(1.15,1),new st({map:C,roughness:.65,color:16777215}));ee.position.set(wt,Mt+.15,yt+.05),z.add(ee);const Ft=As(K.title,K.subtitle,14068572,ze.capabilities.getMaxAnisotropy()),Pt=new U(new zt(1.15,.4),new st({map:Ft,roughness:.7}));Pt.position.set(wt,Mt-.55,yt+.05),z.add(Pt);const vt=new Re(16770736,.35,3,2);vt.position.set(wt,Mt+1.1,yt+.55),z.add(vt),Ce(vt)});for(const K of[-1.8,0,1.8]){const ht=new Re(16769200,.8,8,2);ht.position.set(e+K,f-.5,n),z.add(ht),Ce(ht);const wt=new U(new oe(.18,.22,.12,12),c);wt.position.set(e+K,f-.55,n),z.add(wt)}const Z=new U(new zt(4,1.1),new st({map:As("اتاق سفارش‌گیری","بهین ظروف آمیتیس",14068572,ze.capabilities.getMaxAnisotropy()),roughness:.7,side:Fe}));Z.position.set(e,kd+.5,vn+.2),z.add(Z),console.log("✅ اتاق سفارش‌گیری ساخته شد")}let In=null,en=null,wn=null,Ne=null;function CM(i){en=new Dh,en.background=new Gt(1711396),wn=new on(40,1,.01,100),wn.position.set(.6,.7,1.2),wn.lookAt(0,.3,0),In=new sf({canvas:i,antialias:!0,alpha:!1}),In.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),In.setSize(i.width,i.height,!1),In.outputColorSpace=Ae,In.toneMapping=jl,In.toneMappingExposure=1,en.add(new $h(16777215,4210752,1.3)),en.add(new Jh(16777215,.35));const t=new gl(16773846,1.3);t.position.set(3,5,2),en.add(t);const e=new gl(10535167,.6);e.position.set(-2,2,-1),en.add(e);const n=new U(new zt(20,20),new st({color:2764341,roughness:1}));n.rotation.x=-Math.PI/2,en.add(n);const s=new U(new fu(.001,.5,64),new dr({color:14068572,transparent:!0,opacity:.14,side:Fe}));s.rotation.x=-Math.PI/2,s.position.y=.002,en.add(s)}function gf(i,t,e){if(!en||!wn)return;Ne&&(en.remove(Ne),Ne.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&(Array.isArray(l.material)?l.material.forEach(c=>c.dispose()):l.material.dispose())}),Ne=null);const n=TM(i,t,e),r=new Rs().setFromObject(n).getBoundingSphere(new ao),o=Math.max(r.radius,.05);en.add(n),Ne=n;const a=o*2.8;wn.position.set(a*.5,o*1.1,a*.85),wn.lookAt(0,r.center.y,0)}function PM(i){let t=!1,e=0;i.addEventListener("pointerdown",s=>{t=!0,e=s.clientX;try{i.setPointerCapture(s.pointerId)}catch{}}),i.addEventListener("pointermove",s=>{if(!t)return;const r=s.clientX-e;e=s.clientX,Ne&&(Ne.rotation.y+=r*.01)});const n=()=>{t=!1};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n),i.addEventListener("lostpointercapture",n)}function LM(i){!In||!en||!wn||(Ne&&(Ne.rotation.y+=i*.5),In.render(en,wn))}function IM(){if(!In||!en||!wn||!Ne)return{front:"",side:"",back:"",iso:""};const i=Ne.rotation.y;Ne.rotation.y=0;const e=new Rs().setFromObject(Ne).getBoundingSphere(new ao),n=Math.max(e.radius,.05),s=e.center.y,r=n*2.6,o=new P(0,s,0),a=(f,g,_)=>(wn.position.set(f,g,_),wn.lookAt(o),In.render(en,wn),In.domElement.toDataURL("image/png"));Ne.rotation.y=0;const l=a(0,s,r);Ne.rotation.y=Math.PI/2;const c=a(0,s,r);Ne.rotation.y=Math.PI;const u=a(0,s,r);Ne.rotation.y=-Math.PI/4;const d=a(r*.7,s+r*.35,r*.7),h={front:l,side:c,back:u,iso:d};return Ne.rotation.y=i,h}const DM=nM(),UM=iM(),NM=Mu(10130576),FM=Mu(6973024),_f=sM(9080210),OM=df(12888200),BM=rM(4869458),zM=uf(9067066,256,40),kM=new st({map:DM,roughness:1}),Mc=new st({map:UM,roughness:.95}),Ln=new st({map:NM,roughness:.9}),Pe=new st({map:FM,roughness:.9}),Ks=new st({map:_f,roughness:.7,metalness:.35}),Js=new st({map:OM,roughness:.85}),HM=new st({map:BM,roughness:.6,metalness:.4,side:Fe}),Zd=new st({map:zM,roughness:.9}),ye=new st({color:6975608,roughness:.5,metalness:.7}),jt=new st({color:2764083,roughness:.6,metalness:.6}),ws=new st({color:10405094,emissive:13623536,emissiveIntensity:.25,roughness:.1,metalness:.2,transparent:!0,opacity:.7}),Kd=new st({color:16742938,emissive:16734720,emissiveIntensity:2.5,roughness:.8}),or=new st({color:14068572,roughness:.7}),yu=new st({color:12097124,roughness:.95}),Wi=new st({color:13159634,roughness:.35,metalness:.75}),Jd=new st({color:2767432,roughness:.65,metalness:.45}),jd=new st({color:4543072,roughness:.6,metalness:.5}),wu=new st({color:3815998,roughness:.95,side:Fe}),va=new st({color:5914672,roughness:.85}),vf=new st({color:4880954,roughness:.95}),Eu=new st({color:1579034,roughness:.95});let Ll=null,Il=null,Dl=null,Ul=null,Nl=null,Fl=null;const ro=[];let Ol=null,Bl=null,zl=null;const kl=[],ra=new P;function xf(i,t=!1){i.life=3.8+Math.random()*2.8,i.age=t?Math.random()*i.life:0,i.riseSpeed=.6+Math.random()*.5,i.swayAmp=.3+Math.random()*.5,i.sprite.position.set(ra.x+(Math.random()-.5)*.6,ra.y,ra.z+(Math.random()-.5)*.6),i.sprite.scale.setScalar(.8+Math.random()*.5)}function VM(i,t,e){ra.set(i,t,e);const n=oM();for(let s=0;s<20;s++){const r=s%3===0,o=new Uh({map:n,transparent:!0,depthWrite:!1,opacity:0,color:r?9079434:16777215}),a=new qp(o);z.add(a);const l={sprite:a,age:0,life:1,riseSpeed:1,swayAmp:1};xf(l,!0),kl.push(l)}jx(kl.map(s=>s.sprite))}function GM(i,t){const e=.82+Math.sin(t*11.3)*.08+Math.sin(t*27.1)*.05+(Math.random()-.5)*.04;Ol&&(Ol.emissiveIntensity=2.4*e),Bl&&(Bl.intensity=2.8*e),zl&&(zl.intensity=1.4*e);for(const n of kl){n.age+=i;const s=n.age/n.life;if(s>=1){xf(n);continue}n.sprite.position.y+=i*n.riseSpeed*(1+s*.8),n.sprite.position.x+=Math.sin(t*.8+n.sprite.id)*i*.2*n.swayAmp,n.sprite.position.z+=Math.cos(t*.6+n.sprite.id)*i*.15*n.swayAmp,n.sprite.scale.setScalar(.8+s*3.2),n.sprite.material.opacity=Math.sin(s*Math.PI)*.45}}let Hl=null,Qs=null;const Vl=new P,Qd=3.2;function WM(i,t,e){Vl.set(i,t,e);const n=new Re(16769184,0,6,2);n.position.set(i,t,e),z.add(n),Ce(n,!0),Hl=n;const s=new U(new En(.12,8,8),new st({color:16774095,emissive:16752704,emissiveIntensity:3}));s.position.set(i,t,e),s.visible=!1,z.add(s),Qs=s}function XM(i){const e=i%Qd/Qd<.15,n=e?.4+Math.random()*1.2:0;if(Hl&&(Hl.intensity=n),Qs&&(Qs.visible=e,e)){Qs.position.x=Vl.x+(Math.random()-.5)*.15,Qs.position.y=Vl.y+(Math.random()-.5)*.15;const s=.8+Math.random()*.6;Qs.scale.setScalar(s)}}const Mf=[],Sf=[];let oa=null,yf=0,Gl=0;function qM(i){for(const e of Mf)if(e.mesh.position.z+=1.8*i,e.mesh.rotation.y+=i*2.2,e.lid.position.z=e.mesh.position.z,e.mesh.position.z>Gl){const n=e.mesh.position.z-Gl;e.mesh.position.z=yf+n,e.lid.position.z=e.mesh.position.z}for(const e of Sf)e.rotateY(i*6);oa&&(oa.offset.y=(oa.offset.y+i*.6)%1)}let Wl=null,Xl=null;const th=2.4,ql=5.8,YM=1.75;function $M(i){if(!Wl)return;const t=i%th/th;let e;if(t<.55?e=0:t<.62?e=(t-.55)/.07:t<.75?e=1:t<.9?e=1-(t-.75)/.15:e=0,Wl.position.y=ql-e*(ql-YM),Xl){const n=Math.abs(t-.62);Xl.intensity=n<.05?(1-n/.05)*3:0}}const wf=[];function ZM(i,t,e){const n=new Xe;n.position.set(i,t,e),z.add(n);const s=new U(new oe(.05,.05,.3,6),jt);s.position.y=.15,n.add(s);const r=new U(new oe(.22,.28,.15,10),jt);n.add(r);const o=new Xe;o.position.y=-.08,n.add(o);const a=new st({color:16755200,emissive:16746496,emissiveIntensity:2.2}),l=new U(new En(.16,10,10),a);o.add(l);const c=new dr({color:16755200,transparent:!0,opacity:.12,side:Fe,depthWrite:!1}),u=new U(new ya(.7,2,12,1,!0),c);u.position.y=-1,u.rotation.x=Math.PI,o.add(u);const d=new Re(16755200,.5,6,2);d.position.y=-.4,o.add(d),Ce(d),wf.push({dome:o,light:d,speed:1.2+Math.random()*1,phase:Math.random()*Math.PI*2})}function KM(i){for(const t of wf){t.dome.rotation.y=i*t.speed;const e=(Math.sin(i*3.5+t.phase)+1)*.5;t.light.intensity=.25+e*.6}}function Yt(i,t,e,n,s,r,o,a=!0){const l=r-s,c=new U(new ot(e,l,n),o);return c.position.set(i,s+l/2,t),c.castShadow=!0,c.receiveShadow=!0,z.add(c),a&&Oe(i-e/2,i+e/2,t-n/2,t+n/2,"wall"),c}function re(i,t,e,n,s,r,o){return Yt(i,t,e,n,s,r,o,!1)}function Fi(i,t,e,n,s,r,o,a=24,l=!1){const c=n-e,u=new U(new oe(s,r,c,a),o);return u.position.set(i,e+c/2,t),u.castShadow=!0,u.receiveShadow=!0,z.add(u),l&&Oe(i-r,i+r,t-r,t+r,"prop"),u}function as(i,t,e,n,s=0,r=0){const o=new U(new zt(t,e),n);return o.rotation.x=-Math.PI/2,o.position.set(s,i,r),o.receiveShadow=!0,z.add(o),o}function js(i,t,e){const n=new U(new oe(.15*e,.22*e,2*e,8),va);n.position.set(i,e,t),n.castShadow=!0,z.add(n);for(let s=0;s<3;s++){const r=new U(new En(1.1*e-s*.15*e,10,10),vf);r.position.set(i,2.2*e+s*.7*e,t),r.castShadow=!0,z.add(r)}Oe(i-.4,i+.4,t-.4,t+.4,"prop")}function Lr(i,t,e,n,s){const r=new Xe;r.position.set(i,0,t),r.rotation.y=e,z.add(r);const o=new st({color:n,roughness:.9}),a=new st({color:2766144,roughness:.9}),l=new st({color:13936760,roughness:.9}),c=new st({color:s,roughness:.4,metalness:.3});for(const _ of[-.11,.11]){const m=new U(new oe(.09,.09,.85,8),a);m.position.set(_,.42,0),m.castShadow=!0,r.add(m)}const u=new U(new ot(.42,.62,.24),o);u.position.set(0,1.15,0),u.castShadow=!0,r.add(u);for(const _ of[-.28,.28]){const m=new U(new oe(.07,.07,.6,8),o);m.position.set(_,1.15,0),m.castShadow=!0,r.add(m)}const d=new U(new oe(.07,.07,.1,8),l);d.position.set(0,1.52,0),r.add(d);const h=new U(new En(.15,12,12),l);h.position.set(0,1.68,0),h.castShadow=!0,r.add(h);const f=new U(new En(.17,12,12,0,Math.PI*2,0,Math.PI/2),c);f.position.set(0,1.7,0),r.add(f);const g=new U(new oe(.2,.2,.03,12),c);g.position.set(0,1.7,0),r.add(g),Oe(i-.28,i+.28,t-.28,t+.28,"prop")}function JM(){as(-.1,pi-Kn+120,Di-eo+120,kM),as(0,120,12,Mc,0,-85),as(0,12,24,Mc,0,-67),as(0,10,41,Mc,0,-34.5),as(0,54,60,Pe,0,16),as(.02,18,18,Ln,-30,-5),as(.02,24,16,Ln,25,-69)}function jM(){js(-12,-68,1.2),js(-16,-62,1),js(-14,-76,1.1),js(12,-72,1.15),js(-24,-72,1),js(13,-80,1.05);for(let t=0;t<8;t++){const e=.5+Math.random()*.4,n=new U(new En(e,8,8),vf),s=t%2===0?-1:1;n.position.set(s*(7+Math.random()*3),e*.75,-60-Math.floor(t/2)*4),n.castShadow=!0,z.add(n)}const i=new U(new zt(4.5,1.6),new st({map:As("بهین ظروف آمیتیس","صنایع بسته‌بندی — ۱ کیلومتر جلوتر",14068572,ze.capabilities.getMaxAnisotropy()),roughness:.7,side:Fe}));i.position.set(-8,3,-84),i.rotation.y=Math.PI,z.add(i),re(-8,-84,.2,.2,0,3,jt)}function Ir(i,t,e,n){const s=e-i,r=n-t,o=Math.hypot(s,r);if(o<.1)return;const a=Math.abs(s)>Math.abs(r),l=a?o:.5,c=a?.5:o;re((i+e)/2,(t+n)/2,l,c,0,.4,Pe);const u=Math.max(2,Math.round(o/3));for(let f=0;f<=u;f++){const g=f/u,_=i+s*g,m=t+r*g,p=new U(new ot(.18,gc,.18),jt);p.position.set(_,gc/2,m),p.castShadow=!0,z.add(p);const w=new U(new ya(.16,.3,4),jt);w.position.set(_,gc+.15,m),w.rotation.y=Math.PI/4,z.add(w)}for(const f of[.8,1.6,2.5]){const g=new U(a?new ot(o,.08,.08):new ot(.08,.08,o),jt);g.position.set((i+e)/2,f,(t+n)/2),g.castShadow=!0,z.add(g)}const d=a?.05:.3,h=a?.3:.05;Oe(Math.min(i,e)-d,Math.max(i,e)+d,Math.min(t,n)-h,Math.max(t,n)+h,"wall")}function QM(){const i=nr;Ir(Kn,i,-Vn-.5,i),Ir(Vn+.5,i,pi,i),Ir(Kn,Di,pi,Di),Ir(Kn,i,Kn,Di),Ir(pi,i,pi,Di)}function xa(i,t,e,n,s,r,o=1713716){const a=new Xe;a.position.set(i,0,t);const l=new U(new ot(n,s,.15),r);l.position.set(-e*n/2,s/2,0),l.castShadow=!0,l.receiveShadow=!0,a.add(l);const c=new st({color:o,roughness:.6,metalness:.4}),u=3,d=s/(u+1);for(let f=0;f<u;f++){const g=new U(new ot(n-.4,d*.85,.04),c);g.position.set(-e*n/2,d*(f+.9),.09),a.add(g)}const h=new U(new ot(n,.15,.17),or);return h.position.set(-e*n/2,s*.5,0),a.add(h),z.add(a),a}function eh(i,t,e,n,s,r){const o=new Xe;o.position.set(i,0,t);const a=new U(new ot(.08,s,n),r);a.position.set(0,s/2,-e*n/2),a.castShadow=!0,o.add(a);const l=new U(new En(.05,10,10),new st({color:13214541,metalness:.7,roughness:.3}));return l.position.set(-.06,s/2,-e*(n-.15)),o.add(l),z.add(o),o}function tS(){const t=_c+1.2;Yt(-Vn-1/2,li,1,1,0,t,Ln),Yt(Vn+1/2,li,1,1,0,t,Ln),re(0,li,Vn*2+2,.5,t,t+.4,Pe);const e=new U(new zt(14,2.2),new st({map:As("بهین ظروف آمیتیس","صنایع بسته‌بندی",14068572,ze.capabilities.getMaxAnisotropy()),roughness:.7}));e.position.set(0,t+.2,li-.28),e.rotation.y=Math.PI,z.add(e);const n=Vn-.05;Ll=xa(-Vn,li,-1,n,_c,Jd),Il=xa(Vn,li,1,n,_c,Jd);const s=new Re(16765088,1,12,2);s.position.set(-Vn,t+.6,li+.4),z.add(s),Ce(s);const r=new Re(16765088,1,12,2);r.position.set(Vn,t+.6,li+.4),z.add(r),Ce(r)}function eS(){const i=is-mc,t=Rr-ss,e=(mc+is)/2,n=(ss+Rr)/2;Yt(e,ss,i+.3,.3,0,Rn,Ln),Yt(e,Rr,i+.3,.3,0,Rn,Ln),Yt(mc,n,.3,t+.3,0,Rn,Ln);const s=1.2,r=1,o=2.1,a=(ss+(n-s))/2,l=n-s-ss;Yt(is,a,.3,l,0,Rn,Ln);const c=(n+s+Rr)/2,u=Rr-(n+s);Yt(is,c,.3,u,0,Rn,Ln),re(is,n,.3,s*2,0,r,Ln),re(is,n,.3,s*2,o,Rn,Ln);const d=new U(new zt(s*2,o-r),ws);d.position.set(is+.05,(r+o)/2,n),d.rotation.y=Math.PI/2,z.add(d),Yt(e,n,i+1,t+1,Rn,Rn+.3,Pe);const h=new U(new zt(3,1),new st({map:As("نگهبانی","کنترل ورود",6056857,ze.capabilities.getMaxAnisotropy()),roughness:.7,side:Fe}));h.position.set(e,Rn+.9,ss-.05),h.rotation.y=Math.PI,z.add(h),re(e,ss-.05,.15,.15,Rn+.3,Rn+.9,jt)}function nS(){const i=Ee-hi,t=Mn-Pn,e=(hi+Ee)/2,n=(Pn+Mn)/2,s=He/2,r=.35,o=n,a=1.4,l=2.8;Yt(e,Pn,i,r,0,He,Js),Yt(e,Mn,i,r,0,He,Js),Yt(hi,n,r,t,0,He,Js);const c=Pn,u=o-a,d=u-c;Yt(Ee,(c+u)/2,r,d,0,He,Js);const h=o+a,f=Mn,g=f-h;Yt(Ee,(h+f)/2,r,g,0,He,Js),Yt(Ee,o,r,a*2,l,He,Js,!1);const _=new U(new ot(i+.4,.3,t+.4),Pe);_.position.set(e,He+.15,n),_.castShadow=!0,_.receiveShadow=!0,z.add(_);const m=a-.05,p=l-.05;Nl=eh(Ee,o-a,-1,m,p,va),Fl=eh(Ee,o+a,1,m,p,va),mM();const w=new st({color:15262418,roughness:.7}),E=2,x=1.6;for(let T=0;T<2;T++)for(let L=0;L<4;L++){if(T===0&&(L===1||L===2))continue;const D=Pn+3+L*((t-6)/3),S=T*s+1.2,M=new U(new zt(E,x),ws);M.position.set(Ee+.02,S+x/2,D),M.rotation.y=Math.PI/2,z.add(M);const A=new U(new zt(E+.3,x+.3),w);A.position.set(Ee+.01,S+x/2,D),A.rotation.y=Math.PI/2,z.add(A)}for(let T=0;T<2;T++)for(let L=0;L<3;L++){const D=hi+3+L*((i-6)/2),S=T*s+1.2,M=new U(new zt(E,x),ws);M.position.set(D,S+x/2,Mn+.02),z.add(M);const A=new U(new zt(E+.3,x+.3),w);A.position.set(D,S+x/2,Mn+.01),z.add(A);const N=new U(new zt(E,x),ws);N.position.set(D,S+x/2,Pn-.02),N.rotation.y=Math.PI,z.add(N);const k=new U(new zt(E+.3,x+.3),w);k.position.set(D,S+x/2,Pn-.01),k.rotation.y=Math.PI,z.add(k)}re(Ee+1.4,n,2.6,6,s,s+.25,Pe),re(Ee+2.5,n-2.4,.2,.2,0,s,ye),re(Ee+2.5,n+2.4,.2,.2,0,s,ye),re(Ee+.06,n-1.4,.15,.2,0,2.8,Pe),re(Ee+.06,n+1.4,.15,.2,0,2.8,Pe),re(Ee+.06,n,.15,3,2.6,2.8,Pe),re(e,Pn-.15,i+.3,.3,He,He+.7,Pe),re(e,Mn+.15,i+.3,.3,He,He+.7,Pe),re(hi-.15,n,.3,t+.3,He,He+.7,Pe),re(Ee+.15,n,.3,t+.3,He,He+.7,Pe);const R=new U(new zt(5,1.4),new st({map:As("ساختمان اداری","مدیریت و دفاتر",10705469,ze.capabilities.getMaxAnisotropy()),roughness:.7}));R.position.set(Ee+.06,He-.8,n),R.rotation.y=Math.PI/2,z.add(R)}function iS(){const i=ns-es,t=Bo-rn,e=(es+ns)/2,n=(rn+Bo)/2;Yt(es,n,ai,t,0,ke,Ks),Yt(ns,n,ai,t,0,ke,Ks),Yt(e,Bo,i,ai,0,ke,Ks);const s=ta,r=(es+-s)/2,o=-s-es;Yt(r,rn,o,ai,0,ke,Ks);const a=(s+ns)/2,l=ns-s;Yt(a,rn,l,ai,0,ke,Ks),re(e,rn,s*2,ai,ps,ke,Ks);const c=.25;re(-s-c/2,rn,c,ai+.2,0,ps,or),re(s+c/2,rn,c,ai+.2,0,ps,or),re(0,rn,s*2+c*2,ai+.2,ps,ps+c,or);const u=5.5,d=7.2;for(let S=0;S<6;S++){const M=rn+6+S*7,A=new U(new zt(5,d-u),ws);A.position.set(es+.25,(u+d)/2,M),A.rotation.y=Math.PI/2,z.add(A);const N=new U(new zt(5,d-u),ws);N.position.set(ns-.25,(u+d)/2,M),N.rotation.y=-Math.PI/2,z.add(N)}const h=new U(new zt(i-.4,t-.4),wu);h.rotation.x=Math.PI/2,h.position.set(e,ke-.05,n),h.receiveShadow=!0,z.add(h);for(let S=0;S<8;S++){const M=rn+4+S*((t-8)/7);re(e,M,i-1,.35,ke-.5,ke-.1,jt)}const f=3,g=1.5,_=i/2+g,m=t+g*2,p=Math.atan2(f,_),w=Math.hypot(_,f),E=S=>{const M=new Xe;M.position.set(0,ke+f,n);const A=new U(new zt(w,m),HM);A.rotation.x=-Math.PI/2,A.position.x=S*w/2,A.castShadow=!0,A.receiveShadow=!0,M.add(A),M.rotation.z=-S*p,z.add(M)};E(-1),E(1);const x=new st({map:_f,roughness:.7,metalness:.35,side:Fe}),R=S=>{const M=new Vh;M.moveTo(es,ke),M.lineTo(ns,ke),M.lineTo(0,ke+f),M.closePath();const A=new U(new pu(M),x);A.position.z=S,A.castShadow=!0,z.add(A)};R(rn),R(Bo);const T=[[-20,-8],[-20,5],[-20,18],[-20,31],[20,-8],[20,5],[20,18],[20,31],[0,-8],[0,31]];for(const[S,M]of T)Yt(S,M,.7,.7,0,ke,ye);const L=[[-15,-5],[0,-5],[15,-5],[-15,12],[0,12],[15,12],[-15,28],[0,28],[15,28]];for(const[S,M]of L){const A=new Re(16770736,.9,24,2);A.position.set(S,ke-1.2,M),z.add(A),Ce(A);const N=new U(new oe(.4,.5,.3,12),jt);N.position.set(S,ke-1.05,M),z.add(N)}const D=[[-10,0],[10,0],[-10,20],[10,20]];for(const[S,M]of D)ZM(S,ke-1,M)}function sS(){const i=ta-.05;Dl=xa(-ta,rn,-1,i,ps,jd,2766144),Ul=xa(ta,rn,1,i,ps,jd,2766144)}function rS(){Yt(-16,0,9,9,0,.5,Pe),Fi(-16,0,.5,7,3,3.2,Zd,28,!0),Fi(-16,0,7,9,.4,3,Zd,28),Fi(-16,0,9,15,.6,.9,jt,16,!0),Fi(-16,0,15,15.4,.75,.75,jt,16);const e=new U(new zt(2,2),Kd);e.position.set(-16+3.15,2.5,0),e.rotation.y=Math.PI/2,z.add(e),Ol=Kd,re(-16,0-2.4,3.2,.3,.5,2,jt);const n=new Re(16738848,3,18,2);n.position.set(-15,2.5,0),z.add(n),Ce(n,!0),Bl=n;const s=new Re(16748608,1.5,12,2);s.position.set(-16,8,0),z.add(s),Ce(s,!0),zl=s,VM(-16,15.6,0);const r=new U(new oe(.35,.35,6,10),ye);r.rotation.z=Math.PI/2,r.position.set(-11,5,0),z.add(r);for(let o=0;o<6;o++)Yt(-16-4.2,-4+o*.9,1.6,.7,o*.6,o*.6+.7,ye),re(-16-4.2,0-4.3+o*.9,.15,.15,o*.6+.7,o*.6+1.6,jt)}function oS(){Yt(0,0,7,6,0,.6,Pe);for(const[o,a]of[[-2.5,-2],[2.5,-2],[-2.5,2],[2.5,2]])Yt(0+o,0+a,.6,.6,.6,7,jt);re(0,0,6.6,5.4,7,8,jt),Fi(0,0,6.2,7,.7,.7,ye,16),Fi(0,0,3.2,6.2,.5,.5,ye,16),re(0,0,3,3,2.6,3.2,jt),re(0,0,3,3,.6,1.4,ye),re(0,0,2.6,2.6,1.4,1.45,Wi),Yt(0+4.5,0,.4,1.6,.6,2.6,jt);const e=new U(new zt(1.2,.9),new st({color:2775626,emissive:1718826,emissiveIntensity:.6,roughness:.5}));e.position.set(0+4.28,2,0),e.rotation.y=-Math.PI/2,z.add(e);const n=new Re(11584732,.6,12,2);n.position.set(0,6,0),z.add(n),Ce(n);const s=new U(new ot(2.3,.55,2.3),jt);s.position.set(0,ql,0),s.castShadow=!0,s.receiveShadow=!0,z.add(s),Wl=s;const r=new Re(14674175,0,6,2);r.position.set(0,1.7,0),z.add(r),Ce(r,!0),Xl=r}function Sc(i,t,e=0){const n=new Xe;n.position.set(i,0,t),n.rotation.y=e,z.add(n);const s=new U(new ot(4.6,.15,3.6),va);s.position.set(0,.075,0),s.castShadow=!0,s.receiveShadow=!0,n.add(s);for(let r=0;r<35;r++){const o=new U(new ot(4.4,.06,3.4),Wi);o.position.set(0,.2+r*.075,0),o.castShadow=!0,o.receiveShadow=!0,n.add(o)}for(const r of[-2.3,2.3]){const o=new U(new ot(.12,2.8,3.6),jt);o.position.set(r,1.4,0),o.castShadow=!0,n.add(o)}Oe(i-2.5,i+2.5,t-2,t+2,"prop")}function yc(i,t){const e=new ot(.9,.7,.7),n=new ot(.9,.06,.12);for(let s=0;s<5;s++)for(let r=0;r<2;r++)for(let o=0;o<4;o++){const a=i+(s-2)*1,l=t+(r-.5)*.85,c=.35+o*.72,u=new U(e,yu);u.position.set(a,c,l),u.castShadow=!0,u.receiveShadow=!0,z.add(u);const d=new U(n,or);d.position.set(a,c+.36,l),z.add(d)}Oe(i-3,i+3,t-1.2,t+1.2,"prop")}function aS(){for(const _ of[-7,-3,0,3,7])Yt(17-.9,_,.15,.15,0,1.1,ye),Yt(17+.9,_,.15,.15,0,1.1,ye);const s=16;Yt(17,0/2,2,s,1.1,1.1+.15,ye,!1),yf=-8+.4,Gl=8-.4;const r=aM();r.repeat.set(1,Math.max(4,Math.round(s/1.2))),oa=r;const o=new st({map:r,roughness:.85}),a=new U(new ot(1.8,.06,s-.4),o);a.position.set(17,1.1+.2,0/2),a.castShadow=!0,a.receiveShadow=!0,z.add(a);const l=new oe(.18,.18,1.9,12);for(let _=0;_<14;_++){const m=-7.5+_*((s-1)/13),p=new U(l,jt);p.rotation.z=Math.PI/2,p.position.set(17,1.1+.15,m),p.castShadow=!0,z.add(p),Sf.push(p)}const c=new oe(.18,.18,.5,14),u=new oe(.19,.19,.05,14),d=7,h=(s-1.2)/d;for(let _=0;_<d;_++)for(let m=0;m<2;m++){const p=-7.3+_*h,w=17+(m-.5)*.85,E=new U(c,Wi);E.position.set(w,1.1+.45,p),E.castShadow=!0,E.receiveShadow=!0,z.add(E);const x=new U(u,ye);x.position.set(w,1.1+.72,p),z.add(x),Mf.push({mesh:E,lid:x})}Yt(17,-8-.8,2.4,1.2,0,1.6,jt),Yt(17+3.5,8+1.5,4,2.5,0,1,Pe);const f=new ot(.9,.7,.7);for(let _=0;_<4;_++){const m=20.5+(_%2===0?-1:1)*.6,p=8+1.5+(_<2?-.5:.5),w=new U(f,yu);w.position.set(m,1.35,p),w.castShadow=!0,w.receiveShadow=!0,z.add(w);const E=new U(new ot(.9,.06,.12),or);E.position.set(m,1.71,p),z.add(E)}const g=new Re(13623536,.7,14,2);g.position.set(17,5.5,0/2),z.add(g),Ce(g)}function cS(i,t){Yt(i,t,6,3,0,.6,Pe),Yt(i,t,5,2.6,.6,3.5,jt);for(const r of[1.4,2,2.6]){const o=new U(new oe(.35,.35,4.6,16),ye);o.rotation.z=Math.PI/2,o.position.set(i,r,t),o.castShadow=!0,z.add(o)}Fi(i+3,t,.6,2.4,.5,.5,jt,12);const e=new U(new ot(1.2,.05,2.4),Wi);e.position.set(i-3.5,.9,t),e.castShadow=!0,z.add(e);const n=new U(new ot(1.2,.05,2.4),Wi);n.position.set(i+3.5,.9,t),n.castShadow=!0,z.add(n),Yt(i+4.2,t+1.8,.15,.8,.6,2.2,jt);const s=new Re(13623536,.5,10,2);s.position.set(i,4,t),z.add(s),Ce(s)}function lS(i,t){Yt(i,t,3.5,3.5,0,.5,Pe),Fi(i,t,.5,1.4,.9,1,jt,16);const e=new U(new ot(.6,3.5,.6),ye);e.position.set(i,3,t),e.castShadow=!0,z.add(e);const n=new U(new ot(.5,3,.5),ye);n.position.set(i+1.2,4.8,t),n.rotation.z=-Math.PI/4,n.castShadow=!0,z.add(n);const s=new U(new En(.2,10,10),jt);s.position.set(i+2.2,5.8,t),z.add(s);const r=new Re(16765040,.9,4,2);r.position.set(i+2.2,5.6,t),z.add(r),Ce(r),Yt(i+2.2,t,2.5,2,.4,.8,ye);const o=new U(new oe(.2,.2,.55,12),Wi);o.position.set(i+2.2,1.15,t),o.castShadow=!0,z.add(o),WM(i+2.2,5.6,t)}function uS(i,t){Yt(i,t,5,1.6,.4,1,ye);for(const r of[-2,2])re(i+r,t,.2,1.4,0,.4,jt);const e=new U(new ot(4.5,.08,1.2),wu);e.position.set(i,1.05,t),e.castShadow=!0,z.add(e);for(let r=0;r<5;r++){const o=new U(new oe(.18,.18,.5,12),Wi);o.position.set(i-1.8+r*.9,1.35,t),o.castShadow=!0,z.add(o)}const n=new Re(15791615,.8,6,2);n.position.set(i,3,t),z.add(n),Ce(n),re(i+2.8,t-1.2,.1,1.4,1,2,jt);const s=new U(new zt(1.2,.8),new st({color:1718858,emissive:2775674,emissiveIntensity:.8,roughness:.5}));s.position.set(i+2.75,1.5,t-1.2),s.rotation.y=Math.PI/2,z.add(s)}function dS(i,t){Yt(i,t,3,3,0,.5,Pe),Yt(i,t,2.6,2.6,.5,4,jt),re(i,t+1.32,1.6,.08,1,3.2,ye);const e=new U(new zt(1.2,.8),ws);e.position.set(i,2.5,t+1.37),z.add(e);const n=new U(new oe(.3,1,1.2,14,1,!0),ye);n.position.set(i,4.6,t),z.add(n),Yt(i+2.5,t,3,1.2,.8,1,ye,!1);const s=new U(new ot(2.8,.06,1),wu);s.position.set(i+2.5,1.1,t),z.add(s);const r=new U(new ot(.8,.6,.6),yu);r.position.set(i+3,1.5,t),r.castShadow=!0,z.add(r);const o=new Re(13623536,.6,10,2);o.position.set(i,5,t),z.add(o),Ce(o)}function hS(i,t){for(const o of[-8/2,8/2])for(const a of[-2.4/2,2.4/2]){const l=new U(new ot(.15,5,.15),jt);l.position.set(i+o,5/2,t+a),l.castShadow=!0,z.add(l)}for(let o=0;o<4;o++){const a=.7+o*1.2,l=new U(new ot(8,.08,2.4),ye);l.position.set(i,a,t),l.castShadow=!0,l.receiveShadow=!0,z.add(l);for(let c=0;c<8;c++)for(let u=0;u<2;u++){const d=new U(new oe(.18,.18,.5,10),Wi);d.position.set(i-8/2+.6+c*.95,a+.4,t-.55+u*1.1),d.castShadow=!0,z.add(d)}}Oe(i-8/2-.2,i+8/2+.2,t-2.4/2-.2,t+2.4/2+.2,"prop")}function fS(i,t,e=0){const n=new Xe;n.position.set(i,0,t),n.rotation.y=e,z.add(n);const s=new st({color:14065706,roughness:.7}),r=new U(new ot(1.4,.9,2.2),s);r.position.set(0,.75,0),r.castShadow=!0,n.add(r);const o=new U(new ot(1.3,1.3,1),jt);o.position.set(0,1.85,-.4),o.castShadow=!0,n.add(o);for(const f of[-.6,.6])for(const g of[-.85,.05]){const _=new U(new ot(.08,2.1,.08),jt);_.position.set(f,1.1,g),n.add(_)}const a=new U(new ot(1.35,.08,1),jt);a.position.set(0,2.2,-.4),n.add(a);const l=new U(new ot(.15,3,.15),jt);l.position.set(-.55,1.5,1.1),n.add(l);const c=new U(new ot(.15,3,.15),jt);c.position.set(.55,1.5,1.1),n.add(c);const u=new U(new ot(.15,.08,1.6),ye);u.position.set(-.4,.35,2),n.add(u);const d=new U(new ot(.15,.08,1.6),ye);d.position.set(.4,.35,2),n.add(d);const h=new oe(.3,.3,.25,12);for(const[f,g]of[[-.75,-.8],[.75,-.8],[-.75,.9],[.75,.9]]){const _=new U(h,Eu);_.rotation.z=Math.PI/2,_.position.set(f,.3,g),n.add(_)}n.updateWorldMatrix(!0,!0),Oe(i-1.2,i+1.2,t-1.6,t+1.6,"prop")}function pS(i,t,e,n){const s=new Xe;s.position.set(i,0,t),s.rotation.y=e,z.add(s);const r=new st({color:n,roughness:.4,metalness:.5}),o=new st({color:1714746,roughness:.1,metalness:.4,transparent:!0,opacity:.85}),a=new U(new ot(1.8,.65,3.9),r);a.position.set(0,.55,0),a.castShadow=!0,a.receiveShadow=!0,s.add(a);const l=new U(new ot(1.6,.55,1.9),r);l.position.set(0,1.15,-.15),l.castShadow=!0,s.add(l);const c=new U(new zt(1.4,.45),o);c.position.set(0,1.15,.8),c.rotation.y=Math.PI,s.add(c);const u=new U(new zt(1.4,.45),o);u.position.set(0,1.15,-1.1),s.add(u);for(const f of[-.81,.81]){const g=new U(new zt(1.7,.45),o);g.position.set(f,1.15,-.15),g.rotation.y=Math.PI/2,s.add(g)}const d=new oe(.32,.32,.22,14);for(const[f,g]of[[-.9,1.2],[.9,1.2],[-.9,-1.2],[.9,-1.2]]){const _=new U(d,Eu);_.rotation.z=Math.PI/2,_.position.set(f,.32,g),_.castShadow=!0,s.add(_)}const h=new st({color:16774095,emissive:16765040,emissiveIntensity:.6});for(const f of[-.55,.55]){const g=new U(new ot(.35,.15,.08),h);g.position.set(f,.6,1.98),s.add(g)}s.updateWorldMatrix(!0,!0),Oe(i-1.2,i+1.2,t-2.2,t+2.2,"prop")}function mS(){const i=new st({color:15262408,roughness:.9}),t=.03,e=[15263976,2764083,12593706,2771594,9079434,15263976,4872762,1710618];let n=0;for(let s=0;s<2;s++)for(let r=0;r<5;r++){const o=17+r*3.4,a=-66+s*6;for(const l of[-1.6,1.6]){const c=new U(new zt(2.8,.08),i);c.rotation.x=-Math.PI/2,c.position.set(o,t,a+l),z.add(c)}if(n<6){const l=e[n%e.length];pS(o,a,s===0?0:Math.PI,l)}n++}}function gS(i,t,e){const n=new Xe;n.position.set(i,0,t),n.rotation.y=e,z.add(n);const s=new st({color:15262936,roughness:.5,metalness:.3}),r=new st({color:2775690,roughness:.7,metalness:.2}),o=new st({color:1710620,roughness:.8,metalness:.4}),a=new st({color:1714746,roughness:.1,metalness:.5}),l=new U(new ot(2.4,.35,9.5),o);l.position.set(0,.75,0),l.castShadow=!0,l.receiveShadow=!0,n.add(l);const c=new U(new ot(2.5,2.2,2.6),s);c.position.set(0,2.05,3.3),c.castShadow=!0,n.add(c);const u=new U(new zt(2.2,1),a);u.position.set(0,2.5,4.62),n.add(u);for(const m of[-1.26,1.26]){const p=new U(new zt(1.8,.9),a);p.position.set(m,2.5,3.3),p.rotation.y=Math.PI/2,n.add(p)}const d=new U(new ot(2.4,2.6,6.2),r);d.position.set(0,2.3,-1.1),d.castShadow=!0,d.receiveShadow=!0,n.add(d);for(let m=0;m<5;m++){const p=-3.7+m*1.4;for(const w of[-1.22,1.22]){const E=new U(new ot(.06,2.5,.1),o);E.position.set(w,2.3,p),n.add(E)}}const h=new U(new zt(2.2,2.4),o);h.position.set(0,2.3,-4.21),h.rotation.y=Math.PI,n.add(h);const f=new oe(.5,.5,.32,16),g=[3.3,-1.2,-3.2];for(const m of g)for(const p of[-1.05,1.05]){const w=new U(f,Eu);w.rotation.z=Math.PI/2,w.position.set(p,.5,m),w.castShadow=!0,n.add(w)}const _=new st({color:16774095,emissive:16765040,emissiveIntensity:.8});for(const m of[-.85,.85]){const p=new U(new ot(.4,.22,.08),_);p.position.set(m,1.3,4.62),n.add(p)}n.updateWorldMatrix(!0,!0),Oe(i-1.5,i+1.5,t-5,t+5,"prop")}function _S(){for(const i of ba){if(i.id==="yard"||i.id==="entrance"||i.id==="outside")continue;const t=(i.xMin+i.xMax)/2,e=(i.zMin+i.zMax)/2,n=new U(new zt(4,1.4),new st({map:As(i.title,i.sub,i.color,ze.capabilities.getMaxAnisotropy()),roughness:.7,side:Fe}));n.position.set(t,4.5,e),z.add(n)}}function vS(){ro.length=0;for(const i of ba)ro.push({...i,cx:(i.xMin+i.xMax)/2,cz:(i.zMin+i.zMax)/2})}function xS(){JM(),jM(),QM(),tS(),eS(),RM(),nS(),iS(),sS(),rS(),oS(),aS(),cS(-15,22),lS(-15,30),uS(0,22),dS(10,28),hS(17,34),fS(8,14,-Math.PI/6),Sc(-6,6),Sc(5,7,Math.PI/2),Sc(-22,20,0),yc(20,14),yc(20,20),yc(-22,32),mS(),gS(0,-20,Math.PI),Lr(-13,4,Math.PI*.8,2771594,14068572),Lr(-17,7,Math.PI*1.2,2771594,14068572),Lr(-3,4,0,9058874,14068572),Lr(14,6,Math.PI/2,4877114,16765008),Lr(19,-4,-Math.PI/2,4877114,16765008),_S(),vS(),console.log(`✅ کارخانه ساخته شد با ${ba.length} منطقه`)}const Ef=[{pos:new P(0,13,-82),look:new P(0,3,-50)},{pos:new P(0,5,-58),look:new P(0,2,-10)},{pos:new P(-13,4.2,5),look:new P(-16,2.6,0)},{pos:new P(-1,3.4,6),look:new P(0,3,0)},{pos:new P(15,3.2,4),look:new P(17,1.3,0)},{pos:new P(9,14,-20),look:new P(-30,3,-25)},{pos:new P(-29,5,-19),look:new P(-33,3,-28)},{pos:new P(0,19,-78),look:new P(0,4,-40)}],MS=new hu(Ef.map(i=>i.pos),!1,"catmullrom",.4),SS=new hu(Ef.map(i=>i.look),!1,"catmullrom",.4),yS=22;let bu=!0,nh=0;function wS(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function bf(){return bu}function ES(){bu=!1}function bS(i){if(!bu)return;nh+=i;const t=Math.min(nh/yS,1),e=Math.min(wS(t),.999),n=MS.getPointAt(e),s=SS.getPointAt(e);Lt.position.copy(n),Lt.up.set(0,1,0),Lt.lookAt(s)}const Cs=i=>document.getElementById(i),ih=Cs("room-txt"),sh=Cs("room-sub"),Yo=Cs("room-dot"),rh=Cs("room-badge"),TS=Cs("instructions"),AS=Cs("start-btn"),Yl=Cs("minimap"),Ve=Yl.getContext("2d");let $l=null;function RS(){const i=Lt.position.x,t=Lt.position.z;let e=null;for(const s of ro)if(i>s.xMin&&i<s.xMax&&t>s.zMin&&t<s.zMax){e=s;break}const n=e?e.id:null;n!==$l&&($l=n,e?(ih.textContent=e.title,sh.textContent=e.sub,Yo.style.background=ma(e.color),Yo.style.boxShadow=`0 0 0 3px ${ma(e.color)}33`):(ih.textContent="حیاط کارخانه",sh.textContent="محوطه",Yo.style.background="#d6ab5c",Yo.style.boxShadow="0 0 0 3px rgba(214,171,92,0.16)"),rh.classList.add("pop"),window.setTimeout(()=>rh.classList.remove("pop"),380))}function CS(){const i=Yl.width,t=Yl.height;Ve.clearRect(0,0,i,t),Ve.fillStyle="#0d1017",Ve.fillRect(0,0,i,t);const e=pi-Kn,n=Di-eo,s=i/e,r=t/n,o=(u,d)=>[(u-Kn)*s,(d-eo)*r];for(const u of ro){if(u.id==="yard")continue;const[d,h]=o(u.xMin,u.zMin),[f,g]=o(u.xMax,u.zMax);Ve.fillStyle=$l===u.id?ma(u.color):`${ma(u.color)}44`,Ve.fillRect(d,h,f-d,g-h)}const[a,l]=o(Lt.position.x,Lt.position.z);Ve.save(),Ve.translate(a,l);const c=window.playerState;Ve.rotate(-(c?.yaw??0)),Ve.fillStyle="#ffffff",Ve.beginPath(),Ve.moveTo(0,-7),Ve.lineTo(5,6),Ve.lineTo(0,3),Ve.lineTo(-5,6),Ve.closePath(),Ve.fill(),Ve.restore()}function PS(){window.addEventListener("keydown",a=>{const l=a.target;l.tagName==="INPUT"||l.tagName==="TEXTAREA"||l.isContentEditable||(Le[a.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(a.code)&&a.preventDefault())}),window.addEventListener("keyup",a=>{Le[a.code]=!1}),window.addEventListener("blur",()=>{for(const a of Object.keys(Le))Le[a]=!1});const i=document.getElementById("three-canvas");function t(){try{const a=i.requestPointerLock();a&&typeof a.catch=="function"&&a.catch(()=>{})}catch{}}let e=!1;function n(){e||(e=!0,ES(),Lx(),TS.classList.add("hide"),hf())}AS.addEventListener("click",a=>{a.stopPropagation(),n()});const s=document.getElementById("sound-toggle");s&&(s.textContent="🔇",s.addEventListener("click",a=>{a.stopPropagation();const l=Dx();s.textContent=l?"🔇":"🔊"})),document.addEventListener("pointerlockchange",()=>{i.classList.toggle("locked",document.pointerLockElement===i)}),i.addEventListener("click",()=>{e&&t()}),document.addEventListener("mousemove",a=>{if(document.pointerLockElement!==i)return;const l=window.playerState;l.yaw-=a.movementX*.0022,l.pitch=Math.max(-1.35,Math.min(1.35,l.pitch-a.movementY*.0022))});let r=!1;i.addEventListener("pointerdown",a=>{if(a.pointerType!=="touch"){r=!0;try{i.setPointerCapture(a.pointerId)}catch{}}}),i.addEventListener("pointermove",a=>{if(!r||document.pointerLockElement===i||a.pointerType==="touch")return;const l=window.playerState;l.yaw-=a.movementX*.0032,l.pitch=Math.max(-1.35,Math.min(1.35,l.pitch-a.movementY*.0032))});const o=()=>{r=!1};i.addEventListener("pointerup",o),i.addEventListener("pointercancel",o)}function LS(){console.info("[factory] zones:",ba.map(i=>i.id).join(", "))}let Ms=null,Zl=!1,oh=0;const IS=.4;function DS(){Zl=new URLSearchParams(window.location.search).get("debug")==="1",Zl&&(Ms=document.createElement("div"),Ms.id="diag-hud",Ms.style.cssText=`
    position: fixed; top: 8px; left: 8px; z-index: 99999;
    background: rgba(0,0,0,0.82); color: #0f0;
    font: 10px/1.55 monospace; padding: 8px 12px;
    border-radius: 8px; pointer-events: none;
    white-space: pre; max-width: 92vw;
    text-shadow: 0 0 3px rgba(0,255,0,0.5);
    border: 1px solid rgba(0,255,0,0.25);
  `,document.body.appendChild(Ms))}function US(i,t,e,n,s,r){if(!Zl||!Ms||t-oh<IS)return;oh=t;const o=e.info,a=i>0?1/i:0,l=[`FPS      ${s.toFixed(1).padStart(5)}  (inst ${a.toFixed(0).padStart(3)})`,`quality  ${r}`,`pixelR   ${e.getPixelRatio().toFixed(2)}`,`shadows  ${n.castShadow?"ON  ⚠️":"off  ✓"}`,`draw     ${String(o.render.calls).padStart(5)}`,`tris     ${String(o.render.triangles).padStart(7)}`,`programs ${String(o.programs?.length??0).padStart(5)}`,`textures ${String(o.memory.textures).padStart(5)}`,`geoms    ${String(o.memory.geometries).padStart(5)}`];Ms.textContent=l.join(`
`),Ms.style.color=s>50?"#0f0":s>30?"#ff0":"#f55"}const ir={x:0,y:0},Ke={x:0,y:0},Tf=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,NS=Tf.get("touch")==="1",FS=Tf.get("touch")==="0";function OS(){if(NS)return!0;if(FS||typeof window>"u")return!1;const i=navigator.userAgent.toLowerCase();if(/macintosh/.test(i)&&navigator.maxTouchPoints>1||/android|iphone|ipod|mobile|tablet|windows phone/.test(i))return!0;if(/windows|macintosh|linux|x11|cros/.test(i))return!1;let s=!1,r=!1,o=!1;try{s=window.matchMedia("(hover: hover)").matches,r=window.matchMedia("(pointer: fine)").matches,o=window.matchMedia("(pointer: coarse)").matches}catch{}return s||r?!1:o&&navigator.maxTouchPoints>0?!0:navigator.maxTouchPoints>0}function BS(){if(document.getElementById("mobile-style"))return;const i=document.createElement("style");i.id="mobile-style",i.textContent=`
    #joystick {
      position: fixed; bottom: 32px; left: 32px;
      width: 130px; height: 130px; border-radius: 50%;
      background: rgba(15,18,26,0.55);
      border: 2px solid rgba(214,171,92,0.65);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      z-index: 9000; display: none;
      touch-action: none;
      user-select: none; -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    }
    #joystick-knob {
      position: absolute; top: 50%; left: 50%;
      width: 58px; height: 58px; margin: -29px 0 0 -29px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #f0c876, #b98f42);
      box-shadow: 0 6px 16px rgba(0,0,0,0.5),
                  inset 0 2px 4px rgba(255,255,255,0.35);
      pointer-events: none; will-change: transform;
    }
    body.touch #joystick { display: block !important; }
    body.touch #move-hint { display: none !important; }
    @media (max-width: 680px) {
      #joystick { width: 108px; height: 108px; bottom: 22px; left: 22px; }
      #joystick-knob { width: 48px; height: 48px; margin: -24px 0 0 -24px; }
    }
  `,document.head.appendChild(i)}function zS(){let i=document.getElementById("joystick"),t=document.getElementById("joystick-knob");return i||(i=document.createElement("div"),i.id="joystick",t=document.createElement("i"),t.id="joystick-knob",i.appendChild(t),document.body.appendChild(i)),t||(t=i.querySelector("i"),t||(t=document.createElement("i"),t.id="joystick-knob",i.appendChild(t))),{joy:i,knob:t}}function kS(){const i=OS();if(console.log(`[mobile] تشخیص: ${i?"لمسی":"دسکتاپ"} | maxTouch=${navigator.maxTouchPoints} | coarse=${(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return"?"}})()}`),!i){console.warn("[mobile] اگه روی موبایل هستی: ?touch=1");return}document.body.classList.add("touch"),BS();const{joy:t,knob:e}=zS(),n=46;let s=null,r=null,o=0,a=0;const l=()=>{s=null,ir.x=0,ir.y=0,e.style.transform=""},c=(_,m)=>{const p=t.getBoundingClientRect();let w=_-(p.left+p.width/2),E=m-(p.top+p.height/2);const x=Math.hypot(w,E);x>n&&(w=w/x*n,E=E/x*n),e.style.transform=`translate(${w}px, ${E}px)`,ir.x=w/n,ir.y=-E/n},u=(_,m)=>{const p=t.getBoundingClientRect();return _>=p.left&&_<=p.right&&m>=p.top&&m<=p.bottom};t.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),s=_.pointerId;try{t.setPointerCapture(_.pointerId)}catch{}c(_.clientX,_.clientY)},{passive:!1}),t.addEventListener("pointermove",_=>{s===_.pointerId&&(_.preventDefault(),c(_.clientX,_.clientY))},{passive:!1});const d=_=>{s===_.pointerId&&l()};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d),t.addEventListener("lostpointercapture",d);const h=document.getElementById("three-canvas")||document.querySelector("canvas");if(!h){console.warn("[mobile] canvas پیدا نشد");return}const f=()=>{r=null,Ke.x=0,Ke.y=0};h.addEventListener("pointerdown",_=>{_.pointerType!=="mouse"&&(u(_.clientX,_.clientY)||(r=_.pointerId,o=_.clientX,a=_.clientY))},{passive:!0}),h.addEventListener("pointermove",_=>{if(_.pointerType==="mouse"||r!==_.pointerId)return;_.preventDefault(),Ke.x+=_.clientX-o,Ke.y+=_.clientY-a,o=_.clientX,a=_.clientY;const m=200;Ke.x>m&&(Ke.x=m),Ke.x<-m&&(Ke.x=-m),Ke.y>m&&(Ke.y=m),Ke.y<-m&&(Ke.y=-m)},{passive:!1});const g=_=>{r===_.pointerId&&f()};h.addEventListener("pointerup",g),h.addEventListener("pointercancel",g),h.addEventListener("lostpointercapture",g),console.log("[mobile] ✅ کنترل‌های لمسی فعال شد")}const $o=60;function HS(){const i=Math.max(-$o,Math.min($o,Ke.x)),t=Math.max(-$o,Math.min($o,Ke.y));return Ke.x=0,Ke.y=0,{x:i,y:t}}const VS="modulepreload",GS=function(i){return"/conv-assistant/factory/"+i},ah={},WS=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=l(e.map(c=>{if(c=GS(c),c in ah)return;ah[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":VS,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};function XS(i){return new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=i})}function qS(i){try{return new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(i)}catch{return i.toISOString().slice(0,10)}}async function YS(i){const{default:t}=await WS(async()=>{const{default:q}=await import("./jspdf.es.min-D1bM4jKs.js").then(H=>H.j);return{default:q}},[]),e=210,n=297,s=4,r=document.createElement("canvas");r.width=e*s,r.height=n*s;const o=r.getContext("2d"),a=q=>q*s;o.fillStyle="#fbfaf5",o.fillRect(0,0,r.width,r.height),o.direction="rtl",o.textAlign="right",o.textBaseline="alphabetic";const l=a(18),c=r.width-l,u=l,d=c-u,h=a(7),f=a(9),g=c-h,_=a(13),m=o.createLinearGradient(g,_,g+h,_);m.addColorStop(0,"#b8923f"),m.addColorStop(.5,"#e5c66a"),m.addColorStop(1,"#b8923f"),o.fillStyle=m,o.fillRect(g,_+a(1),h,f-a(2)),o.fillStyle="#8a6b2a",o.fillRect(g,_,h,a(1.2)),o.fillStyle="#8a6b2a",o.fillRect(g,_+f-a(.8),h,a(.8)),o.strokeStyle="rgba(26, 22, 18, 0.35)",o.lineWidth=a(.3),o.beginPath(),o.moveTo(g+h/2,_+a(1.2)),o.lineTo(g+h/2,_+f-a(.8)),o.stroke(),o.strokeStyle="rgba(255, 255, 255, 0.5)",o.lineWidth=a(.25),o.beginPath(),o.moveTo(g+a(1.2),_+a(1.5)),o.lineTo(g+a(1.2),_+f-a(1.2)),o.stroke();const p=c-h-a(4);o.fillStyle="#1a1612",o.font=`bold ${a(6)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("بهین ظروف آمیتیس",p,a(19)),o.fillStyle="#6b6153",o.font=`500 ${a(3.5)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("صنایع بسته‌بندی",p,a(25)),o.strokeStyle="#d6ab5c",o.lineWidth=a(.6),o.beginPath(),o.moveTo(u,a(30)),o.lineTo(c,a(30)),o.stroke();let w=a(40);o.fillStyle="#1a1612",o.font=`bold ${a(7)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("فرم پیش‌فاکتور سفارش",c,w),w+=a(7),o.fillStyle="#6b6153",o.font=`500 ${a(3.8)}px Vazirmatn, Tahoma, sans-serif`,o.textAlign="left",o.fillText(`تاریخ: ${qS(i.date)}`,u,w),o.textAlign="right",o.fillText(`شماره سفارش: ${i.orderNum}`,c,w),w+=a(10);const E=a(22);o.fillStyle="#f4efe4",o.fillRect(u,w-a(4),d,E),o.fillStyle="#d6ab5c",o.fillRect(c-a(1.5),w-a(4),a(1.5),E),o.fillStyle="#1a1612",o.font=`bold ${a(4.2)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("اطلاعات مشتری",c-a(5),w+a(2)),o.fillStyle="#2a2a2a",o.font=`500 ${a(3.6)}px Vazirmatn, Tahoma, sans-serif`,o.fillText(`نام: ${i.customer.name||"—"}`,c-a(5),w+a(9)),o.fillText(`تلفن: ${i.customer.phone||"—"}`,c-a(5),w+a(14.5)),w+=a(28);const x=a(28);o.fillStyle="#f4efe4",o.fillRect(u,w-a(4),d,x),o.fillStyle="#d6ab5c",o.fillRect(c-a(1.5),w-a(4),a(1.5),x),o.fillStyle="#1a1612",o.font=`bold ${a(4.2)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("مشخصات محصول",c-a(5),w+a(2)),o.fillStyle="#2a2a2a",o.font=`500 ${a(3.6)}px Vazirmatn, Tahoma, sans-serif`,o.fillText(`محصول: ${i.product.title}`,c-a(5),w+a(9)),o.fillText(`ابعاد: ${i.dim.label}`,c-a(5),w+a(14.5)),i.customer.qty&&o.fillText(`تعداد: ${i.customer.qty} عدد`,c-a(5),w+a(20)),w+=a(34),o.fillStyle="#1a1612",o.font=`bold ${a(4.2)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("طرح چاپی سفارشی مشتری روی محصول",c,w),w+=a(6);const R=a(38),T=a(4),L=R*4+T*3;let D=u+(d-L)/2;const S=w,M=[i.views.front,i.views.side,i.views.back,i.views.iso],A=["روبرو","کنار","پشت","سه‌ربع"];for(let q=0;q<4;q++){if(o.fillStyle="#22252c",o.fillRect(D,S,R,R),M[q])try{const H=await XS(M[q]),Q=Math.min(R/H.width,R/H.height),G=H.width*Q,rt=H.height*Q,lt=D+(R-G)/2,Mt=S+(R-rt)/2;o.drawImage(H,lt,Mt,G,rt)}catch{}o.strokeStyle="#d6ab5c",o.lineWidth=a(.5),o.strokeRect(D,S,R,R),o.fillStyle="#6b6153",o.font=`500 ${a(3.2)}px Vazirmatn, Tahoma, sans-serif`,o.textAlign="center",o.fillText(A[q],D+R/2,S+R+a(4.5)),o.textAlign="right",D+=R+T}if(w=S+R+a(12),i.customer.note){o.fillStyle="#1a1612",o.font=`bold ${a(4)}px Vazirmatn, Tahoma, sans-serif`,o.fillText("توضیحات مشتری",c,w),w+=a(6),o.fillStyle="#2a2a2a",o.font=`500 ${a(3.5)}px Vazirmatn, Tahoma, sans-serif`;const q=i.customer.note.split(/\s+/);let H="";const Q=d;for(const G of q){const rt=H?H+" "+G:G;o.measureText(rt).width>Q?(o.fillText(H,c,w),w+=a(5),H=G):H=rt}H&&(o.fillText(H,c,w),w+=a(5))}const N=n*s-a(15);o.strokeStyle="rgba(214,171,92,0.4)",o.lineWidth=a(.3),o.beginPath(),o.moveTo(u,N-a(4)),o.lineTo(c,N-a(4)),o.stroke(),o.fillStyle="#a09889",o.font=`400 ${a(3)}px Vazirmatn, Tahoma, sans-serif`,o.textAlign="center",o.fillText("این پیش‌فاکتور جهت نمایش دموی سفارش‌گیری است — برای ثبت نهایی با شرکت تماس بگیرید",r.width/2,N);const k=r.toDataURL("image/jpeg",.95),X=new t({unit:"mm",format:"a4",compress:!0});X.addImage(k,"JPEG",0,0,e,n),X.save(`order-${i.orderNum}.pdf`)}let Oi=!1,vi=null,mr=null,Aa=null,$S=1,Cn=null;function ZS(){const i=document.createElement("div");i.id="order-overlay",i.innerHTML=`
    <div class="order-panel">
      <button class="order-close" id="order-close" aria-label="بستن">✕</button>
      <div class="order-header">
        <div class="order-eyebrow">اتاق سفارش‌گیری</div>
        <h2>سفارش محصول اختصاصی</h2>
        <p class="order-sub">طرح خود را روی محصول ببینید و پیش‌فاکتور دریافت کنید</p>
      </div>

      <div class="order-grid">
        <aside class="order-side">
          <div class="order-step">
            <div class="step-num">۱</div>
            <div class="step-body">
              <div class="step-title">محصول را انتخاب کنید</div>
              <div class="product-picker" id="product-picker"></div>
            </div>
          </div>

          <div class="order-step" id="step-dims" hidden>
            <div class="step-num">۲</div>
            <div class="step-body">
              <div class="step-title">ابعاد را انتخاب کنید</div>
              <select id="dim-select" class="order-select">
                <option value="">— انتخاب کنید —</option>
              </select>
              <small class="order-hint">برای ابعاد اختصاصی با شرکت تماس بگیرید</small>
            </div>
          </div>

          <div class="order-step" id="step-image" hidden>
            <div class="step-num">۳</div>
            <div class="step-body">
              <div class="step-title">طرح چاپی خود را بارگذاری کنید</div>
              <label class="order-upload">
                <input type="file" id="image-input" accept="image/png,image/jpeg" />
                <span>📎 انتخاب تصویر (PNG / JPG — حداکثر ۵MB)</span>
              </label>
              <button id="image-remove" class="order-btn-small" hidden>حذف طرح</button>
            </div>
          </div>
        </aside>

        <main class="order-main">
          <div class="preview-wrap">
            <canvas id="order-preview" width="600" height="600"></canvas>
            <div class="preview-hint">با کشیدن، محصول را بچرخانید</div>
          </div>
        </main>
      </div>

      <div class="order-form" id="order-form" hidden>
        <div class="form-row">
          <input type="text" id="f-name" placeholder="نام و نام خانوادگی *" />
          <input type="tel" id="f-phone" placeholder="شماره تماس *" />
        </div>
        <div class="form-row">
          <input type="number" id="f-qty" placeholder="تعداد (عدد)" min="1" />
        </div>
        <textarea id="f-note" placeholder="توضیحات (اختیاری)" rows="3"></textarea>
        <button class="order-submit" id="order-submit">
          📄 ثبت سفارش و دانلود پیش‌فاکتور
        </button>
      </div>
    </div>
  `,document.body.appendChild(i),Cn=document.createElement("div"),Cn.id="order-hint",document.body.classList.contains("touch")?(Cn.innerHTML="<span>👆 لمس کنید — ورود به اتاق سفارش‌گیری</span>",Cn.style.pointerEvents="auto",Cn.style.cursor="pointer",Cn.addEventListener("click",()=>{aa()&&!Oi&&wc()}),Cn.addEventListener("touchstart",n=>{n.preventDefault(),aa()&&!Oi&&wc()},{passive:!1})):Cn.innerHTML="<kbd>E</kbd><span>ورود به اتاق سفارش‌گیری</span>",document.body.appendChild(Cn);const e=document.getElementById("order-preview");CM(e),PM(e),document.getElementById("order-close").addEventListener("click",Kl),document.getElementById("image-input").addEventListener("change",QS),document.getElementById("image-remove").addEventListener("click",ty),document.getElementById("dim-select").addEventListener("change",jS),document.getElementById("order-submit").addEventListener("click",ey),window.addEventListener("keydown",n=>{if(n.code==="Escape"&&Oi){Kl();return}const s=document.body.classList.contains("touch");n.code==="KeyE"&&!Oi&&!s&&aa()&&wc()}),KS()}function aa(){const i=Lt.position.x,t=Lt.position.z;return i>Hn+.3&&i<bi-.3&&t>us+.3&&t<vn-.3}function KS(){const i=document.getElementById("product-picker");i.innerHTML="",Pl.forEach(t=>{const e=document.createElement("button");e.className="product-btn",e.dataset.id=t.id,e.innerHTML=`<div class="pb-title">${t.title}</div><div class="pb-sub">${t.subtitle}</div>`,e.addEventListener("click",()=>JS(t)),i.appendChild(e)})}function JS(i){vi=i,mr=null,document.querySelectorAll(".product-btn").forEach(n=>{n.classList.toggle("active",n.dataset.id===i.id)});const t=document.getElementById("step-dims");t.hidden=!1;const e=document.getElementById("dim-select");e.innerHTML='<option value="">— انتخاب کنید —</option>',i.dims.forEach((n,s)=>{const r=document.createElement("option");r.value=String(s),r.textContent=n.label,e.appendChild(r)}),document.getElementById("step-image").hidden=!0,document.getElementById("order-form").hidden=!0,document.getElementById("image-remove").hidden=!0,document.getElementById("image-input").value="",Aa=null,gf(i,i.dims[0],null)}function jS(){if(!vi)return;const i=document.getElementById("dim-select"),t=i.value?parseInt(i.value):-1;t<0||(mr=vi.dims[t],document.getElementById("step-image").hidden=!1,Tu())}function QS(i){const e=i.target.files?.[0];if(!e||!vi)return;if(e.size>5*1024*1024){alert("حجم تصویر باید کمتر از ۵ مگابایت باشد");return}const n=new FileReader;n.onload=()=>{const s=new Image;s.onload=()=>{Aa=AM(s,vi),document.getElementById("image-remove").hidden=!1,document.getElementById("order-form").hidden=!1,Tu()},s.src=n.result},n.readAsDataURL(e)}function ty(){Aa=null,document.getElementById("image-remove").hidden=!0,document.getElementById("image-input").value="",document.getElementById("order-form").hidden=!0,Tu()}function Tu(){!vi||!mr||gf(vi,mr,Aa)}async function ey(){if(!vi||!mr){alert("ابتدا محصول و ابعاد را انتخاب کنید");return}const i=document.getElementById("f-name").value.trim(),t=document.getElementById("f-phone").value.trim(),e=document.getElementById("f-qty").value.trim(),n=document.getElementById("f-note").value.trim();if(!i||!t){alert("نام و شماره تماس الزامی است");return}const s=IM(),r=`A-${new Date().getFullYear()}-${String($S++).padStart(4,"0")}`;try{ny(r),await YS({orderNum:r,date:new Date,customer:{name:i,phone:t,qty:e,note:n},product:vi,dim:mr,views:s}),setTimeout(()=>{Kl()},2200)}catch(o){console.error("PDF error:",o),alert("خطا در ساخت PDF. لطفاً دوباره تلاش کنید.")}}function ny(i){document.querySelectorAll(".order-toast").forEach(e=>e.remove());const t=document.createElement("div");t.className="order-toast",t.style.zIndex="9999",t.innerHTML=`
    <div class="toast-ico">✅</div>
    <div class="toast-body">
      <b>سفارش شما ثبت شد</b>
      <span>شماره پیگیری: <strong>${i}</strong></span>
      <small>فایل PDF دانلود شد. برای ثبت نهایی با شرکت تماس بگیرید.</small>
    </div>
  `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),60),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},6e3)}function wc(){const i=document.getElementById("order-overlay");i&&(i.classList.add("open"),Oi=!0,document.pointerLockElement&&document.exitPointerLock())}function Kl(){const i=document.getElementById("order-overlay");i&&(i.classList.remove("open"),Oi=!1)}function iy(){if(!Cn)return;const i=aa()&&!Oi;Cn.classList.toggle("show",i)}function sy(i){Oi&&LM(i)}const ch=[{id:"hall",label:"سوله تولید",icon:"🏭",pos:[0,dt,-10],yaw:Math.PI},{id:"order",label:"اتاق سفارش‌گیری",icon:"🧾",pos:[18,dt,-42],yaw:0},{id:"admin",label:"ساختمان اداری",icon:"🏢",pos:[-27.5,dt,-28],yaw:Math.PI/2},{id:"yard",label:"حیاط کارخانه",icon:"🌳",pos:[0,dt,-30],yaw:Math.PI},{id:"entrance",label:"ورودی کارخانه",icon:"🚪",pos:[0,dt,-70],yaw:Math.PI}];let _s=null,Pi=null,Ra=!1;function ry(){const i=document.getElementById("three-canvas");if(i&&document.pointerLockElement!==i)try{const t=i.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}function oy(){const i=document.createElement("button");i.id="main-menu-toggle",i.innerHTML='<span class="bars"><i></i><i></i><i></i></span>',i.setAttribute("aria-label","منوی اصلی"),document.body.appendChild(i),_s=document.createElement("div"),_s.id="main-menu-panel",_s.innerHTML=`
    <button class="mm-item" data-action="tour">
      <span class="mm-ico">🎬</span>
      <span class="mm-lbl">تور کارخانه</span>
      <span class="mm-hint">پخش خودکار</span>
    </button>
    <button class="mm-item" data-action="about">
      <span class="mm-ico">ℹ️</span>
      <span class="mm-lbl">درباره ما</span>
    </button>
    <div class="mm-divider"></div>
    <div class="mm-label">پرش سریع</div>
    ${ch.map(t=>`
      <button class="mm-item" data-tp="${t.id}">
        <span class="mm-ico">${t.icon}</span>
        <span class="mm-lbl">${t.label}</span>
      </button>
    `).join("")}
  `,document.body.appendChild(_s),Pi=document.createElement("div"),Pi.id="about-modal",Pi.innerHTML=`
    <div class="about-card">
      <button class="about-close" id="about-close">✕</button>
      <div class="about-eyebrow">درباره ما</div>
      <h2>بهین ظروف آمیتیس</h2>
      <p class="about-sub">صنایع بسته‌بندی</p>
      <div class="about-rule"></div>
      <p>
        ما با بیش از دو دهه تجربه در صنعت بسته‌بندی فلزی، تولیدکننده‌ی انواع قوطی،
        پیت، سطل و ظروف صنعتی هستیم. هدف ما ارائه‌ی محصولات باکیفیت و طراحی
        سفارشی مطابق نیاز مشتریان است.
      </p>
      <div class="about-stats">
        <div class="stat"><b>+۲۰</b><span>سال تجربه</span></div>
        <div class="stat"><b>+۵۰۰</b><span>مشتری فعال</span></div>
        <div class="stat"><b>+۱۰۰</b><span>محصول متنوع</span></div>
      </div>
      <div class="about-foot">© تمامی حقوق محفوظ است</div>
    </div>
  `,document.body.appendChild(Pi),i.addEventListener("click",t=>{t.stopPropagation(),document.pointerLockElement&&document.exitPointerLock(),lh()}),_s.addEventListener("click",t=>{t.stopPropagation();const n=t.target.closest(".mm-item");if(!n)return;const s=n.dataset.action,r=n.dataset.tp;if(s==="tour"){tr(),so()||hf();return}if(s==="about"){tr(),cy();return}if(r){const o=ch.find(a=>a.id===r);o&&(of(o.pos[0],o.pos[1],o.pos[2]),Ge.yaw=o.yaw,Ge.pitch=0,Lt.rotation.set(0,o.yaw,0,"YXZ"),tr(),setTimeout(()=>ry(),60))}}),document.getElementById("about-close").addEventListener("click",Ec),Pi.addEventListener("click",t=>{t.target===Pi&&Ec()}),document.addEventListener("click",()=>{Ra&&tr()}),window.addEventListener("keydown",t=>{if(t.code==="Escape"){Ec(),tr();return}t.code==="KeyM"&&!so()&&(document.pointerLockElement&&document.exitPointerLock(),lh())})}function lh(){Ra?tr():ay()}function ay(){Ra=!0,_s?.classList.add("open"),document.getElementById("main-menu-toggle")?.classList.add("open")}function tr(){Ra=!1,_s?.classList.remove("open"),document.getElementById("main-menu-toggle")?.classList.remove("open")}function cy(){Pi?.classList.add("open"),document.pointerLockElement&&document.exitPointerLock()}function Ec(){Pi?.classList.remove("open")}window.hitsWall=Sl;window.keys=Le;window.zoneBounds=ro;window.COLLIDERS=fa;function ly(){const i=HS();if(i.x===0&&i.y===0)return;const t=window.playerState;t&&(Number.isFinite(t.yaw)||(t.yaw=Math.PI),Number.isFinite(t.pitch)||(t.pitch=0),t.yaw-=i.x*.0035,t.pitch=Math.max(-1.2,Math.min(1.2,t.pitch-i.y*.0035)),Lt.rotation.set(t.pitch,t.yaw,0,"YXZ"))}let bc=!1;function uy(){const t=ir.x,e=ir.y;Math.abs(t)>.22||Math.abs(e)>.22?(Le.KeyW=e>.22,Le.KeyS=e<-.22,Le.KeyD=t>.22,Le.KeyA=t<-.22,bc=!0):bc&&(Le.KeyW=!1,Le.KeyS=!1,Le.KeyD=!1,Le.KeyA=!1,bc=!1)}function dy(){window.addEventListener("keydown",i=>{if(i.code!=="Tab")return;const t=i.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)||so()||bf())return;i.preventDefault();const e=document.getElementById("three-canvas");if(e)if(document.pointerLockElement===e)document.exitPointerLock();else try{const n=e.requestPointerLock();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}})}async function hy(){const i=document.getElementById("loading-bar"),t=document.getElementById("loading-hint"),e=["آماده‌سازی زمین…","ساخت سوله تولید…","نصب کوره و پرس…","چیدن خط بسته‌بندی…"];let n=0;const s=window.setInterval(()=>{n=(n+1)%e.length,t.textContent=e[n]},430);let r=0;const o=window.setInterval(()=>{r=Math.min(96,r+9+Math.random()*9),i.style.width=`${r}%`},150);try{await Promise.all([document.fonts.load('800 68px "Vazirmatn"'),document.fonts.load('400 28px "Vazirmatn"')]),await document.fonts.ready}catch{}wx(),xS(),Jx(ze,sn,Lt),DS(),Cx(),Px(),PS(),LS(),kS(),ZS(),oy(),Ex(),wM(),xM(()=>{Ox()}),dy(),of(Mx,dt,Sx),window.playerState.yaw=Math.PI,window.playerState.pitch=0,Lt.rotation.set(0,Math.PI,0,"YXZ"),window.clearInterval(o),window.clearInterval(s),i.style.width="100%",window.setTimeout(()=>document.getElementById("loading")?.classList.add("hide"),320);const a=new Nm;let l=0,c=0,u=0;function d(){requestAnimationFrame(d);const h=Math.min(a.getDelta(),.12),f=a.getElapsedTime();bf()?bS(h):so()?MM(h):bx()?Tx(h):(ly(),uy(),Fx(h)),RS(),Qx(h),GM(h,f),qM(h),$M(f),XM(f),KM(f);const _=Math.hypot(Lt.position.x,Lt.position.z-li)<10?1:0;if(l+=(_-l)*Math.min(1,h*3.2),Ll&&Il){const x=l*(Math.PI/2.35);Ll.rotation.y=-x,Il.rotation.y=x}const p=Math.hypot(Lt.position.x,Lt.position.z-rn)<8?1:0;if(c+=(p-c)*Math.min(1,h*3.2),Dl&&Ul){const x=c*(Math.PI/2.35);Dl.rotation.y=-x,Ul.rotation.y=x}const E=Math.hypot(Lt.position.x- -26,Lt.position.z- -28)<5?1:0;if(u+=(E-u)*Math.min(1,h*3.2),Nl&&Fl){const x=u*(Math.PI/2.2);Nl.rotation.y=x,Fl.rotation.y=-x}iy(),sy(h),EM(),US(h,f,ze,sn,eM(),tM()),CS(),ze.render(z,Lt)}d()}hy().catch(console.error);export{WS as _};
