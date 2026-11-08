/* ============================================================
   COMPANY CONFIGURATION
   ✏️  EDIT THIS FILE TO REBRAND THE ENTIRE WEBSITE.
   ⚠️ IMPORTANT: Only change the text INSIDE the quote marks "".
   Do not delete commas (,) or quote marks (").
   ============================================================ */

const COMPANY = {
  // 👇 CHANGE YOUR COMPANY DETAILS HERE 👇
  name: "Arzo Construction Company", // Put your company name here
  shortName: "Arzo",        // Short version for the logo
  slogan: "Building Tomorrow, Today.",
  tagline: "Construction & Engineering Excellence",
  
  logo: "assets/logos/logo.svg",
  favicon: "assets/logos/favicon.svg",
  founded: 2008,
  
  // 👇 YOUR PHONE NUMBERS (Keep the quotes and commas)
  phone: "+93 711 620 061",       
  phoneRaw: "+93711620061",         
  phone2: "+93 711 720 073",      
  
  // 👇 YOUR EMAILS
  email: "support.arzo@gmail.com",      
  emailCareers: "careers@yourdomain.com", 
  
  // 👇 WHATSAPP (No plus sign, no spaces)
  whatsapp: "93711620061",          
  
  // 👇 ADDRESS AND HOURS
  address: "Kabul, Afghanistan",     
  hours: "Mon – Fri: 8:00 AM – 5:00 PM",  
  hoursSat: "Sat: 9:00 AM – 2:00 PM",     
  
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1600000000000",
  
  // Brand colors
  primaryColor: "#101D30",
  secondaryColor: "#C9A45C",
  
  // 👇 SOCIAL MEDIA LINKS (Put your full links here)
  facebook: "https://www.facebook.com/profile.php?id=61595842247322",
  instagram: "#",
  linkedin: "#",
  twitter: "#",
  youtube: "#",
  
  // Forms (Leave empty for demo mode)
  formEndpoint: "",
  formServiceName: ""
};
// 🛑 DO NOT DELETE THE `};` ABOVE THIS LINE 🛑

