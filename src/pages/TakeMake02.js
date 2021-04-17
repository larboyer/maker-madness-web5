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

const TakeMake02 = () => {
  return (
    <div className="prose">
      <h1>Take&amp;Make #2</h1>
      <h3>Maker Madness Light Bulb Gets Lit!</h3>
      <h5>Build a parallel circuit to make your light bulb shine!</h5>
      <br />
      <h6>Supplies:</h6>
      <ul>
        <li>1 Paper light bulb</li>
        <li>1 CR2032 3V button cell battery</li>
        <li>2 LEDs</li>
        <li>Conductive Copper tape</li>
        <li>1 binder clip</li>
        <li>1 push pin or needle (not included)</li>
      </ul>
       
      <br />
      <img className="transform scale-100" src={img01} alt="logo" />
      <br />
      <p>
        Test your LEDs and the battery. Each LED has two prongs.  One is
        slightly longer than the other.  The longer prong is positive. The short
        prong is negative. 
      </p>
      <br />
      <img className="transform scale-100" src={img02} alt="logo" />
      <br />
      <p>
        Place the battery between the two prongs with the positive prong
        touching the positive side of the battery and the negative prong
        touching the negative side.
      </p>
      <br />
      <img className="transform scale-100" src={img03} alt="logo" />
      <br />
      <p>Fold back the top right corner of the light bulb image </p>
      <br />
      <img className="transform scale-100" src={img04} alt="logo" />
      <br />
      <p>
        Use your push pin or needle to poke small holes in your light bulb for
        the LEDs.  The holes should be parallel to each other to create the
        parallel circuit. For example, you can put one whole in the gear and one
        in the painters pallet.
      </p>
      <br />
      <img className="transform scale-100" src={img05} alt="logo" />
      <br />
      <br />
      <img className="transform scale-100" src={img06} alt="logo" />
      <br />
      <p>
        Thread the prongs of each LED through one of the holes in the paper
        light bulb.  
      </p>
      <br />
      <img className="transform scale-100" src={img07} alt="logo" />
      <br />
      <p>
        Turn over the paper and bend back each prong - make sure that both
        positive prongs are on the same side! In this example the longer
        prongs(+)  are on the left side.
      </p>
      <br />
      <img className="transform scale-100" src={img08} alt="logo" />
      <br />
      <p>
        Take the copper tape and peel back the white backing. Attach an 4 inch
        piece (approx)  of copper tape horizontally from the middle of the
        triangle formed by the fold in the paper past the end of the far prong.
      </p>
      <br />
      <img className="transform scale-100" src={img09} alt="logo" />
      <br />
      <p>
        Attach a vertical piece of copper tape to the end of the horizontal
        piece down to the second LED prong.
      </p>
      <br />
      <img className="transform scale-100" src={img10} alt="logo" />
      <br />
      <p>
        Place copper tape under each prong. The tape shouldn’t meet at the LED.
      </p>
      <br />
      <img className="transform scale-100" src={img11} alt="logo" />
      <br />
      <p>
        Once you have tape under each prong you’ll add another piece of tape
        over the prong - like a sandwich! The tape on the top left prong should
        be a little longer than the others.
      </p>
      <br />
      <img className="transform scale-100" src={img12} alt="logo" />
      <br />
      <p>
        Add one more vertical piece of copper tape to attach the two prongs on
        the left side.
      </p>
      <br />
      <img className="transform scale-100" src={img13} alt="logo" />
      <br />
      <p>
        Now it’s time to test your circuit!  Place your battery on the tail of
        the top left prong.  If the prongs on the left are positive (the longer
        prongs) place the positive side of the battery facing down.  If
        negative, do the reverse! 
      </p>
      <br />
      <img className="transform scale-100" src={img14} alt="logo" />
      <br />
      <p>Fold the Paper at the crease and your LEDs should light! </p>
      <p>
        Make sure that the circuit is closed by checking that the copper tape on
        the fold touches the battery.
      </p>
      <br />
      <img className="transform scale-100" src={img15} alt="logo" />
      <br />
      <p>Use the binder clip to secure the battery to the circuit.</p>
      <br />
      <img className="transform scale-100" src={img16} alt="logo" />
      <br />
      <p>You have a real “LIGHT” bulb!!</p>
      <br />
      <img className="transform scale-100" src={img17} alt="logo" />
      <br />
      <p>Troubleshooting if your light bulb doesn’t light:</p>
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
    </div>
  );
};

export default TakeMake02;
