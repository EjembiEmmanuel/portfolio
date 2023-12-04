import PropTypes from 'prop-types'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { PrevButton, NextButton } from './EmblaCarouselArrows'
import styles from '../scss/EmblaCarousel.module.scss'

const EmblaCarousel = (props) => {
  const { slides, options, skills } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
   }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div id={styles['embla']}>
      <div id={styles['embla__viewport']} ref={emblaRef}>
        <div id={styles['embla__container']}>
          {slides.map((index) => (
            <div className={styles['embla__slide']} key={index}>
              <img
                className={styles['embla__slide__img']}
                src={skills[index].icon}
                alt="Your alt text"

              />
              <div className={styles['embla__slide__text']}>
                <span>{skills[index].name}</span>
              </div>
              <div className={styles['embla__slide__number']}>
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['embla__buttons']}>
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

EmblaCarousel.propTypes = {
  slides: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
}

export default EmblaCarousel
