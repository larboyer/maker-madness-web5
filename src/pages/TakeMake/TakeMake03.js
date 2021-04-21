import React from "react";

import img01 from '../../img/tnm03/page3image975691408.png';
import img02 from '../../img/tnm03/page4image837147888.png';
import img03 from '../../img/tnm03/page5image990120896.png';
import img04 from '../../img/tnm03/page6image837859056.png';
import img05 from '../../img/tnm03/page7image836936784.png';
import img06 from '../../img/tnm03/page8image990288032.png';
import img07 from '../../img/tnm03/page9image864528992.png';
import img08 from '../../img/tnm03/page10image838397440.png';
import img09 from '../../img/tnm03/page11image864954720.png';
import img10 from '../../img/tnm03/page12image990390944.png';

import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';



const TakeMake03 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #2"
        mainHeader="Fold an Origami Cicada!"
        subHeader="Then try some other Origami animals"
      />
      <PageTemplate>

        <p>
          This surprisingly accurate cicada is a centuries-old origami
          figure. In many Asian cultures, cicadas are symbols of renewal
          and good fortune.
        </p>


        <h3>Step 1</h3>
        <p>Start with a square piece of paper. We've included sheets of 
        origami paper, but wrapping paper is colorful and folds well also.</p>
        <p>Fold the paper in half along the dashed line. Smooth the 
          fold with the back of your fingernail to make a tidy crease.</p>
        <img className="mx-auto" src={img01} alt="Step" />
 
        <h3>Step 2</h3>
        <p>Fold down along the dashed lines so that the outer 
          points of the triangle touch the bottom point.</p>
        <img className="mx-auto" src={img02} alt="Step" />

        <h3>Step 3</h3>
        <p>Fold the points upward along the dashed lines, flaring 
          them out slightly.  These are the cicada's wings. 
          Turn the form around.</p>
        <img className="mx-auto" src={img03} alt="Step" />

        <h3>Step 4</h3>
        <p>The point at the top has two layers. Fold the 
        point of just the top layer down along the dashed line. 
        This forms the cicada's scutellum, a triangular structure 
        between the wings.</p>
        <img className="mx-auto" src={img04} alt="Step" />

        <h3>Step 5</h3>
        <p>Fold the top layer down again along the dashed line. If you want 
        to make your cicada look more like a periodical cicada, you can 
        color the eyes red. Try drawing in the wing veins or folding the 
        model from different colors of paper.</p>

        <p>This forms the pronotum, which covers the cicada's back like a shield.</p>
        <img className="mx-auto" src={img05} alt="Step" />

        <h3>Step 6</h3>
        <p>Fold the outer corners back along
        the dashed lines. You will need to turn the model over to make
        sure the folds are straight.</p>

        <p>This forms the tymbals, which are the sound-producing 
        structures that enable male cicadas to sing.</p>
        <img className="mx-auto" src={img06} alt="Step" />

        <h3>Step 7</h3>
        <p>Fold the top point down along the
        dashed line. This forms the cicada's snout, or cibarium. The cibarium
        contains muscles that allow the cicada to drink fluids.</p>
        <img className="mx-auto" src={img07} alt="Step" />

        <h3>Step 8</h3>
        <p>The underside of your cicada should now look like this. 
        Turn the model over.</p>
        <img className="mx-auto" src={img08} alt="Step" />

        <h3>Step 9</h3>
        <p>Fold the outer corners of the head down along the dashed lines, 
        forming the cicada's eyes. </p>
        <img className="mx-auto" src={img09} alt="Step" />

        <h3>Step 10</h3>
        <p>Admire your finished cicada model!</p>
        <img className="mx-auto" src={img10} alt="Step" />

        <p>All content © Jessee Smith SilverspotStudio.com Help map Brood X with the Cicada</p>





      </PageTemplate>
    </>
  );
};

export default TakeMake03;
