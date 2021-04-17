import React from 'react';
import img01 from '../img/tnm02/tnm02-24.jpg';
import img02 from '../img/tnm02/tnm02-26.jpg';
import img03 from '../img/tnm02/tnm02-28.jpg';
import img04 from '../img/tnm02/tnm02-30.jpg';
import img05 from '../img/tnm02/tnm02-32.jpg';
import img06 from '../img/tnm02/tnm02-34.jpg';
import img07 from '../img/tnm02/tnm02-36.jpg';
import img08 from '../img/tnm02/tnm02-38.jpg';
import img09 from '../img/tnm02/tnm02-40.jpg';
import img10 from '../img/tnm02/tnm02-42.jpg';
import img11 from '../img/tnm02/tnm02-44.jpg';
import img12 from '../img/tnm02/tnm02-46.jpg';
import img13 from '../img/tnm02/tnm02-48.jpg';
import img14 from '../img/tnm02/tnm02-50.jpg';
import img15 from '../img/tnm02/tnm02-52.jpg';
import img16 from '../img/tnm02/tnm02-54.jpg';
import img17 from '../img/tnm02/tnm02-56.jpg';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';

const TakeMake02 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #2"
        mainHeader="Maker Madness Light Bulb Gets Lit!"
        subHeader="Build a parallel circuit to make your light bulb shine!"
      />
      <PageTemplate>
        <h2>Supplies</h2>
        <ul>
          <li>1 Paper light bulb</li>
          <li>
            1 <code>CR2032</code> 3V button cell battery
          </li>
          <li>2 LEDs</li>
          <li>Conductive Copper tape</li>
          <li>1 binder clip</li>
          <li>1 push pin or needle (not included)</li>
        </ul>
        <h2>Steps</h2>
        <img src={img01} alt="Step: X" />
        <p>
          Test your LEDs and the battery. Each LED has two prongs.  One is
          slightly longer than the other.  The longer prong is positive. The
          short prong is negative. 
        </p>
        <img src={img02} alt="Step: X" />
        <p>
          Place the battery between the two prongs with the positive prong
          touching the positive side of the battery and the negative prong
          touching the negative side.
        </p>
        <img src={img03} alt="Step: X" />
        <p>Fold back the top right corner of the light bulb image </p>
        <img src={img04} alt="Step: X" />
        <p>
          Use your push pin or needle to poke small holes in your light bulb for
          the LEDs.  The holes should be parallel to each other to create the
          parallel circuit. For example, you can put one whole in the gear and
          one in the painters pallet.
        </p>
        <img src={img05} alt="Step: X" />
        <img src={img06} alt="Step: X" />
        <p>
          Thread the prongs of each LED through one of the holes in the paper
          light bulb.  
        </p>
        <img src={img07} alt="Step: X" />
        <p>
          Turn over the paper and bend back each prong - make sure that both
          positive prongs are on the same side! In this example the longer
          prongs(+)  are on the left side.
        </p>
        <img src={img08} alt="Step: X" />
        <p>
          Take the copper tape and peel back the white backing. Attach an 4 inch
          piece (approx)  of copper tape horizontally from the middle of the
          triangle formed by the fold in the paper past the end of the far
          prong.
        </p>
        <img src={img09} alt="Step: X" />
        <p>
          Attach a vertical piece of copper tape to the end of the horizontal
          piece down to the second LED prong.
        </p>
        <img src={img10} alt="Step: X" />
        <p>
          Place copper tape under each prong. The tape shouldn’t meet at the
          LED.
        </p>
        <img src={img11} alt="Step: X" />
        <p>
          Once you have tape under each prong you’ll add another piece of tape
          over the prong - like a sandwich! The tape on the top left prong
          should be a little longer than the others.
        </p>
        <img src={img12} alt="Step: X" />
        <p>
          Add one more vertical piece of copper tape to attach the two prongs on
          the left side.
        </p>
        <img src={img13} alt="Step: X" />
        <p>
          Now it’s time to test your circuit!  Place your battery on the tail of
          the top left prong.  If the prongs on the left are positive (the
          longer prongs) place the positive side of the battery facing down.  If
          negative, do the reverse! 
        </p>
        <img src={img14} alt="Step: X" />
        <p>Fold the Paper at the crease and your LEDs should light! </p>
        <p>
          Make sure that the circuit is closed by checking that the copper tape
          on the fold touches the battery.
        </p>
        <img src={img15} alt="Step: X" />
        <p>Use the binder clip to secure the battery to the circuit.</p>
        <img src={img16} alt="Step: X" />
        <p>You have a real “LIGHT” bulb!!</p>
        <img src={img17} alt="Step: X" />
        <h2>Troubleshooting</h2>
        <p>If your light bulb doesn’t light, try the following.</p>
        <ol>
          <li>Check that the circuit is closed on the battery.</li>
          <li>Check that the battery is on the proper side.</li>
          <li>
            Check that tape connects all around the circuit EXCEPT at the LEDs.
          </li>
          <li>
            If none of the above you may need to remove some tape to check that
            both positive prongs are on the same side.
          </li>
        </ol>
      </PageTemplate>
    </>
  );
};

export default TakeMake02;
