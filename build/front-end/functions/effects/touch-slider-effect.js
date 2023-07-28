export function touchSliderEffect() {
    const rootDiv = document.getElementById('root-div');
    const innerDiv = document.getElementById('inner-div');
    const divTotalWidth = rootDiv.clientWidth;
    let touchStartPoint = 0;
    let innerXStart = 0;
    function update(e) {
        //refresh point
        const touchNewPoint = e.touches[0].clientX;
        const diff = touchNewPoint - touchStartPoint + innerXStart;
        innerDiv.style.left = diff + "px";
    }
    rootDiv.addEventListener('touchstart', e => {
        //eliminamos la transition, así se hace el movimiento con el touchmove
        innerDiv.style.transition = "";
        touchStartPoint = 0;
        innerXStart = innerDiv.offsetLeft;
        touchStartPoint = e.touches[0].clientX;
        rootDiv.addEventListener('touchmove', update);
    });
    window.addEventListener('touchend', () => {
        rootDiv.removeEventListener('touchmove', update);
        const actualInnerOffsetLeft = innerDiv.offsetLeft;
        const rootWidth = rootDiv.clientWidth;
        const innertWidth = innerDiv.getBoundingClientRect().width;
        const actualInnerOffsetRight = rootWidth - innertWidth - actualInnerOffsetLeft;
        //en caso de exceder el Left
        if (actualInnerOffsetLeft > 1) {
            innerDiv.style.transition = "all 0.5s";
            innerDiv.style.left = 0 + "px";
        }
        //en caso de exceder el Right
        else if (actualInnerOffsetRight > 0) {
            innerDiv.style.transition = "all 0.5s";
            innerDiv.style.left = actualInnerOffsetLeft + actualInnerOffsetRight + "px";
        }
    });
}
;