/* ---------- SERVICES ---------- */
const SERVICES = [
  { id:"residential", title:"Residential Construction", icon:"home",
    short:"Design and build modern, comfortable homes tailored to your family's lifestyle.",
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    long:"From single-family homes to multi-unit residential developments, we design and construct spaces that families love to live in. Our residential team blends modern design trends with proven construction methods to deliver homes that are beautiful, durable and energy-efficient.",
    benefits:["Custom architectural design","Energy-efficient construction","Transparent fixed-price contracts","Post-completion warranty support"] },
  { id:"commercial", title:"Commercial Construction", icon:"building",
    short:"Office buildings, retail centres and hospitality projects delivered on time.",
    image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    long:"We deliver commercial spaces that support productivity, safety and long-term value — from corporate headquarters to retail complexes. Our commercial teams coordinate architects, engineers and contractors under one roof for seamless delivery.",
    benefits:["Turnkey commercial delivery","Fast-track scheduling","Compliance with commercial codes","Facility management handover"] },
  { id:"industrial", title:"Industrial Construction", icon:"factory",
    short:"Factories, warehouses and industrial facilities engineered for performance.",
    image:"https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
    long:"Industrial construction demands precision, safety and operational efficiency. We design and build facilities that support heavy operations, meet regulatory standards and reduce long-term maintenance costs.",
    benefits:["Heavy-duty structural engineering","Safety-first execution","Regulatory compliance","Minimized operational downtime"] },
  { id:"architecture", title:"Architectural Design", icon:"compass",
    short:"Award-winning design that balances form, function and sustainability.",
    image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    long:"Our architects craft spaces that combine aesthetic excellence with practical performance. We work with you from concept to detailed drawings, leveraging 3D visualization and BIM to ensure every design is buildable and beautiful.",
    benefits:["Concept & schematic design","3D visualization","Sustainable design principles","Full construction documentation"] },
  { id:"infrastructure", title:"Infrastructure Development", icon:"route",
    short:"Roads, bridges and public infrastructure built to last for generations.",
    image:"https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
    long:"We build the roads, bridges, water systems and public infrastructure that communities depend on. Our infrastructure teams combine civil engineering expertise with heavy equipment and disciplined execution.",
    benefits:["Full civil engineering services","Traffic & environmental studies","Heavy equipment fleet","Long-term durability guarantees"] },
  { id:"renovation", title:"Building Renovation", icon:"tools",
    short:"Transform existing spaces with our complete renovation and fit-out service.",
    image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    long:"From heritage restoration to modern re-modelling, our renovation teams renew existing buildings with minimal disruption. We carefully assess every structure before proposing solutions that extend its life and value.",
    benefits:["Structural assessments","Heritage-friendly restoration","Minimal operational disruption","Fast turnaround times"] },
  { id:"structural", title:"Structural Engineering", icon:"layers",
    short:"Advanced structural analysis and design for safety, resilience and efficiency.",
    image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    long:"Our structural engineers analyze every load, stress and environmental factor to ensure your building performs safely for decades. We use the latest analysis software and international standards.",
    benefits:["Seismic design","Load analysis","Structural retrofitting","Third-party design review"] },
  { id:"interior", title:"Interior Design", icon:"sofa",
    short:"Interior design and fit-out that elevates how people live and work.",
    image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    long:"We design interiors that feel as good as they function. Our team combines ergonomics, materials expertise and lighting design to create environments that support your brand and comfort.",
    benefits:["Space planning","Custom furniture solutions","Lighting design","Brand-aligned aesthetics"] },
  { id:"management", title:"Project Management", icon:"clipboard",
    short:"Expert project management that keeps budgets, schedules and quality on track.",
    image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    long:"Our project managers coordinate every aspect of construction — from permits and procurement to subcontractors and inspections — so you always know your project is on track.",
    benefits:["Single point of contact","Budget tracking dashboards","Weekly progress reporting","Risk management"] },
  { id:"consulting", title:"Construction Consulting", icon:"briefcase",
    short:"Strategic advisory services for developers, investors and property owners.",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    long:"Whether you are planning a new development or evaluating a potential acquisition, our consultants provide the technical and commercial insight needed to make informed decisions.",
    benefits:["Feasibility studies","Cost planning","Risk assessment","Technical due diligence"] },
  { id:"electrical", title:"Electrical Installation", icon:"bolt",
    short:"Safe, compliant and efficient electrical systems for every building type.",
    image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    long:"Our licensed electricians design and install safe, code-compliant electrical systems for residential, commercial and industrial spaces, backed by full commissioning and documentation.",
    benefits:["Licensed electricians","Energy-efficient systems","Full compliance testing","24/7 emergency support"] },
  { id:"plumbing", title:"Plumbing & Mechanical", icon:"droplet",
    short:"Reliable plumbing, HVAC and mechanical systems engineered for comfort.",
    image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    long:"Efficient plumbing, HVAC and mechanical systems are essential to any building. Our mechanical engineers design and install systems that balance comfort, efficiency and long-term cost.",
    benefits:["HVAC design & install","Water efficiency consulting","Maintenance programs","Emergency response"] }
];

