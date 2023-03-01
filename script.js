// start navbar
const createNavbar = () =>{
    let nav = document.querySelector('.navigationBar');
    nav.innerHTML = `<div class="navbar">
                        <div class="logo"><img src="./images/logo.svg" alt=""></div>
                        <ul class="links">
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="" class="action_btn">CONTACT</a></li>
                        </ul>
                        
                        <div class="toggle_btn">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                     </div>
                    <div class="dropdown_menu">
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="" class="action_btn">CONTACT</a></li>
                    </div>
                    `;

}
createNavbar();
// end navbar

const createContainer_1 = () =>{
    let container_1 = document.querySelector('.container-1');
    container_1.innerHTML = `<div class="brand-discreption">
                                <h1 class="brand-title">Transform your brand</h1>
                                <p class="brand-para">
                                    We are a full-service creative agency specializing in helping
                                    brands grow fast. Engage your clients through compelling visuals
                                    that do most of the marketing for you.
                                </p>
                                <a href="#" class="learn-more">LEARN MORE</a>
                            </div>
                            <div class="brand-image">
                                <img src="./images/desktop/image-transform.jpg" alt="">
                            </div>
                            `;
}
createContainer_1();


const createContainer_2 = () =>{
    let container_2 = document.querySelector('.container-2');
    container_2.innerHTML = `<div class="brand-image">
                                <img src="./images/desktop/image-stand-out.jpg" alt="">
                            </div>
                            <div class="brand-discreption">
                                <h1 class="brand-title">Stand out to the right audience</h1>
                                <p class="brand-para">
                                    Using a collaborative formula of designers, researchers,
                                    photographers, videographs, and copywriters, we'll
                                    build and extend your brand in digital places.
                                </p>
                                <a href="#" class="learn-more">LEARN MORE</a>
                            </div>
                            `;
}
createContainer_2();

const createContainer_3 = () =>{
    let container_3 = document.querySelector('.container-3');
    container_3.innerHTML = `<div class="image-graphic-design">
                                <img src="./images/desktop/image-graphic-design.jpg" alt="">
                                <div class="details-1">
                                    <h2>Graphic Design</h2>
                                    <p>
                                        Great Design makes you memorable. We deliver </br>
                                        artwork that underscores your brand message</br>
                                        and captures potential clients' attention.
                                    </p>
                                </div>
                             </div>
                            <div class="image-photography">
                                <img src="./images/desktop/image-photography.jpg" alt="">
                                <div class="details-2">
                                    <h2>Photography</h2>
                                    <p>
                                    Increase your creditiblity by getting the most </br>
                                    stunning, high-qaulity photos that improve your </br>
                                    business image.
                                    </p>
                                </div>
                            </div>
                            `;
}
createContainer_3();

const createContainer_4 = () =>{
    let container_4 = document.querySelector('.container-4');
    container_4.innerHTML = `<div class="title">
                                <h1>CLIENT TESTIMONIALS</h1>
                            </div>
                            <div class="client-testimonials">
                                <div class="client-1">
                                    <img src="./images/image-emily.jpg" alt="">
                                    <p>
                                        We put our trust in Sunnyside and they</br>
                                        delivered, making sure our needs were met</br>
                                        and deadlines were always hit.
                                    </p>
                                    <h3>Emily R.</h3>
                                    <h6>Marketing Director</h6>

                            </div>
                            <div class="client-1">
                                <img src="./images/image-thomas.jpg" alt="">
                                <p>
                                    Sunnyside's enthusiasm coupled with their</br>
                                    keen interest in our brand's success made it</br>
                                    a satisfying and enjoyable experience.
                                </p>
                                <h3>Thomas S.</h3>
                                <h6>Chef operating Officer</h6>
                            </div>
                            <div class="client-1">
                                <img src="./images/image-jennie.jpg" alt="">
                                <p>
                                    Incredible end result! Our sales increased </br>
                                    over 400% when we worked with Sunnyside.</br>
                                    Highly recommended!
                                </p>
                                <h3>Jennie F.</h3>
                                <h6>Business Owner</h6>
                            </div>
                            </div>

                            `;
}
createContainer_4();

const createContainer_5 = () =>{
    let container_5 = document.querySelector('.container-5');
    container_5.innerHTML = `<div class="image-1">
                                <img src="./images/desktop/image-gallery-milkbottles.jpg" alt="">
                            </div>
                            <div class="image-2">
                                <img src="./images/desktop/image-gallery-orange.jpg" alt="">
                            </div>
                            <div class="image-3">
                                <img src="./images/desktop/image-gallery-cone.jpg" alt="">
                            </div>
                            <div class="image-4">
                                <img src="./images/desktop/image-gallery-sugarcubes.jpg" alt="">
                            </div>
                            `;
}
createContainer_5();

const createFooter = () =>{
    let footer = document.querySelector('.footer-details');
    footer.innerHTML = `<h2>sunnyside</h2>
                        <div class="quicklinks">
                            <a href="">About</a>
                            <a href="">Services</a>
                            <a href="">Projects</a>
                        </div>
                        <div class="social-media">
                            <img src="./images/icon-facebook.svg" alt="">
                            <img src="./images/icon-instagram.svg" alt="">
                            <img src="./images/icon-twitter.svg" alt="">
                            <img src="./images/icon-pinterest.svg" alt="">
                        </div>
                        <p>&copy 2023 </p>
                        <p>Prince Sthembiso Ngwenyama</p>
                       `;
}
createFooter();


// mobile menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen= dropDownMenu.classList.contains('open')

    toggleBtnIcon .classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}