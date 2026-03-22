import "./index.css";
import { animate, scroll, inView } from "motion";
import { 
  createIcons, 
  UserPlus, 
  Wallet, 
  ShoppingBag, 
  ArrowRight, 
  CircleUser,
  Menu,
  X
} from "lucide";

// Initialize Lucide icons
const initIcons = () => {
  createIcons({
    icons: {
      UserPlus,
      Wallet,
      ShoppingBag,
      ArrowRight,
      CircleUser,
      Menu,
      X
    }
  });
};

const app = document.getElementById('app');

const render = () => {
  app.innerHTML = `
    <div class="min-h-screen bg-[#131313] text-[#e5e2e1] selection:bg-[#bfcd8f] selection:text-[#171e00]">
      <!-- Navbar -->
      <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-[#131313]/80 backdrop-blur-md border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div class="text-2xl font-black tracking-tighter uppercase">
            INDICA
          </div>
          
          <div class="hidden md:flex items-center space-x-12">
            <a href="#" class="text-[#bfcd8f] font-bold border-b-2 border-[#bfcd8f] pb-1">Home</a>
            <a href="#" class="text-[#c7c7b9] hover:text-white transition-colors">Membership</a>
            <a href="#" class="text-[#c7c7b9] hover:text-white transition-colors">Shop</a>
            <a href="#" class="text-[#c7c7b9] hover:text-white transition-colors">Wallet</a>
          </div>

          <div class="flex items-center space-x-6">
            <span class="hidden sm:block text-[10px] tracking-[0.2em] font-bold text-[#bfcd8f]">
              MEMBER STATUS: VERIFIED
            </span>
            <i data-lucide="circle-user" class="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"></i>
            <button id="menu-toggle" class="md:hidden">
              <i data-lucide="menu" id="menu-icon-open"></i>
              <i data-lucide="x" id="menu-icon-close" class="hidden"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-[#131313] border-b border-white/5 px-6 py-8 space-y-6">
          <a href="#" class="block text-xl font-bold text-[#bfcd8f]">Home</a>
          <a href="#" class="block text-xl font-bold text-[#c7c7b9]">Membership</a>
          <a href="#" class="block text-xl font-bold text-[#c7c7b9]">Shop</a>
          <a href="#" class="block text-xl font-bold text-[#c7c7b9]">Wallet</a>
        </div>
      </nav>

      <main>
        <!-- Hero Section -->
        <section id="hero" class="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
          <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=2070&auto=format&fit=crop" 
              alt="Cannabis Background" 
              class="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>

          <div class="relative z-20 max-w-4xl">
            <span id="hero-sub" class="uppercase tracking-[0.3em] text-[#bfcd8f] mb-6 block font-semibold text-sm opacity-0">
              The Velvet Sanctuary
            </span>
            
            <h1 id="hero-title" class="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] opacity-0">
              Private <br/>
              Cannabis <br/>
              <span class="text-glow text-[#bfcd8f]">Access.</span> Elevated.
            </h1>

            <p id="hero-desc" class="text-[#c7c7b9] text-xl mb-12 max-w-xl leading-relaxed font-light opacity-0">
              A curated ecosystem for the modern enthusiast. Secure, discreet, and exclusively Indica.
            </p>

            <div id="hero-btns" class="flex flex-wrap gap-6 opacity-0">
              <button class="pill-gradient px-10 py-5 rounded-full text-[#171e00] font-bold tracking-tight hover:scale-105 transition-transform duration-300 shadow-2xl">
                Join INDICA
              </button>
              <button class="px-10 py-5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300">
                View Memberships
              </button>
            </div>
          </div>

          <div class="absolute bottom-20 right-12 hidden lg:block text-right">
            <p class="text-[10px] uppercase tracking-[0.2em] text-[#919185] mb-2">Curated Strain of the Month</p>
            <p class="text-xl font-bold tracking-tighter">MIDNIGHT VELVET — 28% THC</p>
          </div>
        </section>

        <!-- How It Works Section -->
        <section class="py-32 px-6 md:px-12 bg-[#1c1b1b]">
          <div class="max-w-7xl mx-auto">
            <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <div class="max-w-xl">
                <span class="text-[#bfcd8f] text-xs font-black tracking-[0.4em] uppercase mb-4 block">The Process</span>
                <h2 class="text-5xl font-bold tracking-tighter leading-tight">How It Works</h2>
              </div>
              <div class="h-px bg-white/10 flex-grow mb-4 mx-12 hidden md:block"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div class="step-card flex flex-col space-y-8 group opacity-0">
                <div class="w-16 h-16 rounded-full bg-[#201f1f] flex items-center justify-center border border-white/5 group-hover:bg-[#3a4515] transition-colors duration-500">
                  <i data-lucide="user-plus" class="w-8 h-8 text-[#bfcd8f]"></i>
                </div>
                <div class="space-y-4">
                  <h3 class="text-2xl font-bold tracking-tight">Join</h3>
                  <p class="text-[#c7c7b9] leading-relaxed font-light">Complete our discreet verification process to access the exclusive sanctuary and community benefits.</p>
                </div>
              </div>
              <div class="step-card flex flex-col space-y-8 group opacity-0">
                <div class="w-16 h-16 rounded-full bg-[#201f1f] flex items-center justify-center border border-white/5 group-hover:bg-[#3a4515] transition-colors duration-500">
                  <i data-lucide="wallet" class="w-8 h-8 text-[#bfcd8f]"></i>
                </div>
                <div class="space-y-4">
                  <h3 class="text-2xl font-bold tracking-tight">Receive Allowance</h3>
                  <p class="text-[#c7c7b9] leading-relaxed font-light">Monthly token credits tailored to your membership tier, ensuring consistent access to premium selections.</p>
                </div>
              </div>
              <div class="step-card flex flex-col space-y-8 group opacity-0">
                <div class="w-16 h-16 rounded-full bg-[#201f1f] flex items-center justify-center border border-white/5 group-hover:bg-[#3a4515] transition-colors duration-500">
                  <i data-lucide="shopping-bag" class="w-8 h-8 text-[#bfcd8f]"></i>
                </div>
                <div class="space-y-4">
                  <h3 class="text-2xl font-bold tracking-tight">Order Products</h3>
                  <p class="text-[#c7c7b9] leading-relaxed font-light">Browse The Vault and redeem your credits for the world's most refined Indica cultivars and concentrates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Vault Section -->
        <section class="py-32 px-6 md:px-12 bg-[#131313]">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <h2 class="text-6xl font-black tracking-tighter">The Vault</h2>
              <a href="#" class="text-[#bfcd8f] flex items-center gap-2 font-bold tracking-tight hover:gap-4 transition-all duration-300">
                Explore Full Collection <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </a>
            </div>

            <div class="grid grid-cols-12 gap-8">
              <div id="vault-main" class="col-span-12 md:col-span-8 group relative overflow-hidden rounded-sm bg-[#2a2a2a] h-[600px] opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1536633101327-61565ee6327b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Master Kush" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div class="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-[#131313] to-transparent">
                  <span class="text-xs font-black tracking-[0.4em] text-[#bfcd8f] uppercase mb-2 block">Premium Flower</span>
                  <h3 class="text-4xl font-bold tracking-tighter mb-4">Master Kush Reserve</h3>
                  <p class="text-[#c7c7b9] max-w-md font-light mb-6">A legendary heavy-hitter curated for profound relaxation and deep restoration.</p>
                  <button class="px-8 py-3 bg-[#131313] text-white border border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Request Access
                  </button>
                </div>
              </div>

              <div class="col-span-12 md:col-span-4 grid grid-rows-2 gap-8">
                <div class="vault-side group relative overflow-hidden rounded-sm bg-[#2a2a2a] h-full min-h-[284px] opacity-0">
                  <img 
                    src="https://images.unsplash.com/photo-1563200022-24af25851722?q=80&w=1974&auto=format&fit=crop" 
                    alt="Oils" 
                    class="w-full h-full object-cover grayscale brightness-40 group-hover:scale-110 transition-transform duration-[2000ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div class="absolute inset-0 p-8 flex flex-col justify-end">
                    <h4 class="text-xl font-bold tracking-tight">Curation 01: Oils</h4>
                    <p class="text-sm text-[#c7c7b9]">Solventless extractions.</p>
                  </div>
                </div>

                <div class="vault-side group relative overflow-hidden rounded-sm bg-[#2a2a2a] h-full min-h-[284px] opacity-0">
                  <img 
                    src="https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop" 
                    alt="Hardware" 
                    class="w-full h-full object-cover grayscale brightness-40 group-hover:scale-110 transition-transform duration-[2000ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div class="absolute inset-0 p-8 flex flex-col justify-end">
                    <h4 class="text-xl font-bold tracking-tight">Curation 02: Hardware</h4>
                    <p class="text-sm text-[#c7c7b9]">Hand-blown artisanal glass.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-40 px-6 md:px-12 bg-[#353534]">
          <div class="max-w-5xl mx-auto text-center">
            <h2 id="cta-title" class="text-5xl md:text-7xl font-black tracking-tighter mb-12 opacity-0">
              Elevate your evening.
            </h2>
            <div class="glass-overlay p-1 rounded-full inline-flex flex-col md:flex-row gap-2 w-full max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="YOUR EMAIL FOR THE GUESTLIST" 
                class="bg-transparent border-none focus:ring-0 px-8 py-4 flex-grow text-sm font-bold tracking-widest placeholder:text-[#46483d] text-white"
              />
              <button class="pill-gradient px-12 py-4 rounded-full text-[#171e00] font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="bg-[#131313] border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="text-white font-bold text-xl tracking-tighter uppercase">INDICA</div>
          
          <div class="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.1em] font-bold">
            <a href="#" class="text-[#c7c7b9] hover:text-[#bfcd8f] transition-colors">Manifesto</a>
            <a href="#" class="text-[#c7c7b9] hover:text-[#bfcd8f] transition-colors">Curation</a>
            <a href="#" class="text-[#c7c7b9] hover:text-[#bfcd8f] transition-colors">Locations</a>
            <a href="#" class="text-[#c7c7b9] hover:text-[#bfcd8f] transition-colors">Contact</a>
            <a href="#" class="text-[#c7c7b9] hover:text-[#bfcd8f] transition-colors">Privacy</a>
            <a href="#" class="text-[#c7c7b9] hover:text-[#bfcd8f] transition-colors">Terms</a>
          </div>

          <div class="text-[10px] uppercase tracking-[0.1em] text-[#c7c7b9]">
            © 2024 THE VELVET SANCTUARY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  `;

  initIcons();
  setupInteractions();
  setupAnimations();
};

