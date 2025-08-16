import { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Button
            color="primary"
            className={`fixed-bottom me-3 mb-3 rounded-circle ${isVisible ? '' : 'invisible'}`}
            style={{ right: 0, width: '50px', height: '50px' }}
            onClick={scrollToTop}
        >
            <FaArrowUp size={20} />
        </Button>
    )
}