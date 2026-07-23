/* ============================================================================
   SITE DATA — edit this file to customize the entire site.
   No HTML or CSS knowledge needed: change the text, save, refresh.
   To adapt for another person: replace the values below and swap the
   images in assets/img/ (profile.png) and files/cv.pdf.
   ============================================================================ */

const SITE = {
  // ---------------------------------------------------------------- identity
  name: "Gabriela B. Díaz Cortés",
  shortName: "Gabriela Díaz",
  title: "Dr.",
  role: "Research Scientist · Applied Mathematics & Scientific Computing",
  affiliation: "Mexican Institute of Petroleum (IMP)",
  affiliationUrl: "https://www.gob.mx/imp",
  location: "Mexico City, Mexico",
  photo: "assets/img/profile.png",
  cvFile: "files/cv.pdf",
  githubUser: "gbdiazc", // repos are fetched live from this GitHub account

  // Rotating keywords shown in the hero
  keywords: [
    "Reservoir Simulation",
    "Physics-Informed Neural Networks",
    "Linear Solvers & Preconditioning",
    "Optimization Algorithms",
    "Porous Media Flow",
    "Scientific Python",
  ],

  tagline:
    "I build mathematics and machine learning that make complex physical systems computable — from multiphase flow in porous media to physics-informed neural networks.",

  about: [
    "I am a physicist and applied mathematician working as a researcher at the Mexican Institute of Petroleum (IMP). My work sits at the intersection of numerical linear algebra, fluid dynamics and artificial intelligence: I develop solvers, simulators and physics-informed machine learning models for flow in porous media and the energy sector.",
    "I obtained my PhD in Applied Mathematics at TU Delft (The Netherlands), where I developed POD-based deflation methods to accelerate the solution of the large, ill-conditioned linear systems that appear in reservoir simulation. Today I also lead research on the energy transition and geological hydrogen in Mexico, supervise PhD and MSc students, and teach scientific programming with Python.",
  ],

  links: {
    email: "gbdiaz@imp.mx",
    github: "https://github.com/gbdiazc",
    linkedin: "https://www.linkedin.com/in/gbdiazcortes/",
    scholar: "https://scholar.google.com/citations?user=hKuGzcIAAAAJ&hl=en&oi=ao",
    researchgate: "https://www.researchgate.net/profile/Gabriela-Diaz-46?ev=hdr_xprf",
    orcid: "https://orcid.org/0000-0003-2460-3482",
  },

  // ------------------------------------------------------------- at a glance
  // The bento grid on the home screen. Numbers are animated on scroll.
  stats: [
    { value: 11, suffix: "", label: "Peer-reviewed publications", icon: "book" },
    { value: 12, suffix: "+", label: "Conference talks & posters", icon: "mic" },
    { value: 9, suffix: "", label: "Students supervised", icon: "users" },
    { value: 11, suffix: "", label: "Courses taught", icon: "chalkboard" },
    { value: 7, suffix: "", label: "Software copyright registrations", icon: "code" },
    { value: 8, suffix: "+", label: "Years as researcher at IMP", icon: "flask" },
  ],

  // ---------------------------------------------------------- research areas
  research: [
    {
      title: "Reservoir Simulation & Porous Media",
      text: "Multiphase flow simulators in polar and cylindrical coordinates, near-wellbore modeling, acid stimulation and water coning with Venturi flow enhancers.",
      icon: "layers",
    },
    {
      title: "Physics-Informed Neural Networks",
      text: "PINNs for the Reynolds, diffusion and Poisson equations — architecture and hyperparameter optimization for physically consistent deep learning.",
      icon: "brain",
    },
    {
      title: "Linear Solvers & Deflation",
      text: "POD-based deflation and physics-based preconditioners that accelerate ill-conditioned systems in large-scale, highly heterogeneous subsurface simulations.",
      icon: "grid",
    },
    {
      title: "Optimization & Evolutionary Algorithms",
      text: "The 1D-SOA evolutionary algorithm, metaheuristics for astrophysics and materials design, and Gibbs free-energy optimization for petroleum thermodynamics.",
      icon: "target",
    },
    {
      title: "Energy Transition & Hydrogen",
      text: "Technology roadmapping for the Mexican energy transition and the prospective potential of geological (natural) hydrogen.",
      icon: "leaf",
    },
    {
      title: "Scientific Computing & HPC",
      text: "Python, MATLAB, C/C++ and MPI/OpenMP; supercomputing applied to exploration and production of hydrocarbons.",
      icon: "cpu",
    },
  ],

  // ------------------------------------------------------------ publications
  // type: "journal" | "conference" | "software"
  publications: [
    {
      type: "journal",
      year: 2025,
      title: "Evolutionary algorithms applied to minimize the thermal transport in atomic nanoribbons",
      authors: "J. E. González, G. B. Díaz-Cortés, R. M. del Castillo, R. Espejel, A. Calles",
      venue: "Computational Materials Science, 260, 114195",
      doi: "10.1016/j.commatsci.2025.114195",
      url: "https://www.sciencedirect.com/science/article/pii/S0927025625005385",
      featured: false,
      bibtex: `@article{Gonzalez25,
  author  = {González, J. E. and Díaz-Cortés, G. B. and del Castillo, R. M. and Espejel, R. and Calles, A.},
  title   = {Evolutionary algorithms applied to minimize the thermal transport in atomic nanoribbons},
  journal = {Computational Materials Science},
  year    = {2025}, volume = {260}, pages = {114195},
  doi     = {10.1016/j.commatsci.2025.114195}
}`,
    },
    {
      type: "journal",
      year: 2025,
      title: "Optimizing a Physics-Informed Neural Network (PINN) to solve the Reynolds Equation",
      authors: "Z. Sánchez-López, G. B. Díaz Cortés",
      venue: "Revista Mexicana de Física, 71(2), 020601",
      doi: "10.31349/RevMexFis.71.020601",
      url: "https://rmf.smf.mx/ojs/index.php/rmf/article/view/7467",
      notebook: "notebooks/Reynolds_Notebook.html",
      notebookDownload: "notebooks/Reynolds_Notebook.ipynb",
      image: "assets/img/pinn_reynolds.png",
      featured: true,
      bibtex: `@article{Sanchez25,
  author  = {Sánchez-López, Z. and Díaz Cortés, G. B.},
  title   = {Optimizing a Physics-Informed Neural Network (PINN) to solve the Reynolds Equation},
  journal = {Revista Mexicana de Física},
  year    = {2025}, volume = {71}, number = {2}, pages = {020601},
  doi     = {10.31349/RevMexFis.71.020601}
}`,
    },
    {
      type: "conference",
      year: 2025,
      title: "Modeling the Diffusion Equation with Physics-Informed Neural Networks (PINNs) and Artificial Neural Networks (ANNs)",
      authors: "Z. Sánchez, G. Díaz-Cortés, G. Domínguez-Zacarías, G. Fuentes-Cruz",
      venue: "Intl. Congress of Computer Science (ACSAR), Springer",
      code: "https://github.com/gbdiazc/PINN_Difussion_Equation",
      featured: true,
      bibtex: `@inproceedings{Sanchez2025modeling,
  author    = {Sánchez, Z. and Díaz-Cortés, G. and Domínguez-Zacarías, G. and Fuentes-Cruz, G.},
  title     = {Modeling the Diffusion Equation with Physics-Informed Neural Networks (PINNs) and Artificial Neural Networks (ANNs)},
  booktitle = {Proceedings of the International Congress of Computer Science (ACSAR)},
  year      = {2025}, organization = {Springer}
}`,
    },
    {
      type: "conference",
      year: 2025,
      title: "Physics-Informed Neural Networks for Approximating the Solution of the 1D Poisson Equation",
      authors: "E. Cabrera-Navarrete, G. Díaz-Cortés",
      venue: "Intl. Congress of Computer Science (ACSAR), Springer",
      code: "https://github.com/Eacanv/PoissonPINN_Notebook",
      featured: false,
      bibtex: `@inproceedings{Cabrera2025physics,
  author    = {Cabrera-Navarrete, E. and Díaz-Cortés, G.},
  title     = {Physics-Informed Neural Networks for Approximating the Solution of the 1D Poisson Equation},
  booktitle = {Proceedings of the International Congress of Computer Science (ACSAR)},
  year      = {2025}, organization = {Springer}
}`,
    },
    {
      type: "conference",
      year: 2023,
      title: "Deep Learning Model of Two-Phase Fluid Transport Through Fractured Media: A Real-World Case Study",
      authors: "L. Sheremetov, L. A. López-Peña, G. B. Díaz-Cortés, D. A. López-Falcón, E. E. Luna-Rojero",
      venue: "LOD 2023, Springer, 55–68",
      url: "https://doi.org/10.1007/978-3-031-53966-4_5",
      featured: false,
      bibtex: `@inproceedings{Sheremetov2023deep,
  author    = {Sheremetov, L. and López-Peña, L. A. and Díaz-Cortés, G. B. and López-Falcón, D. A. and Luna-Rojero, E. E.},
  title     = {Deep Learning Model of Two-Phase Fluid Transport Through Fractured Media: A Real-World Case Study},
  booktitle = {International Conference on Machine Learning, Optimization, and Data Science},
  year      = {2023}, pages = {55--68}, organization = {Springer}
}`,
    },
    {
      type: "journal",
      year: 2023,
      title: "A Novel Evolutionary Algorithm: One-Dimensional Subspaces Optimization Algorithm (1D-SOA)",
      authors: "G. B. Díaz-Cortés, R. Luna-García",
      venue: "Symmetry, 15(10), 1873",
      doi: "10.3390/sym15101873",
      url: "https://www.mdpi.com/2073-8994/15/10/1873",
      featured: false,
      bibtex: `@article{Diaz23,
  author  = {Díaz-Cortés, G. B. and Luna-García, R.},
  title   = {A Novel Evolutionary Algorithm: One-Dimensional Subspaces Optimization Algorithm (1D-SOA)},
  journal = {Symmetry},
  year    = {2023}, volume = {15}, number = {10}, pages = {1873},
  doi     = {10.3390/sym15101873}
}`,
    },
    {
      type: "journal",
      year: 2021,
      title: "Accelerating the solution of linear systems appearing in two-phase reservoir simulation by the use of POD-based deflation methods",
      authors: "G. B. Díaz Cortés, C. Vuik, J. D. Jansen",
      venue: "Computational Geosciences, 25",
      doi: "10.1007/s10596-021-10041-6",
      url: "https://doi.org/10.1007/s10596-021-10041-6",
      featured: true,
      bibtex: `@article{Diaz21,
  author  = {Díaz Cortés, G. B. and Vuik, C. and Jansen, J. D.},
  title   = {Accelerating the solution of linear systems appearing in two-phase reservoir simulation by the use of POD-based deflation methods},
  journal = {Computational Geosciences},
  year    = {2021}, volume = {25},
  doi     = {10.1007/s10596-021-10041-6}
}`,
    },
    {
      type: "journal",
      year: 2018,
      title: "On POD-based Deflation Vectors for DPCG applied to porous media problems",
      authors: "G. B. Díaz-Cortés, C. Vuik, J. D. Jansen",
      venue: "Journal of Computational and Applied Mathematics, 330, 193–213",
      doi: "10.1016/j.cam.2017.06.032",
      url: "https://doi.org/10.1016/j.cam.2017.06.032",
      featured: false,
      bibtex: `@article{Diaz18,
  author  = {Díaz-Cortés, G. B. and Vuik, C. and Jansen, J. D.},
  title   = {On POD-based Deflation Vectors for DPCG applied to porous media problems},
  journal = {Journal of Computational and Applied Mathematics},
  year    = {2018}, volume = {330}, pages = {193--213},
  doi     = {10.1016/j.cam.2017.06.032}
}`,
    },
    {
      type: "conference",
      year: 2018,
      title: "On the Acceleration of Ill-Conditioned Linear Systems: A POD-based Deflation Method for the Simulation of Two-Phase Flow",
      authors: "G. B. Díaz Cortés, J. D. Jansen, C. Vuik",
      venue: "ECMOR XVI, EAGE",
      url: "https://doi.org/10.3997/2214-4609.201802113",
      featured: false,
      bibtex: `@inproceedings{Diaz18a,
  author    = {Díaz Cortés, G. B. and Jansen, J. D. and Vuik, C.},
  title     = {On The Acceleration Of Ill-Conditioned Linear Systems: A POD-Based Deflation Method For The Simulation Of Two-Phase Flow},
  booktitle = {ECMOR XVI --- 16th European Conference on the Mathematics of Oil Recovery},
  year      = {2018}, organization = {EAGE}
}`,
    },
    {
      type: "conference",
      year: 2016,
      title: "Physics-based Pre-conditioners for Large-scale Subsurface Flow Simulation",
      authors: "G. B. Díaz Cortés, C. Vuik, J. D. Jansen",
      venue: "ECMOR XV, EAGE",
      url: "https://doi.org/10.3997/2214-4609.201601744",
      featured: false,
      bibtex: `@inproceedings{Diaz16,
  author    = {Díaz Cortés, G. B. and Vuik, C. and Jansen, J. D.},
  title     = {Physics-based Pre-conditioners for Large-scale Subsurface Flow Simulation},
  booktitle = {ECMOR XV --- 15th European Conference on the Mathematics of Oil Recovery},
  year      = {2016}, organization = {EAGE}
}`,
    },
    {
      type: "journal",
      year: 2014,
      title: "Expanded use of a fast photography technique to characterize laser-induced plasma plumes",
      authors: "M. A. Valverde-Alva, T. García-Fernández, G. Díaz-Cortés, et al.",
      venue: "Revista Mexicana de Física, 60(3), 195–204",
      url: "https://rmf.smf.mx/ojs/index.php/rmf/article/view/3703",
      featured: false,
      bibtex: `@article{Valverde14,
  author  = {Valverde-Alva, M. A. and García-Fernández, T. and Díaz-Cortés, G. and others},
  title   = {Expanded use of a fast photography technique to characterize laser-induced plasma plumes},
  journal = {Revista Mexicana de Física},
  year    = {2014}, volume = {60}, number = {3}, pages = {195--204}
}`,
    },
    // ---- software copyright registrations (shown under the Software filter)
    {
      type: "software",
      year: 2025,
      title: "Two-Phase Flow Simulator in Cylindrical Coordinates — Venturi Flow Pattern Enhancer & Water Coning",
      authors: "G. B. Díaz Cortés, L. A. López Peña",
      venue: "Registro Público del Derecho de Autor, No. 03-2025-071810114400-01",
      featured: false,
    },
    {
      type: "software",
      year: 2024,
      title: "Molar Gibbs Free Energy Optimization Algorithm with Linear Constraints (Python)",
      authors: "H. Aguilar Cisneros, B. Carreón Calderón, G. B. Díaz Cortés, L. A. López Peña",
      venue: "Registro Público del Derecho de Autor, IMP",
      featured: false,
    },
    {
      type: "software",
      year: 2024,
      title: "Computational Simulation of the Acid Stimulation of an Oil Well — Model, Implementation & Well-Test Validation",
      authors: "D. A. López Falcón, G. B. Díaz Cortés, et al.",
      venue: "Registro Público del Derecho de Autor, IMP",
      featured: false,
    },
    {
      type: "software",
      year: 2022,
      title: "Two-Phase Reservoir Simulation Near Wellbore — Cylindrical Coordinates & Petrophysical Information",
      authors: "G. B. Díaz Cortés, L. A. López Peña",
      venue: "Registro Público del Derecho de Autor, IMP",
      featured: false,
    },
    {
      type: "software",
      year: 2021,
      title: "Two-Phase Reservoir Simulation Near Wellbore — Polar Coordinates · Base Version · Acid Injection (3 registrations)",
      authors: "G. B. Díaz Cortés, L. A. López Peña",
      venue: "Registro Público del Derecho de Autor, IMP",
      featured: false,
    },
  ],

  // ---------------------------------------------------------------- projects
  projects: [
    {
      title: "Energy Transition Roadmap",
      period: "2025 – present",
      org: "IMP",
      text: "Technology roadmap for the Mexican energy transition: baselines, gap analysis and prospective scenarios.",
      tags: ["Roadmapping", "Energy"],
      theme: 0,
    },
    {
      title: "Geological Hydrogen in Mexico",
      period: "2025 – present",
      org: "IMP",
      text: "Prospective potential of natural (geological) hydrogen as a primary energy source in Mexico.",
      tags: ["Hydrogen", "Geosciences"],
      theme: 1,
    },
    {
      title: "AI for Fluid Dynamics Simulation",
      period: "2023 – 2025",
      org: "IMP",
      text: "Physics-informed neural networks and deep-learning surrogates for simulating fluid flow.",
      tags: ["PINNs", "Deep Learning"],
      theme: 2,
    },
    {
      title: "Water Coning Simulator with Venturi Systems",
      period: "2023 – 2025",
      org: "IMP",
      text: "AI-based simulator quantifying water coning in candidate wells for Venturi flow-pattern enhancers. Copyrighted software.",
      tags: ["Reservoir Simulation", "ML"],
      theme: 3,
    },
    {
      title: "Thermodynamics of Heavy Oils",
      period: "2022 – 2024",
      org: "IMP",
      text: "Functional-group characterization of heavy oils via constrained Gibbs free-energy optimization in Python.",
      tags: ["Thermodynamics", "Optimization"],
      theme: 4,
    },
    {
      title: "Near-Wellbore Simulation of Fractured Reservoirs",
      period: "2020 – 2022",
      org: "IMP",
      text: "Simulators for naturally fractured carbonate reservoirs with proxy models for acid stimulation design.",
      tags: ["Porous Media", "Simulation"],
      theme: 5,
    },
    {
      title: "AI for Vehicular Traffic Optimization",
      period: "2020 – 2021",
      org: "CIC-IPN",
      text: "Artificial intelligence techniques applied to the optimization of vehicular traffic modeling.",
      tags: ["Optimization", "AI"],
      theme: 0,
    },
    {
      title: "Supercomputing for Hydrocarbon E&P",
      period: "2018 – 2020",
      org: "IMP",
      text: "High-performance computing applied to the exploration and production of hydrocarbons.",
      tags: ["HPC", "Energy"],
      theme: 1,
    },
  ],

  // ------------------------------------------------------- career timeline
  timeline: [
    {
      year: "2018 — present",
      title: "Researcher",
      org: "Mexican Institute of Petroleum (IMP), Mexico City",
      text: "Reservoir simulation, AI for the energy sector, energy transition and geological hydrogen. Supervision of PhD/MSc students and Python teaching in the postgraduate program.",
      kind: "work",
    },
    {
      year: "2021 — 2024",
      title: "Visiting Professor, AI Laboratory",
      org: "Computing Research Center, CIC-IPN, Mexico City",
      text: "Research in artificial intelligence; taught Mathematical Methods and Linear Programming.",
      kind: "work",
    },
    {
      year: "2014 — 2019",
      title: "PhD, Applied Mathematics",
      org: "TU Delft, The Netherlands",
      text: "Thesis: POD-based deflation method for reservoir simulation. Advisors: C. Vuik & J. D. Jansen. Teaching assistant at EEMCS; SIAM Student Chapter secretary.",
      kind: "edu",
      link: "https://www.researchgate.net/publication/332330352_POD-based_deflation_method_for_reservoir_simulation",
      linkText: "View dissertation",
    },
    {
      year: "2011 — 2014",
      title: "MSc, Materials Science — Cum Laude (9.2)",
      org: "IIM, UNAM, Mexico City",
      text: "Thesis: Dynamic Speckle for Materials Characterization.",
      kind: "edu",
      link: "https://repositorio.unam.mx/contenidos/speckle-dinamico-para-la-caracterizacion-de-materiales-93426",
      linkText: "View thesis",
    },
    {
      year: "2005 — 2010",
      title: "BSc, Physics (Optics)",
      org: "Facultad de Ciencias, UNAM, Mexico City",
      text: "Thesis: Laser ablation of NiMnSn and NiMnIn alloys for thin films.",
      kind: "edu",
      link: "https://repositorio.unam.mx/contenidos/ablacion-laser-de-aleaciones-de-nimnsn-y-nimnin-para-la-obtencion-de-peliculas-delgadas-227295",
      linkText: "View thesis",
    },
  ],

  // ------------------------------------------------------------- supervision
  supervision: [
    { name: "Zoila Sánchez López", degree: "PhD · main tutor", topic: "AI techniques applied to the simulation of fluid dynamics", org: "IMP", status: "Graduated 2025", done: true },
    { name: "Emmanuel A. Cabrera Navarrete", degree: "PhD · main tutor", topic: "Physics-informed machine learning for fluid flow in porous media", org: "IMP", status: "2024 – present", done: false },
    { name: "Patricia Domínguez Ramírez", degree: "PhD · main tutor", topic: "Operating-window optimization through mathematical modeling & AI", org: "IMP", status: "2025 – present", done: false },
    { name: "Sindy D. Puerto Vargas", degree: "PhD · committee", topic: "AI models for hydrogen production from biomass gasification", org: "IMP", status: "Ongoing", done: false },
    { name: "Jenny Tjan", degree: "MSc · main tutor", topic: "Deflation techniques and POD methods for Krylov subspace acceleration", org: "TU Delft", status: "Graduated 2018", done: true },
    { name: "Rodrigo Vázquez Garduño", degree: "Internship · main tutor", topic: "Reservoir simulation", org: "IMP", status: "2022", done: true },
    { name: "Mario Espinosa Cortés", degree: "Internship · main tutor", topic: "Database management for bibliometric analysis", org: "IMP", status: "2023", done: true },
    { name: "Maitá Micol", degree: "Internship · co-tutor", topic: "High-energy emissions around black holes with AI techniques", org: "CBPF, Brazil", status: "2023", done: true },
  ],

  // ---------------------------------------------------------------- teaching
  teaching: [
    { course: "Basic Python Programming", org: "IMP postgraduate program", when: "2023 · 2025 · 2026", role: "Instructor" },
    { course: "Advanced Python Programming", org: "IMP postgraduate program", when: "2026", role: "Instructor" },
    { course: "Research Seminar", org: "IMP postgraduate program", when: "2023 – 2025 (spring & autumn)", role: "Instructor" },
    { course: "Introduction to Scientific Computing with Python", org: "IMP postgraduate program", when: "2023", role: "Instructor" },
    { course: "Mathematical Methods", org: "CIC-IPN", when: "2021", role: "Instructor" },
    { course: "Linear Programming", org: "CIC-IPN", when: "2021", role: "Instructor" },
    { course: "Computational Physics", org: "Facultad de Ciencias, UNAM", when: "2025", role: "Teaching assistant" },
    { course: "Fundamentals & Applications of Data Science", org: "IMP", when: "2021", role: "Teaching assistant" },
    { course: "Numerical Mathematics (practical work)", org: "EEMCS, TU Delft", when: "2014 – 2017", role: "Teaching assistant" },
    { course: "Differential Equations (practical work)", org: "EEMCS, TU Delft", when: "2015 – 2017", role: "Teaching assistant" },
    { course: "Electromagnetism Laboratory", org: "Facultad de Ciencias, UNAM", when: "2010 – 2014 (9 semesters)", role: "Teaching assistant" },
  ],

  // ------------------------------------------------------------------- talks
  talks: [
    { year: 2025, event: "CORE-CIC International Conference on Computer Science", where: "IPN, Mexico City", what: "2 talks — PINNs for the diffusion & Poisson equations" },
    { year: 2023, event: "XXIX Fluid Dynamics Conference, Mexican Physics Society", where: "Morelia, Mexico", what: "3 talks — water coning, acid stimulation, PINNs" },
    { year: 2023, event: "LOD — Machine Learning, Optimization & Data Science", where: "Lake District, UK", what: "Deep learning for two-phase transport in fractured media" },
    { year: 2023, event: "LACIAM — Latin American Conf. on Industrial & Applied Math", where: "Rio de Janeiro, Brazil", what: "Poster — metaheuristics for astrophysical blazar modeling" },
    { year: 2021, event: "SIAM Geosciences (GS21)", where: "Virtual", what: "POD-based deflation for two-phase reservoir simulation" },
    { year: 2021, event: "CARLA — Latin America High Performance Computing", where: "Virtual", what: "Poster — AI for vehicular flow optimization" },
    { year: 2018, event: "ECMOR XVI, EAGE", where: "Barcelona, Spain", what: "POD-based deflation for ill-conditioned two-phase systems" },
    { year: 2017, event: "SIAM Geosciences (GS17)", where: "Erlangen, Germany", what: "Minisymposium organizer + talk — Krylov-based deflation methods" },
    { year: 2017, event: "Intl. Conf. on Preconditioning Techniques", where: "Vancouver, Canada", what: "POD-based deflation for two-phase reservoir simulation" },
    { year: 2016, event: "ECMOR XV, EAGE", where: "Amsterdam, The Netherlands", what: "Physics-based preconditioners for subsurface flow" },
    { year: 2015, event: "Intl. Conf. on Preconditioning Techniques", where: "Eindhoven, The Netherlands", what: "Participant" },
    { year: 2018, event: "Woudschoten Conferences on Scientific Computing", where: "Zeist, The Netherlands", what: "39th–43rd editions (2014–2018)" },
  ],

  // ------------------------------------------------------- awards & training
  awards: [
    { year: 2022, title: "National Supercomputing Laboratory (LNS) Award", detail: "Computing grant — ML techniques applied to the modeling of physical systems." },
    { year: 2019, title: "National Standard of Competency EC0217", detail: "CONOCER certification for teaching in-person group training courses." },
    { year: 2018, title: "SIAM Student Chapter Certificate of Recognition", detail: "Service as secretary, TU Delft SIAM Student Chapter." },
    { year: 2014, title: "PhD Scholarship — CONACYT-SENER / IMP", detail: "Full doctoral scholarship, TU Delft (2014–2018)." },
    { year: 2011, title: "MSc Scholarship — CONACYT", detail: "Becas Nacionales for master's studies (2011–2013)." },
  ],

  certifications: [
    "Claude 101 · Claude Code 101 · Claude Code in Action · Claude Cowork — Anthropic Academy (2026)",
    "Advanced Scientific Programming in Python — UNAM (2023)",
    "Introduction to Machine Learning — Coursera · Duke University (2021)",
    "Data Science courses — Coursera · Johns Hopkins & U. Michigan (2021)",
    "Petrel Structural Modeling · ECLIPSE Advanced Topics — NExT, Schlumberger (2019)",
    "Machine Learning for Industry — CIC-IPN (2019)",
  ],

  languages: [
    { name: "Spanish", level: "Native", pct: 100 },
    { name: "English", level: "Fluent", pct: 95 },
    { name: "French", level: "Advanced", pct: 75 },
    { name: "German", level: "Basic", pct: 35 },
    { name: "Dutch", level: "Basic", pct: 35 },
  ],

  // -------------------------------------------------------------- notebooks
  // Interactive Jupyter notebooks shown in the Code & Notebooks section.
  notebooks: [
    {
      title: "PINN for the Reynolds Equation",
      description: "Full implementation of the physics-informed neural network from the Rev. Mex. Fís. paper — architecture, loss design and training.",
      view: "notebooks/Reynolds_Notebook.html",
      download: "notebooks/Reynolds_Notebook.ipynb",
      image: "assets/img/pinn_reynolds.png",
      tags: ["PyTorch", "PINNs"],
    },
    {
      title: "PINN for the Poisson Equation",
      description: "Physics-informed neural network solver for the Poisson equation with automatic differentiation and constraint optimization.",
      view: "notebooks/PoissonPINN.html",
      download: "notebooks/PoissonPINN.ipynb",
      image: "assets/img/pinn_poisson.png",
      tags: ["PyTorch", "PINNs"],
    },
    {
      title: "PINN for the 1D Diffusion Equation",
      description: "Complete PINN implementation for solving the one-dimensional diffusion equation with PyTorch, demonstrating physics-informed loss design.",
      view: "notebooks/Diffusion_Equation_1D.html",
      download: "notebooks/Diffusion_Equation_1D.ipynb",
      image: "assets/img/pinn_diffusion.png",
      tags: ["PyTorch", "PINNs"],
    },
  ],

  // Repos pinned first in the Code section (also fetched live from GitHub API)
  pinnedRepos: ["Reynolds_PINN_Notebook", "PINN_Difussion_Equation"],
};