/* ---------- PROJECTS ---------- */
const PROJECTS = [
  { id:"skyline-tower", title:"Skyline Business Tower", category:"Commercial", location:"Manhattan, New York", year:2023, size:"28,500 sq ft", client:"Skyline Holdings", status:"Completed", manager:"Sarah Mitchell",
    image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"],
    summary:"A 22-storey mixed-use business tower featuring premium office space, retail and a rooftop garden.",
    challenge:"The project needed to meet LEED Gold standards while navigating a tight urban site with restricted access.",
    solution:"We used modular construction techniques and sequenced deliveries overnight to minimize street disruption, achieving LEED Gold certification.",
    result:"Delivered 3 weeks ahead of schedule, achieving 22% energy savings compared to baseline." },
  { id:"harbor-residence", title:"Harbor View Residences", category:"Residential", location:"Brooklyn, NY", year:2023, size:"18,200 sq ft", client:"Harbor Group", status:"Completed", manager:"David Chen",
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"],
    summary:"A boutique collection of 24 waterfront residences with premium finishes and sustainable design.",
    challenge:"Waterfront construction required advanced waterproofing and careful environmental compliance.",
    solution:"We engaged marine engineering specialists and used corrosion-resistant materials throughout.",
    result:"All units sold within 4 months of launch; featured in Architectural Digest." },
  { id:"logistics-hub", title:"Central Logistics Hub", category:"Industrial", location:"Newark, NJ", year:2022, size:"120,000 sq ft", client:"LogiCorp", status:"Completed", manager:"Michael Roberts",
    image:"https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"],
    summary:"A high-throughput distribution facility designed to support 24/7 logistics operations.",
    challenge:"Client required simultaneous build and live operations on the adjacent site.",
    solution:"We sequenced construction phases to eliminate overlap and used acoustic barriers for noise control.",
    result:"Facility operational 6 weeks early, processing 40,000 parcels daily." },
  { id:"riverbridge", title:"Riverside Bridge", category:"Infrastructure", location:"Hoboken, NJ", year:2022, size:"340 m span", client:"State of NJ", status:"Completed", manager:"Linda Patel",
    image:"https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"],
    summary:"A cable-stayed pedestrian and cyclist bridge connecting two growing waterfront districts.",
    challenge:"Environmental protections for the river required all in-water work to occur outside spawning season.",
    solution:"Pre-fabrication of bridge segments allowed rapid on-site assembly during the permitted window.",
    result:"Delivered on budget, now carrying 8,000 daily users." },
  { id:"heritage-loft", title:"Heritage Loft Restoration", category:"Renovation", location:"SoHo, NYC", year:2023, size:"6,800 sq ft", client:"Private", status:"Completed", manager:"Emma Wilson",
    image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"],
    summary:"Sensitive restoration of a 19th-century cast-iron building into premium residential lofts.",
    challenge:"Preserving landmark façade elements while modernizing interiors.",
    solution:"We worked with preservation specialists and custom-fabricated replacement cast-iron pieces.",
    result:"Landmark Preservation Commission award for excellence." },
  { id:"innovation-park", title:"Innovation Park Campus", category:"Commercial", location:"Boston, MA", year:2024, size:"65,000 sq ft", client:"TechNest", status:"In Progress", manager:"Sarah Mitchell",
    image:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"],
    summary:"A collaborative office campus for 2,000 tech workers with cutting-edge amenities.",
    challenge:"Rapid design changes as anchor tenants signed on during construction.",
    solution:"Implemented BIM-based change management and modular interiors.",
    result:"Phase 1 complete; Phase 2 on schedule for Q4 2024." },
  { id:"greenfield-homes", title:"Greenfield Family Homes", category:"Residential", location:"Stamford, CT", year:2022, size:"22 homes", client:"Greenfield Estates", status:"Completed", manager:"David Chen",
    image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"],
    summary:"A 22-home community designed around shared green spaces and sustainable living.",
    challenge:"Wetland buffer restrictions limited usable building footprint.",
    solution:"Elevated slab foundations and careful site planning maximized usable area.",
    result:"All homes certified Energy Star; sold out before completion." },
  { id:"metropolitan-mall", title:"Metropolitan Mall Expansion", category:"Commercial", location:"Jersey City, NJ", year:2021, size:"85,000 sq ft", client:"Metro Retail", status:"Completed", manager:"Michael Roberts",
    image:"https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&w=1200&q=80",
    gallery:["https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"],
    summary:"Expansion of a flagship shopping centre including new food court and parking structure.",
    challenge:"Working adjacent to 200 operating retailers required careful scheduling.",
    solution:"Phased construction with overnight crews to minimize disruption.",
    result:"Delivered on budget; retailers reported 35% traffic increase." }
];

