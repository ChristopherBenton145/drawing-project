import { useEffect, useRef } from 'react';
import '../styles/Canvas.scss';

function Canvas() {
    const canvasRef = useRef(null);
    const colorRef = useRef(null);
    const sizeRef = useRef(null);

    function increaseSize(number) {
        const size = sizeRef.current.textContent;
        if (size < 50) {
            sizeRef.current.textContent = Number(size) + number;
        }
    }

    function decreaseSize(number) {
        const size = sizeRef.current.textContent;
        if (size > 5) {
            sizeRef.current.textContent = Number(size) - number;
        }
    }

    function drawCircle(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, sizeRef.current.textContent, 0, Math.PI * 2);
        ctx.fillStyle = colorRef.current.value;
        ctx.fill();
    }
    
    function drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = colorRef.current.value;
        ctx.lineWidth = sizeRef.current.textContent * 2;
        ctx.stroke();
    }

    function clear() {
        const canvas = canvasRef.current;
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let isPressed = false;
        let x = undefined;
        let y = undefined;

        canvas.addEventListener('mousedown', (e) => {
            isPressed = true;
            x = e.offsetX;
            y = e.offsetY;
        });
        
        canvas.addEventListener('mouseup', (e) => {
            isPressed = false;
            x = undefined;
            y = undefined;
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (isPressed) {
                const x2 = e.offsetX;
                const y2 = e.offsetY;
                drawCircle(context, x2, y2);
                drawLine(context, x, y, x2, y2);
                x = x2;
                y = y2;
            }
        });
    }, []);

  return (
    <div className='canvas-div'>
        <canvas id="canvas" width="800" height="600" ref={canvasRef}></canvas>
        <div className="toolbox">
            <button id="decreaseButton" onClick={() => decreaseSize(5)}>Decrease</button>
            <span id="sizeButton" ref={sizeRef}>30</span>
            <button id="increaseButton" onClick={() => increaseSize(5)}>Increase</button>
            <input type="color" id="color" ref={colorRef} />
            <button id="clear" onClick={() => clear()}>Clear</button>
        </div>
    </div>
  );
}

export default Canvas;
