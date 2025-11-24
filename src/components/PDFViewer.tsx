import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`flex flex-col items-center ${isFullscreen ? 'fixed inset-0 z-50 bg-background/95 p-4' : 'w-full'}`}>
      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6 flex-wrap bg-card p-4 rounded-lg shadow-lg border border-border">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          मागील
        </Button>

        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md">
          <span className="text-sm font-medium">
            पृष्ठ {pageNumber} / {numPages}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="gap-2"
        >
          पुढील
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="w-px h-8 bg-border" />

        <Button
          variant="outline"
          size="sm"
          onClick={zoomOut}
          disabled={scale <= 0.6}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>

        <span className="text-sm font-medium px-2">
          {Math.round(scale * 100)}%
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={zoomIn}
          disabled={scale >= 2.0}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>

        <div className="w-px h-8 bg-border" />

        <Button
          variant="outline"
          size="sm"
          onClick={toggleFullscreen}
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* PDF Document */}
      <div className="overflow-auto max-h-[800px] border border-border rounded-lg shadow-2xl bg-muted/30 p-4">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }
          error={
            <div className="text-destructive p-8 text-center">
              PDF लोड करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-xl"
          />
        </Document>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-4 mt-6 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <span className="text-sm font-medium">
          {pageNumber} / {numPages}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
