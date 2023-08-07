import { useState } from "react";
import data from "./FaqData";

const FAQSection = () => {
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const handleAccordionClick = (accordionId) => {
        setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
      };
    return ( 
        <section className="faq-section">
            <h2>FAQs</h2>
            <div className="faq-main-con">
                {data.map((faqs)=>{
                     const isAccordionOpen = faqs.id === openAccordionId;
                    return(
                        <div className="faqs-con" key={faqs.id}>
                            <div className="question-btn-con" onClick={()=> handleAccordionClick(faqs.id)}>
                                <h3>{faqs.question}</h3>
                                <button onClick={()=> handleAccordionClick(faqs.id)}>{isAccordionOpen ?<i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}</button>
                            </div>
                            {
                            isAccordionOpen && <div className="answer-con">
                                <p className="faq-answer">{faqs.answer}</p>
                                {faqs.answer2 && <p className="extra-faq-answer">{faqs.answer2}</p>}
                                {faqs.answer3 && <p className="extra-faq-answer">{faqs.answer3}</p>}
                            </div>   
                            }

                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default FAQSection;