/* ---------- TEAM ---------- */
const TEAM = [
  { name:"Alexander Mitchell", role:"Chief Executive Officer", image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio:"Alexander founded BuildPro in 2008 and has led the firm through continuous growth. He oversees strategic partnerships, major client relationships and long-term vision.",
    qualifications:"M.Sc. Construction Management, Stanford University", experience:"24 years", linkedin:"#" },
  { name:"Sarah Williams", role:"General Manager", image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio:"Sarah manages day-to-day operations across all divisions, ensuring quality delivery on every project. She is known for her calm leadership and operational precision.",
    qualifications:"MBA, Columbia Business School", experience:"18 years", linkedin:"#" },
  { name:"David Chen", role:"Senior Civil Engineer", image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio:"David leads structural engineering across commercial and residential divisions. He is certified in seismic design and advanced structural analysis.",
    qualifications:"Ph.D. Structural Engineering, MIT", experience:"16 years", linkedin:"#" },
  { name:"Emma Wilson", role:"Principal Architect", image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    bio:"Emma directs the design studio, blending contemporary aesthetics with contextual sensitivity. She has won multiple awards for sustainable architectural design.",
    qualifications:"M.Arch, Harvard GSD", experience:"14 years", linkedin:"#" },
  { name:"Michael Roberts", role:"Project Manager", image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    bio:"Michael oversees complex commercial and industrial builds from pre-construction to handover. He is known for keeping projects ahead of schedule without compromising quality.",
    qualifications:"PMP Certification, B.Sc. Civil Engineering", experience:"12 years", linkedin:"#" },
  { name:"Linda Patel", role:"Site Supervisor", image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio:"Linda manages on-site safety and quality, coordinating hundreds of workers and subcontractors across multiple concurrent sites.",
    qualifications:"OSHA 30, Construction Safety Specialist", experience:"15 years", linkedin:"#" }
];

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { name:"Robert Harrison", title:"CEO", company:"Skyline Holdings", avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating:5, project:"Skyline Business Tower",
    review:"BuildPro delivered our flagship tower three weeks early and under budget. Their communication was exceptional — we always knew exactly where the project stood. Highly recommended." },
  { name:"Jennifer Martinez", title:"Director", company:"Harbor Group", avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating:5, project:"Harbor View Residences",
    review:"The quality of finish and attention to detail exceeded every expectation. Our buyers loved the homes, and the sales result speaks for itself. A truly professional team." },
  { name:"Thomas Anderson", title:"Operations Manager", company:"LogiCorp", avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating:5, project:"Central Logistics Hub",
    review:"We asked for a facility that could support 24/7 operations while we kept the adjacent site live. BuildPro managed this flawlessly. Six weeks early is unheard of in this industry." },
  { name:"Maria Gonzalez", title:"Homeowner", company:"Private Client", avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating:5, project:"Greenfield Family Homes",
    review:"Building our family home felt overwhelming until we met the BuildPro team. They guided us through every decision with patience and expertise. We absolutely love our home." },
  { name:"James O'Brien", title:"City Planner", company:"State of NJ", avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating:5, project:"Riverside Bridge",
    review:"Public infrastructure projects come with unique pressures, and BuildPro handled them with professionalism and transparency that impressed our entire department." },
  { name:"Sophie Laurent", title:"Interior Designer", company:"SL Design Studio", avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating:5, project:"Heritage Loft Restoration",
    review:"As a designer, I'm particular about execution. BuildPro's craftsmen brought my vision to life with precision that I rarely see from contractors." }
];

