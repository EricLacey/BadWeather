//https://medium.com/@kewalkishan/writing-a-simple-timer-component-for-a-frame-81889c863589

AFRAME.registerComponent('timer', {

  schema: {
    timerDuration: {type: 'int', default: 60}, //LENGTH OF TIMER
    timerColor: {type: 'color', default: '#000"'},
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var date= new Date(); 
    this.TargetTime=new Date(date.getTime() + data.timerDuration*1000);
    
    secs = new THREE.Object3D();
    secs.name="secs"
    for(var j=0;j<2;j++) {
      distance = -j*0.25;
      parent1 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
      parent1.add(mesh1);
      parent1.position.x-=distance;
      parent1.position.y+=0.07;
      secs.add(parent1);
      
      parent2 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
      parent2.add(mesh1);
      parent2.rotateZ(Math.PI/2);
      parent2.position.x-=(distance - 0.08);
      parent2.position.y+=0.14;
      secs.add(parent2);
  
      parent3 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
      parent3.add(mesh1);
      parent3.position.x-=(distance - 0.16);
      parent3.position.y+=0.07;
      secs.add(parent3);
  
      parent4 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3);
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
      parent4.add(mesh1);
      parent4.rotateZ(Math.PI/2);
      parent4.position.x-=(distance - 0.08);   
      secs.add(parent4);
  
      parent5 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
      parent5.add(mesh1);
      parent5.rotateZ(Math.PI/2);
      parent5.position.x-=(distance - 0.08);
      parent5.position.y-=0.14;    
      secs.add(parent5);
  
      parent6 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
      parent6.add(mesh1);
      parent6.position.x-=(distance - 0.16);
      parent6.position.y-=0.07;
       
      secs.add(parent6);
  
      parent7 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
      var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.timerColor} );
      var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
      parent7.add(mesh1);
      parent7.position.x-=distance;
      parent7.position.y-=0.07;
      secs.add(parent7);
    }
    el.setObject3D('TimerMesh', secs); 
  },
  
  tick: function() {
    if(this.seconda!=0) {    
      this.getTimeRemaining();
      this.setDigit();
      if(this.seconda==0) {
        this.timerDone();
      }
    }  
  },

  setDigit: function(){
    var digitval= [[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[0,1,1,1,1,0,1],[0,1,1,1,1,1,0],[1,0,1,1,0,1,0],[1,1,0,1,1,1,0],[1,1,0,1,1,1,1],[0,1,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,0]]; 
    var tensPlace = Math.floor(this.seconda/10); 
    for(var a=0;a<7;a++) { 
      if(digitval[tensPlace][a]==1)
        secs.children[a].visible=true;
      else
        secs.children[a].visible=false;
    }
    var onesPlace = this.seconda%10;
    for(var i=7;i<14;i++) { 
      if(digitval[onesPlace][i-7]==1)
        secs.children[i].visible=true;
      else
        secs.children[i].visible=false;
    }
  },

  timerDone: function(){
    alert("You ran out of time to find the artifact.");
    //Send game over event to professor screens
    let evt = new Event("game-over-student-timer")
    document.dispatchEvent(evt)
  },

  getTimeRemaining: function(){
    let startDate = new Date();
    startDate = startDate.getTime();
      
    let timeRemaining = parseInt((this.TargetTime - startDate) / 1000);
      
    this.totalTimeRemaining = timeRemaining*1000;
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
        
      this.houra = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
        
      this.minutea = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
       
      this.seconda = parseInt(timeRemaining);
    }
  },

  update: function (oldData) {
    var data = this.data;
    var el = this.el;
   
    if (Object.keys(oldData).length === 0)
      return;

    console.log("update "+ data.timerColor);
    if (data.timerColor !== oldData.timerColor) {
      console.log(" update "+ secs.children[1].isObject3D+" "+ data.timerColor.toString(16).slice(-6) );
      var col= "0x"+data.timerColor.toString(16).slice(-6);
      for(var i=0;i<14;i++) {
        el.object3D.children[0].children[i].children[0].material.color.setHex(col);
      }
    }
  }
});
    