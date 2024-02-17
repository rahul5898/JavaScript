// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <!-- Your existing HTML and CSS code here -->

//     <script>
//         // JavaScript for adding navigation highlight on scroll
//         document.addEventListener("DOMContentLoaded", function () {
//             const sections = document.querySelectorAll("section");
//             const navLinks = document.querySelectorAll("nav a");

//             window.addEventListener("scroll", function () {
//                 let current = "";

//                 sections.forEach(section => {
//                     const sectionTop = section.offsetTop;
//                     const sectionHeight = section.clientHeight;

//                     if (pageYOffset >= sectionTop - sectionHeight / 2) {
//                         current = section.getAttribute("id");
//                     }
//                 });

//                 navLinks.forEach(link => {
//                     link.classList.remove("active");

//                     if (link.getAttribute("href").includes(current)) {
//                         link.classList.add("active");
//                     }
//                 });
//             });
//         });
//     </script>
// </head>

// <body>

//     <!-- Your existing HTML code here -->

//     <nav>
//         <ul>
//             <li><a href="#about">About Me</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#experience">Experience</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#education">Education</a></li>
//             <li><a href="#certifications">Certifications</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>
//     </nav>

// </body>

// </html>