/* ---------- BLOG ---------- */
const BLOG = [
  { id:"sustainable-construction-2024", title:"Sustainable Construction: What's Changing in 2024",
    category:"Construction News", author:"Emma Wilson", date:"March 12, 2024", dateISO:"2024-03-12",
    image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    excerpt:"From mass-timber towers to net-zero concrete, the construction industry is undergoing a sustainability revolution. Here's what to expect.",
    content:`<p>The construction industry accounts for nearly 40% of global carbon emissions, and 2024 is shaping up to be a pivotal year for change. From new regulations to breakthrough materials, several developments are reshaping how we build.</p><h2>Mass Timber Goes Mainstream</h2><p>Once limited to boutique projects, engineered timber is now competing with steel and concrete on cost and schedule for mid-rise buildings. Recent code updates have opened the door to taller timber structures across North America and Europe.</p><h2>Low-Carbon Concrete</h2><p>Innovative mixes now incorporate supplementary cementitious materials, recycled aggregates and carbon capture technologies — reducing embodied carbon by up to 40% without sacrificing strength.</p><h2>What This Means for Clients</h2><p>For building owners, sustainable construction is no longer just a marketing advantage. It lowers operating costs, future-proofs against regulation and increasingly commands a rental premium.</p>` },
  { id:"bim-revolution", title:"How BIM is Revolutionizing Project Delivery",
    category:"Technology", author:"David Chen", date:"February 28, 2024", dateISO:"2024-02-28",
    image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    excerpt:"Building Information Modeling has transformed how we design, coordinate and deliver construction projects. Here's why it matters.",
    content:`<p>Building Information Modeling (BIM) has moved from a nice-to-have to a baseline expectation for large construction projects. And for good reason.</p><h2>Clash Detection Before Construction</h2><p>BIM allows us to identify clashes between structural, mechanical and electrical systems before a single physical element is installed. This alone eliminates millions in rework.</p><h2>Better Cost Control</h2><p>Because BIM models are integrated with cost databases, we can generate accurate quantity take-offs and cost estimates at every design stage.</p><h2>Improved Collaboration</h2><p>All project stakeholders — architects, engineers, contractors and clients — work from the same model, which dramatically reduces miscommunication.</p>` },
  { id:"safety-first-culture", title:"Building a Safety-First Culture on Every Site",
    category:"Company Updates", author:"Linda Patel", date:"February 15, 2024", dateISO:"2024-02-15",
    image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    excerpt:"Safety isn't a checklist — it's a culture. Here's how we embed safety into everything we do at BuildPro.",
    content:`<p>Construction remains one of the most dangerous industries in the world, but that doesn't have to be the case. At BuildPro, safety is our first consideration, not an afterthought.</p><h2>Daily Toolbox Talks</h2><p>Every site begins with a short safety briefing that covers today's risks, weather conditions and any special concerns.</p><h2>Empowered Stop-Work Authority</h2><p>Every worker, regardless of role, has the authority to stop work if they see an unsafe condition. This policy has prevented countless incidents.</p><h2>Continuous Learning</h2><p>We invest heavily in ongoing safety training and certifications for all staff and subcontractors.</p>` },
  { id:"choosing-contractor", title:"How to Choose the Right Construction Contractor",
    category:"Engineering", author:"Sarah Williams", date:"January 30, 2024", dateISO:"2024-01-30",
    image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    excerpt:"A bad contractor can turn your dream project into a nightmare. Here are the questions to ask before signing anything.",
    content:`<p>Choosing the right contractor is the single most important decision you'll make in your construction project. Here's what to look for.</p><h2>Verify Credentials</h2><p>Always request copies of licenses, insurance certificates and bonding documentation.</p><h2>Review Past Projects</h2><p>Ask for references from projects similar in scale and complexity. Then actually call those references.</p><h2>Demand Transparency</h2><p>A good contractor welcomes hard questions. If they're evasive about pricing or scope, walk away.</p>` },
  { id:"future-cities", title:"The Future of Cities: Trends Shaping Urban Development",
    category:"Architecture", author:"Emma Wilson", date:"January 18, 2024", dateISO:"2024-01-18",
    image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    excerpt:"From 15-minute neighbourhoods to urban manufacturing, several trends will define the cities of tomorrow.",
    content:`<p>Urban areas are rapidly evolving to meet the challenges of population growth, climate change and changing work patterns. Several key trends are shaping how cities are being developed.</p><h2>The 15-Minute City</h2><p>The idea that every resident should be within a 15-minute walk of essential services is gaining ground — with real implications for how we design mixed-use developments.</p><h2>Adaptive Reuse</h2><p>Rather than demolishing old structures, cities increasingly encourage converting them for new uses.</p>` },
  { id:"project-announcement-innovation-park", title:"Announcing: Innovation Park Campus Breaks Ground",
    category:"Project Announcements", author:"Michael Roberts", date:"January 5, 2024", dateISO:"2024-01-05",
    image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    excerpt:"We're thrilled to announce that construction has officially begun on Boston's Innovation Park Campus — our largest commercial project to date.",
    content:`<p>BuildPro is proud to announce the groundbreaking of Innovation Park Campus, a 65,000 sq ft collaborative workspace designed for 2,000 tech workers.</p><h2>Project Highlights</h2><p>The campus will feature cutting-edge amenities, sustainable design and flexible floor plates to support the changing needs of modern companies.</p><h2>Community Impact</h2><p>Construction will create over 400 local jobs and the completed campus is expected to add $180 million annually to the local economy.</p>` }
];

