import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    //template_8hndxra template
    //service_mg895o1 service
    //GiTV3Vul4jyN326Oc key

    emailjs.send(
      'service_mg895o1',
      'template_8hndxra',
      {
        from_name: form.name,
        to_name: 'Emerson Edward',
        from_email: form.email,
        to_email: 'emersonevillaltaq@gmail.com',
        message: form.message,
      },
      'GiTV3Vul4jyN326Oc'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as posible');

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong')
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Ponte en contacto
        </p>
        <h3 className={styles.sectionHeadText}>
          Contacto.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Tu nombre
            </span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Cuál es tu nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Tu Correo
            </span>
            <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Cuál es tu correo?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Tu Mensaje
            </span>
            <textarea
              rows="7"
              type="text"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Qué quieres decirme?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Enviando...': 'Enviar'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")