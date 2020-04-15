import React from 'react';
import Certificate from '../../assets/educationScreens/Certificate.png';
import University from '../../assets/educationScreens/university.png';
import BecomeJS from '../../assets/educationScreens/become.png';
import ImproveJS from '../../assets/educationScreens/improve.png';

const Education = () => (
    <div id="content_container">
        <div className="block">
            <h2>Education</h2>
            <a href="http://bseu.by/english/" target='_blank'><img src={University} alt="" /></a>
            <p>Belarusian State Economic University
                <a className="education_link" target='_blank' href="http://bseu.by/english/">{' '}(Minsk,Belarus)</a>
                , 2014-2018</p>
            <p>Specialist (Bachelor Degree) – Political science.</p>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <p>The Rolling Scopes School<a className="education_link" target='_blank' href="https://school.rollingscopes.com/">
                (school.rollingscopes)</a>, 02.2019 – 08.2019</p>

            <p>Certificate of Completion:</p>
            <a href="https://app.rs.school/certificate/cc6pbvqf" target='_blank'><img src={Certificate} alt="" /></a>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <p>LinkedIn Learning Certificates :</p>

            <p>(More certificates from <a className="education_link" target='_blank' href="https://www.linkedin.com/in/ihar-ivaniuk/">
                LinkedIn</a>)</p>

            <a href="https://drive.google.com/file/d/13MmwFFVtxIIvQy-A9OD5c8EKhPfcDZGN/view?usp=sharing" target='_blank'><img src={BecomeJS} alt="" /></a>
            <a href="https://drive.google.com/file/d/1ChhH52JEvcQEjZw73d_irAGU0vFsnTuY/view?usp=sharing" target='_blank'><img src={ImproveJS} alt="" /></a>
        </div>
    </div>
);

export default Education;