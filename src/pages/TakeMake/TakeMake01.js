import React from "react";

import img01 from '../../img/tnm01/page1image835930848.png';
import img02 from '../../img/tnm01/page2image836052752.png';
import img03 from '../../img/tnm01/page3image836068112.png';
import img04 from '../../img/tnm01/page6image835593360.png';
import img05 from '../../img/tnm01/page8image836169376.png';
import img06 from '../../img/tnm01/page9image865178864.png';
import img07 from '../../img/tnm01/page10image838454672.png';
import img08 from '../../img/tnm01/page11image836232192.png';
import img09 from '../../img/tnm01/page12image975331968.png';
import img10 from '../../img/tnm01/page13image864968480.png';
import img11 from '../../img/tnm01/page14image837697696.png';
import img12 from '../../img/tnm01/page15image975481760.png';
import img13 from '../../img/tnm01/page16image836380352.png';
import img14 from '../../img/tnm01/page17image975604304.png';
import img15 from '../../img/tnm01/page18image836457184.png';
import img16 from '../../img/tnm01/page19image865041968.png';
import img17 from '../../img/tnm01/page20image836538720.png';
import img18 from '../../img/tnm01/page21image836543952.png';
import img19 from '../../img/tnm01/page22image989996512.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const TakeMake01 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #1"
        mainHeader="Puppet Making"
        subHeader="From the Maplewood Library"
      />
      <PageTemplate>
        <img className="mx-auto" src={img01} alt="Step: X" />
        <h3>Simple Marionette</h3>
        <img className="mx-auto" src={img02} alt="Step: X" />
        <h3>Folded Talking Head</h3>
        <img className="mx-auto" src={img03} alt="Step: X" />
        <h2>Supplies</h2>
        <div className="px-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <ul>
            <li>2 sheets of legal sized paper</li>
            <li>3 pieces of card stock</li>
            <li>2 pieces of scrapbook paper</li>
            <li>2 craft sticks</li>
            <li>2 feet of yarn</li>
            <li>11 paper fasteners</li>
            <li>4 eyes</li>
            <li>glue</li>
          </ul>
        </div>
        <img className="mx-auto" src={img04} alt="Step: X" />

        <h3>Instructions - Simple Marionette</h3>

        <p>Cut pieces for body parts</p>
        <p>Use paper fasteners to create joints</p>
        <img className="mx-auto" src={img07} alt="Step: X" />

        <p>Use a craft stick and yarn to make your puppet dance!</p>

        <img className="mx-auto" src={img05} alt="Step: X" />
        <img className="mx-auto" src={img06} alt="Step: X" />

        <h3>Instructions - Folded Talking Head</h3>
        <p>Fold paper as seen in the photos</p>
        <img className="mx-auto" src={img08} alt="Step: X" />
        <img className="mx-auto" src={img09} alt="Step: X" />
        <img className="mx-auto" src={img10} alt="Step: X" />
        <img className="mx-auto" src={img11} alt="Step: X" />
        <img className="mx-auto" src={img12} alt="Step: X" />
        <img className="mx-auto" src={img13} alt="Step: X" />
        <h3>Attach eyes</h3>
        <img className="mx-auto" src={img14} alt="Step: X" />
        <img className="mx-auto" src={img15} alt="Step: X" />
        <h3>Add ears and hair</h3>
        <img className="mx-auto" src={img16} alt="Step: X" />
        <p>
          Fold two different colored strips of paper over 
          one another to make a springy nose. 
          Use your imagination and have some fun.</p>
        <img className="mx-auto" src={img17} alt="Step: X" />
        <img className="mx-auto" src={img18} alt="Step: X" />

      </PageTemplate>
    </>
  );
};

export default TakeMake01;
