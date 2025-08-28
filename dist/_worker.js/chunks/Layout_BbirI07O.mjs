globalThis.process ??= {};
globalThis.process.env ??= {};
import {
  c as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  e as addAttribute,
  d as renderScript,
  f as createAstro,
  a as renderHead,
  b as renderComponent,
  g as renderSlot,
} from "./astro/server_Dd3KBmvD.mjs";
/* empty css                         */
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Navbar2 = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$Navbar2;
    const {
      companyName = "LumBridge",
      email = "info@example.com",
      phone = "(000) 000-0000",
    } = Astro2.props;
    const activePath = Astro2.url.pathname;
    const isActive = (href) => {
      if (href === "/") return activePath === "/";
      return activePath.startsWith(href);
    };
    return renderTemplate`${maybeRenderHead()}<header class="nb2-header" role="banner" data-astro-cid-hi27ywvd> <!-- Top section --> <div class="nb2-top" data-astro-cid-hi27ywvd> <div class="nb2-top-inner" data-astro-cid-hi27ywvd> <div class="nb2-topcenter" aria-label="Contact details" data-astro-cid-hi27ywvd> <div class="nb2-topitem" data-astro-cid-hi27ywvd> <svg class="nb2-icn" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-hi27ywvd><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" data-astro-cid-hi27ywvd></path></svg> <a class="nb2-toplink"${addAttribute(
      `mailto:${email}`,
      "href"
    )} data-astro-cid-hi27ywvd>${email}</a> </div> <span class="nb2-topsep" aria-hidden="true" data-astro-cid-hi27ywvd></span> <div class="nb2-topitem" data-astro-cid-hi27ywvd> <svg class="nb2-icn" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-hi27ywvd><path fill="currentColor" d="M6.6 10.8c1.5 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.9 3 3.4 3.4 3 3.9 3H7.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.3 1l-2.2 2.2Z" data-astro-cid-hi27ywvd></path></svg> <a class="nb2-toplink"${addAttribute(
      `tel:${phone}`,
      "href"
    )} data-astro-cid-hi27ywvd>${phone}</a> </div> </div> <div class="nb2-topright" data-astro-cid-hi27ywvd> <a href="#contact" class="nb2-btn nb2-btn-gold" data-astro-cid-hi27ywvd>CONTACT US</a> </div> </div> </div> <!-- Middle section: existing Navbar2 menu --> <nav class="navbar-container nb2-middle" data-astro-cid-hi27ywvd> <div class="navbar-content" data-astro-cid-hi27ywvd> <ul class="navbar-menu" data-astro-cid-hi27ywvd> <li class="nav-item" data-astro-cid-hi27ywvd> <a href="/" class="nav-link"${addAttribute(
      isActive("/") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>HOME</a> </li> <li class="nav-item" data-astro-cid-hi27ywvd> <a href="/about" class="nav-link"${addAttribute(
      isActive("/about") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>ABOUT</a> </li> <li class="nav-item" data-astro-cid-hi27ywvd> <a href="/services" class="nav-link"${addAttribute(
      isActive("/services") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>SERVICES</a> </li> <li class="nav-item design-theme-item" data-astro-cid-hi27ywvd> <a href="/design-theme" class="nav-link design-theme-link"${addAttribute(
      isActive("/design-theme") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>
Wolf Construction Ltd
</a> <!-- Hanging icon --> <div class="hanging-icon" data-astro-cid-hi27ywvd> <svg viewBox="0 0 24 24" width="24" height="24" data-astro-cid-hi27ywvd> <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-hi27ywvd></path> </svg> </div> </li> <li class="nav-item" data-astro-cid-hi27ywvd> <a href="/gallery" class="nav-link"${addAttribute(
      isActive("/gallery") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>GALLERY</a> </li> <li class="nav-item" data-astro-cid-hi27ywvd> <a href="/testimonials" class="nav-link"${addAttribute(
      isActive("/testimonials") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>TESTIMONIALS</a> </li> <li class="nav-item" data-astro-cid-hi27ywvd> <a href="/contact" class="nav-link"${addAttribute(
      isActive("/contact") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>CONTACT</a> </li> </ul> <!-- Mobile Menu Button --> <button class="mobile-menu-btn" aria-label="Toggle mobile menu" data-astro-cid-hi27ywvd> <span class="hamburger-line" data-astro-cid-hi27ywvd></span> <span class="hamburger-line" data-astro-cid-hi27ywvd></span> <span class="hamburger-line" data-astro-cid-hi27ywvd></span> </button> </div> <!-- Mobile Menu --> <div class="mobile-menu" data-astro-cid-hi27ywvd> <ul class="mobile-menu-list" data-astro-cid-hi27ywvd> <li data-astro-cid-hi27ywvd><a href="/" class="mobile-nav-link"${addAttribute(
      isActive("/") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>HOME</a></li> <li data-astro-cid-hi27ywvd><a href="/about" class="mobile-nav-link"${addAttribute(
      isActive("/about") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>ABOUT</a></li> <li data-astro-cid-hi27ywvd><a href="/services" class="mobile-nav-link"${addAttribute(
      isActive("/services") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>SERVICES</a></li> <li data-astro-cid-hi27ywvd><a href="/gallery" class="mobile-nav-link"${addAttribute(
      isActive("/gallery") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>GALLERY</a></li> <li data-astro-cid-hi27ywvd><a href="/testimonials" class="mobile-nav-link"${addAttribute(
      isActive("/testimonials") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>TESTIMONIALS</a></li> <li data-astro-cid-hi27ywvd><a href="/contact" class="mobile-nav-link"${addAttribute(
      isActive("/contact") ? "page" : undefined,
      "aria-current"
    )} data-astro-cid-hi27ywvd>CONTACT</a></li> </ul> </div> </nav> <!-- Bottom section with fading underline --> <div class="nb2-bottom" aria-hidden="true" data-astro-cid-hi27ywvd></div> </header> <div class="nb2-spacer" aria-hidden="true" data-astro-cid-hi27ywvd></div>  ${renderScript(
      $$result,
      "C:/Projects/lumbr1dge/demo-website/src/components/HomePageComponents/Navbar2.astro?astro&type=script&index=0&lang.ts"
    )}`;
  },
  "C:/Projects/lumbr1dge/demo-website/src/components/HomePageComponents/Navbar2.astro",
  undefined
);

