import React from 'react';

const Education = () => (
    <div id="content_container">
        <div className="block">
            <h2>Education</h2>
            <p>The Rolling Scopes School<a className="education_link" href="https://school.rollingscopes.com/">
                (school.rollingscopes)</a>, 02.2019 – 08.2019</p>

            <p>Certificate of Completion:</p>
            <a href="https://app.rs.school/certificate/cc6pbvqf"><img src="http://images.vfl.ru/ii/1585326116/9e91c295/30019402.png"
                alt="" /></a>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <p>Belarusian State Economic University<a className="education_link" href="http://bseu.by/english/">{' '}
            (Minsk,Belarus)</a>, 2014-2018</p>
            <a href="http://bseu.by/english/"><img src=".assets/university.png"
                alt="" /></a>
            <p>Specialist (Bachelor Degree) – Political science.</p>
        </div>
    </div>
);

export default Education;
