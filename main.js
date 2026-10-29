    
    
    // 메뉴 클릭 기능
    
    function showCard(id){
    
        const cards=document.querySelectorAll(".card");
    
    
        cards.forEach(function(card){
    
            card.classList.remove("active");
    
        });
    
    
        document.getElementById(id).classList.add("active");
    
    }
    
    
    
    
    
    
    // Matrix 배경 효과
    
    const canvas=document.getElementById("matrix");
    
    const ctx=canvas.getContext("2d");
    
    
    const chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const charArray=chars.split("");
    
    const fontSize=16;
    
    
    let columns;
    
    let drops=[];
    
    
    
    function resizeCanvas(){
    
        canvas.width=window.innerWidth;
    
        canvas.height=window.innerHeight;
    
    
        columns=Math.floor(canvas.width/fontSize);
    
    
        drops=[];
    
    
        for(let i=0;i<columns;i++){
    
            drops[i]=1;
    
        }
    
    }
    
    
    
    resizeCanvas();
    
    
    
    window.addEventListener("resize",resizeCanvas);
    
    
    
    
    
    
    function draw(){
    
    
        ctx.fillStyle="rgba(0,0,0,0.05)";
    
    
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );
    
    
    
        ctx.fillStyle="#00ff88";
    
    
        ctx.font=fontSize+"px monospace";
    
    
    
        for(let i=0;i<drops.length;i++){
    
    
            const text =
            charArray[
            Math.floor(Math.random()*charArray.length)
            ];
    
    
    
            ctx.fillText(
                text,
                i*fontSize,
                drops[i]*fontSize
            );
    
    
    
            if(
                drops[i]*fontSize > canvas.height &&
                Math.random()>0.975
            ){
    
                drops[i]=0;
    
            }
    
    
            drops[i]++;
    
        }
    
    
    }
    
    
    
    setInterval(draw,35);
    
    
    