const $$Footer = createComponent(
  ($$result, $$props, $$slots) => {
    const currentYear = /* @__PURE__ */ new Date().getFullYear();
    const businessHours = [
      { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Emergency Only" },
    ];
    const links = [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/services", text: "Services" },
      { href: "/gallery", text: "Gallery" },
      { href: "/testimonials", text: "Testimonials" },
    ];
    const services = [
      { href: "/services#residential", text: "Residential Construction" },
      { href: "/services#commercial", text: "Commercial Building" },
      { href: "/services#renovations", text: "Renovations & Remodeling" },
      { href: "/services#custom", text: "Custom Design & Build" },
    ];
    const contactInfo = {
      phone: "0800 BUILD-NZ",
      email: "info@buildprojects.co.nz",
      address: "123 Construction Avenue, Auckland 1010, New Zealand",
    };
    const certifications = [
      "Licensed Building Practitioner (LBP)",
      "Fully Insured & Bonded",
      "NZCB Member",
      "Health & Safety Certified",
    ];
    return renderTemplate`${maybeRenderHead()}<footer class="footer-container" data-astro-cid-yfsnbecq> <!-- Decorative Top Border --> <div class="footer-top-border" data-astro-cid-yfsnbecq></div> <div class="footer-main" data-astro-cid-yfsnbecq> <!-- Column 1: Company Info --> <div class="footer-column company-column" data-astro-cid-yfsnbecq> <div class="company-info" data-astro-cid-yfsnbecq> <div class="logo-section" data-astro-cid-yfsnbecq> <div class="logo-container" data-astro-cid-yfsnbecq> <svg class="logo-icon" viewBox="0 0 24 24" width="48" height="48" data-astro-cid-yfsnbecq> <path fill="currentColor" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-astro-cid-yfsnbecq></path> </svg> </div> <div class="business-name-container" data-astro-cid-yfsnbecq> <h2 class="business-name" data-astro-cid-yfsnbecq>Wolf Construction Ltd</h2> <div class="business-subtitle" data-astro-cid-yfsnbecq>Building Excellence Since 2016</div> </div> </div> <p class="company-description" data-astro-cid-yfsnbecq>
Auckland's premier construction company since 2016. We deliver exceptional building solutions from residential homes to commercial spaces, backed by quality craftsmanship and professional service.
</p> <div class="certifications" data-astro-cid-yfsnbecq> ${certifications.map(
      (cert) =>
        renderTemplate`<div class="cert-item" data-astro-cid-yfsnbecq> <div class="cert-icon-container" data-astro-cid-yfsnbecq> <svg class="cert-icon" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-yfsnbecq> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-yfsnbecq></path> </svg> </div> <span class="cert-text" data-astro-cid-yfsnbecq>${cert}</span> </div>`
    )} </div> </div> </div> <!-- Column 2: Links & Services --> <div class="footer-column links-column" data-astro-cid-yfsnbecq> <div class="quick-links" data-astro-cid-yfsnbecq> <h3 class="section-title" data-astro-cid-yfsnbecq> <span class="title-icon" data-astro-cid-yfsnbecq>⚡</span>
Quick Links
</h3> <ul class="links-list" data-astro-cid-yfsnbecq> ${links.map(
      (link) =>
        renderTemplate`<li class="link-item" data-astro-cid-yfsnbecq> <a${addAttribute(
          link.href,
          "href"
        )} class="footer-link" data-astro-cid-yfsnbecq> <span class="link-arrow" data-astro-cid-yfsnbecq>→</span> ${
          link.text
        } </a> </li>`
    )} </ul> </div> <div class="services-links" data-astro-cid-yfsnbecq> <h3 class="section-title" data-astro-cid-yfsnbecq> <span class="title-icon" data-astro-cid-yfsnbecq>🏗️</span>
Our Services
</h3> <ul class="links-list" data-astro-cid-yfsnbecq> ${services.map(
      (service) =>
        renderTemplate`<li class="link-item" data-astro-cid-yfsnbecq> <a${addAttribute(
          service.href,
          "href"
        )} class="footer-link" data-astro-cid-yfsnbecq> <span class="link-arrow" data-astro-cid-yfsnbecq>→</span> ${
          service.text
        } </a> </li>`
    )} </ul> </div> </div> <!-- Column 3: Contact & Hours --> <div class="footer-column contact-column" data-astro-cid-yfsnbecq> <div class="contact-section" data-astro-cid-yfsnbecq> <h3 class="section-title" data-astro-cid-yfsnbecq> <span class="title-icon" data-astro-cid-yfsnbecq>📞</span>
Contact Us
</h3> <div class="contact-info" data-astro-cid-yfsnbecq> <div class="contact-item" data-astro-cid-yfsnbecq> <div class="contact-icon-container" data-astro-cid-yfsnbecq> <svg class="contact-icon" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-yfsnbecq> <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" data-astro-cid-yfsnbecq></path> </svg> </div> <a href="tel:0800BUILDNZ" class="contact-link" data-astro-cid-yfsnbecq>${
      contactInfo.phone
    }</a> </div> <div class="contact-item" data-astro-cid-yfsnbecq> <div class="contact-icon-container" data-astro-cid-yfsnbecq> <svg class="contact-icon" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-yfsnbecq> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-astro-cid-yfsnbecq></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-astro-cid-yfsnbecq></path> </svg> </div> <a href="mailto:info@buildprojects.co.nz" class="contact-link" data-astro-cid-yfsnbecq>${
      contactInfo.email
    }</a> </div> <div class="contact-item" data-astro-cid-yfsnbecq> <div class="contact-icon-container" data-astro-cid-yfsnbecq> <svg class="contact-icon" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-yfsnbecq> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-yfsnbecq></path> </svg> </div> <span class="contact-text" data-astro-cid-yfsnbecq>${
      contactInfo.address
    }</span> </div> </div> <div class="business-hours" data-astro-cid-yfsnbecq> <h4 class="hours-title" data-astro-cid-yfsnbecq> <span class="hours-icon" data-astro-cid-yfsnbecq>🕒</span>
Business Hours
</h4> <ul class="hours-list" data-astro-cid-yfsnbecq> ${businessHours.map(
      ({ day, hours }) =>
        renderTemplate`<li class="hours-item" data-astro-cid-yfsnbecq> <span class="day" data-astro-cid-yfsnbecq>${day}</span> <span class="hours" data-astro-cid-yfsnbecq>${hours}</span> </li>`
    )} </ul> </div> </div> </div> </div> <!-- Footer Bottom --> <div class="footer-bottom" data-astro-cid-yfsnbecq> <div class="footer-bottom-content" data-astro-cid-yfsnbecq> <div class="legal-links" data-astro-cid-yfsnbecq> <a href="/terms" class="legal-link" data-astro-cid-yfsnbecq>Terms & Conditions</a> <span class="separator" data-astro-cid-yfsnbecq>•</span> <a href="/privacy" class="legal-link" data-astro-cid-yfsnbecq>Privacy Policy</a> <span class="separator" data-astro-cid-yfsnbecq>•</span> <a href="/health-safety" class="legal-link" data-astro-cid-yfsnbecq>Health & Safety</a> </div> <div class="copyright" data-astro-cid-yfsnbecq> <div class="copyright-content" data-astro-cid-yfsnbecq> <span class="copyright-icon" data-astro-cid-yfsnbecq>©</span> ${currentYear} Wolf Construction Ltd. All rights reserved.
<span class="lbp-badge" data-astro-cid-yfsnbecq>Licensed Building Practitioner</span> </div> </div> </div> </div> </footer> `;
  },
  "C:/Projects/lumbr1dge/demo-website/src/components/HomePageComponents/Footer.astro",
  undefined
);

const $$Astro = createAstro();
const $$Layout = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Layout;
    const { title } = Astro2.props;
    return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(
      Astro2.generator,
      "content"
    )}><title>${title}</title>${renderHead()}</head> <body class="bg-white min-h-screen"> ${renderComponent(
      $$result,
      "Navbar2",
      $$Navbar2,
      {
        companyName: "Wolf Construction Ltd",
        email: "info@buildprojects.co.nz",
        phone: "0800 BUILD-NZ",
      }
    )} <main> ${renderSlot(
      $$result,
      $$slots["default"]
    )} </main> ${renderComponent(
      $$result,
      "Footer",
      $$Footer,
      {}
    )} ${renderScript(
      $$result,
      "C:/Projects/lumbr1dge/demo-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"
    )} </body> </html> `;
  },
  "C:/Projects/lumbr1dge/demo-website/src/layouts/Layout.astro",
  undefined
);

export { $$Layout as $, $$Navbar2 as a, $$Footer as b };
