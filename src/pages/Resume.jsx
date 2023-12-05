import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import resume from '/resume.pdf'
import forwardArrowIcon from '../assets/icons/arrow_forward.svg'
import backwardArrowIcon from '../assets/icons/arrow_back.svg'
import styles from '../scss/Resume.module.scss'


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
  
const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1)
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
    function previousPage() {
    changePage(-1);
    }

    function nextPage() {
    changePage(1);
    }

    return (
        <div id={styles['resume-page']}>
            <div id={styles['resume']}>
                <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <div id={styles['page-nav']}>
                    <p>
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </p>
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        <img src={backwardArrowIcon} alt="Backward arrow icon" />
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        <img src={forwardArrowIcon} alt="Forward arrow icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Resume