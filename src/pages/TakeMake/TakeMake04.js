import React from 'react';
import img01 from '../../img/tnm04/tnm04-01.png';
import img02 from '../../img/tnm04/tnm04-02.png';
import img03 from '../../img/tnm04/tnm04-03.png';
import img04 from '../../img/tnm04/tnm04-04.png';
import img05 from '../../img/tnm04/tnm04-05.png';
import img06 from '../../img/tnm04/tnm04-06.png';
import img07 from '../../img/tnm04/tnm04-07.png';
import img08 from '../../img/tnm04/tnm04-08.png';
import img09 from '../../img/tnm04/tnm04-09.png';
import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

const TakeMake04 = () => {
  return (
    <>
      <PageHero
        supHeader="Take&amp;Make #4"
        mainHeader="Kinetic Sticks – Cobra Weave"
      />
      <PageTemplate>
        <h2>Purpose</h2>
        <p>
          This activity will demonstrate the conversion of potential energy to
          kinetic energy. As craft sticks are weaved into a pattern called a
          “Cobra Weave,” potential energy is built up via the tension in the
          sticks. When one end of the sticks is released, the potential energy
          is converted into kinetic energy, flinging the sticks upward and
          outward in a chain reaction.
        </p>
        <h3>Materials</h3>
        <p>
          Jumbo craft sticks or tongue depressors. The more the merrier. Using
          sticks with different colors adds an artistic and creative flair to
          the activity.
        </p>
        <h2>Safety</h2>
        <p>
          The chain reactions can be a bit vigorous. Safety glasses are
          recommended.
        </p>

        <h3>Step 1</h3>
        <p>
          Place stick 2 diagonally underneath stick 1. Stick 1 will serve as an
          “end cap” to hold that end in place.
        </p>
        <img className="mx-auto" src={img01} alt="Step" />

        <h3>Step 2</h3>
        <p>Place stick 3 over the end of stick 1, parallel to stick 3.</p>
        <img className="mx-auto" src={img02} alt="Step" />

        <h3>Step 3</h3>
        <p>
          Weave stick 4 over 3, under 2, and just over 1. At this point, you
          will need to continuously hold onto the end of the chain where you are
          working, or the chain reaction will occur.
        </p>
        <img className="mx-auto" src={img03} alt="Step" />

        <h3>Step 4</h3>
        <p>Weave stick 5 under 3, over 2, keeping it parallel to stick 4.</p>
        <img className="mx-auto" src={img04} alt="Step" />

        <h3>Step 5</h3>
        <p>Weave stick 6 under 5, over 4, keeping it parallel to stick 3.</p>
        <img className="mx-auto" src={img05} alt="Step" />

        <h3>Step 6</h3>
        <p>Weave stick 7 under 6, over 3, keeping it parallel to stick 5.</p>
        <img className="mx-auto" src={img06} alt="Step" />

        <h3>Step 7</h3>
        <p>Weave stick 8 under 7, over 5, parallel to stick 6.</p>
        <img className="mx-auto" src={img07} alt="Step" />

        <h3>Step 8</h3>
        <p>Weave stick 9 under 8, over 6, parallel to stick 7.</p>
        <img className="mx-auto" src={img08} alt="Step" />

        <h3>Step 9</h3>
        <p>Weave stick 10 under 9, over 7, parallel to stick 8.</p>
        <img className="mx-auto" src={img09} alt="Step" />

        <h3>Step 10</h3>
        <p>
          Continue weaving in the same pattern for as long as you like, or lock
          in another “end cap,” (stick 11), to hold everything in place.
        </p>

        <h3>Now the fun!</h3>
        <p>
          To activate the chain reaction, simply loosen the last end cap and let
          go.
        </p>

        <h2>Additional Resources</h2>
        <p>
          There are many different chain-reaction patterns that can be created
          using craft sticks. Search online for “popsicle stick chain reactions”
          or “stick bombs” to find a wide range of videos and instructions.
        </p>

        <p>Or, try these links:</p>
        <ul>
          <li>
            <a href="http://www.instructables.com/id/Stick-Bombs-Exploding-Kinetic-Art/">
              Instructables
            </a>
          </li>
          <li>
            <a href="https://youtu.be/ujDY9vwnne4">
              INSANE Stick Bomb Chain Reactions!
            </a>
          </li>
          <li>
            <a href="https://laughingsquid.com/seattle-public-library-creates-worlds-longest-book-domino-chain/">
              A different kind of chain reaction from the Seattle Public
              Library"
            </a>
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default TakeMake04;
