import React from 'react'

export default function AnnouncementCard() {
  return (
    <div>
      <div className="flex flex-row">
        <div className='profile flex flex-row mr-2'>
          {/* redirect to profile page */}
          <a href="">
            <img src="profilePic.jpeg" alt="ProfilePic" className='rounded-full h-12 w-12' />
          </a>
        </div>
        <div>
          <h2>
            Faculty Name
          </h2>
          <h4 className='text-xs'>
            posted now
            {/* timestamp of when posted */}
          </h4>
        </div>
      </div>
      <div className='announceContent mt-2 h-24 text-wrap truncate'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem reiciendis corrupti fugit nemo molestiae aliquam tenetur magni quia ullam eum distinctio debitis libero illum eius atque, a dolore optio accusantium ipsam sequi maxime illo. Nihil nostrum at illo culpa perferendis quia veniam atque, sunt quisquam itaque animi distinctio maxime impedit fuga doloremque totam aut inventore! Fugit qui sint numquam fuga maiores voluptas consequuntur autem, ad alias sequi laborum, iusto placeat, mollitia perferendis eveniet. Ipsum nihil cum beatae odio? Optio ipsam ipsum maxime adipisci, eius cupiditate modi, recusandae asperiores soluta deserunt minus, autem eum! Assumenda quo reprehenderit, ab rerum quis deserunt.
        </p>
      </div>
    </div>
  )
}
