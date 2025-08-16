import { Row, Col } from "reactstrap";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
// PDF.js worker (for PDF Reader)
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import PdfReader from "./PdfReader";
import Calculator from "./Calculator";
import TextEditor from "./TextEditor";
import ImageResizer from "./ImageResizer";
import TextTools from "./TextTools";
import UnitConverter from "./UnitConverter";
// import QrGenerator from "./QrGenerator";

import { languageData } from "../../../utils/constants"
import { useLanguage } from "../../../contexts/useLanguage";


export default function Tools() {
    const { language } = useLanguage();
    return (
        <section id="tools" className="py-5">
            <h2 className="text-center mb-5">
                {languageData[language]['tools-title']}
            </h2>

            <Row className="align-items-start"> {/* Changed from default align-items-stretch */}
                <Col md={6} lg={4} className="mb-4 d-flex">
                    <div className="w-100"> {/* Added wrapper div */}
                        <Calculator language={language} />
                    </div>
                </Col>
                <Col md={6} lg={4} className="mb-4 d-flex">
                    <div className="w-100">
                        <TextEditor language={language} />
                    </div>
                </Col>
                <Col md={6} lg={4} className="mb-4 d-flex">
                    <div className="w-100">
                        <TextTools language={language} />
                    </div>
                </Col>
                <Col md={6} lg={4} className="mb-4 d-flex">
                    <div className="w-100" style={{ height: 'fit-content' }}> {/* Constrained height */}
                        <UnitConverter language={language} />
                    </div>
                </Col>
                <Col md={6} lg={4} className="mb-4 d-flex">
                    <div className="w-100">
                        <PdfReader language={language} />
                    </div>
                </Col>
                <Col md={6} lg={4} className="mb-4 d-flex">
                    <div className="w-100">
                        <ImageResizer language={language} />
                    </div>
                </Col>
            </Row>
        </section>
    );
}
