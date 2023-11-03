document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
`);

class Index{
    head1(){
        document.write(`
        
            <header>
                <ul><input type="text" class="search-input" placeholder="Search.....">
                <a class="search-button" href="#"><i class="fa-solid fa-magnifying-glass"></i></a></ul>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">travel</a></li>
                    <li><a href="#">edit</a></li>
                    <li><a href="#">relax</a></li>
                    <li><a href="#">videos</a></li>
                </ul>
                <ul class="gap">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></a></i></li>
                    
                </ul
            </header>
            
        
        `);
        
        }
        sec(){
            document.write(`
            <div class="para">
                <p ><br>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br>

                Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>

                </div>
            `);
        }
        need(){
           document.write(`
           <nav>
                <ul class="immg"><li><a href="#"><button class="my-button">Travel</button></a></li></ul>
                <ul class="immg2"><li><a href="#"><button class="my-button">Eat</button></a></li></ul>
                <ul class="immg3"><li><a href="#"><button class="my-button">Relax</button></a></li></ul>
           </nav>
           
            <div class="feature">
                <div  class="partner first"><p>As featured in</p></div>
                <div class="partner"><p class="p2"><b>travel</b> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     blog</p></div>
                <div class="partner"><p class="p3"><i class="fa-solid fa-plane"></i><br>PLANE<b>TOUR</b></div>
                <div class="partner"><p class="p4"><b>WORLD <br>TRAVEL</b></p></div>
                <div class="partner"><p class="p5">&nbsp;&nbsp;<i class="fa-solid fa-cloud"></i><br>skycloud</p></div>
            </div>

           `);
        }
        post(){
           
            document.write(`
            
                <div class="post">
                    <div class="image"></div>
                    <div class="profile">
                        <div class="user">
                            <div class="photo"><i class="fa-solid fa-user"></i></div>
                            <div class="name">
                                Admin&nbsp;<i class="fa-solid fa-crown"></i>
                                <br>Mar&nbsp25&nbsp;&nbsp1&nbsp;min&nbsp;ago
                            </div>
                        </div>
                        <div class="ho">
                            <a href="#">
                                <div class="caption">
                                    <div><p class="cp1">The girl from ipanema</p></div>
                                    <div><p class="cp2">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...</p></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            <div class="like">
                        <div class="cmt"><i class="fa-solid fa-eye"></i>&nbsp&nbsp1,475&nbsp&nbsp&nbsp<i class="fa-regular fa-comment"></i>&nbsp&nbsp0</div>
                        <div class="cmt ">0&nbsp&nbsp<i class=" i1 fa-regular fa-heart"></i></div>
            </div>
            <div class="socialbg">
                <a href="#"><i class="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;facebook</a>
                <a href="#"><i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;instagram</a>
                <a href="#"><i class="fa-brands fa-pinterest-p"></i>&nbsp;&nbsp;pinterest</a>
                <a href="#"><i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;twitter</a>
            </div>


            <footer></footer>
                
            `);
        }
        
        
           
        
       
    }
    
/*<div class="rew">
                            <div><i class="fa-solid fa-eye"></i>&nbsp&nbsp1,475&nbsp&nbsp&nbsp<i class="fa-regular fa-comment"></i>&nbsp&nbsp0<div>
                         </div>
                <div class="cmt">
                    <div>0&nbsp&nbsp<i class="fa-regular fa-heart"></i></div>
                 </div>    */