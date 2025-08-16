// import { useState } from 'react'
// import { Card, CardBody, CardTitle, Input, Button } from 'reactstrap'
// import QRCode from 'qrcode.react'
// import {languageData} from '../../../utils/constants'

// export default function QrGenerator({ language }) {
//     const [text, setText] = useState('')
//     const [showQr, setShowQr] = useState(false)

//     const generateQr = () => {
//         if (text.trim()) {
//             setShowQr(true)
//         } else {
//             alert(languageData[language]['alert-qr-required'])
//         }
//     }

//     return (
//         <Card className="h-100">
//             <CardBody className="d-flex flex-column">
//                 <CardTitle tag="h5">{languageData[language]['qr-code-title']}</CardTitle>

//                 <Input
//                     type="textarea"
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                     placeholder={languageData[language]['qr-placeholder']}
//                     rows="3"
//                     className="mb-3"
//                 />

//                 <Button
//                     color="primary"
//                     onClick={generateQr}
//                     className="mb-3"
//                 >
//                     {languageData[language]['generate-qr-btn']}
//                 </Button>

//                 <div className="text-center mt-auto">
//                     {showQr && (
//                         <QRCode
//                             value={text}
//                             size={128}
//                             level="H"
//                             includeMargin={true}
//                         />
//                     )}
//                 </div>
//             </CardBody>
//         </Card>
//     )
// }