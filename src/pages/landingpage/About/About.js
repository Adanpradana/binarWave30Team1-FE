import React from "react";
import member1 from "../../../assets/member1.png";
import member2 from "../../../assets/member2.png";
import member3 from "../../../assets/member3.png";
import member4 from "../../../assets/member4.png";
import member5 from "../../../assets/member5.png";
import member6 from "../../../assets/member6.png";
  
import "./About.css";
import { CardAbout } from "./CardAbout";
export default function About() {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind Good Game</h2>
            <hr style={{backgroundColor:'white', height:'2px'}}></hr>
            <p className="section-subtitle">
              Dalam kamus bahasa indonesia “game” diartikan permainan. Permainan
              adalah bagian dari bermain dan bermain juga bagian dari permainan,
              keduanya ini saling berhubungan. Permaian merupakan kegiatan
              kompleks yang didalamnya terdapat peraturan, play dan budaya.
              Sebuah permainan ialah sebuah sistem dimana pemain terlibat dalam
              konflik buatan, disini pemain bernteraksi dengan sistem konflik
              dalam permaianan ialah rekayasa atau buatan, dalam permainan
              terdapat peraturan yang bertujuan untuk membatasi perilakuk pemain
              dan juga menentukan permainan.
            </p>
          </div >
          <div className="col-md-12 text-center">
            <h2 className="section-title">Our Mission</h2>
            <hr style={{backgroundColor:'white', height:'2px'}}></hr>
            <p className="section-subtitle">
            Seorang Coder bahkan terkadang tidak mengerjakan pekerjaan rumah. Setiap orang memiliki kehidupan kebijaksanaan, dan batasan Tuhan. 
            </p>
          </div >
          <h2 className="col-md-12 text-center" style={{color:'white'}}>Our Team</h2>
          <hr style={{backgroundColor:'white', height:'2px'}}></hr>
          <CardAbout Name="Akmal Dayan" Job="DPR (Dewan Permohonan Resign)" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member1}/>
          <CardAbout Name="Fauzan Abdul Basith" Job="Polisi Pulang Pergi" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member3}/>
          <CardAbout Name="Adan Perdana" Job="Kang Narik Kabel di Laut" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member2}/>
          <CardAbout Name="Amjad Muhammad Ahsan" Job="Pendamping Karaoke" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member2}/>
          <CardAbout Name="Adli Rahadyan" Job="Kerja Dirumah Makan" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member3}/>
          <CardAbout Name="Ares Mardiana" Job="Kang Madu Baduy" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member1}/>
          <CardAbout Name="Salman" Job="Kang Madu Baduy" description="pengangguran adalah seorang yang tidak bekerja yang selalu main game mulu" image={member1}/>
        </div>
      </div>
    </section>
  );
}
