import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineArrowDown } from "react-icons/ai";

import samplePDF from "../../assets/pdf/declaracion.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="px-1 p-2">
          <a href="declaracion.pdf" download={true} className="btn btn-primary">
            Descargar
            <AiOutlineArrowDown
              style={{ paddingLeft: 6, width: 22, height: 22 }}
            />
          </a>
        </div>
      </div>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          className="container-fluid d-flex justify-content-center bg-secondary py-1"
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          customTextRenderer={() => false}
        />
      </Document>
      <div className="container p-2">
        <div className="d-flex justify-content-center">
          <div className="px-1">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="p-2"
            >
              Anterior
            </button>
          </div>
          <div className="px-1">
            <p className="p-2">
              Pagina {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
          </div>
          <div className="px-1">
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="p-2"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
