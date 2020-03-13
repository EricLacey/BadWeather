AFRAME.registerComponent('obj-pick-up', {
    schema: {},

    init : function() {
        console.log('object grabbed');
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function() {
            Context_AF.parentUnder();
        });
        Context_AF.el.addEventListener('mouseenter', function() {
            Context_AF.el.object3D.scale.set(0.16, 0.16, 0.16);
        });
        Context_AF.el.addEventListener('mouseleave', function() {
            Context_AF.el.object3D.scale.set(0.15, 0.15, 0.15);
        });
    },
    
    parentUnder : function() {
        document.querySelector('#grabbedObj').appendChild(this.el.cloneNode());
        this.el.parentNode.removeChild(this.el);
    }
});

