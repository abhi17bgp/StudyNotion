import React from 'react'
import { IoLogoWechat } from "react-icons/io5";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactDetails = () => {

    const contactDetails = [
        {
          icon: <IoLogoWechat/>,
          heading: "Chat with Us",
          description: "Our support team is always ready to assist you.",
          details: " support@studynotion.in",
        },
        {
          icon: <BsGlobeEuropeAfrica/>,
          heading: "Visit us",
          description: "We’d love to meet you at our main office.",
          details:
            "🏢 Silver Oak Street, Sector 21, Near City Mall, Pune - 411045",
        },
        {
          icon: <PiPhoneCallFill/>,
          heading: "Call us",
          description: "Reach out during our working hours (Mon - Fri, 9 AM to 6 PM).",
          details: " +91 98765 43210",
        },
      ]
  return (
    <div className='flex flex-col gap-9 rounded-xl bg-richblack-800 lg:max-w-[450px] p-8'>
        {
            contactDetails.map((element,index)=>{
                return(
                    <div key={index} className=' flex gap-2'>
                        <div className=' text-richblack-200 mt-1 text-xl'>{element.icon}</div>
                        <div className=' flex flex-col gap-1'>
                            <h1 className=' text-lg font-semibold text-richblack-25'>
                              {element.heading}
                            </h1>
                            <p className=' text-sm font-semibold text-richblack-200'>
                              {element.description}
                            </p>
                            <p className=' text-sm font-semibold text-richblack-200'>
                              {element.details}
                            </p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ContactDetails