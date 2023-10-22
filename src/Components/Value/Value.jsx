import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
import { useState } from "react";

export const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Conatiner containing the image*/}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt=""/>
          </div>
        </div>
        {/*Right Container */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            {" "}
            We are always ready to help by providing the best sevices for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {/*allowMultipleExpanded = {false}
                   Setting it to false means that only one panel can be open at a time, and opening a new panel will automatically close the previously expanded panel. */}
            {/*preExpanded={[0]}
                   it specifies that the panel at index 0 will be expanded by default*/}

            {data.map((item, i) => {
              const [className, setclassName] = useState(null);
              return (
          
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({expanded}) => 
                          expanded ? setclassName("expanded"): setclassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon} </div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail} </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
