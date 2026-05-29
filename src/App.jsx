import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
function App() {
  const [showCradleMore, setShowCradleMore] = useState(false);
  const [showTrafficMore, setShowTrafficMore] = useState(false);
  const [showModulationMore, setShowModulationMore] = useState(false);
  const [showPharmacyMore, setShowPharmacyMore] = useState(false);
  const [showNetworkMore, setShowNetworkMore] = useState(false);
  const [showResearchMore, setShowResearchMore] = useState(false);
  const [showAMMore, setShowAMMore] = useState(false);
  const [showAdaptiveMore, setShowAdaptiveMore] = useState(false);
  const [showCounterMore, setShowCounterMore] = useState(false);
  const [showPIDMore, setShowPIDMore] = useState(false);
  const [showCarMore, setShowCarMore] = useState(false);
  const [showZabbixMore, setShowZabbixMore] = useState(false);
  return (
    <div className="min-h-screen bg-[#030b1b] text-white">

      {/* Navbar */}
<motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center pt-6 sticky top-0 z-50"
>
  <div className="flex gap-8 bg-[#0f172a]/90 backdrop-blur-md border border-gray-700 px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-500">

    <a
      href="#home"
      className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
    >
      Home
    </a>

    <a
      href="#about"
      className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
    >
      About
    </a>

    <a
  href="#education"
  className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
>
  Education
</a>

    <a
      href="#projects"
      className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
    >
      Projects
    </a>

    <a
      href="#skills"
      className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
    >
      Skills
    </a>

    <a
      href="#certificates"
      className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
    >
      Certificates
    </a>

    <a
      href="#contact"
      className="hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#60a5fa] transition-all duration-300"
    >
      Contact
    </a>

  </div>
</motion.nav>

      

{/* Hero Section */}
<section
  id="home"
  className="flex items-center justify-center px-6 py-24 min-h-screen"
>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center"
  >
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-44 h-44 rounded-full mx-auto mb-8 object-cover border border-gray-500 shadow-2xl float-animation hover:scale-105 transition duration-500"
    />

    <h1 className="text-7xl font-bold mb-4 hover:scale-105 transition duration-300">
      Jayamini Dissanayake
    </h1>

    <TypeAnimation
      sequence={[
        "Computer Systems Engineering Student",
        2000,
        "Embedded Systems Developer",
        2000,
        "Robotics Enthusiast",
        2000,
        "Networking Engineer",
        2000,
      ]}
      wrapper="h2"
      speed={50}
      repeat={Infinity}
      className="text-4xl text-gray-400 mb-6"
    />

    <p className="max-w-3xl text-gray-500 mx-auto mb-10 text-lg">
      I build embedded systems, networking projects,
      robotics, and modern web applications.
    </p>

    <div className="flex flex-wrap gap-5 justify-center">
      

      <a
        href="#contact"
        className="px-7 py-3 bg-white text-black rounded-full hover:bg-gray-300 hover:scale-110 transition-all duration-300"
      >
        Contact Me
      </a>

      <a
        href="/Jayamini_Dissanayake_Resume.pdf"
        download
        className="px-7 py-3 bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
      >
        Download CV
      </a>
    </div>
  </motion.div>
</section>

      <motion.section
  id="about"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="px-10 py-24"
>
  <div className="max-w-5xl mx-auto bg-[#0f172a] border border-gray-700 rounded-3xl p-12 shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500">

    <div className="flex justify-center mb-8">
  <motion.h2
    initial={{ opacity: 0, x: -150 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="text-5xl font-bold px-12 py-5 bg-[#0f172a] border border-gray-700 rounded-3xl shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
  >
    About Me
  </motion.h2>
</div>

    <p className="text-gray-400 text-xl leading-9 text-center max-w-4xl mx-auto">
      I am a passionate Computer Systems Engineering student with a strong
      interest in embedded systems, networking, robotics, and modern web
      development. I enjoy building practical and innovative projects using
      technologies such as Arduino, AVR microcontrollers, Cisco networking,
      React, and modern programming tools.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-12">

      <div className="bg-[#112240] p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-blue-400">10+</h3>
        <p className="text-gray-400">Projects</p>
      </div>

      <div className="bg-[#112240] p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-blue-400">4+</h3>
        <p className="text-gray-400">Technical Areas</p>
      </div>

      <div className="bg-[#112240] p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
        <h3 className="text-3xl font-bold text-blue-400">2027</h3>
        <p className="text-gray-400">Graduation</p>
      </div>

    </div>

  </div>
</motion.section>
{/* Education Section */}
<section id="education" className="px-10 py-24">
  <div className="max-w-6xl mx-auto">

    {/* Section Title */}
    <div className="flex justify-center mb-20">
      <motion.h2
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 50,
        }}
        viewport={{ once: true }}
        className="text-5xl font-bold px-12 py-5 bg-[#0f172a] border border-gray-700 rounded-3xl"
      >
        Education
      </motion.h2>
    </div>

    {/* Education Cards */}
    <div className="max-w-4xl mx-auto space-y-6">

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-[#0f172a] border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300"
>
  <div className="flex items-center gap-3 mb-3">
    <FaGraduationCap className="text-blue-400 text-3xl" />
    <h3 className="text-2xl font-semibold text-white">
      BSc (Hons) in Computer Systems Engineering
    </h3>
  </div>

  <p className="text-blue-300 mt-2">
    Sri Lanka Institute of Information Technology (SLIIT)
  </p>

  <p className="text-gray-400 mt-2">
    2023 - 2027
  </p>
</motion.div>

      {/* A/L */}
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-[#0f172a] border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300"
>
  <div className="flex items-center gap-3 mb-3">
    <FaSchool className="text-blue-400 text-3xl" />
    <h3 className="text-2xl font-semibold text-white">
      G.C.E. Advanced Level
    </h3>
  </div>

  <p className="text-blue-300 mt-2">
    Physical Science Stream
  </p>

  <p className="text-gray-400 mt-2">
    2022 - 2023
  </p>
</motion.div>

    </div>

  </div>
</section>

      {/* Projects Section */}
<section
  id="projects"
  className="px-10 py-24"
>
  <div className="max-w-6xl mx-auto">

    <div className="flex justify-center mb-20">
      <motion.h2
  initial={{ opacity: 0, x: -300 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.5,
    type: "spring",
    stiffness: 50,
  }}
  viewport={{ once: true }}
  className="text-5xl font-bold px-12 py-5 bg-[#0f172a] border border-gray-700 rounded-3xl"
>
  Projects
</motion.h2>
    </div>


{/* 1st Year */}
<div className="mb-20">

  <h3 className="text-3xl font-bold text-blue-400 mb-8">
    1st Year Projects
  </h3>

  {/* Project Grid */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* CradleBot */}
    <div className="bg-[#0f172a] border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition duration-300">

      <img
        src="/bot.jpg"
        alt="CradleBot"
        className="w-full h-[180px] object-cover"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold mb-4">
          CradleBot – Smart Automated Baby Cradle System
        </h4>

        <p className="text-gray-400 leading-7 text-sm mb-5">
  Designed and developed an automated smart cradle system capable of
  detecting baby cries and initiating automatic rocking motion using
  Arduino, sensors, and servo motor control.
</p>

{showCradleMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The project integrated sound and moisture sensors for real-time
    infant monitoring while utilizing servo motor–based cradle movement
    for smooth automated rocking.

    <br /><br />

    An MP3 module was integrated to play soothing lullabies for infant
    comfort. The embedded control logic was programmed using Arduino,
    enabling real-time sensor processing, automation, and efficient
    hardware–software interaction.
  </p>
)}

<button
  onClick={() => setShowCradleMore(!showCradleMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showCradleMore ? "Hide Details ←" : "View Details →"}
</button>

        <div className="flex flex-wrap gap-2">

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Arduino
          </span>

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Sensors
          </span>

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Automation
          </span>

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Embedded Systems
          </span>

        </div>

      </div>

    </div>

    {/* Traffic Light */}
    <div className="bg-[#0f172a] border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition duration-300">

      <img
        src="/traffic2.jpg"
        alt="Traffic Light System"
        className="w-full h-[220px] object-cover"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold mb-4">
          Smart Traffic Light Control System
        </h4>

        <p className="text-gray-400 leading-7 text-sm mb-5">
  Developed an NE555 timer–based traffic light control system with
  adjustable timing intervals, LED sequencing, and practical circuit
  design implementation.
</p>

{showTrafficMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The system controlled red, yellow, and green LED transitions with
    adjustable timing intervals using potentiometers. Developed the
    complete circuit design, breadboard implementation, soldering,
    testing, and troubleshooting processes while applying digital
    electronics and timing circuit principles.

    <br /><br />

    The project improved understanding of sequential timing operations,
    hardware circuit integration, and practical electronic system design.
  </p>
)}

<button
  onClick={() => setShowTrafficMore(!showTrafficMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showTrafficMore ? "Hide Details ←" : "View Details →"}
</button>

        <div className="flex flex-wrap gap-2">

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            NE555 Timer
          </span>

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Electronics
          </span>

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Circuit Design
          </span>

          <span className="bg-[#112240] border border-gray-700 px-3 py-1 rounded-full text-sm">
            Hardware Testing
          </span>

        </div>

      </div>

    </div>

  </div>

</div>




{/* 2nd Year */}
<div className="mb-24">

  <h3 className="text-4xl font-bold text-blue-400 mb-10">
    2nd Year Projects
  </h3>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Wireless Communication */}
    <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

      <img
        src="/bergraph.jpg"
        alt="Wireless Communication"
        className="w-full h-[260px] object-cover bg-white"
      />

      <div className="p-6">

        <h4 className="text-2xl font-bold mb-5">
          Adaptive Modulation in Wireless Communication
        </h4>

        <p className="text-gray-400 leading-7 text-sm mb-5">
  Simulated adaptive digital communication systems in MATLAB to
  evaluate BPSK performance under Rayleigh, Rician, and Lognormal
  fading channels.
</p>

{showModulationMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The project analyzed Bit Error Rate (BER) versus Signal-to-Noise
    Ratio (SNR) performance under different wireless channel models.
    Adaptive modulation techniques and channel equalization methods
    were implemented to improve communication reliability.

    <br /><br />

    MATLAB simulations were used to compare channel behavior,
    evaluate system performance, and study the impact of fading
    effects on digital communication systems. The project enhanced
    understanding of wireless propagation, signal processing,
    modulation techniques, and communication system design.
  </p>
)}

<button
  onClick={() => setShowModulationMore(!showModulationMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showModulationMore ? "Hide Details ←" : "View Details →"}
</button>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            MATLAB
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            Wireless Communication
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            BPSK
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            BER Analysis
          </span>

        </div>

      </div>

    </div>

    {/* Pharmacy Management */}
    <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

      <img
        src="/pharmacydashboard.jpg"
        alt="Pharmacy Management System"
        className="w-full h-[260px] object-cover"
      />

      <div className="p-6">

        <h4 className="text-2xl font-bold mb-5">
          Pharmacy Management System
        </h4>

        <p className="text-gray-400 leading-7 text-sm mb-5">
  Developed a full-stack Pharmacy Management System using Spring Boot,
  React, and MySQL to manage medicines, prescriptions, inventory,
  customer orders, and pharmacy operations.
</p>

{showPharmacyMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The system featured role-based user management for administrators,
    pharmacists, and customers, secure authentication, inventory
    management, prescription and order handling, sales reporting,
    low-stock alerts, expiry monitoring, and administrative dashboards.

    <br /><br />

    RESTful APIs were developed using Spring Boot and tested with
    Postman, while React was used to create responsive user interfaces.
    MySQL was utilized for data storage and management. The project
    improved understanding of full-stack development, database design,
    API integration, authentication, and enterprise application
    architecture.
  </p>
)}

<button
  onClick={() => setShowPharmacyMore(!showPharmacyMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showPharmacyMore ? "Hide Details ←" : "View Details →"}
</button>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            Spring Boot
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            React
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            MySQL
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            REST APIs
          </span>

        </div>

      </div>

    </div>
    {/* Pharmacy Network Infrastructure */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <div className="p-6">

    <h4 className="text-2xl font-bold mb-5">
      Pharmacy & Medical Center Network Infrastructure Design
    </h4>
      <p className="text-gray-400 leading-7 text-sm mb-5">
  Designed a complete wired and wireless network infrastructure for a
  pharmacy and medical center, focusing on secure, reliable, and
  high-speed connectivity for healthcare operations.
</p>

{showNetworkMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    Developed both logical and physical network designs using a star
    topology to improve scalability, stability, and performance.
    Integrated routers, switches, wireless access points, servers,
    and printers using Cat6 UTP cabling and Gigabit Ethernet links.

    <br /><br />

    Implemented VLAN segmentation, firewall protection, Wi-Fi coverage
    planning, floor planning, structured cabling, and equipment
    selection. Devices including MikroTik routers, TP-Link smart
    switches, Ubiquiti access points, UPS systems, and patch panels
    were selected to create a secure and future-ready healthcare
    network infrastructure.
  </p>
)}

<button
  onClick={() => setShowNetworkMore(!showNetworkMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showNetworkMore ? "Hide Details ←" : "View Details →"}
</button>


    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Networking
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        VLAN
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        MikroTik
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Network Design
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Wi-Fi Planning
      </span>

    </div>

  </div>

</div>
{/* Research Project */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <div className="p-6">

    <h4 className="text-2xl font-bold mb-5">
      Research Study on Vehicle Purchasing Trends in Sri Lanka
    </h4>

    <p className="text-gray-400 leading-7 text-sm mb-5">
  Conducted a research study on the impact of vehicle taxation policies
  on consumer purchasing decisions in Sri Lanka, focusing on preferences
  between new and pre-owned vehicles.
</p>

{showResearchMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    Designed and distributed a structured survey to collect data on
    affordability, resale value, fuel efficiency, maintenance costs,
    environmental concerns, and government tax policies affecting
    vehicle purchasing behavior.

    <br /><br />

    Applied probability and statistical analysis techniques to evaluate
    survey responses, identify consumer behavior patterns, and examine
    market trends. The research provided insights into how taxation and
    economic conditions influence vehicle purchasing decisions among
    Sri Lankan consumers.
  </p>
)}

<button
  onClick={() => setShowResearchMore(!showResearchMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showResearchMore ? "Hide Details ←" : "View Details →"}
</button>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Research
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Statistics
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Survey Analysis
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Data Collection
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Probability
      </span>

    </div>

  </div>

</div>
{/* AM Broadcast Receiver Project */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <img
    src="/ammmm.jpg"
    alt="AM Broadcast Receiver Circuit"
    className="w-full h-[240px] object-cover"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold mb-5">
      AM Broadcast Receiver – Audio Output Circuit
    </h4>

    <p className="text-gray-400 leading-7 text-sm mb-5">
  Designed and implemented the audio output stage of an AM broadcast
  receiver using discrete analog components, focusing on signal
  amplification, filtering, and audio output performance.
</p>

{showAMMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The project included RC-based high-pass and low-pass filters,
    a common-emitter BJT amplifier, and an emitter-follower buffer
    stage for signal isolation and amplification. The complete
    circuit was constructed on a dot board without using op-amps,
    integrated circuits, or transformers.

    <br /><br />

    Oscilloscope testing and signal analysis were performed to verify
    cutoff frequencies, voltage gain, signal amplification, and audio
    clarity. The project strengthened practical knowledge of BJT
    small-signal analysis, analog circuit design, and electronic
    circuit implementation.
  </p>
)}

<button
  onClick={() => setShowAMMore(!showAMMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showAMMore ? "Hide Details ←" : "View Details →"}
</button>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Analog Electronics
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        BJT Amplifier
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        RC Filters
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Oscilloscope Analysis
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Circuit Design
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Hardware Testing
      </span>

    </div>

  </div>

</div>
{/* Adaptive Modulation Research Project */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition duration-300">

  <h4 className="text-2xl font-bold mb-5">
    Simulation and Evaluation of Adaptive Modulation under Varying Wireless Channel Conditions
  </h4>

  <p className="text-gray-400 leading-7 text-sm mb-5">
  Developed and simulated an adaptive wireless communication system
  in MATLAB using BPSK, QPSK, and 16-QAM modulation techniques to
  improve communication reliability and spectral efficiency.
</p>

{showAdaptiveMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The system dynamically selected the most suitable modulation
    scheme based on wireless channel quality using threshold-based
    adaptive logic. Performance was evaluated under Rayleigh and
    Rician fading environments through BER versus SNR analysis.

    <br /><br />

    MATLAB simulations were used to compare modulation performance,
    study fading channel effects, and optimize communication
    efficiency. The project enhanced understanding of adaptive
    communication systems, wireless propagation, modulation
    techniques, and modern LTE and Wi-Fi communication technologies.
  </p>
)}

<button
  onClick={() => setShowAdaptiveMore(!showAdaptiveMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showAdaptiveMore ? "Hide Details ←" : "View Details →"}
</button>

  <div className="flex flex-wrap gap-3">

    <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
      MATLAB
    </span>

    <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
      Wireless Communication
    </span>

    <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
      Adaptive Modulation
    </span>

    <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
      BER Analysis
    </span>

    <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
      Rayleigh & Rician Channels
    </span>

  </div>

</div>
{/* Digital Counter System Project */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <img
    src="/counterproject.jpg"
    alt="Digital Counter System"
    className="w-full h-[260px] object-cover"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold mb-5">
      Design and Implementation of a 1-Digit Decimal Up Counter Using D Flip-Flops
    </h4>

    <p className="text-gray-400 leading-7 text-sm mb-5">
  Designed and implemented a 1-digit decimal up counter using 74HC74
  D flip-flops, featuring automatic counting from 0 to 9 and display
  output through a seven-segment display.
</p>

{showCounterMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The counter was configured as an asynchronous ripple counter with
    automatic reset functionality after reaching the decimal count limit.
    A BCD-to-7-segment decoder was used to convert binary outputs into
    readable decimal digits.

    <br /><br />

    The project included Proteus simulation, EasyEDA PCB design,
    PCB layout generation, and enclosure modeling. Additional
    pause/resume and asynchronous reset controls were implemented
    using push buttons. The project strengthened knowledge of
    digital logic design, flip-flop operation, PCB development,
    timing analysis, and practical hardware implementation.
  </p>
)}

<button
  onClick={() => setShowCounterMore(!showCounterMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showCounterMore ? "Hide Details ←" : "View Details →"}
</button>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Digital Electronics
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        D Flip-Flops
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Proteus
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        EasyEDA
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        PCB Design
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        System Prototyping
      </span>

    </div>

  </div>

</div>

  </div>

</div>
          {/* 3rd Year */}
<div className="mb-24">

  <h3 className="text-4xl font-bold text-blue-400 mb-10">
    3rd Year Projects
  </h3>

  <div className="grid md:grid-cols-2 gap-8">

    {/* PID Motor Project */}
    <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.01] transition duration-300">

      <img
        src="/pidmotor.jpg"
        alt="PID Controlled DC Motor"
        className="w-full h-[260px] object-cover"
      />

      <div className="p-6">

        <h4 className="text-2xl font-bold mb-5">
          PID-Controlled DC Motor Stabilization System
        </h4>

        <p className="text-gray-400 leading-7 text-sm mb-5">
  Designed and implemented a real-time PID-controlled DC motor
  stabilization system using Raspberry Pi 4, encoder feedback,
  and a custom PCB for precise speed regulation.
</p>

{showPIDMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The project focused on DC motor modelling, PID controller tuning,
    encoder feedback acquisition, disturbance rejection, and real-time
    speed control analysis to achieve stable motor performance.

    <br /><br />

    The system utilized a 12V brushed DC motor, optical rotary encoder,
    L298N motor driver, and a Raspberry Pi–based control algorithm.
    Performance was evaluated using settling time, overshoot, steady-state
    error, and response stability, improving understanding of control
    systems, embedded programming, feedback control, and real-time
    engineering applications.
  </p>
)}

<button
  onClick={() => setShowPIDMore(!showPIDMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showPIDMore ? "Hide Details ←" : "View Details →"}
</button>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            Raspberry Pi
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            PID Control
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            Embedded Systems
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            PCB Design
          </span>

          <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
            Python
          </span>

        </div>

      </div>

    </div>

    {/* Arduino Line Following Car */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.01] transition duration-300">

  <img
    src="/carproject.jpg"
    alt="Arduino Line Following Car"
    className="w-full h-[260px] object-cover"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold mb-5">
      Autonomous Line Following & Parking Arduino Car
    </h4>

    <p className="text-gray-400 leading-7 text-sm mb-5">
  Developed an autonomous Arduino-based vehicle capable of line
  following and automatic parking using sensor-driven navigation
  and real-time embedded control.
</p>

{showCarMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    The vehicle was designed to follow a rounded rectangular track
    and automatically park in a selected parking bay using IR sensors
    for line tracking and parking space detection.

    <br /><br />

    Real-time decision making and motor control were implemented
    entirely in AVR Assembly language on the Arduino Uno platform.
    The project also involved chassis assembly, sensor integration,
    testing, debugging, and performance evaluation of autonomous
    navigation and intelligent parking algorithms.
  </p>
)}

<button
  onClick={() => setShowCarMore(!showCarMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showCarMore ? "Hide Details ←" : "View Details →"}
</button>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Arduino Uno
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        AVR Assembly
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Embedded Systems
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Autonomous Vehicle
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Sensor Integration
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Robotics
      </span>

    </div>

  </div>

</div>
{/* Zabbix Enterprise Monitoring Project */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.01] transition duration-300">

  <img
    src="/zabbix.jpg"
    alt="Zabbix Monitoring System"
    className="w-full h-[260px] object-cover"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold mb-5">
      Zabbix Enterprise Monitoring System
    </h4>

    <p className="text-gray-400 leading-7 text-sm mb-5">
  Implemented a real-time monitoring environment using Zabbix Server,
  Ubuntu, and CentOS to monitor system performance, network activity,
  and server health in Linux-based environments.
</p>

{showZabbixMore && (
  <p className="text-gray-400 leading-7 text-sm mb-5">
    Configured Zabbix Server, Zabbix Agents, SNMP communication,
    firewall rules, and monitoring dashboards to collect and analyze
    system and network performance metrics.

    <br /><br />

    Performed troubleshooting, stress testing, trigger validation,
    alert configuration, and live monitoring to evaluate system
    reliability and monitoring accuracy. The project enhanced
    knowledge of Linux server administration, network monitoring,
    performance analysis, and enterprise monitoring solutions.
  </p>
)}

<button
  onClick={() => setShowZabbixMore(!showZabbixMore)}
  className="text-blue-400 hover:text-blue-300 font-medium transition mb-4"
>
  {showZabbixMore ? "Hide Details ←" : "View Details →"}
</button>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Zabbix
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Linux
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Ubuntu
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        CentOS
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        SNMP
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        System Monitoring
      </span>

    </div>

  </div>

</div>

  </div>

</div>

          

          {/* 4th Year */}
          <div>

            <h3 className="text-4xl font-bold text-blue-400 mb-10">
              4th Year Projects
            </h3>

            <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-12 text-center text-gray-400 text-2xl">
              Currently progressing through the 3rd year of the Computer Systems Engineering degree. The Final Year Research Project will be added here once the research topic is finalized.
            </div>

          </div>

        </div>
        

      </section>

{/* Skills */}
<section
  id="skills"
  className="px-10 py-24"
>

  <div className="max-w-6xl mx-auto">

    <div className="flex justify-center mb-16">
  <motion.h2
    initial={{ opacity: 0, x: -250 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.5,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="text-5xl font-bold px-12 py-5 bg-[#0f172a] border border-gray-700 rounded-3xl shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
  >
    Technical Skills
  </motion.h2>
</div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Programming */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-8">

        <h3 className="text-2xl font-bold text-blue-400 mb-6">
          Programming & Development
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Java
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Python
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            JavaScript
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Spring Boot
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            React
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            REST APIs
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            MySQL
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            OOP
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            C
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            C++
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            JWT Authentication
          </span>

        </div>

      </div>

      {/* Embedded Systems */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-8">

        <h3 className="text-2xl font-bold text-blue-400 mb-6">
          Embedded Systems & Electronics
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Arduino
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            AVR Concepts
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Raspberry Pi
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Sensor Integration
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Embedded Systems
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            PCB Design
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Digital Logic Design
          </span>

        </div>

      </div>

      {/* Control Systems */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-8">

        <h3 className="text-2xl font-bold text-blue-400 mb-6">
          Control Systems
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            PID Controllers
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Feedback Systems
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Real-Time Systems
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Automation
          </span>

        </div>

      </div>

      {/* Networking */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-8">

        <h3 className="text-2xl font-bold text-blue-400 mb-6">
          Networking & Systems
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Networking
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Subnetting
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Linux
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Ubuntu
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            CentOS
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Zabbix
          </span>

        </div>

      </div>

      {/* Tools */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-8 md:col-span-2">

        <h3 className="text-2xl font-bold text-blue-400 mb-6">
          Tools & Platforms
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Git/GitHub
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            VS Code
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Eclipse
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Google Cloud Platform
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            EasyEDA
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Debugging
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            Troubleshooting
          </span>

          <span className="bg-[#112240] px-5 py-2 rounded-full border border-gray-700">
            System Testing
          </span>

        </div>

      </div>

    </div>

  </div>

</section>

  {/* Certificates */}
<section
  id="certificates"
  className="px-10 py-24"
>

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-center mb-16">
  <motion.h2
    initial={{ opacity: 0, x: -150 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="text-5xl font-bold px-12 py-5 bg-[#0f172a] border border-gray-700 rounded-3xl shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
  >
    Certifications
  </motion.h2>
</div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* AI/ML */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

        <img
          src="/aiml.jpg"
          alt="AI ML Stage 1 Certificate"
          className="w-full h-[240px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            AI/ML Engineer - Stage 1
          </h3>

          <p className="text-gray-400 mb-4">
            SLIIT Faculty of Computing
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              AI/ML
            </span>

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Python
            </span>

          </div>

        </div>

      </div>
      {/* AI/ML Stage 2 */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <img
    src="/aiml2.jpg"
    alt="AI ML Stage 2 Certificate"
    className="w-full h-[240px] object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold mb-3">
      AI/ML Engineer - Stage 2
    </h3>

    <p className="text-gray-400 mb-4">
      SLIIT Faculty of Computing
    </p>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        AI/ML
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Machine Learning
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Python
      </span>

    </div>

  </div>

</div>

      {/* Cisco */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

        <img
          src="/cisco.jpg"
          alt="Cisco Certificate"
          className="w-full h-[240px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Network Support and Security
          </h3>

          <p className="text-gray-400 mb-4">
            Cisco Networking Academy
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Networking
            </span>

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Security
            </span>

          </div>

        </div>

      </div>

      {/* Python for Beginners */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

        <img
          src="/python1.jpg"
          alt="Python Beginners Certificate"
          className="w-full h-[240px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Python for Beginners
          </h3>

          <p className="text-gray-400 mb-4">
            University of Moratuwa
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Programming
            </span>

          </div>

        </div>

      </div>

      {/* Python Programming */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

        <img
          src="/python2.jpg"
          alt="Python Programming Certificate"
          className="w-full h-[240px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Python Programming
          </h3>

          <p className="text-gray-400 mb-4">
            University of Moratuwa
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Coding
            </span>

          </div>

        </div>

      </div>

      {/* NMAP */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

        <img
          src="/nmap.jpg"
          alt="NMAP Certificate"
          className="w-full h-[240px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Real NMAP: Network Scanning
          </h3>

          <p className="text-gray-400 mb-4">
            Udemy
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              NMAP
            </span>

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Cyber Security
            </span>

          </div>

        </div>

      </div>
      {/* Software Architecture */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <img
    src="/softwarearchitecture.jpg"
    alt="Software Architecture Certificate"
    className="w-full h-[240px] object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold mb-3">
      Software Architecture
    </h3>

    <p className="text-gray-400 mb-4">
      Udemy
    </p>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Software Architecture
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        System Design
      </span>

    </div>

  </div>

</div>

{/* Software Engineering */}
<div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

  <img
    src="/softwareengineering.jpg"
    alt="Software Engineering Certificate"
    className="w-full h-[240px] object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold mb-3">
      Introduction to Software Engineering
    </h3>

    <p className="text-gray-400 mb-4">
      Udemy
    </p>

    <div className="flex flex-wrap gap-3">

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Software Engineering
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        SDLC
      </span>

      <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
        Development
      </span>

    </div>

  </div>

</div>

      {/* Web Design */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

        <img
          src="/webdesign.jpg"
          alt="Web Design Certificate"
          className="w-full h-[240px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Web Design for Beginners
          </h3>

          <p className="text-gray-400 mb-4">
            University of Moratuwa
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              Web Design
            </span>

            <span className="bg-[#112240] border border-gray-700 px-4 py-2 rounded-full">
              HTML/CSS
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Contact */}
<section
  id="contact"
  className="px-10 py-24"
>

  <div className="max-w-5xl mx-auto bg-[#0f172a] border border-gray-700 rounded-3xl p-12">

    <div className="flex justify-center mb-8">
  <motion.h2
    initial={{ opacity: 0, x: -250 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1,
      ease: "linear"
    }}
    viewport={{ once: true }}
    className="text-5xl font-bold px-12 py-5 bg-[#112240] border border-gray-700 rounded-3xl shadow-xl"
  >
    Contact Me
  </motion.h2>
</div>

    <p className="text-gray-400 text-center mb-12 text-lg">
      Feel free to contact me for internships, collaborations,
      networking opportunities, and software or embedded systems projects.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Phone */}
      <div className="bg-[#112240] border border-gray-700 rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-blue-400 mb-3">
          Phone
        </h3>

        <p className="text-gray-300">
          +94 76 836 8986
        </p>

      </div>

      {/* Email */}
      <div className="bg-[#112240] border border-gray-700 rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-blue-400 mb-3">
          Email
        </h3>

        <a
          href="mailto:jayaminitharushika637@gmail.com"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          jayaminitharushika637@gmail.com
        </a>

      </div>

      {/* GitHub */}
      <div className="bg-[#112240] border border-gray-700 rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-blue-400 mb-3">
          GitHub
        </h3>

        <a
          href="https://github.com/dissaanayake-23"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          github.com/dissaanayake-23
        </a>

      </div>

      {/* LinkedIn */}
      <div className="bg-[#112240] border border-gray-700 rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-blue-400 mb-3">
          LinkedIn
        </h3>

        <a
          href="https://www.linkedin.com/in/jayamini-dissanayake-6806812b6/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          LinkedIn Profile
        </a>

      </div>

    </div>

  </div>

</section>

    </div>
  )
}

export default App