/* ---------- JOBS ---------- */
const JOBS = [
  { id:"civil-engineer", title:"Civil Engineer", department:"Engineering", location:"New York, NY", type:"Full-time", experience:"3-5 years",
    description:"We're seeking an experienced civil engineer to join our structural team working on commercial and infrastructure projects.",
    requirements:["B.Sc. or M.Sc. in Civil Engineering","3-5 years of post-graduate experience","PE license preferred","Experience with AutoCAD and structural analysis software"],
    benefits:["Competitive salary + bonus","Health, dental and vision insurance","401(k) with company match","Professional development budget"] },
  { id:"architect", title:"Architect", department:"Design Studio", location:"New York, NY", type:"Full-time", experience:"4+ years",
    description:"Join our award-winning design studio to work on high-profile residential and commercial projects.",
    requirements:["M.Arch or B.Arch","4+ years of professional experience","Strong design portfolio","Proficiency with Revit and Rhino"],
    benefits:["Creative autonomy","AIA membership sponsored","Flexible working hours","Conference attendance"] },
  { id:"project-manager", title:"Project Manager", department:"Operations", location:"New York, NY", type:"Full-time", experience:"5+ years",
    description:"Lead delivery of complex construction projects from pre-construction through handover.",
    requirements:["PMP or equivalent certification","5+ years construction project management","Strong financial acumen","Excellent communication skills"],
    benefits:["Performance bonuses","Vehicle allowance","Comprehensive health benefits","Leadership development"] },
  { id:"electrical-engineer", title:"Electrical Engineer", department:"MEP", location:"Newark, NJ", type:"Full-time", experience:"2-4 years",
    description:"Design and supervise electrical systems for commercial and industrial projects.",
    requirements:["B.Sc. Electrical Engineering","2-4 years of relevant experience","Knowledge of NEC and local codes","Revit MEP experience preferred"],
    benefits:["Relocation assistance","Ongoing training","Health insurance","Annual review"] },
  { id:"site-supervisor", title:"Site Supervisor", department:"Operations", location:"Various Sites", type:"Full-time", experience:"4+ years",
    description:"Supervise on-site construction activities ensuring quality, safety and schedule compliance.",
    requirements:["OSHA 30 certification","4+ years supervisory experience","Strong leadership skills","Ability to read construction documents"],
    benefits:["Company vehicle","Per-diem","Weekly pay","Career advancement opportunities"] }
];

/* ---------- FAQ ---------- */
const FAQS = [
  { q:"What construction services do you offer?", a:"We provide a full range of construction services including residential, commercial and industrial construction, architectural design, structural engineering, infrastructure development, renovation, project management, electrical and plumbing installation, and construction consulting." },
  { q:"How can I request a quotation?", a:"You can request a quotation by visiting our Request a Quote page, calling our office directly, or emailing us with your project details. We typically respond within one business day." },
  { q:"Do you provide architectural design services?", a:"Yes. Our in-house design studio provides full architectural design services from concept through construction documentation, including 3D visualization and BIM modeling." },
  { q:"How long does a typical construction project take?", a:"Project timelines vary widely based on scope and complexity. A residential home typically takes 8-12 months, while commercial and industrial projects can range from 12 months to several years. We provide a detailed schedule as part of every proposal." },
  { q:"Do you work outside your main city?", a:"Yes. While our headquarters is in New York, we regularly work throughout the tri-state area and take on select projects nationally for established clients." },
  { q:"Do you provide renovation services?", a:"Absolutely. Our renovation team handles everything from cosmetic updates to full structural restoration, including heritage and landmark properties." },
  { q:"Can I visit your previous projects?", a:"We're happy to arrange visits to completed projects or connect you with past clients as references. Simply ask your project contact to arrange this." }
];

/* ---------- HELPER: ICONS (Do not change) ---------- */
const ICONS = {
  home:'<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V9.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  building:'<path d="M4 21V5a1 1 0 011-1h9a1 1 0 011 1v16M15 9h4a1 1 0 011 1v11M7 8h4M7 12h4M7 16h4M18 13h1M18 17h1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  factory:'<path d="M3 21V9l6 4V9l6 4V5h4a2 2 0 012 2v14H3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  compass:'<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  route:'<circle cx="6" cy="19" r="2" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="5" r="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 19h8a4 4 0 000-8H8a4 4 0 010-8h8" stroke="currentColor" stroke-width="1.8"/>',
  tools:'<path d="M14 7l3 3M5 19l4-4M9 9l6-6 3 3-6 6M3 21l2-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  sofa:'<path d="M4 11V9a3 3 0 013-3h10a3 3 0 013 3v2M3 11a2 2 0 100 4v4h2v-4h14v4h2v-4a2 2 0 100-4 2 2 0 00-2 2v1H5v-1a2 2 0 00-2-2z" stroke="currentColor" stroke-width="1.8"/>',
  clipboard:'<path d="M9 3h6a1 1 0 011 1v2H8V4a1 1 0 011-1zM6 5h12a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zM9 11h6M9 15h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="1.8"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  droplet:'<path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  check:'<path d="M5 12l5 5 9-11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  award:'<circle cx="12" cy="9" r="5" stroke="currentColor" stroke-width="1.8"/><path d="M8 14l-2 7 6-3 6 3-2-7" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  clock:'<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  cpu:'<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="1.8"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  users:'<circle cx="9" cy="8" r="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="17" cy="9" r="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 15c2.8 0 5.5 2 5.5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
};

// Freeze the config to prevent accidental mutation
Object.freeze(COMPANY);