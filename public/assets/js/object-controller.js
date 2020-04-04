'use strict'

AFRAME.registerComponent('object-component', {
    schema:{},
    init : function(){
        const Context_AF = this; //this refers to "this" component

        
        Context_AF.el.addEventListener('collide', function(e){


            if (e.detail.body.el.id == "dropzone"){

                if (e.detail.body.el.getAttribute("data-correct") == Context_AF.el.getAttribute("id")){
                    let corEvent = new Event("correct-item")
                    document.dispatchEvent(corEvent)
                } else {
                    let wroEvent = new Event("wrong-item")
                    document.dispatchEvent(wroEvent)
                }
            }
            if (e.detail.body.el.id == "floor"){
                Context_AF.el.removeAttribute("dynamic-body")
                Context_AF.el.setAttribute("static-body")
            }
        })
        

        //click on the object to pick it up or drop it (if held)
        Context_AF.el.addEventListener('click', function(event){
            
            if (Context_AF.el.getAttribute("data-state") == "picked-up"){
                Context_AF.drop()
            } else {
                Context_AF.pickup()
            }   
        });

        //UX affordance for clicakable objects, change size when hovered over
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(Context_AF.el.object3D.scale.x * 1.1, Context_AF.el.object3D.scale.y * 1.1, Context_AF.el.object3D.scale.z * 1.1)
            
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            //Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
            Context_AF.el.object3D.scale.set(Context_AF.el.object3D.scale.x / 1.1, Context_AF.el.object3D.scale.y / 1.1, Context_AF.el.object3D.scale.z / 1.1)

        });
        
    }, 

    pickup : function(){
        const Context_AF = this

        let camera = document.getElementById("playerCam")

        Context_AF.el.removeAttribute("static-body")
        Context_AF.el.setAttribute("dynamic-body", "")
        Context_AF.el.setAttribute("constraint", "target: #playerCam")
        Context_AF.el.setAttribute("data-state", "picked-up")
        
    },

    drop : function(){
        const Context_AF = this

        Context_AF.el.removeAttribute("constraint")
        Context_AF.el.removeAttribute("data-state")
        
    },

    destroy : function(){
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
})