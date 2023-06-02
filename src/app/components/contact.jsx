import React from 'react'
import {MdEmail} from "react-icons/md";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsDiscord} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
const contact = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 mt-4'>
        <h1 className='text-2xl font-bold'> My Contacts</h1>
     <div className="socialMedia flex gap-4 items-center justify-center cursor-pointer ">
     <a target="_blank" href="mailto:ajjagadish13@gmail.com">
<MdEmail size={'3em'}/>
</a>
<a target="_blank" href="https://github.com/jagadishthati">
<BsGithub size={'3em'}/>
</a>
<a target="_blank" href="https://www.linkedin.com/in/thati-jagadish-0573b81aa/">
<BsLinkedin size={'3em'}/>
</a>
<a target="_blank" href="https://twitter.com/ajjagadish13">
<BsTwitter size={'3em'}/>
</a>

<a target="_blank" href="https://discordapp.com/users/thatijagadish#3902">
<BsDiscord size={'3em'}/>
</a>
<a target="_blank" href="https://www.instagram.com/jagadish_._10/?hl=en">
<BsInstagram size={'3em'}/>
</a>
     </div>
    </div>
  )
}

export default contact