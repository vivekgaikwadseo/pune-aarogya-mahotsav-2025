import { useState, useRef, forwardRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface FlipBookViewerProps {
  pdfUrl: string;
}

// Page component for the flipbook
const PageComponent = forwardRef<HTMLDivElement, { pageNumber: number; width: number }>(
  ({ pageNumber, width }, ref) => {
    return (
      <div ref={ref} className="page-shadow">
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </div>
    );
  }
);

PageComponent.displayName = 'PageComponent';

export default function FlipBookViewer({ pdfUrl }: FlipBookViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const bookRef = useRef<any>(null);

  // Calculate page width based on screen size
  const getPageWidth = () => {
    if (typeof window === 'undefined') return 400;
    const width = window.innerWidth;
    if (width < 640) return Math.min(width - 40, 300); // Mobile
    if (width < 1024) return 350; // Tablet
    return isFullscreen ? 500 : 400; // Desktop
  };

  const [pageWidth, setPageWidth] = useState(getPageWidth());

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const goToNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // Adjust page width when toggling fullscreen
    setTimeout(() => {
      setPageWidth(getPageWidth());
    }, 100);
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.6));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  return (
    <div className={`flex flex-col items-center transition-all duration-300 ${
      isFullscreen 
        ? 'fixed inset-0 z-50 bg-background p-4 md:p-8 overflow-auto' 
        : 'w-full mt-8 mb-32'
    }`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          संपूर्ण स्मरणिका वाचा
        </h3>
        <p className="text-muted-foreground">
          पृष्ठे पलटण्यासाठी बटणे वापरा किंवा पृष्ठावर क्लिक करा
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6 flex-wrap bg-card p-4 rounded-lg shadow-lg border border-border">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          मागील
        </Button>

        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md">
          <span className="text-sm font-medium">
            पृष्ठ {currentPage + 1} / {numPages}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNextPage}
          disabled={currentPage >= numPages - 1}
          className="gap-2"
        >
          पुढील
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="w-px h-8 bg-border" />

        <Button
          variant="outline"
          size="sm"
          onClick={toggleFullscreen}
          className="gap-2"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          {isFullscreen ? 'सामान्य दृश्य' : 'पूर्ण स्क्रीन'}
        </Button>

        <div className="w-px h-8 bg-border" />

        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomOut}
          disabled={zoom <= 0.6}
          className="gap-2"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleResetZoom}
          disabled={zoom === 1}
          className="px-3"
        >
          {Math.round(zoom * 100)}%
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomIn}
          disabled={zoom >= 2}
          className="gap-2"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      {/* FlipBook */}
      <div 
        className="flipbook-container relative transition-transform duration-300" 
        style={{ transform: `scale(${zoom})` }}
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }
          error={
            <div className="text-destructive p-8 text-center bg-card rounded-lg border border-border">
              PDF लोड करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.
            </div>
          }
        >
          {numPages > 0 && (
            <HTMLFlipBook
              ref={bookRef}
              width={pageWidth}
              height={pageWidth * 1.414} // A4 aspect ratio
              size="stretch"
              minWidth={300}
              maxWidth={600}
              minHeight={400}
              maxHeight={850}
              showCover={true}
              flippingTime={1000}
              usePortrait={true}
              startPage={0}
              drawShadow={true}
              className="flipbook shadow-2xl"
              style={{}}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              mobileScrollSupport={true}
              onFlip={onFlip}
              swipeDistance={30}
              clickEventForward={true}
              useMouseEvents={true}
              renderOnlyPageLengthChange={false}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {Array.from(new Array(numPages), (_, index) => (
                <PageComponent
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={pageWidth}
                />
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-4 mt-6 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <span className="text-sm font-medium">
          {currentPage + 1} / {numPages}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNextPage}
          disabled={currentPage >= numPages - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <style>{`
        .flipbook-container {
          perspective: 2000px;
        }
        
        .flipbook {
          margin: 0 auto;
          background: transparent;
        }
        
        .page-shadow {
          background: white;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }
        
        .stf__parent {
          position: relative;
          margin: 0 auto;
        }
        
        .stf__wrapper {
          position: relative;
        }
        
        .stf__block {
          page-break-inside: avoid;
        }
      `}</style>
    </div>
  );
}