const setupInteractions = () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  let isOpen = false;

  menuToggle?.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      menuIconOpen?.classList.add('hidden');
      menuIconClose?.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIconOpen?.classList.remove('hidden');
      menuIconClose?.classList.add('hidden');
    }
  });
};

const setupAnimations = () => {
  // Hero animations
  animate("#hero-sub", { opacity: [0, 1], y: [20, 0] }, { delay: 0.2, duration: 0.8 });
  animate("#hero-title", { opacity: [0, 1], y: [20, 0] }, { delay: 0.4, duration: 0.8 });
  animate("#hero-desc", { opacity: [0, 1], y: [20, 0] }, { delay: 0.6, duration: 0.8 });
  animate("#hero-btns", { opacity: [0, 1], y: [20, 0] }, { delay: 0.8, duration: 0.8 });

  // Scroll animations
  inView(".step-card", (element) => {
    animate(element, { opacity: [0, 1], y: [50, 0] }, { delay: 0.2, duration: 0.8 });
  });

  inView("#vault-main", (element) => {
    animate(element, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.8 });
  });

  inView(".vault-side", (element) => {
    animate(element, { opacity: [0, 1], x: [50, 0] }, { delay: 0.2, duration: 0.8 });
  });

  inView("#cta-title", (element) => {
    animate(element, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8 });
  });
};

render();
