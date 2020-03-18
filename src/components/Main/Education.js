import React from 'react';
import Certificate from '../../assets/Certificate.png';
import University from '../../assets/university.png';

const Education = () => (
    <div id="content_container">
        <div className="block">
            <h2>Education</h2>
            <a href="http://bseu.by/english/"><img src={University}
                alt="" /></a>
            <p>Belarusian State Economic University<a className="education_link" href="http://bseu.by/english/">{' '}
            (Minsk,Belarus)</a>, 2014-2018</p>
            <p>Specialist (Bachelor Degree) – Political science.</p>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <p>The Rolling Scopes School<a className="education_link" href="https://school.rollingscopes.com/">
                (school.rollingscopes)</a>, 02.2019 – 08.2019</p>

            <p>Certificate of Completion:</p>
            <a href="https://app.rs.school/certificate/cc6pbvqf"><img src={Certificate}
                alt="" /></a>
        </div>
    </div>
);

export default Education;
