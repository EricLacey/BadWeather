AFRAME.registerComponent('obj-put-down', {
    schema: {},

    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function() {
            Context_AF.parentUnder();
        });
        Context_AF.el.addEventListener('mouseenter', function() {
            Context_AF.el.object3D.scale.set(0.21, 0.21, 0.21);
        });
        Context_AF.el.addEventListener('mouseleave', function() {
            Context_AF.el.object3D.scale.set(0.2, 0.2, 0.2);
        });
    },
    
    parentUnder : function() {
        document.querySelector('#placedObj').appendChild('#horus');
        this.el.parentNode.removeChild(this.el);
    }
});