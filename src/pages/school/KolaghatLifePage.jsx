import React, { useState, useEffect, useRef } from "react";
import LifeSection from '../../components/LifeSection';
import PopularEvents from '../../components/PopularEvents';
import AchieversSection from '../../components/AchieversSection';

const KolaghatLifePage = () => {
  // Intersection observer for animations
  const animatedRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      title: "Debate Club",
      text: `At all Techno India Group Public Schools, emphasis is laid on the overall development of the body, mind and spirit. In the Debate Club, the students are taught to think logically and form a strong opinion about a particular topic. This practice strengthens their minds and helps them to improve their confidence, poise, and self-esteem. Students also develop higher-level thinking skills through application, analysis, synthesis, evaluation and creativity.`,
      img: "pictures/extra_curricular/debate_club.jpg",
      reverse: false,
    },
    {
      title: "Chess Club",
      text: `The Chess Club at the Techno India Group Public Schools has been an interesting part of the activities beyond academics. It is where the child is taught to analyse, plan strategies and devise tactics to discover the power of the mind game.`,
      img: "pictures/extra_curricular/chess_club.jpg",
      reverse: true,
    },
    {
      title: "Self Defence Club",
      text: `Self Defence is a counter-measure that involves defending the health and well-being of oneself from harm. The Self Defence Club at Techno India Group Public Schools is designed generally for safety and protection of one's own self. Here, the students are taught different self-defence techniques such as karate and taekwondo.`,
      img: "pictures/extra_curricular/self_defence_club.jpg",
      reverse: false,
    },
    {
      title: "Drama Club",
      text: `The Drama Club/Theatre Club adopts a different technique as it enhances the skills that lie within the children for theatre. The students are taught different terms such as ensemble (to form a circle in a group) along with various other techniques for following instructions such as the ethics and principles of the stage, the details of backstage, the front stage, to face the light, etc. Through solo and group participation, students gain the confidence to present themselves outrageously.`,
      img: "pictures/extra_curricular/drama _club.jpg",
      reverse: true,
    },
    {
      title: "Quiz Club",
      text: `All schools of Techno India Group Public Schools have a Quiz Club to make education more interesting, child-centric and activity-oriented. The aim of the quiz clubs is to encourage students to learn new things, generate interest among them regarding their syllabus and attract them towards education through innovative activities. Apart from this, the objective of these quiz clubs is to expand the intellectual, mental and creative ability of students while infusing a sense of healthy competition.`,
      img: "pictures/extra_curricular/quiz_club.jpg",
      reverse: false,
    },
    {
      title: "Science Club",
      text: `The Science Club aims to make science learning fun for young learners. All the experiments have been designed to allow students to explore and discover the most fundamental scientific concepts in areas directly relevant to their classroom instructions. Through practical, hands-on experiments the young learners are able to grasp these experiential learning sessions, which are designed with the purpose of building a bridge between the theory and practice of science.`,
      img: "pictures/extra_curricular/science_club.jpg",
      reverse: true,
    },
    {
      title: "Swimming Club",
      text: `Swimming is considered to be one of the best all-around exercises for people of all ages, especially for growing children. Most of the Techno India Group Public Schools have Swimming Clubs to provide competitive swimming opportunities for the students. Emphasis is paid on technique, race preparation, conditioning and fun-learning, and floats, balls and other pool play equipments are provided. Personalized attention and instruction is given to every swimmer by professional trainers.`,
      img: "pictures/extra_curricular/swimming_club.jpg",
      reverse: false,
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="hero-image-section" style={{height: '60vh', overflow: 'hidden'}}>
        <img 
          src="/pictures/image.jpg" 
          alt="Life at TIGPS" 
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </section>

      <section className="hero-section rts-campus rts-section-padding py-5" style={{background: 'rgb(100, 19, 32)', color: 'white'}}>
        <div className="container pb--20">
          <h1 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>Life at TIGPS</h1>
          <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '20px'}}>
            Experience vibrant campus life filled with learning, growth, and memorable moments
          </p>
          {sections.map((sec, index) => (
            <div
              key={index}
              className={`row g-40 align-items-center mb-5 ${
                sec.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-lg-6">
                <div
                  ref={(el) => (animatedRefs.current[index * 2] = el)}
                  className={`rts-left-section ${
                    sec.reverse ? "fade-right" : "fade-left"
                  }`}
                >
                  <h3 className="campus__life--single--title extra-curricular-title">
                    {sec.title}
                  </h3>
                  <div className="left-section-content extra-curricular-text">
                    <p>{sec.text}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  ref={(el) => (animatedRefs.current[index * 2 + 1] = el)}
                  className={`rts-right-section rt-relative ${
                    sec.reverse ? "fade-left" : "fade-right"
                  }`}
                >
                  <div className="campus-video">
                    <img src={sec.img} alt={sec.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <LifeSection />
      <PopularEvents />
      <AchieversSection />
    </div>
  );
};

export default KolaghatLifePage;