import About from '../../components/AboutUs/About'
import Footer from '../../components/Footer/Footer'
import { Typography } from '@mui/material'

function AboutUs() {
  return (
    <>
    <About />
    <div className="about" >
      <Typography variant="h6">
       <p>There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.  It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
       <p>All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
      </Typography>
      </div>
    <Footer />
    </>
  )
}

export default AboutUs
