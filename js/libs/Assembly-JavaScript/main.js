class Viewport extends GameBehavior{#e=0;constructor(){super()}Start(){Crispixels.effect=!0}Update(){if(Input.GetKeyDown(KeyCode.F2))switch(this.#e++,3===this.#e&&(this.#e=0),this.#e){case 0:FPSMeter.enabled=!1,FPSMeter.msMode=!1;break;case 1:FPSMeter.enabled=!0;break;case 2:FPSMeter.msMode=!0}Input.GetKeyDown(KeyCode.F4)&&(Window.fullScreen=!Window.fullScreen),FPSMeter.Update()}}class CharController extends GameBehavior{#e=[];#t=new Vector2;#r=null;speed=1;speedScale=1;constructor(){super()}#s(e){if(e.Equals(Vector2.zero))return;const t=[Vector2.down,Vector2.left,Vector2.right,Vector2.up];let r=0;for(let s=0;s<4;s++)if(e.Equals(t[s])){r=s+1;break}this.#r.sprite=this.#e[r]}Start(){const e=Resources.Find("sprites/characters/yoki").sprites;for(let t=0;t<e.length;t++){const r=e[t].Duplicate();this.#e[t]=r}this.#r=this.GetComponent("SpriteRenderer")}FixedUpdate(){const e=Vector2.Scale(this.#t,this.speed*this.speedScale*Time.fixedDeltaTime);this.transform.position=Vector2.Add(this.transform.position,e)}Update(){this.#t=new Vector2(+Input.GetKey(KeyCode.ArrowRight)-+Input.GetKey(KeyCode.ArrowLeft),+Input.GetKey(KeyCode.ArrowUp)-+Input.GetKey(KeyCode.ArrowDown)),this.speedScale=Input.GetKey(KeyCode.Shift)?2:1,this.#t.abs.Equals(Vector2.one)&&(this.#t.y=0),this.#s(this.#t)}}class CameraController extends Viewport{#t=null;clampMin=new Vector2(0,0);clampMax=new Vector2(9.5,0);constructor(){super()}Start(){super.Start(),Application.gl.clearColor(.25,.25,.25,1),this.#t=GameObject.Find("char_yoki").transform}LateUpdate(){const t=this.#t.position,a=new Vector2(Math.Clamp(t.x,this.clampMin.x,this.clampMax.x),Math.Clamp(t.y,this.clampMin.y,this.clampMax.y));this.transform.position=a}}class Test extends GameBehavior{#t=null;#e=[];constructor(){super()}Start(){this.#t=this.GetComponent("Renderer");for(let t=0;t<5;t++)this.#e[t]=GameObject.FindByID(t+2).transform}Update(){const t=this.#t.bounds,e=t.min,s=t.max;this.#e[0].position=e,this.#e[1].position=new Vector2(s.x,e.y),this.#e[2].position=new Vector2(e.x,s.y),this.#e[3].position=s,this.#e[4].position=t.center}}