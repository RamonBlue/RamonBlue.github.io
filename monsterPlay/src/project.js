window.__require=function e(r,c,a){function n(s,o){if(!c[s]){if(!r[s]){var i=s.split("/");if(i=i[i.length-1],!r[i]){var p="function"==typeof __require&&__require;if(!o&&p)return p(i,!0);if(t)return t(i,!0);throw new Error("Cannot find module '"+s+"'")}s=i}var u=c[s]={exports:{}};r[s][0].call(u.exports,function(e){return n(r[s][1][e]||e)},u,u.exports,e,r,c,a)}return c[s].exports}for(var t="function"==typeof __require&&__require,s=0;s<a.length;s++)n(a[s]);return n}({Game:[function(e,r,c){"use strict";cc._RF.push(r,"9243f8c5/tA4Yte6gQ08bnr","Game"),cc.Class({extends:cc.Component,properties:{monster:{default:null,type:cc.Node}},start:function(){}}),cc._RF.pop()},{}],Monster:[function(e,r,c){"use strict";cc._RF.push(r,"c1792uqqldGFI6HxvIKIgQN","Monster"),cc.Class({extends:cc.Component,properties:{monster:{default:null,type:cc.Node},face:{default:null,type:cc.Node}},start:function(){var e=cc.scaleBy(.7,1.03,.97),r=cc.scaleTo(.7,1,1),c=cc.sequence(e,r).repeatForever();this.monster.runAction(c),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},onKeyDown:function(e){var r=this.face.getComponent(cc.Sprite);switch(animation=this.face.getComponent(cc.Animation),animation.stop(),e.keyCode){case cc.macro.KEY.a:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u5927\u7b11.png"));break;case cc.macro.KEY.b:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u597d\u5947.png"));break;case cc.macro.KEY.c:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u6487\u5634.png"));break;case cc.macro.KEY.d:animation.play("Mantalk");break;case cc.macro.KEY.e:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u751f\u6c14.png"));break;case cc.macro.KEY.f:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u5bb3\u6015.png"));break;case cc.macro.KEY.g:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u59d4\u5c48.png"));break;case cc.macro.KEY.h:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u88c5\u65e0\u8f9c.png"));break;case cc.macro.KEY.i:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u5f00\u5fc3.png"));break;case cc.macro.KEY.j:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u5478.png"));break;case cc.macro.KEY.k:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u4e0d\u5c51.png"));break;case cc.macro.KEY.l:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u5403\u60ca.png"));break;case cc.macro.KEY.m:r.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/Man\u9759\u9759\u770b\u7740.png"))}}}),cc._RF.pop()},{}]},{},["Game","Monster"]);