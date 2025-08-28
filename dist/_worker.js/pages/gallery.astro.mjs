globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css                                 */
import {
  c as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  d as renderScript,
  b as renderComponent,
} from "../chunks/astro/server_Dd3KBmvD.mjs";
import { $ as $$Layout } from "../chunks/Layout_BbirI07O.mjs";
/* empty css                                   */
export { renderers } from "../renderers.mjs";

const $$Gallery$1 = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`<!-- Hero Section -->${maybeRenderHead()}<section class="hero-section" data-astro-cid-uizqqcmr> <div class="hero-background" data-astro-cid-uizqqcmr> <div class="hero-overlay" data-astro-cid-uizqqcmr></div> </div> <div class="hero-content" data-astro-cid-uizqqcmr> <div class="container" data-astro-cid-uizqqcmr> <div class="hero-text" data-astro-cid-uizqqcmr> <span class="hero-badge" data-astro-cid-uizqqcmr>Project Portfolio</span> <h1 class="hero-title" data-astro-cid-uizqqcmr>Our Work Speaks for Itself</h1> <p class="hero-subtitle" data-astro-cid-uizqqcmr>Here's a showcase of the projects we've proudly delivered across Auckland. From residential homes to commercial builds, every project reflects our commitment to quality, detail, and trust.</p> </div> </div> </div> </section> <!-- Gallery Grid Section --> <section class="gallery-section" data-astro-cid-uizqqcmr> <div class="container" data-astro-cid-uizqqcmr> <div class="gallery-grid" data-astro-cid-uizqqcmr> <!-- Row 1 --> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us1.png', 'Modern Residential Construction', 'Contemporary home design')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us1.png" alt="Modern Residential Construction" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Modern Residential</h3> <p data-astro-cid-uizqqcmr>Contemporary home design</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us2.jpg', 'Commercial Construction Excellence', 'Professional workspace')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us2.jpg" alt="Commercial Construction Excellence" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Commercial Excellence</h3> <p data-astro-cid-uizqqcmr>Professional workspace</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us3.jpg', 'Quality Craftsmanship', 'Attention to detail')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us3.jpg" alt="Quality Craftsmanship" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Quality Craftsmanship</h3> <p data-astro-cid-uizqqcmr>Attention to detail</p> </div> </div> </div> <!-- Row 2 --> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us4.jpg', 'Renovation Project', 'Transformation complete')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us4.jpg" alt="Renovation Project" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Renovation Project</h3> <p data-astro-cid-uizqqcmr>Transformation complete</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Founder.jpg', 'Leadership Excellence', 'Experienced management')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Founder.jpg" alt="Leadership Excellence" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Leadership Excellence</h3> <p data-astro-cid-uizqqcmr>Experienced management</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Background.jpg', 'Infrastructure Work', 'Foundation excellence')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Background.jpg" alt="Infrastructure Work" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Infrastructure Work</h3> <p data-astro-cid-uizqqcmr>Foundation excellence</p> </div> </div> </div> <!-- Row 3 --> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Background1.jpg', 'Custom Design Solutions', 'Unique solutions')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Background1.jpg" alt="Custom Design Solutions" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Custom Design</h3> <p data-astro-cid-uizqqcmr>Unique solutions</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Background2.jpg', 'Project Management', 'Efficient delivery')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Background2.jpg" alt="Project Management" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Project Management</h3> <p data-astro-cid-uizqqcmr>Efficient delivery</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AbotuPage-CherryBlossom.jpg', 'Landscape Integration', 'Natural harmony')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AbotuPage-CherryBlossom.jpg" alt="Landscape Integration" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Landscape Integration</h3> <p data-astro-cid-uizqqcmr>Natural harmony</p> </div> </div> </div> <!-- Row 4 --> <div class="gallery-item" onclick="openModal('/AboutPage/AbotuPage-CherryBlossom1.jpg', 'Interior Finishing', 'Perfect details')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AbotuPage-CherryBlossom1.jpg" alt="Interior Finishing" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Interior Finishing</h3> <p data-astro-cid-uizqqcmr>Perfect details</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AbotuPage-CherryBlossom2.jpg', 'Exterior Design', 'Architectural beauty')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AbotuPage-CherryBlossom2.jpg" alt="Exterior Design" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Exterior Design</h3> <p data-astro-cid-uizqqcmr>Architectural beauty</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AbotuPage-CherryBlossom3.jpg', 'Final Project Completion', 'Project completion')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AbotuPage-CherryBlossom3.jpg" alt="Final Project Completion" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Final Touches</h3> <p data-astro-cid-uizqqcmr>Project completion</p> </div> </div> </div> <!-- Row 5 --> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-CardBackground.jpg', 'Premium Construction Materials', 'Quality construction')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-CardBackground.jpg" alt="Premium Construction Materials" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Premium Materials</h3> <p data-astro-cid-uizqqcmr>Quality construction</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Handshake.jpg', 'Client Partnership', 'Trust & collaboration')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Handshake.jpg" alt="Client Partnership" class="gallery-image" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Client Partnership</h3> <p data-astro-cid-uizqqcmr>Trust & collaboration</p> </div> </div> <!-- Additional Images to Fill Empty Spaces --> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us1.png', 'Residential Excellence', 'Modern living spaces')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us1.png" alt="Residential Excellence" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Residential Excellence</h3> <p data-astro-cid-uizqqcmr>Modern living spaces</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us2.jpg', 'Commercial Development', 'Business solutions')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us2.jpg" alt="Commercial Development" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Commercial Development</h3> <p data-astro-cid-uizqqcmr>Business solutions</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Background.jpg', 'Foundation Excellence', 'Solid groundwork')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Background.jpg" alt="Foundation Excellence" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Foundation Excellence</h3> <p data-astro-cid-uizqqcmr>Solid groundwork</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AbotuPage-CherryBlossom1.jpg', 'Detailed Craftsmanship', 'Precision work')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AbotuPage-CherryBlossom1.jpg" alt="Detailed Craftsmanship" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Detailed Craftsmanship</h3> <p data-astro-cid-uizqqcmr>Precision work</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutPage/AboutPage-Background1.jpg', 'Innovative Design', 'Creative solutions')" data-astro-cid-uizqqcmr> <img src="/AboutPage/AboutPage-Background1.jpg" alt="Innovative Design" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Innovative Design</h3> <p data-astro-cid-uizqqcmr>Creative solutions</p> </div> </div> </div> <div class="gallery-item" onclick="openModal('/AboutUs/About-Us3.jpg', 'Quality Assurance', 'Standards excellence')" data-astro-cid-uizqqcmr> <img src="/AboutUs/About-Us3.jpg" alt="Quality Assurance" class="gallery-image" data-astro-cid-uizqqcmr> <div class="image-overlay" data-astro-cid-uizqqcmr> <div class="overlay-content" data-astro-cid-uizqqcmr> <h3 data-astro-cid-uizqqcmr>Quality Assurance</h3> <p data-astro-cid-uizqqcmr>Standards excellence</p> </div> </div> </div> </div> </div> </section> <!-- Image Modal --> <div id="imageModal" class="modal" onclick="closeModal()" data-astro-cid-uizqqcmr> <div class="modal-content" onclick="event.stopPropagation()" data-astro-cid-uizqqcmr> <button class="modal-close" onclick="closeModal()" data-astro-cid-uizqqcmr>&times;</button> <img id="modalImage" src="" alt="" class="modal-image" data-astro-cid-uizqqcmr> <div class="modal-info" data-astro-cid-uizqqcmr> <h3 id="modalTitle" data-astro-cid-uizqqcmr></h3> <p id="modalDescription" data-astro-cid-uizqqcmr></p> </div> </div> </div>  ${renderScript(
      $$result,
      "C:/Projects/lumbr1dge/demo-website/src/components/WebPages/Gallery.astro?astro&type=script&index=0&lang.ts"
    )}`;
  },
  "C:/Projects/lumbr1dge/demo-website/src/components/WebPages/Gallery.astro",
  undefined
);

const $$Gallery = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent(
      $$result,
      "Layout",
      $$Layout,
      {
        title:
          "Gallery - Wolf Construction Ltd | Construction & Building Services Auckland",
      },
      {
        default: ($$result2) =>
          renderTemplate` ${renderComponent(
            $$result2,
            "GalleryPage",
            $$Gallery$1,
            {}
          )} `,
      }
    )}`;
  },
  "C:/Projects/lumbr1dge/demo-website/src/pages/gallery.astro",
  undefined
);

const $$file = "C:/Projects/lumbr1dge/demo-website/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Gallery,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const page = () => _page;

export { page };
