*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Montserrat',sans-serif;
    background:#F7F3ED;
    color:#fff;
}

.hero{

    height:100vh;

    background:url("images/main.jpg") center center/cover no-repeat;

    position:relative;

    display:flex;

    justify-content:center;

    align-items:center;

    text-align:center;

}

.overlay{

    position:absolute;

    inset:0;

    background:rgba(0,0,0,.35);

    backdrop-filter:blur(1px);

}

.hero-content{

    position:relative;

    z-index:10;

    padding:20px;

    animation:fadeUp 1.8s ease;

}

.invite{

    font-size:20px;

    letter-spacing:3px;

    text-transform:uppercase;

    margin-bottom:25px;

}

h1{

    font-family:'Cormorant Garamond',serif;

    font-size:88px;

    font-weight:500;

    line-height:1.1;

    margin-bottom:15px;

}

h1 span{

    display:block;

    font-size:55px;

    margin:12px 0;

    color:#E8D4B3;

}

.subtitle{

    font-size:28px;

    margin-bottom:60px;

}

.date-box{

    display:flex;

    justify-content:center;

    gap:60px;

    margin-bottom:70px;

}

.date-box h2{

    font-size:42px;

    font-weight:500;

}

.date-box span{

    display:block;

    margin-top:10px;

    font-size:13px;

    letter-spacing:2px;

}

.scroll{

    font-size:14px;

    letter-spacing:3px;

    animation:float 2s infinite;

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(60px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

@keyframes float{

    0%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(10px);

    }

    100%{

        transform:translateY(0);

    }

}

@media(max-width:768px){

h1{

font-size:58px;

}

.subtitle{

font-size:20px;

}

.date-box{

flex-direction:column;

gap:20px;

}

}
