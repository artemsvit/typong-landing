(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4706:function(e,t,a){Promise.resolve().then(a.bind(a,121))},121:function(e,t,a){"use strict";a.r(t),a.d(t,{LandingPage:function(){return LandingPage}});var r=a(7437),s=a(2265),n=a(4135),i=a(3088),o=a(9263),l=a(272),c=a(6137),d=a(8193),g=a(9865),m=a(8244),x=a(7562),h=a(9824),u=a(2369),p=a(2882),y=a(2442),b=a(7256),f=a(9213),v=a(7042),j=a(3986);function cn(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,j.m)((0,v.W)(t))}let w=(0,f.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",destructive:"bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",outline:"border border-gray-200 bg-transparent shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50",secondary:"bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",ghost:"hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",link:"text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),N=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:i=!1,...o}=e,l=i?b.g7:"button";return(0,r.jsx)(l,{className:cn(w({variant:s,size:n,className:a})),ref:t,...o})});N.displayName="Button";var k=a(1969);let T=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(k.fC,{className:cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-gray-950 dark:data-[state=checked]:bg-gray-50 dark:data-[state=unchecked]:bg-gray-800",a),...s,ref:t,children:(0,r.jsx)(k.bU,{className:cn("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-gray-950")})})});T.displayName=k.fC.displayName;let C=[[{name:"Sarah Chen",role:"Content Writer",image:"https://randomuser.me/api/portraits/women/1.jpg",rating:5,text:"Typong has completely transformed how I write. The AI suggestions are incredibly accurate, and it feels like having a professional editor by my side."},{name:"Michael Rodriguez",role:"Software Developer",image:"https://randomuser.me/api/portraits/men/2.jpg",rating:5,text:"The code completion is mind-blowing! It understands context so well that it often suggests exactly what I was about to type. A must-have tool for developers."},{name:"Emma Thompson",role:"Marketing Manager",image:"https://randomuser.me/api/portraits/women/3.jpg",rating:5,text:"I love how Typong adapts to my writing style. The smart workflows feature has saved me countless hours in creating marketing copies."}],[{name:"David Kim",role:"Student",image:"https://randomuser.me/api/portraits/men/4.jpg",rating:4,text:"The neural translation feature is a game-changer for my international studies. It captures nuances that other translation tools miss."},{name:"Lisa Anderson",role:"Journalist",image:"https://randomuser.me/api/portraits/women/5.jpg",rating:5,text:"As a journalist, accuracy and speed are crucial. Typong helps me write better stories faster, with its context-aware suggestions."},{name:"James Wilson",role:"Business Analyst",image:"https://randomuser.me/api/portraits/men/6.jpg",rating:5,text:"The email generation feature is brilliant! It captures the right tone every time, making my communication more effective."}],[{name:"Alex Foster",role:"UX Designer",image:"https://randomuser.me/api/portraits/men/8.jpg",rating:5,text:"The contextual awareness of Typong is incredible. It helps me write better documentation and user stories with consistent terminology."},{name:"Nina Patel",role:"Research Scientist",image:"https://randomuser.me/api/portraits/women/8.jpg",rating:5,text:"Typong's ability to understand technical terminology and suggest relevant citations has significantly improved my research workflow."},{name:"Thomas Wright",role:"Technical Writer",image:"https://randomuser.me/api/portraits/men/9.jpg",rating:5,text:"The smart templates and context-aware suggestions have made documentation a breeze. It's like having a co-writer who knows exactly what I need."}]],TestimonialsCarousel=e=>{let{darkMode:t=!1}=e,[a,n]=(0,s.useState)(0),[i,o]=(0,s.useState)(!1),[l,c]=(0,s.useState)(C),getVisibleTestimonials=()=>window.innerWidth<768?C.map(e=>[e[0]]):C;return(0,s.useEffect)(()=>{let updateTestimonials=()=>{let e=getVisibleTestimonials();c(e),a>=e.length&&n(0)};return updateTestimonials(),o(!0),window.addEventListener("resize",updateTestimonials),()=>window.removeEventListener("resize",updateTestimonials)},[a]),(0,s.useEffect)(()=>{let e=setInterval(()=>{n(e=>(e+1)%l.length)},7e3);return()=>clearInterval(e)},[l.length]),(0,r.jsxs)("div",{className:"relative min-h-[380px]",children:[l.map((e,s)=>(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 testimonial-slide absolute w-full transition-all duration-1000 ease-out transform ".concat(i?s===a?"opacity-100 translate-x-0 z-10":s<a?"opacity-0 -translate-x-full z-0":"opacity-0 translate-x-full z-0":""),children:e.map((e,a)=>(0,r.jsxs)("div",{className:"p-5 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105 ".concat(t?"bg-gray-800/50 hover:bg-gray-800/70":"bg-white/50 hover:bg-white/70"," border ").concat(t?"border-gray-700":"border-gray-200"),children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"}),(0,r.jsx)("img",{src:e.image,alt:e.name,className:"relative w-11 h-11 rounded-full object-cover"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold ".concat(t?"text-gray-100":"text-gray-900"),children:e.name}),(0,r.jsx)("p",{className:"text-sm ".concat(t?"text-gray-400":"text-gray-600"),children:e.role})]})]}),(0,r.jsx)("div",{className:"flex mb-2",children:[...Array(e.rating)].map((e,t)=>(0,r.jsx)("svg",{className:"w-4 h-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},t))}),(0,r.jsx)("p",{className:"text-sm leading-relaxed ".concat(t?"text-gray-300":"text-gray-600"),children:e.text})]},a))},s)),(0,r.jsx)("div",{className:"absolute -bottom-8 left-0 right-0 flex justify-center gap-4",children:l.map((e,t)=>(0,r.jsx)("button",{onClick:()=>n(t),className:"w-3 h-3 rounded-full transition-all duration-500 ".concat(t===a?"bg-gradient-to-r from-green-400 to-blue-500 ring-4 ring-blue-500/20 scale-125":"bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 hover:scale-110"),"aria-label":"Go to slide ".concat(t+1)},t))})]})};var S=a(2549),L=a(8004);let smoothScroll=(e,t)=>{e.preventDefault();let a=document.getElementById(t);if(a){let e=a.getBoundingClientRect().top+window.pageYOffset,t=window.pageYOffset,r=e-t,s=null,animation=e=>{var a;null===s&&(s=e);let n=e-s;window.scrollTo(0,t+r*((a=Math.min(n/1e3,1))<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2)),n<1e3&&requestAnimationFrame(animation)};requestAnimationFrame(animation)}},NavLink=e=>{let{href:t,children:a,className:s="",onClick:n}=e,i=t.replace("#","");return(0,r.jsx)("a",{href:t,onClick:e=>{smoothScroll(e,i),null==n||n()},className:"text-sm font-medium transition-colors hover:text-primary ".concat(s),children:a})},Navigation=()=>{let[e,t]=(0,s.useState)(!1),closeMenu=()=>t(!1);return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("nav",{className:"hidden md:flex items-center space-x-8",children:[(0,r.jsx)(NavLink,{href:"#features",children:"Features"}),(0,r.jsx)(NavLink,{href:"#testimonials",children:"What Users Say"}),(0,r.jsx)(NavLink,{href:"#pricing",children:"Pricing"})]}),(0,r.jsx)("button",{onClick:()=>t(!e),className:"md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors","aria-label":"Toggle menu",children:e?(0,r.jsx)(S.Z,{className:"h-6 w-6"}):(0,r.jsx)(L.Z,{className:"h-6 w-6"})}),e&&(0,r.jsx)("div",{className:"absolute top-full right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 md:hidden",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-3 p-4",children:[(0,r.jsx)(NavLink,{href:"#features",className:"block w-full text-left text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md",onClick:closeMenu,children:"Features"}),(0,r.jsx)(NavLink,{href:"#testimonials",className:"block w-full text-left text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md",onClick:closeMenu,children:"What Users Say"}),(0,r.jsx)(NavLink,{href:"#pricing",className:"block w-full text-left text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md",onClick:closeMenu,children:"Pricing"})]})})]})};var A=a(3039),F=a(3298),E=a(7461),I=a(1350);let FooterLink=e=>{let{href:t,children:a}=e,s=t.startsWith("#"),n=s?t.replace("#",""):"";return s?(0,r.jsx)("a",{href:t,onClick:e=>smoothScroll(e,n),className:"block text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors py-2",children:a}):(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"block text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors py-2",children:a})},Footer=()=>{let{theme:e}=(0,I.useTheme)(),t=new Date().getFullYear(),a="dark"===e;return(0,r.jsx)("footer",{className:"border-t ".concat(a?"border-gray-700/40":"border-gray-200"),children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-12",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("a",{href:"#",onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity",children:[(0,r.jsx)("div",{className:"w-[18px] h-[18px] rounded-full bg-gradient-to-r from-orange-400 to-orange-500"}),(0,r.jsx)("span",{className:"text-xl font-bold",children:"Typong"})]}),(0,r.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Enhance your typing experience with AI-powered suggestions and corrections."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold mb-2",children:"Product"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(FooterLink,{href:"#features",children:"Features"}),(0,r.jsx)(FooterLink,{href:"#testimonials",children:"What Users Say"}),(0,r.jsx)(FooterLink,{href:"#pricing",children:"Pricing"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold mb-2",children:"Resources"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(FooterLink,{href:"https://docs.typong.app",children:"Documentation"}),(0,r.jsx)(FooterLink,{href:"https://blog.typong.app",children:"Blog"}),(0,r.jsx)(FooterLink,{href:"https://status.typong.app",children:"Status"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold mb-2",children:"Company"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(FooterLink,{href:"/about",children:"About"}),(0,r.jsx)(FooterLink,{href:"/privacy",children:"Privacy Policy"}),(0,r.jsx)(FooterLink,{href:"/terms",children:"Terms of Service"})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t ".concat(a?"border-gray-700/40":"border-gray-200"),children:[(0,r.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["\xa9 ",t," Typong. All rights reserved."]}),(0,r.jsxs)("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[(0,r.jsx)("a",{href:"https://twitter.com/typongapp",target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",children:(0,r.jsx)(A.Z,{className:"h-5 w-5"})}),(0,r.jsx)("a",{href:"https://github.com/typong",target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",children:(0,r.jsx)(F.Z,{className:"h-5 w-5"})}),(0,r.jsx)("a",{href:"https://linkedin.com/company/typong",target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",children:(0,r.jsx)(E.Z,{className:"h-5 w-5"})})]})]})]})})},LandingPage=()=>{let[e,t]=(0,s.useState)(!0),[a,b]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let handleScroll=()=>{b(window.scrollY)};return t(!0),document.documentElement.classList.add("dark"),window.addEventListener("scroll",handleScroll),()=>window.removeEventListener("scroll",handleScroll)},[]),(0,r.jsxs)("div",{className:"min-h-screen transition-colors duration-500 ".concat(e?"bg-black text-white":"bg-white text-gray-900"),children:[(0,r.jsx)("header",{className:"fixed top-0 w-full z-50 transition-all duration-300 ".concat(a>50?e?"py-4 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800":"py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100":"py-8 bg-transparent"),children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-6 flex justify-between items-center",children:[(0,r.jsxs)("a",{href:"#",onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity group",children:[(0,r.jsx)("div",{className:"logo-dot w-[18px] h-[18px] rounded-full bg-gradient-to-r from-orange-400 to-orange-500"}),(0,r.jsx)("span",{className:"text-xl font-bold",children:"Typong"})]}),(0,r.jsx)(Navigation,{}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(n.Z,{className:"h-4 w-4 text-gray-500 dark:text-gray-400"}),(0,r.jsx)(T,{checked:e,onCheckedChange:t}),(0,r.jsx)(i.Z,{className:"h-4 w-4 text-gray-500 dark:text-gray-400"})]})]})}),(0,r.jsxs)("section",{className:"relative pt-48 pb-32 px-6 overflow-hidden",children:[(0,r.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,r.jsx)("div",{className:"absolute -inset-[10px] opacity-50",children:(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r ".concat(e?"from-gray-900 via-gray-800 to-gray-900":"from-gray-100 via-gray-50 to-gray-100"," animate-shimmer")})})}),(0,r.jsxs)("div",{className:"relative max-w-[980px] mx-auto text-center",children:[(0,r.jsx)("h1",{className:"text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-tight mb-6 bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text px-4 py-2",children:"Make Typing Great Again"}),(0,r.jsx)("p",{className:"text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium ".concat(e?"text-gray-400":"text-gray-600"),children:"Experience the future of typing with AI-powered assistance"}),(0,r.jsxs)(N,{size:"lg",variant:"ghost",className:"bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-full px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105 text-white hover:text-white",children:["Download Free ",(0,r.jsx)(o.Z,{className:"ml-2 h-5 w-5"})]}),(0,r.jsx)("div",{className:"mt-8 text-sm ".concat(e?"text-gray-400":"text-gray-500"),children:"macOS 12 or later required"})]})]}),(0,r.jsx)("section",{id:"features",className:"py-24 ".concat(e?"bg-black":"bg-white"),children:(0,r.jsxs)("div",{className:"max-w-[980px] mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-[54px] font-bold text-center mb-16 ".concat(e?"text-white":"text-gray-900"),children:"Smart Features Everywhere"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{icon:(0,r.jsx)(l.Z,{className:"h-8 w-8"}),title:"AI Writing Assistant",description:"Real-time suggestions for better phrasing and grammar fixes as you type.",gradient:"from-purple-400 to-indigo-500"},{icon:(0,r.jsx)(c.Z,{className:"h-8 w-8"}),title:"Universal Translation",description:"Instantly translate text in any input field to 100+ languages.",gradient:"from-blue-400 to-cyan-500"},{icon:(0,r.jsx)(d.Z,{className:"h-8 w-8"}),title:"Style Adaptation",description:"Adjust your writing tone from casual to professional instantly.",gradient:"from-teal-400 to-emerald-500"},{icon:(0,r.jsx)(g.Z,{className:"h-8 w-8"}),title:"Research Helper",description:"Get instant facts and citations while writing papers or emails.",gradient:"from-green-400 to-teal-500"},{icon:(0,r.jsx)(m.Z,{className:"h-8 w-8"}),title:"Smart Templates",description:"Create dynamic templates that adapt to context and previous inputs.",gradient:"from-orange-400 to-pink-500"},{icon:(0,r.jsx)(x.Z,{className:"h-8 w-8"}),title:"Text Commands",description:"Use #commands to transform text or generate content instantly.",gradient:"from-rose-400 to-red-500"},{icon:(0,r.jsx)(h.Z,{className:"h-8 w-8"}),title:"Auto-Save History",description:"Never lose your text with automatic local backups.",gradient:"from-fuchsia-400 to-purple-500"},{icon:(0,r.jsx)(u.Z,{className:"h-8 w-8"}),title:"Quick Actions",description:"Custom shortcuts for your most-used text transformations.",gradient:"from-amber-400 to-orange-500"},{icon:(0,r.jsx)(p.Z,{className:"h-8 w-8"}),title:"Context-Aware Replies",description:"Generate intelligent responses based on conversation history.",gradient:"from-violet-400 to-purple-500"}].map((t,a)=>(0,r.jsxs)("div",{className:"p-6 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105 ".concat(e?"bg-gray-800/50 hover:bg-gray-800/70":"bg-white/50 hover:bg-white/70"," border ").concat(e?"border-gray-700":"border-gray-200"),children:[(0,r.jsx)("div",{className:"w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ".concat(t.gradient),children:s.cloneElement(t.icon,{className:"h-6 w-6 text-white"})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2 ".concat(e?"text-white":"text-gray-900"),children:t.title}),(0,r.jsx)("p",{className:"".concat(e?"text-gray-400":"text-gray-500"),children:t.description})]},a))})]})}),(0,r.jsx)("section",{className:"py-24 relative overflow-hidden ".concat(e?"bg-gray-900":"bg-white"),children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-[54px] font-bold text-center mb-16 ".concat(e?"text-white":"text-gray-900"),children:"What Users Say"}),(0,r.jsx)(TestimonialsCarousel,{darkMode:e})]})}),(0,r.jsx)("section",{id:"pricing",className:"py-24 ".concat(e?"bg-black":"bg-gray-50"),children:(0,r.jsxs)("div",{className:"max-w-[980px] mx-auto px-6",children:[(0,r.jsx)("h2",{className:"text-4xl md:text-5xl lg:text-[54px] font-bold text-center mb-16 ".concat(e?"text-white":"text-gray-900"),children:"Choose Your Plan"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,r.jsxs)("div",{className:"p-8 rounded-3xl backdrop-blur-lg transform transition-all duration-300 hover:scale-[1.02] flex flex-col ".concat(e?"bg-gray-800/50 hover:bg-gray-800/70":"bg-white/50 hover:bg-white/70"," border ").concat(e?"border-gray-700":"border-gray-200"),children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold ".concat(e?"text-white":"text-gray-900"),children:"Free Trial"}),(0,r.jsx)("span",{className:"px-3 py-1 rounded-full text-sm ".concat(e?"bg-gray-700/50 text-gray-300":"bg-gray-100 text-gray-600"),children:"14 Days"})]}),(0,r.jsxs)("div",{className:"flex items-baseline gap-1 mb-6",children:[(0,r.jsx)("span",{className:"text-4xl font-bold ".concat(e?"text-white":"text-gray-900"),children:"$0"}),(0,r.jsx)("span",{className:"".concat(e?"text-gray-400":"text-gray-600"),children:"/month"})]}),(0,r.jsx)("div",{className:"space-y-4",children:["Basic AI suggestions","3 custom shortcuts","Standard response time","Basic features","Single device","Community support"].map((t,a)=>(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(y.Z,{className:"h-5 w-5 text-green-500 mr-3 flex-shrink-0"}),(0,r.jsx)("span",{className:"".concat(e?"text-gray-300":"text-gray-900"),children:t})]},a))})]}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("button",{className:"w-full py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transform transition-all duration-200 hover:scale-[1.02]",children:"Download Free Trial"})})]}),(0,r.jsxs)("div",{className:"relative p-[1px] rounded-2xl transform transition-all duration-300 hover:scale-[1.02] group",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl"}),(0,r.jsx)("div",{className:"relative rounded-2xl backdrop-blur-lg transform transition-all duration-300 h-full ".concat(e?"bg-gray-900 group-hover:bg-gray-800/70":"bg-white group-hover:bg-white/70"),children:(0,r.jsxs)("div",{className:"p-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-bold mb-2 ".concat(e?"text-white":"text-gray-900"),children:"Pro Plan"}),(0,r.jsxs)("div",{className:"flex items-baseline gap-1 mb-6",children:[(0,r.jsx)("span",{className:"text-4xl font-bold ".concat(e?"text-white":"text-gray-900"),children:"$9.99"}),(0,r.jsx)("span",{className:"".concat(e?"text-gray-400":"text-gray-600"),children:"/month"})]}),(0,r.jsx)("div",{className:"space-y-4",children:["Everything in Free Trial","Unlimited AI suggestions","Priority support","Early access to new features","Custom keyboard shortcuts","Cross-device sync"].map((t,a)=>(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(y.Z,{className:"h-5 w-5 text-green-500 mr-3 flex-shrink-0"}),(0,r.jsx)("span",{className:"".concat(e?"text-gray-300":"text-gray-900"),children:t})]},a))})]}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("button",{className:"w-full py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transform transition-all duration-200 hover:scale-[1.02]",children:"Get Started"})})]})})]})]})]})}),(0,r.jsx)(Footer,{})]})}}},function(e){e.O(0,[142,971,864,744],function(){return e(e.s=4706)}),_N_E=e.O()}]);