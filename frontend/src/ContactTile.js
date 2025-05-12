import React from 'react'


const formatLink = (text, customLink) => {
 if (text.includes("@") && !text.startsWith("@")) {
    return `mailto:${text}`;
  }
  if (text.startsWith("+")) return `tel:${text.replace(/[^+\d]/g, "")}`;
  return customLink || "#";
};


const ContactTile = (props) => {
    let {img, text1, text2, link1, link2} = props;

    return (
        <div className='contact-tile'>
           <div className='contact-icon'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${img}`} />
           </div>
            <div className="contact-text">
            {text1 && (
                <p>
                <a href={formatLink(text1, link1)} target="_blank" rel="noopener noreferrer">
                    {text1}
                </a>
                </p>
            )}
            {text2 && (
                <p>
                <a href={formatLink(text2, link2)} target="_blank" rel="noopener noreferrer">
                    {text2}
                </a>
                </p>
            )}
            </div>
        </div>
    )
}

export default ContactTile