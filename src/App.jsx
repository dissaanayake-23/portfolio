function App() {
  return (
    <div className="min-h-screen bg-[#030b1b] text-white">

      {/* Navbar */}
      <nav className="flex justify-center pt-6 sticky top-0 z-50">

        <div className="flex gap-8 bg-[#0f172a]/90 backdrop-blur-md border border-gray-700 px-8 py-4 rounded-full shadow-lg">

          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#certificates" className="hover:text-blue-400 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center px-6 py-24"
      >

        <div className="text-center">

          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-44 h-44 rounded-full mx-auto mb-8 object-cover border border-gray-500 shadow-2xl"
          />

          <h1 className="text-7xl font-bold mb-4">
            Jayamini Dissanayake
          </h1>

          <h2 className="text-4xl text-gray-400 mb-6">
            Computer Systems Engineering Student
          </h2>

          <p className="max-w-3xl text-gray-500 mx-auto mb-10 text-lg">
            I build embedded systems, networking projects,
            robotics, and modern web applications.
          </p>

          <div className="flex gap-5 justify-center">

            <a
              href="#about"
              className="px-7 py-3 bg-[#112240] border border-gray-700 rounded-full hover:bg-[#1d3557] transition"
            >
              About Me
            </a>

            <a
              href="#contact"
              className="px-7 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition"
            >
              Contact Me
            </a>

            <a
              href="/Jayamini__Dissanayake.pdf"
              download
              className="px-7 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
              Download CV
            </a>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-10 py-24"
      >

        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-gray-700 rounded-3xl p-12 shadow-xl">

          <h2 className="text-5xl font-bold mb-8 text-center">
            About Me
          </h2>

          <p className="text-gray-400 text-xl leading-9 text-center max-w-4xl mx-auto">
            I am a passionate Computer Systems Engineering student with a strong
            interest in embedded systems, networking, robotics, and modern web
            development. I enjoy building practical and innovative projects using
            technologies such as Arduino, AVR microcontrollers, Cisco networking,
            React, and modern programming tools.
          </p>

        </div>

      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="px-10 py-24"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20">
            Projects
          </h2>


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
        className="w-full h-[220px] object-cover"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold mb-4">
          CradleBot – Smart Automated Baby Cradle System
        </h4>

        <p className="text-gray-400 leading-7 text-sm mb-5">
          Designed and developed an automated smart cradle system capable of
          detecting baby cries and initiating automatic rocking motion.
          The project integrated sound and moisture sensors for real-time
          infant monitoring while utilizing servo motor–based cradle movement
          for smooth automated rocking.

          An MP3 module was integrated to play soothing lullabies for infant
          comfort. The embedded control logic was programmed using Arduino,
          enabling real-time sensor processing, automation, and efficient
          hardware–software interaction.
        </p>

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
          Designed and implemented an intelligent traffic light control system
          using NE555 timer ICs and electronic components to simulate
          automated road traffic management.

          The system controlled red, yellow, and green LED transitions with
          adjustable timing intervals using potentiometers. Developed the
          complete circuit design, breadboard implementation, soldering,
          testing, and troubleshooting processes while applying digital
          electronics and timing circuit principles.

          The project improved understanding of sequential timing operations,
          hardware circuit integration, and practical electronic system design.
        </p>

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

        <p className="text-gray-400 leading-9 text-lg mb-6">
          Simulated and evaluated adaptive digital modulation techniques
          under Rayleigh, Rician, and Lognormal fading channels using MATLAB.

          The project analyzed BER vs SNR performance for BPSK modulation
          with channel equalization to study communication reliability
          under varying wireless channel conditions.
        </p>

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

        <p className="text-gray-400 leading-9 text-lg mb-6">
          Developed a full-stack Pharmacy Management System using
          Spring Boot, React, and MySQL for managing medicines,
          prescriptions, inventory, and customer orders.

          Implemented secure authentication, inventory monitoring,
          sales reporting, and an admin dashboard for efficient
          pharmacy operations management.
        </p>

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
      <p className="text-gray-400 leading-7 text-sm mb-4">
    Designed a complete wired and wireless network infrastructure for a
    pharmacy integrated with a medical center. The project focused on
    providing reliable, secure, and high-speed connectivity to support
    patient record management, prescription handling, communication
    between departments, internet access, and file sharing within
    the facility.
  </p>

  <p className="text-gray-400 leading-7 text-sm mb-4">
    The network design included both logical and physical layouts using
    a star topology for improved scalability, stability, and performance.
    Networking devices such as routers, switches, wireless access points,
    servers, and printers were connected using Cat6 UTP cabling and
    Gigabit Ethernet links.
  </p>

  <p className="text-gray-400 leading-7 text-sm mb-5">
    Security features including VLAN configuration and firewall protection
    were implemented to improve network security, traffic segmentation,
    and efficient resource management. The project also included equipment
    selection, floor planning, cabling design, Wi-Fi coverage planning,
    and cost estimation.

    Devices such as MikroTik routers, TP-Link smart switches, Ubiquiti
    access points, UPS systems, and patch panels were selected based on
    performance, reliability, and scalability, creating a future-ready
    network solution for healthcare environments.
  </p>


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

    <p className="text-gray-400 leading-8 text-lg mb-5">
      Conducted a research study to analyze how recent tax increases on
      brand-new vehicles influence purchasing decisions among Sri Lankan
      consumers. The research focused on identifying whether people prefer
      new or pre-owned vehicles under changing economic and taxation
      conditions.
    </p>

    <p className="text-gray-400 leading-8 text-lg mb-6">
      Designed and distributed a structured survey to collect data related
      to affordability, resale value, fuel efficiency, maintenance cost,
      environmental concerns, and government tax policies. The collected
      responses were analyzed using probability and statistical methods to
      identify consumer behavior patterns and market trends in Sri Lanka.
    </p>

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

    <p className="text-gray-400 leading-8 text-lg mb-5">
      Designed, built, and tested the audio output stage of a basic
      AM broadcast receiver using fully discrete analog components.
      The project was developed as part of Analog Electronics practical
      work together with Sasindu Lakshitha.
    </p>

    <p className="text-gray-400 leading-8 text-lg mb-6">
      The system included RC-based high-pass and low-pass filters,
      a common-emitter BJT amplifier, and an emitter-follower buffer
      stage for signal isolation and amplification. The complete
      circuit was implemented on a dot board without using op-amps,
      integrated circuits, or transformers.

      Oscilloscope testing and signal analysis were carried out to
      verify cutoff frequencies, voltage gain, signal amplification,
      and audio clarity while applying BJT small-signal analysis
      and analog circuit design principles.
    </p>

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

  <p className="text-gray-400 leading-8 text-lg mb-5">
    Conducted a research and simulation study on adaptive wireless
    communication systems using MATLAB. The project focused on
    dynamically switching between BPSK, QPSK, and 16-QAM modulation
    techniques according to wireless channel quality in order to
    balance communication reliability and spectral efficiency.
  </p>

  <p className="text-gray-400 leading-8 text-lg mb-6">
    The system was evaluated under Rayleigh and Rician fading
    environments using BER vs SNR performance analysis. Threshold-based
    adaptive logic was implemented to automatically select the most
    suitable modulation technique based on channel conditions. The
    research improved understanding of adaptive communication systems,
    fading channels, modulation techniques, and wireless performance
    optimization used in modern LTE and Wi-Fi technologies.
  </p>

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

    <p className="text-gray-400 leading-8 text-lg mb-5">
      Designed and implemented a 1-digit decimal up counter using
      74HC74 D flip-flop ICs configured as an asynchronous ripple counter.
      The system automatically counted from 0 to 9 and reset back to 0
      while displaying the output on a seven-segment display through
      a BCD-to-7-segment decoder.
    </p>

    <p className="text-gray-400 leading-8 text-lg mb-6">
      The project included Proteus simulation, EasyEDA PCB design,
      PCB layout generation, and enclosure modeling. Additional features
      such as pause/resume and asynchronous reset controls were implemented
      using push buttons. The design improved understanding of digital
      logic design, flip-flop operation, PCB routing, signal timing,
      troubleshooting, and practical hardware implementation.
    </p>

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

        <p className="text-gray-400 leading-8 text-lg mb-6">
          Designed and implemented a real-time PID-controlled DC motor
          stabilization system using Raspberry Pi 4 and a custom PCB.
          The project focused on motor modelling, PID tuning,
          encoder feedback measurement, disturbance rejection,
          and real-time speed control analysis.
        </p>

        <p className="text-gray-400 leading-8 text-lg mb-6">
          The system used a 12V brushed DC motor, optical rotary encoder,
          L298N motor driver, and Raspberry Pi–based real-time PID control
          algorithm to achieve stable motor speed regulation with minimum
          settling time and low steady-state error.
        </p>

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

    <p className="text-gray-400 leading-8 text-lg mb-6">
      Designed and developed a battery-powered autonomous Arduino car
      capable of following a rounded rectangular track and automatically
      parking in a selected parking bay using sensor-driven navigation.
      The project focused on real-time embedded control, autonomous
      movement, motor control, and intelligent parking behavior.
    </p>

    <p className="text-gray-400 leading-8 text-lg mb-6">
      The system used IR sensors for line tracking and parking bay
      detection while implementing real-time decision making and
      motor control entirely using AVR Assembly language on the
      Arduino Uno platform. The project also involved chassis
      assembly, sensor integration, testing, debugging, and
      autonomous navigation analysis.
    </p>

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

    <p className="text-gray-400 leading-8 text-lg mb-6">
      Designed and implemented a real-time enterprise monitoring
      environment using Zabbix Server on Ubuntu and a remote
      CentOS client machine. The project focused on system
      monitoring, network monitoring, server administration,
      performance analysis, and troubleshooting in Linux environments.
    </p>

    <p className="text-gray-400 leading-8 text-lg mb-6">
      Configured firewall rules, SNMP communication, Zabbix agents,
      and monitoring dashboards while resolving connectivity,
      synchronization, and performance-related issues. Stress testing,
      trigger validation, and live alert monitoring were performed
      to evaluate system reliability and real-time monitoring accuracy.
    </p>

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

            <h3 className="text-5xl font-bold text-blue-400 mb-10">
              4th Year Projects
            </h3>

            <div className="bg-[#0f172a] border border-gray-700 rounded-3xl p-12 text-center text-gray-400 text-2xl">
              Final year research project coming soon...
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

    <h2 className="text-5xl font-bold text-center mb-16">
      Technical Skills
    </h2>

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

    <h2 className="text-5xl font-bold text-center mb-16">
      Certificates
    </h2>

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

    <h2 className="text-5xl font-bold text-center mb-6">
      Contact Me
    </h2>

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